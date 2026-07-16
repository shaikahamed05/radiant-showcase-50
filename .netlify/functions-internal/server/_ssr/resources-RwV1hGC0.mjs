import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { E as BookOpen, S as Calendar, c as Newspaper, g as FileText, i as Sparkles, y as CirclePlay } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-RwV1hGC0.js
var import_jsx_runtime = require_jsx_runtime();
var RESOURCES = [
	{
		icon: Sparkles,
		tag: "Insight",
		title: "The Case for Intelligent Operations",
		body: "Why isolated tools stall — and how connected workflows change the outcome."
	},
	{
		icon: FileText,
		tag: "Case Study",
		title: "COI Compliance at Scale",
		body: "How a national insurer automated certificate intake and deficiency tracking."
	},
	{
		icon: BookOpen,
		tag: "White Paper",
		title: "Practical AI in Regulated Workflows",
		body: "A framework for embedding AI where it improves reviews and decisions."
	},
	{
		icon: Calendar,
		tag: "Webinar",
		title: "Modernizing Underwriting Reviews",
		body: "Live session on document intelligence and structured decision support."
	},
	{
		icon: Newspaper,
		tag: "News",
		title: "Expanded Managed Services Practice",
		body: "New capabilities for 24/7 support and continuous improvement."
	},
	{
		icon: CirclePlay,
		tag: "Video",
		title: "Inside Claims Automation",
		body: "A short walkthrough of intake, assignments, decisions, and visibility."
	}
];
function ResourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Resources",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Perspectives on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "intelligent operations"
		})] }),
		intro: "Insights, case studies, white papers, events, news, and videos from our teams and partners."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .1
				},
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: RESOURCES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					variants: fadeUp,
					transition: { duration: .5 },
					whileHover: { y: -6 },
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card hover:border-primary/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow-cyan",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs font-semibold uppercase tracking-widest text-gradient",
									children: r.tag
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-semibold text-foreground",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: r.body
							})
						]
					})]
				}, r.title))
			})
		})
	})] });
}
//#endregion
export { ResourcesPage as component };
