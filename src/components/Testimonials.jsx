import { testimonials } from '../data/siteContent';
import { Quote, Sparkles, Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="section-band bg-ink px-5 py-24 text-cream lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Depoimentos</p>
          <h2 className="font-display text-4xl font-semibold leading-tight text-cream md:text-6xl">
            Experiências de colaboração que reforçam o processo e o resultado.
          </h2>
          <p className="mt-5 text-base leading-8 text-cream/68 md:text-lg">
            Um panorama direto de como o trabalho aparece na prática: organização, consistência visual e acabamento profissional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <blockquote
              className="reveal relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur"
              key={item.name}
            >
              <Quote className="text-accent/80" size={22} />
              <p className="mt-6 font-display text-2xl leading-snug text-cream md:text-[2rem]">
                "{item.quote}"
              </p>
              <footer className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm text-cream/68">
                <div>
                  <strong className="block text-base text-cream">{item.name}</strong>
                  {item.role}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent">
                  <Star size={12} fill="currentColor" /> {5}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="reveal mt-6 flex flex-wrap items-center gap-3 text-sm text-cream/64">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-accent transition duration-500 cursor-default hover:border-accent">
            <Sparkles size={14} className="text-accent" /> Comunicação clara
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-accent transition duration-500 cursor-default hover:border-accent">
            <Sparkles size={14} className="text-accent" /> Entrega organizada
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:text-accent transition duration-500 cursor-default hover:border-accent">
            <Sparkles size={14} className="text-accent" /> Acabamento premium
          </span>
        </div>
      </div>
    </section>
  );
}
