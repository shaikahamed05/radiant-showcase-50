import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { n as INDUSTRIES } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries._slug-COmUyULX.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./industries-CcP68GiX.mjs");
var Route$1 = createFileRoute("/industries")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Industries — Tech Tammina" },
			{
				name: "description",
				content: "Insurance, Financial Services, Healthcare & Life Sciences, Manufacturing, Education, and Public Sector."
			},
			{
				property: "og:title",
				content: "Industries — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Deep focus in regulated, operations-heavy industries."
			},
			{
				property: "og:url",
				content: "/industries"
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	})
});
function IndustryDetailShared({ slug }) {
	const ind = INDUSTRIES.find((i) => i.slug === slug);
	if (!ind) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Industry",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ind.name }),
		intro: ind.body
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-foreground",
					children: "Where we focus"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid gap-3 sm:grid-cols-2",
					children: ind.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
						children: "Discuss your program"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "We'll bring domain and delivery specialists to the conversation."
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
var $$splitComponentImporter = () => import("./industries._slug-CKPuMCJ4.mjs");
var Route = createFileRoute("/industries/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const ind = INDUSTRIES.find((i) => i.slug === params.slug);
		const title = ind ? `${ind.name} — Tech Tammina` : "Industry — Tech Tammina";
		const desc = ind?.body ?? "Tech Tammina industry focus.";
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
					content: `/industries/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/industries/${params.slug}`
			}]
		};
	}
});
//#endregion
export { Route as n, Route$1 as r, IndustryDetailShared as t };
