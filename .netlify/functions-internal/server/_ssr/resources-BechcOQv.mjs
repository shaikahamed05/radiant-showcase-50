import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as Calendar, F as BookOpen, T as CirclePlay, b as FileText, d as Newspaper, o as Sparkles } from "../_libs/lucide-react.mjs";
import { t as Route } from "./resources-DjXwTMHJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-BechcOQv.js
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
var FILTER_TABS = [
	{
		label: "All",
		type: void 0
	},
	{
		label: "Insights",
		type: "insight"
	},
	{
		label: "Case Studies",
		type: "case-study"
	},
	{
		label: "White Papers",
		type: "white-paper"
	},
	{
		label: "Events & Webinars",
		type: "webinar"
	},
	{
		label: "News",
		type: "news"
	},
	{
		label: "Videos",
		type: "video"
	}
];
function ResourcesPage() {
	const { type } = Route.useSearch();
	const getSlug = (tag) => tag.toLowerCase().replace(/\s+/g, "-");
	const filteredResources = type ? RESOURCES.filter((r) => getSlug(r.tag) === type.toLowerCase()) : RESOURCES;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Resources",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Perspectives on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "intelligent operations"
		})] }),
		intro: "Insights, case studies, white papers, events, news, and videos from our teams and partners."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-12 flex flex-wrap items-center justify-center gap-2",
				children: FILTER_TABS.map((tab) => {
					const isActive = !type && !tab.type || type === tab.type;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/resources",
						search: tab.type ? { type: tab.type } : {},
						resetScroll: false,
						className: `rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border ${isActive ? "bg-accent-gradient text-primary-foreground border-transparent shadow-glow" : "bg-surface border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/40"}`,
						children: tab.label
					}, tab.label);
				})
			}), filteredResources.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center text-muted-foreground py-12",
				children: "No resources found for this filter."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .1
				},
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: filteredResources.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
			}, type || "all")]
		})
	})] });
}
//#endregion
export { ResourcesPage as component };
