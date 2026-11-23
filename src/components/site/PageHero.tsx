export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:pt-48">
      <p className="eyebrow fade-up">{eyebrow}</p>
      <h1 className="fade-up mt-6 max-w-4xl text-5xl leading-[1.05] md:text-8xl">{title}</h1>
      <p className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
    </section>
  );
}
