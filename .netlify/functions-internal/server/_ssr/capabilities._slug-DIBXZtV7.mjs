import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as notFound, f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { L as ArrowRight, O as Check } from "../_libs/lucide-react.mjs";
import { t as CAPABILITIES } from "./site-data-Bv2epvEs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities._slug-DIBXZtV7.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./capabilities.index-C_560A09.mjs");
var Route$1 = createFileRoute("/capabilities/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Capabilities — Tech Tammina" },
			{
				name: "description",
				content: "Enterprise Transformation, Digital Engineering, Quality Engineering, Managed Services, and Business Operations."
			},
			{
				property: "og:title",
				content: "Capabilities — Tech Tammina"
			},
			{
				property: "og:description",
				content: "End-to-end capabilities for intelligent operations."
			},
			{
				property: "og:url",
				content: "/capabilities"
			}
		],
		links: [{
			rel: "canonical",
			href: "/capabilities"
		}]
	})
});
function CapabilityDetailShared({ slug }) {
	const cap = CAPABILITIES.find((c) => c.slug === slug);
	if (!cap) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Capability Practice",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cap.title }),
		intro: cap.tagline
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg leading-relaxed text-foreground/90 font-medium",
						children: cap.body
					}) }),
					cap.challenge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-foreground mb-4",
							children: "The Business Challenge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: cap.challenge
						})]
					}),
					cap.howWeHelp && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-6",
						children: "How Tech Tammina Helps"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 sm:grid-cols-2",
						children: cap.howWeHelp.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gradient-border rounded-xl bg-card p-6 shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-semibold tracking-widest text-gradient block mb-3",
									children: ["0", idx + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-base font-semibold text-foreground mb-2",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs leading-relaxed text-muted-foreground",
									children: item.desc
								})
							]
						}, item.title))
					})] }),
					cap.scenarios && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Common Application Scenarios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: cap.scenarios.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "grid h-2 w-2 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground/85 font-medium",
								children: s
							})]
						}, s))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Measurable Business Outcomes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2 mb-8",
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
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-surface p-8 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold text-foreground mb-4",
								children: "Built to Fit Your Enterprise Ecosystem"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted-foreground mb-6",
								children: "Our practices and deliverables are designed to integrate seamlessly with your existing technology landscape. We configure and deploy solutions around your enterprise applications, identity providers, and cloud architecture without requiring you to replace core systems."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: [
									{
										label: "Applications",
										val: "ERP, CRM, Core Systems"
									},
									{
										label: "Identity & SSO",
										val: "OAuth, SAML, Active Directory"
									},
									{
										label: "Cloud Services",
										val: "AWS, Azure, Private Cloud"
									},
									{
										label: "Data & Storage",
										val: "Document Repos, SQL, APIs"
									}
								].map((eco) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-card p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-semibold text-gradient mb-1",
										children: eco.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs text-muted-foreground font-medium",
										children: eco.val
									})]
								}, eco.label))
							})
						]
					})
				]
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
var $$splitComponentImporter = () => import("./capabilities._slug-Cu3ocDdh.mjs");
var Route = createFileRoute("/capabilities/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const cap = CAPABILITIES.find((c) => c.slug === params.slug);
		const title = cap ? `${cap.title} — Tech Tammina` : "Capability — Tech Tammina";
		const desc = cap?.body ?? "Tech Tammina capability.";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: `/capabilities/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/capabilities/${params.slug}`
			}]
		};
	}
});
//#endregion
export { Route as n, Route$1 as r, CapabilityDetailShared as t };
