export async function sendSms({ phone, message }: { phone: string[]; message: string }) {
  const apiKey = process.env.CSMS_API_KEY;
  const senderId = process.env.CSMS_SENDER_ID;

  if (!apiKey || !senderId) {
    throw new Error('Missing cSMS configuration');
  }

  const response = await fetch('https://app.mycsms.com/api/v3/sms/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      phone,
      sender_id: senderId,
      message,
      message_type: 'text',
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send SMS notification');
  }

  return response.json();
}
