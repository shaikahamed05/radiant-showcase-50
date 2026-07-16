import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { I as Award, L as ArrowRight, O as Check, o as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.partnerships.appian-C3yX_4kS.js
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	"End-to-End Low-Code Workflow & App Development",
	"Appian Case Management & Business Rules",
	"Intelligent Document Processing (IDP) Integrations",
	"Appian Process Mining & Workflow Optimization",
	"Steady-state Application Support & Platform Upgrades",
	"Legacy Migration to Appian Cloud Architecture"
];
var CERTIFICATIONS = [
	"Appian Certified Associate Developers",
	"Appian Certified Senior Developers",
	"Appian Certified Lead Developers",
	"Appian Certified Program Managers & Analysts"
];
var CONTRIBUTIONS = [
	{
		title: "SmartMeta Extractor",
		desc: "A utility for Appian to extract and normalize document metadata automatically."
	},
	{
		title: "HTML to Excel Transformation",
		desc: "Allows rapid, structured spreadsheet generation directly from HTML markup inputs."
	},
	{
		title: "Appian AI Lens",
		desc: "Provides monitoring and audit dashboard utilities for Appian AI actions."
	},
	{
		title: "Custom Smart Services",
		desc: "Specialized plugins to accelerate database and API connection performance."
	}
];
function AppianPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Ecosystem Practice",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Appian Practice" }),
		intro: "AI process automation, workflow, case management, data, document automation, and enterprise applications."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-4",
						children: "Practice Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-muted-foreground",
						children: "We combine deep Appian platform expertise with real operational understanding. Our certified practice team designs, builds, and maintains workflow-driven enterprise applications that coordinate people, data, processes, and AI actions in one governed platform."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Capabilities & Services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2",
						children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground font-medium",
								children: s
							})]
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Marketplace & Community Contributions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: CONTRIBUTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card/60 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4.5 w-4.5 text-primary mb-2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-sm font-semibold text-foreground mb-1",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed",
									children: c.desc
								})
							]
						}, c.title))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border rounded-2xl bg-card p-6 shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
						className: "font-display text-base font-semibold text-foreground flex items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-5 w-5 text-primary" }), " Credentials"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: CERTIFICATIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-xs text-muted-foreground font-medium flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), c]
						}, c))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border rounded-2xl bg-card p-6 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-base font-semibold text-foreground mb-2",
							children: "Talk to the Practice Team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground leading-relaxed mb-5",
							children: "Discuss your Appian roadmap, project delivery, or platform migration requirements."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow",
							children: ["Connect with the Team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { AppianPage as component };
