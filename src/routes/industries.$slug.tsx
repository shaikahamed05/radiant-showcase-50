import { createFileRoute } from "@tanstack/react-router";
import { INDUSTRIES } from "@/lib/site-data";
import { IndustryDetailShared } from "./industries";

export const Route = createFileRoute("/industries/$slug")({
  component: IndustryDetail,
  head: ({ params }) => {
    const ind = INDUSTRIES.find((i) => i.slug === params.slug);
    const title = ind ? `${ind.name} — Tech Tammina` : "Industry — Tech Tammina";
    const desc = ind?.body ?? "Tech Tammina industry focus.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/industries/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/industries/${params.slug}` }],
    };
  },
});

function IndustryDetail() {
  const { slug } = Route.useParams();
  return <IndustryDetailShared slug={slug} />;
}
