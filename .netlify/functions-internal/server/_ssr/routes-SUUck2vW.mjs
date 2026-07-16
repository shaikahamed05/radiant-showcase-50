import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { i as stagger, n as SectionHeading, r as fadeUp } from "./section-heading-hdwy3nex.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, T as Boxes, a as ShieldCheck, i as Sparkles, l as Network, m as LayoutGrid, o as Repeat, p as LifeBuoy, r as Workflow, t as Zap, v as Cpu, w as Brain, x as ChartLine } from "../_libs/lucide-react.mjs";
import { n as INDUSTRIES, r as SOLUTIONS, t as CAPABILITIES } from "./site-data-CynGE4Gw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SUUck2vW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAP_ICONS = [
	Network,
	Cpu,
	ShieldCheck,
	LifeBuoy,
	ChartLine
];
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const opacity = useTransform(scrollYProgress, [0, 1], [1, .2]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative overflow-hidden bg-hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				animate: {
					scale: [
						1,
						1.1,
						1
					],
					opacity: [
						.35,
						.55,
						.35
					]
				},
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-violet blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				animate: {
					scale: [
						1.1,
						1,
						1.1
					],
					opacity: [
						.2,
						.4,
						.2
					]
				},
				transition: {
					duration: 14,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "pointer-events-none absolute bottom-0 right-0 h-[500px] w-[700px] rounded-full bg-teal-cyan blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					opacity
				},
				className: "relative mx-auto flex min-h-[86vh] max-w-7xl flex-col items-start justify-center px-6 pb-24 pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent-gradient" }), "Intelligent Operations Platform & Services"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .1
						},
						className: "mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl",
						children: ["We Build ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Intelligent Operations"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .8,
							delay: .25
						},
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",
						children: "Connecting AI, automation, and expertise to drive business impact — across transformation, engineering, quality, managed services, and operations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .6,
							delay: .4
						},
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
							children: ["Talk to an Expert", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/solutions",
							className: "gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-surface-elevated",
							children: "Explore Solutions"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid w-full grid-cols-2 gap-4 md:grid-cols-4",
						children: [
							{
								icon: Workflow,
								label: "Connected Workflows"
							},
							{
								icon: Brain,
								label: "Practical AI"
							},
							{
								icon: ShieldCheck,
								label: "Enterprise Delivery"
							},
							{
								icon: Repeat,
								label: "Build to Operate"
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .6,
								delay: .5 + i * .08
							},
							whileHover: { y: -4 },
							className: "gradient-border rounded-2xl bg-surface/70 p-5 backdrop-blur shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-sm font-medium text-foreground",
								children: s.label
							})]
						}, s.label))
					})
				]
			})
		]
	});
}
function CapabilitiesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-section py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["End-to-end capabilities for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "intelligent operations"
				})] }),
				intro: "Five practices that work as one delivery story — from strategy through steady-state operations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .2
				},
				className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: CAPABILITIES.map((c, i) => {
					const Icon = CAP_ICONS[i] ?? Workflow;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: fadeUp,
						transition: { duration: .6 },
						whileHover: { y: -6 },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/capabilities/$slug",
							params: { slug: c.slug },
							className: "group relative block overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-colors hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity group-hover:opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow-cyan",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-xl font-semibold text-foreground",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: c.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})
								]
							})]
						})
					}, c.slug);
				})
			})]
		})
	});
}
function IndustriesPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Industries",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Deep focus in regulated, operations-heavy industries" }),
				intro: "We combine operational knowledge with engineering to move regulated workflows forward."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .15
				},
				className: "mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
				children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					transition: { duration: .5 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/industries/$slug",
						params: { slug: ind.slug },
						className: "group relative block bg-card p-8 transition-colors hover:bg-surface-elevated",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-0.5 bg-accent-gradient opacity-0 transition-opacity group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-foreground",
								children: ind.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: ind.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-6 h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" })
						]
					})
				}, ind.slug))
			})]
		})
	});
}
function SolutionsPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-section py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Featured Solutions",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Solutions engineered for measurable outcomes" }),
					intro: "Purpose-built to accelerate the work that runs the business."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/solutions",
					className: "gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated",
					children: ["Explore All Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .15
				},
				className: "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: SOLUTIONS.slice(0, 6).map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					transition: { duration: .6 },
					whileHover: { y: -6 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions/$slug",
						params: { slug: s.slug },
						className: "group relative block overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-xs font-semibold tracking-widest text-gradient",
									children: ["0", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-semibold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.body
							})
						]
					})
				}, s.slug))
			})]
		})
	});
}
function Ecosystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Enterprise Fit",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built to fit the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "enterprise"
				})] }),
				intro: "Tech Tammina solutions are designed to work across enterprise platforms, business applications, document repositories, identity services, cloud environments, and third-party systems. Integration is treated as part of the operating model — not an afterthought."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .96
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					amount: .3
				},
				transition: { duration: .7 },
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border relative rounded-3xl bg-surface/60 p-8 shadow-card backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-3 gap-3",
						children: [
							"ERP",
							"CRM",
							"ECM",
							"Identity",
							"Cloud",
							"Data",
							"BPM",
							"AI/ML",
							"APIs"
						].map((chip, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .05 },
							className: "grid aspect-square place-items-center rounded-xl border border-border bg-card font-display text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: chip
						}, chip))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-4 w-4 text-primary" }), "Works with your enterprise ecosystem"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-cyan-violet opacity-30 blur-3xl" })]
			})]
		})
	});
}
var WHY = [
	{
		icon: LayoutGrid,
		title: "Business and Technology Together",
		body: "Operational knowledge informs architecture, workflows, and delivery decisions."
	},
	{
		icon: Brain,
		title: "Practical AI",
		body: "AI is embedded where it improves reviews, decisions, knowledge access, or execution."
	},
	{
		icon: ShieldCheck,
		title: "Enterprise Delivery",
		body: "Solutions are designed for governance, integration, scale, and long-term support."
	},
	{
		icon: Repeat,
		title: "From Build to Operate",
		body: "Transformation, engineering, quality, managed services, and operations work as one delivery story."
	}
];
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-section py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Why Tech Tammina",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Operational depth. Engineering rigor. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "AI where it counts."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: stagger,
				initial: "hidden",
				whileInView: "show",
				viewport: {
					once: true,
					amount: .2
				},
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: WHY.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: fadeUp,
					transition: { duration: .6 },
					whileHover: { y: -4 },
					className: "gradient-border relative overflow-hidden rounded-2xl bg-card p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold text-foreground",
							children: w.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: w.body
						})] })]
					})
				}, w.title))
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				amount: .4
			},
			transition: { duration: .7 },
			className: "relative mx-auto max-w-4xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 text-4xl font-semibold leading-tight md:text-6xl",
					children: ["Move from disconnected work to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "intelligent operations"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
					children: "Start with a process, application, operational challenge, or solution demonstration. Tech Tammina will help define a practical path forward."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
						children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "gradient-border inline-flex items-center gap-2 rounded-full bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated",
						children: "Request a Demo"
					})]
				})
			]
		})]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative border-t border-border bg-background py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "The Problem",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Mission-critical work needs more than ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "isolated technology"
					})] }),
					intro: "Complex operations rarely fail because an organization lacks another tool. They slow down when work is fragmented across systems, documents, approvals, and teams. Tech Tammina brings these moving parts together — modernizing processes, building connected applications, improving quality, and supporting operations after launch."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilitiesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ecosystem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { Sparkles, HomePage as component };
