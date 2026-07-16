import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { A as Calendar, I as Award, L as ArrowRight, R as Activity, a as UserCheck, i as Users, m as MapPin, v as Heart } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.index-CExbctN8.js
var import_jsx_runtime = require_jsx_runtime();
var BELIEFS = [
	{
		icon: UserCheck,
		title: "Business First",
		body: "Technology should solve a clear operating problem and create measurable value."
	},
	{
		icon: Activity,
		title: "Build for Change",
		body: "Applications, workflows, and operating models must be able to evolve."
	},
	{
		icon: Heart,
		title: "Deliver as a Partner",
		body: "Long-term success requires transparency, shared accountability, and continuous improvement."
	}
];
var SNAPSHOT = [
	{
		icon: Calendar,
		label: "Founding Year",
		val: "2005"
	},
	{
		icon: Users,
		label: "Employee Count",
		val: "500+"
	},
	{
		icon: MapPin,
		label: "Global Locations",
		val: "US & India"
	},
	{
		icon: Award,
		label: "Certifications",
		val: "ISO 9001 & 27001"
	}
];
var SUBPAGES = [
	{
		label: "Leadership",
		desc: "Meet the team responsible for strategy and delivery.",
		to: "/about/leadership"
	},
	{
		label: "Why Tech Tammina",
		desc: "Understand our combination of business, technology, and quality.",
		to: "/about/why-tech-tammina"
	},
	{
		label: "Partnerships & Ecosystem",
		desc: "Explore our formal practices, platform alliances, and contributions.",
		to: "/about/partnerships"
	},
	{
		label: "Global Presence",
		desc: "See how local collaboration and global delivery support clients.",
		to: "/about/global-presence"
	},
	{
		label: "Careers",
		desc: "Discover culture, values, and open opportunities.",
		to: "/careers"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Company Overview",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Business understanding. Engineering discipline. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "Operational focus."
			})] }),
			intro: "Tech Tammina brings technology and business operations together to create lasting value."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl font-semibold text-foreground",
								children: "Who We Are"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base leading-relaxed text-muted-foreground",
								children: "Tech Tammina is a technology consulting and business solutions company focused on improving how organizations operate. We combine enterprise transformation, digital engineering, quality engineering, managed services, and business operations to solve complex, practical challenges across regulated and operationally intensive industries."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 grid gap-6 sm:grid-cols-2",
								children: BELIEFS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-foreground",
											children: b.title
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs leading-relaxed text-muted-foreground",
										children: b.body
									})]
								}, b.title))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 h-fit",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-foreground mb-6",
							children: "Company Snapshot"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: SNAPSHOT.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4.5 w-4.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs text-muted-foreground",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold text-foreground",
									children: s.val
								})] })]
							}, s.label))
						})]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Explore Our Organization",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Learn more about our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "values, leadership, and reach"
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: SUBPAGES.map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: sp.to,
						className: "group relative block rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition-all hover:scale-[1.01]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2",
								children: sp.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground mb-4",
								children: sp.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs font-semibold text-primary transition-transform group-hover:translate-x-0.5",
								children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					}, sp.to))
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
