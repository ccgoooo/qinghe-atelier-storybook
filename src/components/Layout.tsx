import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link to="/" className="font-display text-2xl tracking-wide">Qinghe Atelier</Link>
          <nav className="flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-primary font-semibold" }}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-14">{children}</main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © Qinghe Atelier — a fictional brand. All content is placeholder.
      </footer>
    </div>
  );
}

export function PlaceholderImage({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Placeholder image: ${label}`}
      className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-sm text-muted-foreground ${className}`}>
      {label}
    </div>
  );
}
