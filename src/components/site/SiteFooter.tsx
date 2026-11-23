import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">Creative <span className="italic text-primary">Scenography</span></p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">Scenography, lighting and creative direction — connecting visionary clients with exceptional scenographers.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow">Studio</p>
          <Link to="/services" className="block text-muted-foreground hover:text-foreground">Services</Link>
          <Link to="/portfolio" className="block text-muted-foreground hover:text-foreground">Portfolio</Link>
          <Link to="/about" className="block text-muted-foreground hover:text-foreground">About</Link>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow">Contact</p>
          <a href="mailto:studio@creativescenography.com" className="block text-muted-foreground hover:text-foreground">studio@creativescenography.com</a>
          <p className="text-muted-foreground">Algiers · Paris</p>
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs tracking-widest text-muted-foreground">© {new Date().getFullYear()} CREATIVE SCENOGRAPHY</p>
    </footer>
  );
}
