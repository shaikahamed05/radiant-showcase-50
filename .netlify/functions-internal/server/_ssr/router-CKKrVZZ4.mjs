import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { D as ChevronDown, I as ArrowRight, n as X, p as Menu } from "../_libs/lucide-react.mjs";
import { n as Route$22, r as Route$1$1 } from "./capabilities._slug-BM-SGc7x.mjs";
import { t as Route$23 } from "./contact.index-C10N2MGO.mjs";
import { n as Route$25, r as Route$1$24 } from "./industries._slug-CX8ku56I.mjs";
import { t as Route$24 } from "./resources-D8ZyH4vl.mjs";
import { n as Route$1$26, t as Route$27 } from "./solutions._slug-DSHx1Fuc.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CKKrVZZ4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cgc6E8kn.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var NAV_LINKS = [
	{
		label: "Capabilities",
		to: "/capabilities"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Solutions",
		to: "/solutions"
	},
	{
		label: "Resources",
		to: "/resources"
	},
	{
		label: "About",
		to: "/about"
	}
];
var SUBTABS = {
	Capabilities: [
		{
			label: "Enterprise AI & Intelligent Automation",
			to: "/capabilities/enterprise-transformation"
		},
		{
			label: "Intelligent Applications",
			to: "/capabilities/intelligent-applications"
		},
		{
			label: "Digital Engineering",
			to: "/capabilities/digital-engineering"
		},
		{
			label: "Quality Engineering",
			to: "/capabilities/quality-engineering"
		},
		{
			label: "Managed Services",
			to: "/capabilities/managed-services"
		},
		{
			label: "Business Operations",
			to: "/capabilities/business-operations"
		}
	],
	Industries: [
		{
			label: "Insurance",
			to: "/industries/insurance"
		},
		{
			label: "Financial Services",
			to: "/industries/financial-services"
		},
		{
			label: "Healthcare & Life Sciences",
			to: "/industries/healthcare-life-sciences"
		},
		{
			label: "Manufacturing",
			to: "/industries/manufacturing"
		},
		{
			label: "Education",
			to: "/industries/education"
		},
		{
			label: "Public Sector",
			to: "/industries/public-sector"
		}
	],
	Solutions: [
		{
			label: "Policy Checking Automation",
			to: "/solutions/policy-checking-automation"
		},
		{
			label: "COI Compliance Management",
			to: "/solutions/coi-compliance-management"
		},
		{
			label: "Claims Operations",
			to: "/solutions/claims-automation"
		},
		{
			label: "Proposal Automation",
			to: "/solutions/renewal-intelligence"
		},
		{
			label: "Document Intelligence",
			to: "/solutions/fleet-management"
		},
		{
			label: "Vendor & Compliance Management",
			to: "/solutions/vendor-management"
		},
		{
			label: "Order Management",
			to: "/solutions/order-management"
		},
		{
			label: "Compliance Management",
			to: "/solutions/compliance-management"
		},
		{
			label: "HRMS & Employee Hub",
			to: "/solutions/hrms-and-employee-hub"
		},
		{
			label: "University Admissions Management",
			to: "/solutions/university-admissions-management"
		},
		{
			label: "Complaint & Service Request Management",
			to: "/solutions/complaint-and-service-request-management"
		}
	],
	Resources: [
		{
			label: "Insights",
			to: "/resources?type=insight"
		},
		{
			label: "Case Studies",
			to: "/resources?type=case-study"
		},
		{
			label: "White Papers & Research",
			to: "/resources?type=white-paper"
		},
		{
			label: "Events & Webinars",
			to: "/resources?type=webinar"
		},
		{
			label: "News",
			to: "/resources?type=news"
		},
		{
			label: "Videos & Downloads",
			to: "/resources?type=video"
		}
	],
	About: [
		{
			label: "Company Overview",
			to: "/about"
		},
		{
			label: "Leadership",
			to: "/about/leadership"
		},
		{
			label: "Why Tech Tammina",
			to: "/about/why-tech-tammina"
		},
		{
			label: "Office Locations",
			to: "/contact/locations"
		},
		{
			label: "Partnerships & Ecosystem",
			to: "/about/partnerships"
		},
		{
			label: "Careers",
			to: "/careers"
		}
	]
};
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [activeMenu, setActiveMenu] = (0, import_react.useState)(null);
	const [mobileExpanded, setMobileExpanded] = (0, import_react.useState)({});
	const toggleMobileExpanded = (label) => {
		setMobileExpanded((prev) => ({
			...prev,
			[label]: !prev[label]
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://techtammina.com/wp-content/uploads/2026/03/Tech-Tammina-Top-IT-Companies-in-Visakhapatnam.webp",
						alt: "Tech Tammina Logo",
						className: "h-14 w-auto object-contain md:h-16"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex h-full",
					children: NAV_LINKS.map((n) => {
						const hasSubtabs = !!SUBTABS[n.label];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center h-full",
							onMouseEnter: () => hasSubtabs && setActiveMenu(n.label),
							onMouseLeave: () => setActiveMenu(null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-5 flex items-center gap-1",
								activeProps: { className: "text-foreground" },
								children: [n.label, hasSubtabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block transition-transform duration-200",
									style: { transform: activeMenu === n.label ? "rotate(180deg)" : "none" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3 w-3 opacity-60" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: activeMenu === n.label && hasSubtabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10,
									scale: .95
								},
								animate: {
									opacity: 1,
									y: 0,
									scale: 1
								},
								exit: {
									opacity: 0,
									y: 8,
									scale: .95
								},
								transition: {
									duration: .2,
									ease: "easeOut"
								},
								className: `absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1 rounded-2xl border border-border bg-popover p-2 shadow-card backdrop-blur-md ${n.label === "Solutions" ? "grid grid-cols-2 gap-1 min-w-[520px]" : "flex flex-col gap-1 min-w-[240px]"}`,
								children: SUBTABS[n.label].map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: sub.to,
									hash: sub.hash,
									className: "rounded-xl px-4 py-2.5 text-sm text-muted-foreground hover:bg-surface hover:text-foreground transition-colors text-left font-medium block",
									onClick: () => setActiveMenu(null),
									children: sub.label
								}, sub.label))
							}) })]
						}, n.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Explore Our Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid h-9 w-9 place-items-center rounded-md border border-border bg-surface/60 md:hidden",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-background/95 md:hidden max-h-[80vh] overflow-y-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4",
				children: [NAV_LINKS.map((n) => {
					const hasSubtabs = !!SUBTABS[n.label];
					const isExpanded = !!mobileExpanded[n.label];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								className: "flex-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground font-semibold",
								activeProps: { className: "text-foreground bg-surface" },
								children: n.label
							}), hasSubtabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleMobileExpanded(n.label),
								className: "p-2 text-muted-foreground hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}` })
							})]
						}), hasSubtabs && isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pl-6 flex flex-col gap-1 border-l border-border/60 ml-3 my-1",
							children: SUBTABS[n.label].map((sub) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: sub.to,
								hash: sub.hash,
								onClick: () => {
									setOpen(false);
									setActiveMenu(null);
								},
								className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground block",
								children: sub.label
							}, sub.label))
						})]
					}, n.to);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow",
					children: ["Explore Our Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		}) : null]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-background py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "https://techtammina.com/wp-content/uploads/2026/03/Tech-Tammina-Top-IT-Companies-in-Visakhapatnam.webp",
						alt: "Tech Tammina Logo",
						className: "h-12 w-auto object-contain md:h-14"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Connecting AI, automation, and expertise to drive business impact."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Explore",
					links: [
						{
							label: "Capabilities",
							to: "/capabilities"
						},
						{
							label: "Industries",
							to: "/industries"
						},
						{
							label: "Solutions",
							to: "/solutions"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
					title: "Company",
					links: [{
						label: "About",
						to: "/about"
					}, {
						label: "Resources",
						to: "/resources"
					}]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold text-foreground",
					children: "Ready to talk?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/about",
					className: "mt-3 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Explore Our Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Tech Tammina. All rights reserved."
			]
		})]
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-display text-sm font-semibold text-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 space-y-2 text-sm text-muted-foreground",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: l.to,
			className: "hover:text-foreground",
			children: l.label
		}) }, l.to))
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$21 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Tech Tammina — AI That Moves Business Forward" },
			{
				name: "description",
				content: "Tech Tammina builds intelligent operations through AI, automation, digital engineering, managed services, and business expertise."
			},
			{
				property: "og:title",
				content: "Tech Tammina — AI That Moves Business Forward"
			},
			{
				property: "og:description",
				content: "Connecting AI, automation, and expertise to drive business impact across insurance, financial services, healthcare, manufacturing, education, and the public sector."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "https://techtammina.com/wp-content/uploads/2025/05/cropped-Favicon-Tech-Tammina-1-32x32-1.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$21.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-screen bg-background pt-16 text-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$20 = () => import("./support-7vYMpMmb.mjs");
var Route$20 = createFileRoute("/support")({
	component: lazyRouteComponent($$splitComponentImporter$20, "component"),
	head: () => ({ meta: [{ title: "Client Support — Tech Tammina" }, {
		name: "description",
		content: "Reach the correct client support desk, view emergency escalation procedures, and access secure support portals."
	}] })
});
var $$splitComponentImporter$19 = () => import("./solutions-D9TkTwcf.mjs");
var Route$19 = createFileRoute("/solutions")({ component: lazyRouteComponent($$splitComponentImporter$19, "component") });
var $$splitComponentImporter$18 = () => import("./industries-KO5IEbMo.mjs");
var Route$18 = createFileRoute("/industries")({ component: lazyRouteComponent($$splitComponentImporter$18, "component") });
var $$splitComponentImporter$17 = () => import("./contact-MDYOQ9-z.mjs");
var Route$17 = createFileRoute("/contact")({ component: lazyRouteComponent($$splitComponentImporter$17, "component") });
var $$splitComponentImporter$16 = () => import("./careers-DfAuwVYo.mjs");
var Route$16 = createFileRoute("/careers")({
	component: lazyRouteComponent($$splitComponentImporter$16, "component"),
	head: () => ({ meta: [{ title: "Careers — Tech Tammina" }, {
		name: "description",
		content: "Build what matters. Grow with people who care about outcomes. Explore engineering, low-code, quality, and business operations roles."
	}] })
});
var $$splitComponentImporter$15 = () => import("./capabilities-DbvtkBCB.mjs");
var Route$15 = createFileRoute("/capabilities")({ component: lazyRouteComponent($$splitComponentImporter$15, "component") });
var $$splitComponentImporter$14 = () => import("./about-Eq2sxU09.mjs");
var Route$14 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./routes-Bht1VKzr.mjs");
var Route$13 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({
		meta: [
			{ title: "AI, Automation and Intelligent Operations | Tech Tammina" },
			{
				name: "description",
				content: "Tech Tammina builds intelligent operations through AI, automation, digital engineering, managed services, and business expertise."
			},
			{
				property: "og:title",
				content: "AI, Automation and Intelligent Operations | Tech Tammina"
			},
			{
				property: "og:description",
				content: "Connecting AI, automation, and expertise to drive business impact."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	})
});
var $$splitComponentImporter$12 = () => import("./about.index-DRuD2_GT.mjs");
var Route$12 = createFileRoute("/about/")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({
		meta: [
			{ title: "About Tech Tammina | Intelligent Operations Company" },
			{
				name: "description",
				content: "Learn how Tech Tammina combines AI, automation, digital engineering, managed services, and business operations to build intelligent operations."
			},
			{
				property: "og:title",
				content: "About Tech Tammina | Intelligent Operations Company"
			},
			{
				property: "og:description",
				content: "Learn how Tech Tammina combines AI, automation, digital engineering, managed services, and business operations."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	})
});
var $$splitComponentImporter$11 = () => import("./contact.request-demo-D2wd3F8S.mjs");
var Route$11 = createFileRoute("/contact/request-demo")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "Request a Demo | Tech Tammina" }, {
		name: "description",
		content: "Schedule a purpose-built demonstration for Policy Checking, COI Compliance, Claims Operations, or other enterprise solutions."
	}] })
});
var $$splitComponentImporter$10 = () => import("./contact.partnerships-Dod1kC0A.mjs");
var Route$10 = createFileRoute("/contact/partnerships")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "Partner With Us | Tech Tammina Alliances" }, {
		name: "description",
		content: "Explore a focused technology or go-to-market relationship. Connect with our partnership and ecosystem team."
	}] })
});
var $$splitComponentImporter$9 = () => import("./contact.locations-DND_vo1i.mjs");
var Route$9 = createFileRoute("/contact/locations")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Office Locations | Tech Tammina Offices" }, {
		name: "description",
		content: "Find verified office addresses, regional phone numbers, map directions, and office hours for Tech Tammina US and India locations."
	}] })
});
var $$splitComponentImporter$8 = () => import("./about.why-tech-tammina-D5p0Eorz.mjs");
var Route$8 = createFileRoute("/about/why-tech-tammina")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Why Tech Tammina | Differentiators and Strengths" }, {
		name: "description",
		content: "Learn about Tech Tammina's differentiators: connected capabilities, practical AI, operational knowledge, quality discipline, and global delivery."
	}] })
});
var $$splitComponentImporter$7 = () => import("./about.leadership-C9y0tmqh.mjs");
var Route$7 = createFileRoute("/about/leadership")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Leadership — Tech Tammina" }, {
		name: "description",
		content: "Learn about Tech Tammina leadership, our intelligent operations focus, and our commitment to client outcomes."
	}] })
});
var $$splitComponentImporter$6 = () => import("./about.global-presence-vaNwoN5w.mjs");
var Route$6 = createFileRoute("/about/global-presence")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Global Presence — Tech Tammina" }, {
		name: "description",
		content: "Learn about Tech Tammina global presence: locations, delivery model, and time-zone collaboration."
	}] })
});
var $$splitComponentImporter$5 = () => import("./about.partnerships.index-C5LVNjuS.mjs");
var Route$5 = createFileRoute("/about/partnerships/")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Partnerships & Ecosystem | Platform Practices" }, {
		name: "description",
		content: "Explore Tech Tammina's verified platform practices and formal alliances across Appian, Mendix, Camunda, AWS, and Microsoft."
	}] })
});
var $$splitComponentImporter$4 = () => import("./about.partnerships.microsoft-zkkksEwd.mjs");
var Route$4 = createFileRoute("/about/partnerships/microsoft")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Microsoft Practice — Tech Tammina" }, {
		name: "description",
		content: "Explore Tech Tammina Microsoft capabilities, solutions, expertise, resources, and managed services."
	}] })
});
var $$splitComponentImporter$3 = () => import("./about.partnerships.mendix-BMidDsTH.mjs");
var Route$3 = createFileRoute("/about/partnerships/mendix")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Mendix Practice — Tech Tammina" }, {
		name: "description",
		content: "Explore Tech Tammina Mendix capabilities, solutions, expertise, resources, and managed services."
	}] })
});
var $$splitComponentImporter$2 = () => import("./about.partnerships.camunda-B0OgDduY.mjs");
var Route$2 = createFileRoute("/about/partnerships/camunda")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Camunda Practice — Tech Tammina" }, {
		name: "description",
		content: "Explore Tech Tammina Camunda capabilities, solutions, expertise, resources, and managed services."
	}] })
});
var $$splitComponentImporter$1 = () => import("./about.partnerships.aws-BenzEOPL.mjs");
var Route$1 = createFileRoute("/about/partnerships/aws")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "AWS Practice — Tech Tammina" }, {
		name: "description",
		content: "Explore Tech Tammina AWS capabilities, solutions, expertise, resources, and managed services."
	}] })
});
var $$splitComponentImporter = () => import("./about.partnerships.appian-RxNInBb5.mjs");
var Route = createFileRoute("/about/partnerships/appian")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({ meta: [{ title: "Appian Practice — Tech Tammina" }, {
		name: "description",
		content: "Explore Tech Tammina Appian capabilities, solutions, expertise, resources, and managed services."
	}] })
});
var SupportRoute = Route$20.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => Route$21
});
var SolutionsRoute = Route$19.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$21
});
var ResourcesRoute = Route$24.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$21
});
var IndustriesRoute = Route$18.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$21
});
var ContactRoute = Route$17.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$21
});
var CareersRoute = Route$16.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$21
});
var CapabilitiesRoute = Route$15.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$21
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$21
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$21
});
var SolutionsIndexRoute = Route$1$26.update({
	id: "/",
	path: "/",
	getParentRoute: () => SolutionsRoute
});
var IndustriesIndexRoute = Route$1$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => IndustriesRoute
});
var ContactIndexRoute = Route$23.update({
	id: "/",
	path: "/",
	getParentRoute: () => ContactRoute
});
var CapabilitiesIndexRoute = Route$1$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => CapabilitiesRoute
});
var AboutIndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => AboutRoute
});
var SolutionsSlugRoute = Route$27.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SolutionsRoute
});
var IndustriesSlugRoute = Route$25.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => IndustriesRoute
});
var ContactRequestDemoRoute = Route$11.update({
	id: "/request-demo",
	path: "/request-demo",
	getParentRoute: () => ContactRoute
});
var ContactPartnershipsRoute = Route$10.update({
	id: "/partnerships",
	path: "/partnerships",
	getParentRoute: () => ContactRoute
});
var ContactLocationsRoute = Route$9.update({
	id: "/locations",
	path: "/locations",
	getParentRoute: () => ContactRoute
});
var CapabilitiesSlugRoute = Route$22.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CapabilitiesRoute
});
var AboutWhyTechTamminaRoute = Route$8.update({
	id: "/why-tech-tammina",
	path: "/why-tech-tammina",
	getParentRoute: () => AboutRoute
});
var AboutLeadershipRoute = Route$7.update({
	id: "/leadership",
	path: "/leadership",
	getParentRoute: () => AboutRoute
});
var AboutGlobalPresenceRoute = Route$6.update({
	id: "/global-presence",
	path: "/global-presence",
	getParentRoute: () => AboutRoute
});
var AboutPartnershipsIndexRoute = Route$5.update({
	id: "/partnerships/",
	path: "/partnerships/",
	getParentRoute: () => AboutRoute
});
var AboutPartnershipsMicrosoftRoute = Route$4.update({
	id: "/partnerships/microsoft",
	path: "/partnerships/microsoft",
	getParentRoute: () => AboutRoute
});
var AboutPartnershipsMendixRoute = Route$3.update({
	id: "/partnerships/mendix",
	path: "/partnerships/mendix",
	getParentRoute: () => AboutRoute
});
var AboutPartnershipsCamundaRoute = Route$2.update({
	id: "/partnerships/camunda",
	path: "/partnerships/camunda",
	getParentRoute: () => AboutRoute
});
var AboutPartnershipsAwsRoute = Route$1.update({
	id: "/partnerships/aws",
	path: "/partnerships/aws",
	getParentRoute: () => AboutRoute
});
var AboutRouteChildren = {
	AboutGlobalPresenceRoute,
	AboutLeadershipRoute,
	AboutWhyTechTamminaRoute,
	AboutIndexRoute,
	AboutPartnershipsAppianRoute: Route.update({
		id: "/partnerships/appian",
		path: "/partnerships/appian",
		getParentRoute: () => AboutRoute
	}),
	AboutPartnershipsAwsRoute,
	AboutPartnershipsCamundaRoute,
	AboutPartnershipsMendixRoute,
	AboutPartnershipsMicrosoftRoute,
	AboutPartnershipsIndexRoute
};
var AboutRouteWithChildren = AboutRoute._addFileChildren(AboutRouteChildren);
var CapabilitiesRouteChildren = {
	CapabilitiesSlugRoute,
	CapabilitiesIndexRoute
};
var CapabilitiesRouteWithChildren = CapabilitiesRoute._addFileChildren(CapabilitiesRouteChildren);
var ContactRouteChildren = {
	ContactLocationsRoute,
	ContactPartnershipsRoute,
	ContactRequestDemoRoute,
	ContactIndexRoute
};
var ContactRouteWithChildren = ContactRoute._addFileChildren(ContactRouteChildren);
var IndustriesRouteChildren = {
	IndustriesSlugRoute,
	IndustriesIndexRoute
};
var IndustriesRouteWithChildren = IndustriesRoute._addFileChildren(IndustriesRouteChildren);
var SolutionsRouteChildren = {
	SolutionsSlugRoute,
	SolutionsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute: AboutRouteWithChildren,
	CapabilitiesRoute: CapabilitiesRouteWithChildren,
	CareersRoute,
	ContactRoute: ContactRouteWithChildren,
	IndustriesRoute: IndustriesRouteWithChildren,
	ResourcesRoute,
	SolutionsRoute: SolutionsRoute._addFileChildren(SolutionsRouteChildren),
	SupportRoute
};
var routeTree = Route$21._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
