import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { categories, projects } from "@/lib/content";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Inspiration — Creative Scenography" },
      { name: "description", content: "Galas, stages, lighting installations and creative concepts by our scenographers." },
      { property: "og:title", content: "Portfolio & Inspiration — Creative Scenography" },
      { property: "og:description", content: "Selected scenography and event design projects." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Worlds we have built." intro="A selection of projects by our scenographers and creative students." />
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="flex flex-wrap gap-3 border-b border-border pb-8" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${cat === c ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {list.map((p) => (
            <article key={p.title} className="group fade-up">
              <div className="overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" width={1024} height={1280} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <p className="eyebrow mt-6">{p.category}</p>
              <h2 className="mt-2 text-4xl">{p.title}</h2>
              <p className="mt-3 text-muted-foreground">{p.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Team</dt><dd className="mt-1">{p.team}</dd></div>
                <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Details</dt><dd className="mt-1">{p.details}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
