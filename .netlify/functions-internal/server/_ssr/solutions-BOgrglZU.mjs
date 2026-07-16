import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { r as SOLUTIONS } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-BOgrglZU.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Solutions",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Solutions engineered for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "measurable outcomes"
		})] }),
		intro: "Purpose-built to accelerate the work that runs the business — from underwriting to vendors."
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
					amount: .05
				},
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: SOLUTIONS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					transition: { duration: .5 },
					whileHover: { y: -6 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions/$slug",
						params: { slug: s.slug },
						className: "group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xs font-semibold tracking-widest text-gradient",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow transition-transform group-hover:rotate-45",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-semibold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					})
				}, s.slug))
			})
		})
	})] });
}
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
//#endregion
export { SolutionDetailShared, SolutionsIndex as component };
