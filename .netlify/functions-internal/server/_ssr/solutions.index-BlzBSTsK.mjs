import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, r as fadeUp, t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { L as ArrowRight, k as Check } from "../_libs/lucide-react.mjs";
import { r as SOLUTIONS } from "./site-data-C1WZvCci.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions.index-BlzBSTsK.js
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
		eyebrow: "Enterprise Solution",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sol.title }),
		intro: sol.body
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-12",
				children: [
					sol.overview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-4",
						children: "Solution Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-foreground/90 font-medium",
						children: sol.overview
					})] }),
					sol.challenge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-foreground mb-4",
							children: "The Business Challenge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground font-medium",
							children: sol.challenge
						})]
					}),
					sol.capabilities && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Key Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2",
						children: sol.capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "grid h-2 w-2 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground/85 font-medium",
								children: cap
							})]
						}, cap))
					})] }),
					sol.howItWorks && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-6",
						children: "How It Works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: sol.howItWorks.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-xs font-semibold text-primary-foreground",
								children: idx + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground font-medium leading-relaxed self-center",
								children: step
							})]
						}, step))
					})] }),
					sol.outcomes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Business Outcomes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2 mb-8",
						children: sol.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground font-medium",
								children: o
							})]
						}, o))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface p-8 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold text-foreground mb-4",
								children: "Built to Fit Your Enterprise Ecosystem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground mb-6",
								children: "This solution can be configured around your existing enterprise applications, workflow platforms, identity management, document repositories, cloud services, reporting tools, and third-party APIs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: [
									{
										label: "Workflow Platforms",
										val: "Appian, Mendix, Camunda"
									},
									{
										label: "Enterprise Apps",
										val: "Salesforce, SAP, Custom APIs"
									},
									{
										label: "Cloud Platforms",
										val: "AWS, Microsoft Azure"
									},
									{
										label: "Identity & Security",
										val: "Okta, Active Directory, SSO"
									}
								].map((eco) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-semibold text-gradient mb-1",
										children: eco.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted-foreground font-medium",
										children: eco.val
									})]
								}, eco.label))
							})
						]
					})
				]
			})
		})
	})] });
}
//#endregion
export { SolutionDetailShared, SolutionsIndex as component };
