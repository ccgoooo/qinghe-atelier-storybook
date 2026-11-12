// Site-wide SEO settings. Set NOINDEX to true to hide every page from search engines.
export const SITE = { name: "Qinghe Atelier", noindex: false };

export function seo(title: string, description: string, path: string) {
  const full = `${title} — ${SITE.name}`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: SITE.noindex ? "noindex, nofollow" : "index, follow" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
