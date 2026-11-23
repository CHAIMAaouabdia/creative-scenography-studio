export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}
