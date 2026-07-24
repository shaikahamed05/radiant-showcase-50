import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { A as Check } from "../_libs/lucide-react.mjs";
import { r as SOLUTIONS } from "./site-data-C1WZvCci.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions._slug-DSHx1Fuc.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter$1 = () => import("./solutions.index-BlzBSTsK.mjs");
var Route$1 = createFileRoute("/solutions/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "Solutions — Tech Tammina" },
			{
				name: "description",
				content: "Eleven purpose-built solutions across insurance, compliance, vendor, fleet, and document-intensive operations."
			},
			{
				property: "og:title",
				content: "Solutions — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Solutions engineered for measurable outcomes."
			},
			{
				property: "og:url",
				content: "/solutions"
			}
		],
		links: [{
			rel: "canonical",
			href: "/solutions"
		}]
	})
});
function SolutionDetailShared({ slug }) {
	const sol = SOLUTIONS.find((s) => s.slug === slug);
	if (!sol) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Enterprise Solution",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: sol.title }),
		intro: sol.body
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 space-y-12",
				children: [
					sol.overview && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-4",
						children: "Solution Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed text-foreground/90 font-medium",
						children: sol.overview
					})] }),
					sol.challenge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gradient-border rounded-2xl bg-card p-8 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-semibold text-foreground mb-4",
							children: "The Business Challenge"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground font-medium",
							children: sol.challenge
						})]
					}),
					sol.capabilities && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Key Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2",
						children: sol.capabilities.map((cap) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "grid h-2 w-2 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-foreground/85 font-medium",
								children: cap
							})]
						}, cap))
					})] }),
					sol.howItWorks && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-6",
						children: "How It Works"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: sol.howItWorks.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 rounded-xl border border-border/80 bg-card/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-gradient text-xs font-semibold text-primary-foreground",
								children: idx + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground font-medium leading-relaxed self-center",
								children: step
							})]
						}, step))
					})] }),
					sol.outcomes && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-semibold text-foreground mb-5",
						children: "Business Outcomes"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3 sm:grid-cols-2 mb-8",
						children: sol.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 rounded-xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground font-medium",
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
								children: "This solution can be configured around your existing enterprise applications, workflow platforms, identity management, document repositories, cloud services, reporting tools, and third-party APIs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
								children: [
									{
										label: "Workflow Platforms",
										val: "Appian, Mendix, Camunda"
									},
									{
										label: "Enterprise Apps",
										val: "Salesforce, SAP, Custom APIs"
									},
									{
										label: "Cloud Platforms",
										val: "AWS, Microsoft Azure"
									},
									{
										label: "Identity & Security",
										val: "Okta, Active Directory, SSO"
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
			})
		})
	})] });
}
var $$splitComponentImporter = () => import("./solutions._slug-DG7TG0sh.mjs");
var Route = createFileRoute("/solutions/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: ({ params }) => {
		const sol = SOLUTIONS.find((s) => s.slug === params.slug);
		const title = sol ? `${sol.title} — Tech Tammina` : "Solution — Tech Tammina";
		const desc = sol?.body ?? "Tech Tammina solution.";
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
					content: `/solutions/${params.slug}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/solutions/${params.slug}`
			}]
		};
	}
});
//#endregion
export { Route$1 as n, SolutionDetailShared as r, Route as t };
