import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-2xl tracking-wide text-foreground">
          Creative <span className="italic text-primary">Scenography</span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="lg"><Link to="/services">Start Your Project</Link></Button>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-6 border-t border-border bg-background px-6 py-8 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-3xl text-foreground">{n.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
