import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { gsap } from 'gsap';

export function ProjectModal({ project, isOpen, onClose, onExited }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen && project) {
      setShouldRender(true);
    }
  }, [isOpen, project]);

  useEffect(() => {
    if (!shouldRender || !project) return undefined;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const overlay = overlayRef.current;
    const panel = panelRef.current;

    if (!overlay || !panel) return undefined;

    if (prefersReducedMotion) {
      if (!isOpen) {
        setShouldRender(false);
        onExited?.();
      }
      return undefined;
    }

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (isOpen) {
      intro.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.22 });
      intro.fromTo(
        panel,
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.42 },
        '<0.05',
      );
    } else {
      intro.to(panel, { opacity: 0, y: 14, scale: 0.98, duration: 0.2 }, 0);
      intro.to(overlay, { opacity: 0, duration: 0.18 }, 0.05);
      intro.add(() => {
        setShouldRender(false);
        onExited?.();
      });
    }

    return () => {
      intro.kill();
    };
  }, [isOpen, onExited, project, shouldRender]);

  if (!shouldRender || !project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-3 py-4 sm:px-5 sm:py-8">
      <button
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 opacity-0 backdrop-blur-sm"
        type="button"
        aria-label="Fechar modal"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative z-10 w-full max-w-4xl max-h-[calc(100dvh-2rem)] overflow-hidden overflow-y-auto rounded-2xl bg-cream text-ink opacity-0 shadow-2xl shadow-black/40 ring-1 ring-black/8 will-change-transform sm:max-h-[calc(100dvh-4rem)]"
      >
        <div className="relative">
          <img
            className="h-52 w-full object-cover sm:h-64 md:h-72 lg:h-80"
            src={project.image}
            alt={project.imageAlt}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-start justify-between gap-3 px-4 py-4 text-white sm:px-6 sm:py-6 md:px-8 md:py-8">
            <div className="min-w-0 max-w-[72%]">
              <p className="text-sm/6 opacity-80">{project.type}</p>
              <h3
                id="project-modal-title"
                className="mt-2 text-balance font-display text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl"
              >
                {project.title}
              </h3>
            </div>
            <button
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-black/40 transition hover:bg-white/25 backdrop-blur-sm sm:size-11"
              type="button"
              aria-label="Fechar modal"
              onClick={onClose}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 px-4 py-5 sm:px-6 sm:py-6 md:gap-8 md:px-8 md:py-7 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-sm leading-7 text-ink/75 sm:text-base sm:leading-8">{project.details}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Desafio</p>
              <p className="mt-3 text-sm leading-7 text-ink/72">{project.challenge}</p>
            </div>
          </div>

          <aside className="rounded-xl bg-black/[0.03] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Entregas</p>
            <ul className="mt-4 space-y-3">
              {project.deliverables.map((item) => (
                <li className="flex items-start gap-2 text-sm leading-6 text-ink/72" key={item}>
                  <ArrowUpRight size={16} className="mt-0.5 shrink-0 text-ink/45" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}
