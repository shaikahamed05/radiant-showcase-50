import { createFileRoute } from "@tanstack/react-router";
import { CAPABILITIES } from "@/lib/site-data";
import { CapabilityDetailShared } from "./capabilities.index";

export const Route = createFileRoute("/capabilities/$slug")({
  component: CapabilityDetail,
  head: ({ params }) => {
    const cap = CAPABILITIES.find((c) => c.slug === params.slug);
    const title = cap ? `${cap.title} — Tech Tammina` : "Capability — Tech Tammina";
    const desc = cap?.body ?? "Tech Tammina capability.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/capabilities/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/capabilities/${params.slug}` }],
    };
  },
});

function CapabilityDetail() {
  const { slug } = Route.useParams();
  return <CapabilityDetailShared slug={slug} />;
}
