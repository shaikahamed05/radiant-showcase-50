import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { C as Building2, D as ArrowRight, d as MapPin, f as Mail, h as Handshake, i as Sparkles, p as LifeBuoy, s as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-FOMJKHnY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CHANNELS = [
	{
		icon: Sparkles,
		title: "Talk to an Expert",
		body: "Discuss a process, application, or operational challenge."
	},
	{
		icon: ArrowRight,
		title: "Request a Demo",
		body: "See a Tech Tammina solution against your workflow."
	},
	{
		icon: Handshake,
		title: "Partnerships",
		body: "Explore joint delivery, integration, or go-to-market."
	},
	{
		icon: LifeBuoy,
		title: "Support",
		body: "Reach managed services and application support teams."
	},
	{
		icon: Building2,
		title: "Careers",
		body: "Join the teams building intelligent operations."
	},
	{
		icon: MapPin,
		title: "Office Locations",
		body: "Global delivery across multiple time zones."
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Start a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "conversation"
		})] }),
		intro: "Tell us where the work is stuck. We'll help define a practical path forward — from a demo to a full operating model."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .6 },
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				className: "gradient-border relative rounded-2xl bg-card p-8 lg:col-span-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								name: "name",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Work email",
								name: "email",
								type: "email",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company",
								name: "company"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Role",
								name: "role"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
							children: "What are you trying to solve?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 5,
							className: "mt-2 w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60",
							placeholder: "Share the process, application, or operational challenge…"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "group mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: [sent ? "Thanks — we'll be in touch" : "Send message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border rounded-2xl bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold text-foreground",
						children: "Direct channels"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary" }), " hello@techtammina.com"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary" }), " +1 (000) 000-0000"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary" }), " Global delivery — multiple regions"]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-2 gap-3",
					children: CHANNELS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-xl bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-4 w-4 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm font-semibold text-foreground",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-xs text-muted-foreground",
								children: c.body
							})
						]
					}, c.title))
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-medium uppercase tracking-widest text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		className: "mt-2 w-full rounded-xl border border-border bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
	})] });
}
//#endregion
export { ContactPage as component };
