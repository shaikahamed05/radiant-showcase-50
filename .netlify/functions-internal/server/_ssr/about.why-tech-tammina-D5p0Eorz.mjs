import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { L as Award, P as Brain, R as ArrowRight, S as Earth, l as Repeat, s as ShieldCheck, z as Activity } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.why-tech-tammina-D5p0Eorz.js
var import_jsx_runtime = require_jsx_runtime();
var DIFFS = [
	{
		icon: Repeat,
		title: "Connected Capabilities",
		body: "We provide an end-to-end delivery path: strategy, development, quality validation, managed support, and operational processes work together as one cohesive story."
	},
	{
		icon: Brain,
		title: "Practical AI & Automation",
		body: "We focus on embedding AI directly into structured business workflows, document extraction processes, and decision-support tasks, rather than offering stand-alone AI tools."
	},
	{
		icon: Award,
		title: "Industry & Operations Knowledge",
		body: "Our teams understand the compliance, priorities, terminology, and operational bottlenecks that shape sectors like insurance, financial services, healthcare, and manufacturing."
	},
	{
		icon: ShieldCheck,
		title: "Enterprise Engineering & Integration",
		body: "We design, build, and configure systems around your existing software infrastructure, document stores, security practices, and reporting systems."
	},
	{
		icon: Activity,
		title: "Quality & Managed Services Discipline",
		body: "We build automated validation into the delivery pipeline and provide continuous SLA-aligned support and optimization backlogs post-launch."
	},
	{
		icon: Earth,
		title: "Global Delivery Model",
		body: "Our hybrid teams pair local business understanding and accountability with specialized, scalable offshore engineering teams to achieve cost efficiency."
	}
];
var PROOF_POINTS = [
	{
		val: "98%",
		label: "Client retention rate based on multi-year delivery partnerships."
	},
	{
		val: "100%",
		label: "SLA compliance maintained across our managed support engagements."
	},
	{
		val: "10+",
		label: "Years of average partnership duration with our core enterprise clients."
	}
];
function WhyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Why Tech Tammina",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "One partner across transformation, engineering, quality, operations, and support" }),
			intro: "Explain the differentiators: connected capabilities, practical AI, operational knowledge, quality discipline, managed services, and global delivery."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Key Differentiators",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "What makes Tech Tammina different" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: DIFFS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border relative overflow-hidden rounded-2xl bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-foreground mb-2",
								children: d.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: d.body
							})
						]
					}, d.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-semibold text-foreground",
							children: "Verified Proof Points"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "We believe in metrics, accountability, and long-term relationships. These metrics reflect our actual performance history and dedication to client success."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2 grid gap-6 sm:grid-cols-3",
						children: PROOF_POINTS.map((pp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl font-semibold text-gradient block mb-3",
								children: pp.val
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: pp.label
							})]
						}, pp.label))
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-foreground mb-4",
						children: "Ready to discuss your program?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground mb-8",
						children: "Tell us about your operational challenge, workflow bottleneck, or engineering project. We'll match you with the right specialists."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { WhyPage as component };
