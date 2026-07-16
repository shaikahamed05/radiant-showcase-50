import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { i as stagger, n as SectionHeading, r as fadeUp, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, b as Check } from "../_libs/lucide-react.mjs";
import { t as CAPABILITIES } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities-CJDt8cCH.js
var import_jsx_runtime = require_jsx_runtime();
function CapabilitiesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Capabilities",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["End-to-end capabilities for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "intelligent operations"
			})] }),
			intro: "Five practices that work as one delivery story — from transformation strategy through steady-state operations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
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
					children: CAPABILITIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeUp,
						transition: { duration: .5 },
						whileHover: { y: -6 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/capabilities/$slug",
							params: { slug: c.slug },
							className: "group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xs font-semibold tracking-widest text-gradient",
										children: ["0", i + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-xl font-semibold text-foreground",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
										children: ["Explore capability ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						})
					}, c.slug))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Ready to Start",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Bring the right capability to the right problem" }),
					intro: "Tell us where the work is stuck — we'll help define a practical path forward."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
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
//#endregion
export { CapabilityDetailShared, CapabilitiesIndex as component };
