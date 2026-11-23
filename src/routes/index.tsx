import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services, projects, team, testimonials, packages, faqs } from "@/lib/content";
import hero from "@/assets/hero-stage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creative Scenography — Scenography & Event Creative Direction" },
      { name: "description", content: "Turn your event idea into a professional visual concept with verified scenographers, lighting and styling experts." },
      { property: "og:title", content: "Creative Scenography — Scenography & Event Creative Direction" },
      { property: "og:description", content: "Turn your event idea into a professional visual concept." },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "01", title: "Submit Your Idea", text: "Describe your event, atmosphere and message in a guided brief." },
  { n: "02", title: "Creative Proposal", text: "A matched scenographer sends a concept, scope and quotation." },
  { n: "03", title: "Final Concept", text: "Approve, refine, and receive your complete visual direction." },
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Gilded arches on a lit stage" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-veil" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24">
          <p className="eyebrow fade-up">Scenography · Lighting · Creative Direction</p>
          <h1 className="fade-up mt-6 max-w-5xl text-5xl leading-[1.02] md:text-8xl">
            Every event begins <em className="text-primary">as a scenario.</em> We make it a world.
          </h1>
          <p className="fade-up mt-8 max-w-xl text-lg text-muted-foreground">
            Share your idea. Our verified scenographers turn it into a complete, professional visual concept.
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl"><Link to="/services">Start Your Project</Link></Button>
            <Button asChild variant="line" size="xl"><Link to="/services">Explore Creative Services</Link></Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <SectionHeading eyebrow="What we create" title="Six disciplines, one coherent vision." />
        <div className="mt-16 grid border-t border-border md:grid-cols-3">
          {services.map((s, i) => (
            <Link key={s.slug} to="/services" className="group border-b border-border p-8 transition-colors hover:bg-card md:border-r md:[&:nth-child(3n)]:border-r-0">
              <span className="text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-6 text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.short}</p>
              <ArrowRight className="mt-8 size-4 text-primary transition-transform group-hover:translate-x-2" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ivory text-ivory-foreground">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <p className="eyebrow">The process</p>
          <h2 className="mt-4 text-4xl md:text-6xl">From idea to concept, in three acts.</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="border-t border-ivory-foreground/20 pt-8">
                <p className="font-display text-6xl italic">{s.n}</p>
                <h3 className="mt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm opacity-70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected work" title="Recent worlds." />
          <Button asChild variant="line" size="lg"><Link to="/portfolio">View portfolio</Link></Button>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {projects.map((p) => (
            <Link to="/portfolio" key={p.title} className="group">
              <div className="overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <p className="eyebrow mt-4">{p.category}</p>
              <h3 className="mt-2 text-2xl">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <SectionHeading eyebrow="The scenographers" title="Professionals and rising talents, verified by us." />
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="bg-background p-8">
                <div className="flex size-16 items-center justify-center rounded-full border border-primary font-display text-2xl text-primary">{t.name.split(" ").map((w) => w[0]).join("")}</div>
                <h3 className="mt-6 text-2xl">{t.name}</h3>
                <p className="eyebrow mt-2">{t.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <p className="eyebrow">In their words</p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name}>
              <blockquote className="font-display text-2xl italic leading-snug">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">{t.name} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <SectionHeading eyebrow="Packages" title="Choose the depth of your concept." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`flex flex-col border p-10 ${"featured" in p ? "border-primary" : "border-border"}`}>
                <h3 className="text-3xl">{p.name}</h3>
                <p className="mt-2 text-primary">{p.price}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm text-muted-foreground">
                  {p.items.map((i) => <li key={i} className="flex gap-3"><Check className="size-4 text-primary" />{i}</li>)}
                </ul>
                <Button asChild variant={"featured" in p ? "hero" : "line"} size="lg" className="mt-10"><Link to="/services">Request</Link></Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <Accordion type="single" collapsible>
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="font-display text-xl">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
