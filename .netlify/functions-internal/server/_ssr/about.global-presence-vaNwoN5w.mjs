import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { R as ArrowRight, S as Earth, m as MapPin, s as ShieldCheck, w as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about.global-presence-vaNwoN5w.js
var import_jsx_runtime = require_jsx_runtime();
var LOCATIONS = [
	{
		city: "McLean, Virginia",
		country: "United States",
		type: "Headquarters & Onshore Strategy",
		desc: "Houses our core business analysts, client program managers, low-code strategists, and executive leaders. Ensures local accountability and direct communication."
	},
	{
		city: "Visakhapatnam, Andhra Pradesh",
		country: "India",
		type: "Global Delivery Center",
		desc: "Our primary hub for low-code engineering (Appian, Mendix, Camunda), Quality Engineering test factories, cloud orchestration, and 24/7 managed services."
	},
	{
		city: "Noida, Uttar Pradesh",
		country: "India",
		type: "Regional Delivery Hub",
		desc: "Provides additional developer capacity, specialized business operations support, and business process outsourcing (BPO) team operations."
	}
];
var COLLAB_PILLARS = [
	{
		icon: Clock,
		title: "Time-Zone Synchronization",
		body: "We structure daily standups, handoffs, and status reviews during overlapping office hours to ensure seamless collaboration between US client teams and offshore resources."
	},
	{
		icon: ShieldCheck,
		title: "Onshore Governance",
		body: "US-based client engagement leads act as your single point of contact. They translate requirements, check progress, and guarantee deliverables."
	},
	{
		icon: Earth,
		title: "Offshore Delivery Scale",
		body: "Our India centers provide highly specialized, certified engineering talent at scale, allowing clients to run continuous development cycles efficiently."
	}
];
function GlobalPresencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Global Presence",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Global delivery. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "Local accountability."
			})] }),
			intro: "Present operating locations, delivery capabilities, time-zone coverage, collaboration model, and office contact links."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Our Centers",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Where we operate" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: LOCATIONS.map((loc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold text-foreground",
									children: loc.city
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted-foreground",
									children: loc.country
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs font-semibold text-gradient mb-4",
								children: loc.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-relaxed text-muted-foreground",
								children: loc.desc
							})
						] })
					}, loc.city))
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
							children: "Our Collaboration Model"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground",
							children: "Running global operations requires structured communications. Our model is built to ensure you get the cost benefit of offshore engineering with zero communication lag or governance deficiencies."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-2 space-y-6",
						children: COLLAB_PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-xl border border-border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(pillar.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-foreground text-base mb-1",
								children: pillar.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground leading-relaxed",
								children: pillar.body
							})] })]
						}, pillar.title))
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
						children: "Want to visit our offices?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground mb-8",
						children: "Check our regional office directions, verified locations, phone numbers, and operational hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						search: { channel: "locations" },
						className: "inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Check Office Locations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	] });
}
//#endregion
export { GlobalPresencePage as component };
