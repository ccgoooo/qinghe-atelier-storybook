import { createFileRoute } from "@tanstack/react-router";
import { Layout, PlaceholderImage } from "@/components/Layout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/products")({
  head: () => seo("Products", "Browse placeholder products from Qinghe Atelier: ceramics, textiles and more.", "/products"),
  component: Products,
});

const items = ["Ceramic Cup", "Linen Scarf", "Stone Tray", "Paper Lantern", "Wool Throw", "Tea Bowl"];

function Products() {
  return (
    <Layout>
      <h1 className="font-display text-4xl">Products</h1>
      <p className="mt-3 text-muted-foreground">Display only — items are placeholders and not for sale.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((name) => (
          <article key={name}>
            <PlaceholderImage label={name} className="aspect-[4/3]" />
            <h2 className="mt-3 font-display text-xl">{name}</h2>
            <p className="text-sm text-muted-foreground">Short placeholder description.</p>
          </article>
        ))}
      </div>
    </Layout>
  );
}
