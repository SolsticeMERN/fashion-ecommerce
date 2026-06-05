import crypto from 'crypto';

function sha256(value) {
  if (!value) return '';
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  try {
    const body = req.body;

    console.log('Meta CAPI Event Received:', body);

    const purchase = body.purchase;

    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    const payload = {
      data: [
        {
          event_name: 'Purchase',
          event_time: Math.floor(Date.now() / 1000),
          event_id: purchase.event_id,
          action_source: 'website',

          user_data: {
            em: purchase.user_data?.email
              ? [sha256(purchase.user_data.email)]
              : undefined,

            ph: purchase.user_data?.phone
              ? [sha256(purchase.user_data.phone)]
              : undefined,

            fn: purchase.user_data?.first_name
              ? [sha256(purchase.user_data.first_name)]
              : undefined,

            ln: purchase.user_data?.last_name
              ? [sha256(purchase.user_data.last_name)]
              : undefined,

            external_id: purchase.user_data?.external_id
              ? [sha256(purchase.user_data.external_id)]
              : undefined,

            fbp: purchase.user_data?.fbp || undefined,
            fbc: purchase.user_data?.fbc || undefined
          },

          custom_data: {
            currency: purchase.ecommerce.currency,
            value: purchase.ecommerce.value,
            order_id: purchase.ecommerce.transaction_id
          }
        }
      ]
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
