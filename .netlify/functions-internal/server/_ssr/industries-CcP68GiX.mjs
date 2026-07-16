import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { n as INDUSTRIES } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-CcP68GiX.js
var import_jsx_runtime = require_jsx_runtime();
function IndustriesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Industries",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Deep focus in ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "regulated, operations-heavy"
			}),
			" industries"
		] }),
		intro: "We combine operational knowledge with engineering to move regulated workflows forward — from underwriting to citizen services."
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
				children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					transition: { duration: .5 },
					whileHover: { y: -6 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/industries/$slug",
						params: { slug: ind.slug },
						className: "group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-teal opacity-0 blur-3xl transition-opacity group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold text-foreground",
									children: ind.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: ind.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
									children: ["Industry detail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						})]
					})
				}, ind.slug))
			})
		})
	})] });
}
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
//#endregion
export { IndustryDetailShared, IndustriesIndex as component };
