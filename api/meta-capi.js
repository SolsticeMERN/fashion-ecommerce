export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed'
    });
  }

  const body = req.body;

  console.log('Meta CAPI Event Received:', body);

  return res.status(200).json({
    success: true,
    received: body
  });
}
