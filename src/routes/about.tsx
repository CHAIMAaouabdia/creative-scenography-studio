import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import mood from "@/assets/project-moodboard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Creative Scenography" },
      { name: "description", content: "Our mission, vision and creative approach to scenography and event design." },
      { property: "og:title", content: "About — Creative Scenography" },
      { property: "og:description", content: "The mission and creative approach behind Creative Scenography." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "Mission", d: "Make professional scenography accessible to every ambitious event, and give scenographers and students meaningful work." },
  { t: "Vision", d: "Become the reference creative marketplace for event design across North Africa and beyond." },
  { t: "Approach", d: "Listen first, sketch second. Every concept starts from your scenario and the emotion it should leave." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="A studio built around the scenario." intro="Creative Scenography connects clients who imagine with scenographers who build." />
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 md:grid-cols-2">
        <img src={mood} alt="Moodboard with fabrics and stage sketches" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div className="space-y-12">
          {pillars.map((p) => (
            <div key={p.t} className="border-t border-border pt-6">
              <p className="eyebrow">{p.t}</p>
              <p className="mt-4 font-display text-2xl leading-snug">{p.d}</p>
            </div>
          ))}
          <Button asChild variant="hero" size="xl"><Link to="/services">Start Your Project</Link></Button>
        </div>
      </section>
    </>
  );
}
