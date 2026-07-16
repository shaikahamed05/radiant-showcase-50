import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, n as X, u as Menu } from "../_libs/lucide-react.mjs";
import { n as Route$5, r as Route$1$1 } from "./capabilities._slug-1o1ONL09.mjs";
import { n as Route$7, r as Route$1$6 } from "./industries._slug-COmUyULX.mjs";
import { n as Route$1$8, t as Route$6 } from "./solutions._slug-CAsvy-HI.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C7vMmwnF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-_UNgKrZQ.css";
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
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
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
						src: "https://techtammina.com/wp-content/uploads/2025/05/techlogo.png",
						alt: "Tech Tammina Logo",
						className: "h-10 w-auto object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: NAV_LINKS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Talk to an Expert", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
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
			className: "border-t border-border bg-background/95 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4",
				children: [NAV_LINKS.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground",
					activeProps: { className: "text-foreground bg-surface" },
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow",
					children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
						src: "https://techtammina.com/wp-content/uploads/2025/05/techlogo.png",
						alt: "Tech Tammina Logo",
						className: "h-9 w-auto object-contain"
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
					links: [
						{
							label: "About",
							to: "/about"
						},
						{
							label: "Resources",
							to: "/resources"
						},
						{
							label: "Contact",
							to: "/contact"
						}
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-sm font-semibold text-foreground",
					children: "Ready to talk?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-3 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Tech Tammina — We Build Intelligent Operations" },
			{
				name: "description",
				content: "Tech Tammina builds intelligent operations through AI, automation, digital engineering, managed services, and business expertise."
			},
			{
				property: "og:title",
				content: "Tech Tammina — We Build Intelligent Operations"
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
	const { queryClient } = Route$4.useRouteContext();
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
var $$splitComponentImporter$3 = () => import("./resources-RwV1hGC0.mjs");
var Route$3 = createFileRoute("/resources")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({
		meta: [
			{ title: "Resources — Tech Tammina" },
			{
				name: "description",
				content: "Insights, case studies, white papers, events, news, and videos on intelligent operations."
			},
			{
				property: "og:title",
				content: "Resources — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Perspectives on AI, automation, and enterprise operations."
			},
			{
				property: "og:url",
				content: "/resources"
			}
		],
		links: [{
			rel: "canonical",
			href: "/resources"
		}]
	})
});
var $$splitComponentImporter$2 = () => import("./contact-FOMJKHnY.mjs");
var Route$2 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({
		meta: [
			{ title: "Contact — Tech Tammina" },
			{
				name: "description",
				content: "Talk to an expert, request a demo, or reach partnerships, support, careers, and office locations."
			},
			{
				property: "og:title",
				content: "Contact — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Start a conversation with Tech Tammina."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	})
});
var $$splitComponentImporter$1 = () => import("./about-HQVWfxiG.mjs");
var Route$1 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({
		meta: [
			{ title: "About — Tech Tammina" },
			{
				name: "description",
				content: "Tech Tammina brings operational knowledge, engineering, and AI together to modernize the work that runs the business."
			},
			{
				property: "og:title",
				content: "About — Tech Tammina"
			},
			{
				property: "og:description",
				content: "Operational depth. Engineering rigor. AI where it counts."
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
var $$splitComponentImporter = () => import("./routes-SUUck2vW.mjs");
var Route = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
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
var SolutionsRoute = Route$1$8.update({
	id: "/solutions",
	path: "/solutions",
	getParentRoute: () => Route$4
});
var ResourcesRoute = Route$3.update({
	id: "/resources",
	path: "/resources",
	getParentRoute: () => Route$4
});
var IndustriesRoute = Route$1$6.update({
	id: "/industries",
	path: "/industries",
	getParentRoute: () => Route$4
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$4
});
var CapabilitiesRoute = Route$1$1.update({
	id: "/capabilities",
	path: "/capabilities",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var SolutionsSlugRoute = Route$6.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SolutionsRoute
});
var IndustriesSlugRoute = Route$7.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => IndustriesRoute
});
var CapabilitiesRouteChildren = { CapabilitiesSlugRoute: Route$5.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CapabilitiesRoute
}) };
var CapabilitiesRouteWithChildren = CapabilitiesRoute._addFileChildren(CapabilitiesRouteChildren);
var IndustriesRouteChildren = { IndustriesSlugRoute };
var IndustriesRouteWithChildren = IndustriesRoute._addFileChildren(IndustriesRouteChildren);
var SolutionsRouteChildren = { SolutionsSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CapabilitiesRoute: CapabilitiesRouteWithChildren,
	ContactRoute,
	IndustriesRoute: IndustriesRouteWithChildren,
	ResourcesRoute,
	SolutionsRoute: SolutionsRoute._addFileChildren(SolutionsRouteChildren)
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
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
