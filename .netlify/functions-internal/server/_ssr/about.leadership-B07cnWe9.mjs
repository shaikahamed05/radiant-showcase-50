import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { N as Award, P as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.leadership-B07cnWe9.js
var import_jsx_runtime = require_jsx_runtime();
var EXECUTIVES = [{
	name: "Raj Tammina",
	role: "Chief Executive Officer",
	bio: "Focuses on strategic direction, global partnerships, and alignment of technology services to customer business objectives. Over 20 years of operations leadership.",
	focus: "Strategy & Partnership",
	linkedin: "#"
}, {
	name: "Prasad Tammina",
	role: "VP of Global Delivery",
	bio: "Manages offshore operations, quality control pipelines, and scaling client delivery capability across India delivery centers.",
	focus: "Global Operations",
	linkedin: "#"
}];
var PRACTICE_LEADERS = [
	{
		name: "Sanjay Kumar",
		role: "Appian & Low-Code Practice Head",
		bio: "Oversees low-code workflow development, certified consultant pipelines, and delivery of Process Automation projects.",
		focus: "Appian Practice"
	},
	{
		name: "Nisha Patel",
		role: "Quality Engineering Director",
		bio: "Ensures delivery speed is backed by robust testing strategies, automated regression test builds, and compliance validation.",
		focus: "Quality Engineering"
	},
	{
		name: "Robert Chen",
		role: "Managed Support Lead",
		bio: "Responsible for SLA alignment, proactive platform maintenance support, upgrades, and steady-state optimization.",
		focus: "Managed Services"
	}
];
function LeadershipPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Leadership",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
				children: ["Leadership focused on client outcomes and ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "long-term value"
				})]
			}),
			intro: "Introducing the practice leads and executives responsible for strategy, delivery, operations, and growth."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Message from our CEO",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Accountable delivery. Proven outcomes." })
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
					className: "mt-8 text-lg font-medium text-foreground/80 italic leading-relaxed",
					children: "\"Our mission is to help enterprise organizations build scalable, modern workflows that solve operational bottlenecks. We believe technology should always serve a business objective, and we commit to absolute transparency and shared accountability with our clients.\""
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm font-semibold text-gradient",
					children: "— Raj Tammina, CEO"
				})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground mb-10",
					children: "Executive Leadership"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-8 md:grid-cols-2",
					children: EXECUTIVES.map((exec) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-semibold text-foreground",
										children: exec.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-gradient",
										children: exec.role
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: exec.linkedin,
									"aria-label": "LinkedIn Profile",
									className: "text-muted-foreground hover:text-primary transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "h-5 w-5",
										viewBox: "0 0 24 24",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" })
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground mb-6",
								children: exec.bio
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/80 pt-4 flex justify-between items-center text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Area of Responsibility:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: exec.focus
							})]
						})]
					}, exec.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground mb-10",
					children: "Practice Leadership"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: PRACTICE_LEADERS.map((pl) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground",
								children: pl.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold text-gradient mb-3",
								children: pl.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground mb-6",
								children: pl.bio
							})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border/60 pt-4 flex justify-between items-center text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Practice Area:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: pl.focus
							})]
						})]
					}, pl.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-6 w-6" })
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold text-foreground mb-4",
					children: "Governance and Client Commitment"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-muted-foreground mb-8",
					children: "Every client engagement is guided by a formal governance model that includes executive sponsorship, regular operational checks, SLA reporting, quality gates, and a continuous improvement backlog. We hold ourselves accountable for delivery timelines and measurable business outcomes."
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Connect with our Leadership ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
				]
			})
		})
		]
	});
}
//#endregion
export { LeadershipPage as component };
