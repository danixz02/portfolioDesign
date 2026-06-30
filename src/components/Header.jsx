import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/siteContent';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f4ed]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Navegação principal">
        <a href="#inicio" className="font-display text-lg font-semibold tracking-normal text-ink">
          Daniel Friedrich
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(({ label, href }) => (
            <a className="text-sm text-ink/70 transition hover:text-ink" href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-accent hover:text-ink md:inline-flex" href="#contato">
          Solicitar orçamento
        </a>
        <button
          className="inline-flex size-10 items-center justify-center rounded-full border border-black/10 text-ink md:hidden"
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-black/10 bg-cream px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map(({ label, href }) => (
              <a className="text-base text-ink" href={href} key={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
