import { Camera, MessageCircle, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { socials } from '../data/siteContent';


const socialIcons = {
  message: MessageCircle,
  camera: Camera,
  sparkles: Sparkles,
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    setIsSubmitting(true);
    setStatus({ type: 'idle', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || 'Não foi possível enviar a mensagem.');
      }

      form.reset();
      setStatus({
        type: 'success',
        text: 'Mensagem enviada com sucesso. Em breve entro em contato.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        text: error instanceof Error ? error.message : 'Falha ao enviar a mensagem.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="section-band bg-ink px-5 py-24 text-cream lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contato</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
            Vamos transformar sua comunicação visual em algo mais forte e profissional.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon];
              return (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2 text-sm text-cream/78 transition hover:border-accent hover:text-accent"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={16} /> {label}
                </a>
              );
            })}
          </div>
        </div>
        <form className="reveal rounded-lg bg-cream p-5 text-ink shadow-2xl shadow-black/20 md:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Nome
              <input className="mt-2 w-full rounded-md border border-black/12 bg-white px-4 py-3 outline-none transition focus:border-ink" name="name" autoComplete="name" required />
            </label>
            <label className="text-sm font-medium">
              E-mail
              <input className="mt-2 w-full rounded-md border border-black/12 bg-white px-4 py-3 outline-none transition focus:border-ink" type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <label className="mt-5 block text-sm font-medium">
            Mensagem
            <textarea className="mt-2 min-h-36 w-full resize-y rounded-md border border-black/12 bg-white px-4 py-3 outline-none transition focus:border-ink" name="message" required />
          </label>
          <button
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-accent hover:text-ink disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'} <Send size={16} />
          </button>
          <div className="mt-4 min-h-14" aria-live="polite">
            {status.type !== 'idle' ? (
              <div
                className={`flex items-start gap-3 rounded-lg border px-4 py-3 text-sm ${
                  status.type === 'success'
                    ? 'border-[#0d7a3a]/20 bg-[#0d7a3a]/8 text-[#0d7a3a]'
                    : 'border-red-500/20 bg-red-500/8 text-red-600'
                }`}
              >
                <span className="mt-0.5 font-semibold">{status.type === 'success' ? 'Tudo certo' : 'Algo falhou'}</span>
                <span>{status.text}</span>
              </div>
            ) : (
              <p className="text-sm text-ink/55">Você pode enviar um briefing curto e eu retorno com os próximos passos.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
