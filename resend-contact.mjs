import { randomUUID } from "node:crypto";

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function readJsonBody(request) {
  const body = await new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });

  return JSON.parse(body || "{}");
}

export async function handleContactRequest(request, response, options = {}) {
  const method = request.method || "GET";
  const url = request.url || "";

  if (method !== "POST" || url !== "/api/contact") {
    return false;
  }

  const payload = await readJsonBody(request).catch(() => null);
  if (!payload) {
    sendJson(response, 400, { message: "Payload inválido." });
    return true;
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !message) {
    sendJson(response, 400, { message: "Preencha nome, e-mail e projeto." });
    return true;
  }

  const apiKey = options.apiKey || process.env.RESEND_API_KEY;
  const from =
    options.from ||
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio <onboarding@resend.dev>";
  const to =
    options.to || process.env.RESEND_TO_EMAIL;

  if (!apiKey) {
    sendJson(response, 500, {
      message: "Defina RESEND_API_KEY para habilitar o envio.",
    });
    return true;
  }

  const subject = `Novo contato do portfólio - ${name}`;
  const text = `Nome: ${name}\nE-mail: ${email}\n\nProjeto:\n${message}`;
  const html = `
    <div style="margin:0;padding:0;background-color:#f4f1ea;font-family:Inter,Arial,sans-serif;color:#111111;">
      <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
        <div style="border-radius:20px;overflow:hidden;background:#ffffff;border:1px solid #e7e1d6;box-shadow:0 10px 28px rgba(17,17,17,0.06);">
          <div style="background:#111111;padding:28px 30px;border-bottom:4px solid #c7ff52;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#c7ff52;font-weight:700;">Novo contato</p>
            <h2 style="margin:0;font-size:28px;line-height:1.15;color:#ffffff;font-weight:700;">Portfólio do designer</h2>
          </div>

          <div style="padding:30px;">
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4a4a4a;">
              Você recebeu uma nova mensagem pelo formulário do site.
            </p>

            <div style="margin-bottom:16px;padding:16px 18px;border-radius:14px;background:#f8f7f3;border:1px solid #ebe4d7;">
              <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a857b;font-weight:700;">Nome</p>
              <p style="margin:0;font-size:16px;line-height:1.5;color:#111111;font-weight:600;">${escapeHtml(name)}</p>
            </div>

            <div style="margin-bottom:16px;padding:16px 18px;border-radius:14px;background:#f8f7f3;border:1px solid #ebe4d7;">
              <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a857b;font-weight:700;">E-mail</p>
              <p style="margin:0;font-size:16px;line-height:1.5;color:#111111;font-weight:600;">${escapeHtml(email)}</p>
            </div>

            <div style="padding:16px 18px;border-radius:14px;background:#f8f7f3;border:1px solid #ebe4d7;">
              <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#8a857b;font-weight:700;">Mensagem</p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#222222;white-space:pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
        </div>

        <p style="margin:14px 0 0;font-size:12px;line-height:1.6;color:#7a7a7a;text-align:center;">
          Enviado automaticamente pelo formulário do portfólio.
        </p>
      </div>
    </div>
  `;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": options.idempotencyKey || randomUUID(),
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
    }),
  });

  const resendData = await resendResponse.json().catch(() => null);

  if (!resendResponse.ok) {
    sendJson(response, 502, {
      message: resendData?.message || "Erro ao enviar mensagem pelo Resend.",
    });
    return true;
  }

  sendJson(response, 200, { ok: true });
  return true;
}
