import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { t as CAPABILITIES } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities._slug-1o1ONL09.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./capabilities-CJDt8cCH.mjs");
var Route$1 = createFileRoute("/capabilities")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Capabilities — Tech Tammina" },
			{
				name: "description",
				content: "Enterprise Transformation, Digital Engineering, Quality Engineering, Managed Services, and Business Operations."
			},
			{
				property: "og:title",
				content: "Capabilities — Tech Tammina"
			},
			{
				property: "og:description",
				content: "End-to-end capabilities for intelligent operations."
			},
			{
				property: "og:url",
				content: "/capabilities"
			}
		],
		links: [{
			rel: "canonical",
			href: "/capabilities"
		}]
	})
});
function CapabilityDetailShared({ slug }) {
	const cap = CAPABILITIES.find((c) => c.slug === slug);
	if (!cap) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Capability",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cap.title }),
		intro: cap.tagline
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground",
					children: cap.body
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground",
						children: "Outcomes we deliver"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: cap.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: o
							})]
						}, o))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "gradient-border h-fit rounded-2xl bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-semibold text-foreground",
						children: "Talk to a specialist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Share your challenge and we'll match the right team and approach."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "mt-5 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
						children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})]
		})
	})] });
}
var $$splitComponentImporter = () => import("./capabilities._slug-DyCYqlg7.mjs");
var Route = createFileRoute("/capabilities/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const cap = CAPABILITIES.find((c) => c.slug === params.slug);
		const title = cap ? `${cap.title} — Tech Tammina` : "Capability — Tech Tammina";
		const desc = cap?.body ?? "Tech Tammina capability.";
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
					content: `/capabilities/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/capabilities/${params.slug}`
			}]
		};
	}
});
//#endregion
export { Route as n, Route$1 as r, CapabilityDetailShared as t };
