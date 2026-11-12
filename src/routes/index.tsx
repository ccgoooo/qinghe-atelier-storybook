import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PlaceholderImage } from "@/components/Layout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => seo("Home", "Qinghe Atelier — quiet, handmade goods inspired by clear rivers.", "/"),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Handmade · Slow · Calm</p>
          <h1 className="mt-4 font-display text-5xl leading-tight">Objects shaped like still water.</h1>
          <p className="mt-5 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/products" className="rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90">View products</Link>
            <Link to="/about" className="rounded-md border border-border px-5 py-2.5 text-sm hover:bg-accent">Our story</Link>
          </div>
        </div>
        <PlaceholderImage label="Hero image" className="aspect-[4/5]" />
      </section>
      <section className="mt-20 grid gap-6 sm:grid-cols-3">
        {["Natural materials", "Small batches", "Made to last"].map((t) => (
          <div key={t} className="rounded-lg border border-border p-6">
            <h2 className="font-display text-xl">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder text describing this value in a sentence or two.</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
