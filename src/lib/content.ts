import gala from "@/assets/project-gala.jpg";
import light from "@/assets/project-light.jpg";
import mood from "@/assets/project-moodboard.jpg";
import stage from "@/assets/hero-stage.jpg";

export const services = [
  { slug: "scenography", title: "Scenography", short: "Spatial storytelling that turns a venue into a world.", body: "We translate your scenario into a complete spatial concept: layout, volumes, materials and the guest journey, delivered as plans, 3D views and a build-ready brief.", image: stage },
  { slug: "stage-design", title: "Stage Design", short: "Stages built around the moment that matters.", body: "From keynote platforms to fashion runways, we design stages that frame speakers and performers, with technical drawings your production team can execute.", image: stage },
  { slug: "lighting", title: "Lighting Design", short: "Light as the invisible architect of emotion.", body: "Lighting plots, colour temperatures and cue sequences that shape atmosphere from arrival to the final toast.", image: light },
  { slug: "styling", title: "Event Styling", short: "Tables, florals and textures composed with intent.", body: "Decoration, tablescapes, costume styling and object curation, unified by one coherent visual language.", image: gala },
  { slug: "direction", title: "Creative Direction", short: "One vision, held from first sketch to last guest.", body: "Complete visual direction: concept, identity, palette, scenography and on-site supervision of every creative decision.", image: gala },
  { slug: "moodboard", title: "Moodboard Creation", short: "Your idea, made visible in a single board.", body: "Curated moodboards, colour palettes and reference systems that align your team before a single element is produced.", image: mood },
] as const;

export const categories = ["All", "Gala", "Lighting", "Stage", "Concept"] as const;

export const projects = [
  { title: "Nuit d'Or Gala", category: "Gala", image: gala, description: "A candlelit banquet for 240 guests beneath restored vaults.", team: "Lina B. · Yacine K.", details: "Algiers · 2026 · Styling, lighting, florals" },
  { title: "Arches of Light", category: "Stage", image: stage, description: "Seven gilded arches staging a luxury brand launch.", team: "Sofiane M.", details: "Oran · 2026 · Stage design, lighting" },
  { title: "Threshold", category: "Lighting", image: light, description: "An immersive beam installation for a contemporary art week.", team: "Amel R. · Studio students", details: "Constantine · 2025 · Lighting design" },
  { title: "Velvet Hour", category: "Concept", image: mood, description: "Moodboard and palette system for a couture presentation.", team: "Lina B.", details: "Paris · 2025 · Creative direction" },
] as const;

export const team = [
  { name: "Lina Benali", role: "Creative Director", note: "Couture and gala worlds" },
  { name: "Sofiane Mansouri", role: "Stage Designer", note: "Architecture-led stages" },
  { name: "Amel Rahmani", role: "Lighting Designer", note: "Immersive light installations" },
  { name: "Yacine Kaci", role: "Event Stylist", note: "Tablescapes and florals" },
] as const;

export const testimonials = [
  { quote: "They took a two-line idea and returned a world our guests still talk about.", name: "Nadia H.", role: "Brand Director" },
  { quote: "The proposal was clear, the concept breathtaking, and the timeline respected.", name: "Karim A.", role: "Wedding client" },
  { quote: "As a student scenographer, the platform gave me real briefs and real clients.", name: "Rania T.", role: "Scenography student" },
] as const;

export const packages = [
  { name: "Concept", price: "From 25,000 DZD", items: ["Moodboard and palette", "One creative proposal", "One revision"] },
  { name: "Signature", price: "From 90,000 DZD", items: ["Full scenography concept", "Lighting intentions", "3D views", "Two revisions"], featured: true },
  { name: "Atelier", price: "On quotation", items: ["Complete creative direction", "Dedicated team", "On-site supervision"] },
] as const;

export const faqs = [
  { q: "How does a project start?", a: "You describe your event and idea in a guided form. We review it and match you with the right scenographer." },
  { q: "Who are the scenographers?", a: "Verified professionals and selected scenography students, each approved by our team before taking projects." },
  { q: "When do I pay?", a: "Only after you accept a proposal and quotation. Payment is verified manually by our team." },
  { q: "Can I request changes?", a: "Yes. Every package includes revisions, and you can request one directly on your project." },
] as const;
