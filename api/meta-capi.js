import crypto from 'crypto';

function sha256(value) {
  if (!value) return '';
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

const eventNameMap = {
  view_content: 'ViewContent',
  add_to_cart: 'AddToCart',
  initiate_checkout: 'InitiateCheckout',
  purchase_test: 'Purchase'
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {
    const body = req.body;

    console.log('Meta CAPI Event Received:', body);

    const event = body.purchase; // Browser payload is mapped under body.purchase
    if (!event) {
      return res.status(400).json({ error: 'Missing event payload' });
    }

    const metaEventName = eventNameMap[body.source];
    if (!metaEventName) {
      return res.status(400).json({ error: `Unsupported event source: ${body.source}` });
    }

    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    // Build custom_data dynamically
    const customData = {
      currency: event.ecommerce?.currency || 'USD',
      value: event.ecommerce?.value || 0
    };

    // If order items are present, add product metadata for dynamic ads
    if (event.ecommerce?.items && Array.isArray(event.ecommerce.items)) {
      customData.content_type = 'product';
      customData.content_ids = event.ecommerce.items.map(item => item.item_id ? item.item_id.toString() : '');
      customData.contents = event.ecommerce.items.map(item => ({
        id: item.item_id ? item.item_id.toString() : '',
        quantity: item.quantity || 1,
        item_price: item.price
      }));
    }

    // Purchase events require the order_id for deduplication
    if (metaEventName === 'Purchase') {
      customData.order_id = event.ecommerce?.order_id || event.ecommerce?.transaction_id;
    }

    const payload = {
      data: [
        {
          event_name: metaEventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: event.event_id,
          action_source: 'website',
          event_source_url: event.session_data?.page_location || undefined,

          user_data: {
            em: event.user_data?.email
              ? [sha256(event.user_data.email)]
              : undefined,

            ph: event.user_data?.phone
              ? [sha256(event.user_data.phone)]
              : undefined,

            fn: event.user_data?.first_name
              ? [sha256(event.user_data.first_name)]
              : undefined,

            ln: event.user_data?.last_name
              ? [sha256(event.user_data.last_name)]
              : undefined,

            external_id: event.user_data?.external_id
              ? [sha256(event.user_data.external_id)]
              : undefined,

            fbp: event.user_data?.fbp || undefined,
            fbc: event.user_data?.fbc || undefined,
            client_ip_address: event.user_data?.client_ip_address || undefined,
            client_user_agent: event.user_data?.client_user_agent || undefined
          },

          custom_data: customData
        }
      ],
      test_event_code: 'TEST92485'
    };

    console.log('Payload sent to Meta Graph API (Hashed PII):', JSON.stringify(payload, null, 2));

    const response = await fetch(
      `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }
    );

    const result = await response.json();

    console.log('Meta Response:', result);

    return res.status(200).json(result);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: error.message
    });
  }
}
