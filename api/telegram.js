export default async function handler(req, res) { if (req.method !== "POST") { return res.status(200).json({ ok: true }); }
try { const { message } = req.body || {};
if (!message || !message.chat) {
  return res.status(200).json({ ok: true });
}

const chatId = message.chat.id;
const text = message.text || "";

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  return res.status(500).json({ error: "TELEGRAM_BOT_TOKEN manquant" });
}

const response = await fetch(
  `https://api.telegram.org/bot${token}/sendMessage`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text:
 req.body || {};
if (!mess    })
  }
);

const result = await response.json();

return res.status(200).json(result);
} catch (error) { return res.status(500).json({ error: "Erreur serveur" }); } }
