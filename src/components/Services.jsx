import { services } from '../data/siteContent';
import { SectionTitle } from './SectionTitle';

export function Services() {
  return (
    <section id="servicos" className="section-band bg-[#e6ece0] px-5 py-24 lg:px-8">
      <SectionTitle eyebrow="Serviços" title="Soluções visuais para marcas, criadores e negócios digitais." />
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ title, description, icon: Icon }) => (
          <div className="group reveal rounded-lg border border-black/10 p-6 bg-zinc-400/25 backdrop-blur hover:bg-zinc-900 transition duration-300 hover:ring-2 hover:ring-accent" key={title}>
            <Icon className="mb-8 text-ink hover:text-le group-hover:text-lime-300" size={25} />
            <h3 className="font-display text-2xl font-semibold text-ink group-hover:text-lime-300">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-black/80 group-hover:text-lime-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
