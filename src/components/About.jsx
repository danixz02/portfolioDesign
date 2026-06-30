import { BadgeCheck } from 'lucide-react';
import { about, skills } from '../data/siteContent';

export function About() {
  return (
    <section id="sobre" className="section-band bg-ink px-5 py-24 text-cream lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{about.eyebrow}</p>
          <h2 className="font-display text-4xl font-semibold leading-tight md:text-5xl">{about.title}</h2>
        </div>
        <div className="reveal">
          <p className="text-lg leading-9 text-cream/72">{about.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span className="rounded-full border border-white/12 px-4 py-2 text-sm text-cream/78 hover:text-accent transition duration-500 cursor-default hover:border-accent" key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {about.highlights.map((item) => (
              <div className="border-t border-white/12 pt-5" key={item}>
                <BadgeCheck className="mb-3 text-accent" size={20} />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
