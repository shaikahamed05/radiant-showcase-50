import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { L as ArrowRight, o as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.partnerships.index-BUDWHvFE.js
var import_jsx_runtime = require_jsx_runtime();
var PARTNERS = [
	{
		slug: "appian",
		name: "Appian Practice",
		desc: "AI process automation, workflow, case management, data, document automation, and enterprise applications.",
		value: "Deliver end-to-end intelligent automation workflows and Appian components.",
		to: "/about/partnerships/appian"
	},
	{
		slug: "mendix",
		name: "Mendix Practice",
		desc: "Enterprise application development and modernization using the Mendix low-code platform.",
		value: "Build rapid operational portals, mobile apps, and modernization pipelines.",
		to: "/about/partnerships/mendix"
	},
	{
		slug: "camunda",
		name: "Camunda Practice",
		desc: "Process orchestration across people, systems, decisions, and AI-enabled work.",
		value: "Connect disjointed workflows and orchestrate complex microservice transactions.",
		to: "/about/partnerships/camunda"
	},
	{
		slug: "aws",
		name: "AWS Practice",
		desc: "Cloud architecture, deployment, DevOps, AI services, storage, databases, monitoring, and security.",
		value: "Configure robust cloud delivery systems and AI pipeline storage infrastructure.",
		to: "/about/partnerships/aws"
	},
	{
		slug: "microsoft",
		name: "Microsoft Practice",
		desc: "Cloud, identity, productivity, collaboration, data, and enterprise integration.",
		value: "Ensure enterprise security, Azure deployments, and Office/AD ecosystem synchronization.",
		to: "/about/partnerships/microsoft"
	}
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
		title: "Custom Smart Services & Utilities",
		desc: "A collection of Appian plug-ins to improve connector performance and stability."
	}
];
function PartnershipsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Partnerships & Ecosystem",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Stronger outcomes through ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "focused platform practices"
			})] }),
			intro: "We build expertise around leading process automation, application development, and cloud platforms."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Our Philosophy",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deep expertise, not just logo galleries" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm leading-relaxed text-muted-foreground",
					children: "We do not claim partnerships lightly. Tech Tammina focuses on formal, active relationships where we maintain certified developers, delivery playbooks, and verified customer success. We treat partner technologies as practices to master and apply to real operational challenges."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground mb-10",
					children: "Our Platform Practices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: PARTNERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-foreground mb-3",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground mb-4",
								children: p.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl bg-surface p-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[10px] font-bold tracking-wider text-gradient uppercase mb-1",
									children: "Business Value"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-foreground/80 font-medium",
									children: p.value
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: p.to,
							className: "group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-0.5 mt-2",
							children: ["Explore Practice ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Marketplace & Community",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Tools, plugins, and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "marketplace contributions"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: CONTRIBUTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 text-primary mb-4" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-base font-semibold text-foreground mb-2",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: c.desc
							})
						]
					}, c.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-foreground mb-4",
						children: "Discuss your practice requirements"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground mb-8",
						children: "Connect with our practice owners to see how we can bring certified delivery capabilities to your initiative."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Talk to the Practice Team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { PartnershipsPage as component };
