import { createFileRoute } from "@tanstack/react-router";
import { Layout, PlaceholderImage } from "@/components/Layout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => seo("About", "The story and values behind Qinghe Atelier, a small fictional studio.", "/about"),
  component: About,
});

function About() {
  return (
    <Layout>
      <h1 className="font-display text-4xl">About the atelier</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <PlaceholderImage label="Studio photo" className="aspect-square" />
        <div className="space-y-4 text-muted-foreground">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p>Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
          <p>Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.</p>
        </div>
      </div>
    </Layout>
  );
}
