import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/siteContent';
import { SectionTitle } from './SectionTitle';

export function Portfolio({ onSelectProject }) {
  return (
    <section id="portfolio" className="px-5 py-24 lg:px-8">
      <SectionTitle
        eyebrow="Portfólio"
        title="Projetos pensados para comunicar com clareza, impacto e sofisticação."
        copy="Uma seleção de trabalhos com foco em identidade, legibilidade e presença visual consistente."
      />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article className="project-card group reveal overflow-hidden rounded-lg bg-white ring-1 ring-black/8 hover:shadow-xl shadow-zinc-900/30 hover:ring-4 hover:ring-lime-300 transition duration-300" key={project.title}>
            <button
              className="block w-full text-left"
              type="button"
              aria-label={`Abrir projeto ${project.title}`}
              onClick={() => onSelectProject(project)}
            >
              <div className="relative aspect-[16/9] overflow-hidden w-full">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  src={project.image}
                  alt={project.imageAlt}
                />
                <div className="absolute inset-0 bg-gradient-to-t
                from-black/100 via-black/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-accent">
                  <div>
                    <p className="text-sm opacity-80">{project.type}</p>
                    <h3 className="mt-1 font-display text-3xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="grid size-11 place-items-center rounded-full bg-white/16 backdrop-blur transition group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
