import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { L as Award, N as Briefcase, R as ArrowRight, h as Mail, v as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-DfAuwVYo.js
var import_jsx_runtime = require_jsx_runtime();
var BENEFITS = [
	{
		icon: Award,
		title: "Sponsored Certifications",
		body: "We fully fund platform certifications across Appian, Mendix, Camunda, AWS, and Microsoft."
	},
	{
		icon: Heart,
		title: "Outcome-Led Culture",
		body: "We celebrate execution and deliverables over time-clocks, offering a supportive team environment."
	},
	{
		icon: Briefcase,
		title: "Enterprise Exposure",
		body: "Work on business-critical systems for leading brands in insurance, finance, and education."
	}
];
var ROLES = [
	{
		title: "Senior Appian Developer",
		location: "Visakhapatnam, India / Hybrid",
		area: "Low-Code Engineering",
		skills: "Appian Lead Developer certification, BPMN modeling, Web API integrations."
	},
	{
		title: "Mendix Lead Engineer",
		location: "Visakhapatnam, India",
		area: "Low-Code Engineering",
		skills: "Mendix Advanced/Expert certification, Java plugin creation, React widgets."
	},
	{
		title: "Quality Engineering Analyst",
		location: "Noida, India",
		area: "Quality Engineering",
		skills: "Selenium, API automation (Postman/REST Assured), functional workflow testing."
	},
	{
		title: "AWS Cloud & DevOps Specialist",
		location: "Visakhapatnam, India",
		area: "Digital Engineering",
		skills: "Terraform, AWS Bedrock, CI/CD pipeline building, RDS/DynamoDB."
	}
];
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Careers",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Build what matters. Grow with people who ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "care about outcomes."
			})] }),
			intro: "Discover opportunities, culture, learning, and growth. Join our low-code, digital engineering, and operational teams."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Why Join Us",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "A foundation for continuous learning and career growth" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: BENEFITS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow mb-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold text-foreground mb-2",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: b.body
							})
						]
					}, b.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground mb-10 text-center",
					children: "Open Opportunities"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: ROLES.map((role) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between mb-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground",
								children: role.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: role.location
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-surface px-2.5 py-1 text-[10px] font-semibold text-primary uppercase tracking-wider",
								children: role.area
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs leading-relaxed text-muted-foreground mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground block mb-1",
								children: "Key Skills:"
							}), role.skills]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							search: { channel: "careers" },
							className: "group inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform hover:translate-x-0.5",
							children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})]
					}, role.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-semibold text-foreground mb-4",
						children: "Don't see your role?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground mb-8",
						children: "We are always looking for certified low-code developers, QA experts, and systems architects. Send your resume and portfolio details to our recruitment team."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						search: { channel: "careers" },
						className: "inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Submit General Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { CareersPage as component };
