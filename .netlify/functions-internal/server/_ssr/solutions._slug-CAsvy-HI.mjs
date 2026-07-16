import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { r as SOLUTIONS } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions._slug-CAsvy-HI.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./solutions-BOgrglZU.mjs");
var Route$1 = createFileRoute("/solutions")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Solutions — Tech Tammina" },
			{
				name: "description",
				content: "Eleven purpose-built solutions across insurance, compliance, vendor, fleet, and document-intensive operations."
			},
			{
				property: "og:title",
				content: "Solutions — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Solutions engineered for measurable outcomes."
			},
			{
				property: "og:url",
				content: "/solutions"
			}
		],
		links: [{
			rel: "canonical",
			href: "/solutions"
		}]
	})
});
function SolutionDetailShared({ slug }) {
	const sol = SOLUTIONS.find((s) => s.slug === slug);
	if (!sol) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Solution",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sol.title }),
		intro: sol.body
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "What it does"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: [
						"Ingest and classify inbound documents automatically",
						"Extract structured data with confidence scoring",
						"Route work to the right reviewer, team, or system",
						"Track exceptions, deficiencies, and audit history",
						"Integrate with your enterprise systems of record"
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted-foreground",
							children: f
						})]
					}, f))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "gradient-border h-fit rounded-2xl bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-semibold text-foreground",
						children: "Request a demo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: [
							"See ",
							sol.title,
							" in action against your workflow."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
						children: ["Request a Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	})] });
}
var $$splitComponentImporter = () => import("./solutions._slug-BMMUsuAz.mjs");
var Route = createFileRoute("/solutions/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const sol = SOLUTIONS.find((s) => s.slug === params.slug);
		const title = sol ? `${sol.title} — Tech Tammina` : "Solution — Tech Tammina";
		const desc = sol?.body ?? "Tech Tammina solution.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: `/solutions/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/solutions/${params.slug}`
			}]
		};
	}
});
//#endregion
export { Route$1 as n, SolutionDetailShared as r, Route as t };
