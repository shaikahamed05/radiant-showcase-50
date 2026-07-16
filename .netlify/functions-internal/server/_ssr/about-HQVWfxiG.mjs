import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, n as SectionHeading, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, _ as Earth, a as ShieldCheck, h as Handshake, m as LayoutGrid, o as Repeat, w as Brain } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-HQVWfxiG.js
var import_jsx_runtime = require_jsx_runtime();
var VALUES = [
	{
		icon: LayoutGrid,
		title: "Business and Technology Together",
		body: "Operational knowledge informs architecture, workflows, and delivery decisions."
	},
	{
		icon: Brain,
		title: "Practical AI",
		body: "AI is embedded where it improves reviews, decisions, knowledge access, or execution."
	},
	{
		icon: ShieldCheck,
		title: "Enterprise Delivery",
		body: "Solutions are designed for governance, integration, scale, and long-term support."
	},
	{
		icon: Repeat,
		title: "From Build to Operate",
		body: "Transformation, engineering, quality, managed services, and operations work as one delivery story."
	}
];
var STATS = [
	{
		k: "5",
		v: "Capability practices"
	},
	{
		k: "6",
		v: "Focus industries"
	},
	{
		k: "11",
		v: "Enterprise solutions"
	},
	{
		k: "24/7",
		v: "Managed operations"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["A partner for the work that ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "runs your business"
			})] }),
			intro: "Tech Tammina brings operational knowledge, engineering, and AI together to modernize processes, build connected applications, improve quality, and support operations after launch."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					className: "gradient-border rounded-2xl bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl font-semibold text-gradient",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-sm text-muted-foreground",
						children: s.v
					})]
				}, s.v))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why Tech Tammina",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Operational depth. Engineering rigor. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "AI where it counts."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .2
					},
					className: "mt-14 grid gap-6 md:grid-cols-2",
					children: VALUES.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeUp,
						transition: { duration: .6 },
						whileHover: { y: -4 },
						className: "gradient-border relative overflow-hidden rounded-2xl bg-card p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-foreground",
								children: w.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: w.body
							})] })]
						})
					}, w.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Partnerships & Reach",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Partnerships, ecosystem, and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "global presence"
					})] }),
					intro: "Tech Tammina operates across a global delivery model with verified partner practices and enterprise-grade governance."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						{
							icon: Handshake,
							label: "Verified partnerships"
						},
						{
							icon: Earth,
							label: "Global delivery"
						},
						{
							icon: ShieldCheck,
							label: "Enterprise governance"
						},
						{
							icon: Repeat,
							label: "Continuous improvement"
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-sm font-medium text-foreground",
							children: c.label
						})]
					}, c.label))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Work With Us",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's build your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "intelligent operations"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
