export function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/45">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-base leading-8 text-ink/68 md:text-lg">{copy}</p> : null}
    </div>
  );
}
