import { createFileRoute } from "@tanstack/react-router";
import { SOLUTIONS } from "@/lib/site-data";
import { SolutionDetailShared } from "./solutions.index";

export const Route = createFileRoute("/solutions/$slug")({
  component: SolutionDetail,
  head: ({ params }) => {
    const sol = SOLUTIONS.find((s) => s.slug === params.slug);
    const title = sol ? `${sol.title} — Tech Tammina` : "Solution — Tech Tammina";
    const desc = sol?.body ?? "Tech Tammina solution.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/solutions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/solutions/${params.slug}` }],
    };
  },
});

function SolutionDetail() {
  const { slug } = Route.useParams();
  return <SolutionDetailShared slug={slug} />;
}
