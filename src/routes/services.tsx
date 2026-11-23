import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Creative Services — Creative Scenography" },
      { name: "description", content: "Scenography, stage design, lighting, event styling, creative direction and moodboards." },
      { property: "og:title", content: "Creative Services — Creative Scenography" },
      { property: "og:description", content: "Six creative disciplines for exceptional events." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Crafted disciplines for unforgettable events." intro="Choose one discipline or combine them into a complete creative direction." />
      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-32">
        {services.map((s, i) => (
          <article key={s.slug} id={s.slug} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden"><img src={s.image} alt={s.title} loading="lazy" width={1024} height={1280} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2 className="mt-4 text-4xl md:text-6xl">{s.title}</h2>
              <p className="mt-4 font-display text-2xl italic text-primary">{s.short}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{s.body}</p>
              <Button asChild variant="hero" size="xl" className="mt-10"><Link to="/about">Request this service</Link></Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
