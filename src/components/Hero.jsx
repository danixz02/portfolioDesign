import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import { hero } from '../data/siteContent';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pt-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(199,255,82,0.26),transparent_28%),linear-gradient(135deg,#f7f4ed_0%,#eee6d9_55%,#d9dfd2_100%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-4 py-2 text-sm text-ink/70">
            <Sparkles size={16} aria-hidden="true" /> {hero.eyebrow}
          </p>
          <h1 className="hero-title font-display text-[clamp(3.4rem,9vw,8.8rem)] font-semibold leading-[0.88] text-ink">
            <span className="block">{hero.title[0]}</span>
            <span className="block text-outline">{hero.title[1]}</span>
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-ink/72">{hero.description}</p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-accent hover:text-ink"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}{' '}
              <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label} <MessageCircle size={17} />
            </a>
          </div>
        </div>
        <div className="parallax-wrap relative min-h-[440px] lg:min-h-[620px]" aria-hidden="true">
          <div className="parallax-soft absolute left-1/2 top-1/2 size-[min(78vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/10" />
          <div className="hero-orbit absolute left-1/2 top-1/2 size-[min(70vw,470px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ink/25" />
          <div className="absolute left-[8%] top-[16%] h-48 w-36 rounded-md bg-ink shadow-2xl shadow-black/20 sm:h-64 sm:w-48" />
          <div className="absolute right-[8%] top-[10%] h-56 w-40 rounded-md bg-accent shadow-xl shadow-lime-900/10 sm:h-72 sm:w-52" />
          <div className="absolute bottom-[14%] left-[22%] h-52 w-40 rounded-md bg-[#f2654b] shadow-2xl shadow-red-900/10 sm:h-72 sm:w-56" />
          <div className="absolute bottom-[18%] right-[18%] grid size-32 place-items-center rounded-full bg-white/70 text-center text-sm font-semibold text-ink shadow-xl backdrop-blur">
            Visual
            <br />
            Systems
          </div>
        </div>
      </div>
    </section>
  );
}
