import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { E as CircleCheckBig, L as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.partnerships-CywParKN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PartnerPage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Partnerships",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Explore a focused technology or ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "go-to-market relationship"
		})] }),
		intro: "Connect with our alliances and delivery team to discuss technical integrations, referral programs, or specialized co-delivery options."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl px-6",
			children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				className: "gradient-border rounded-2xl bg-card p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow mb-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-8 w-8" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold text-foreground mb-4",
						children: "Partnership Request Received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground mb-8",
						children: "Thank you for your proposal. Our alliances team will review your organization details and reach out within 2 business days to discuss collaboration opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about/partnerships",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary",
						children: ["Learn about our current ecosystem ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
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
					setSubmitted(true);
				},
				className: "gradient-border relative rounded-2xl bg-card p-8 sm:p-12 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Partnership Type *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							required: true,
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select a type..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "technology",
									children: "Technology/ISV Integration"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "referral",
									children: "Referral/Agent Alliance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "delivery",
									children: "Co-Delivery / Subcontracting"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "marketing",
									children: "Co-Marketing & Events"
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Primary Platform Focus *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "text",
							placeholder: "e.g., Appian, Camunda, Salesforce, Custom Integration",
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
						children: "Proposed Collaboration Overview *"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						required: true,
						rows: 4,
						placeholder: "Tell us how you would like to work together, joint solutions, target markets, or referral models...",
						className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Target Regions *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "text",
							placeholder: "e.g., North America, EMEA, APAC, Global",
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Work Email *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							placeholder: "name@company.com",
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Contact Full Name *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "text",
							placeholder: "First and last name",
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
							children: "Company / Organization *"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "text",
							placeholder: "Your organization",
							className: "w-full rounded-xl border border-border bg-surface/75 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary/60"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "w-full group inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]",
						children: ["Submit Proposal", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				]
			})
		})
	})] });
}
//#endregion
export { PartnerPage as component };
