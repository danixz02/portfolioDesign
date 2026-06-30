import { ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 text-cream lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Daniel Friedrich. Todos os direitos reservados.</p>
        <a className="inline-flex items-center gap-1 transition hover:text-accent" href="#inicio">
          Voltar ao topo <ChevronRight size={15} />
        </a>
      </div>
    </footer>
  );
}
