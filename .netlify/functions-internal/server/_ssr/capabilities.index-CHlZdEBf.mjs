import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as notFound, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as SectionHeading, t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { A as Check, C as Cpu, D as ChevronRight, N as Briefcase, R as ArrowRight, f as Network, g as LifeBuoy, k as ChevronLeft, r as Workflow, s as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as CAPABILITIES } from "./site-data-C1WZvCci.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/capabilities.index-CHlZdEBf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CAP_ICONS = [
	Network,
	Cpu,
	Workflow,
	ShieldCheck,
	LifeBuoy,
	Briefcase
];
var TOTAL = CAPABILITIES.length;
var AUTO_PLAY_INTERVAL = 3500;
function CapabilitiesIndex() {
	const [centerIndex, setCenterIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const timerRef = (0, import_react.useRef)(null);
	const dragStartX = (0, import_react.useRef)(0);
	const goTo = (0, import_react.useCallback)((idx, dir) => {
		const wrapped = (idx % TOTAL + TOTAL) % TOTAL;
		setDirection(dir ?? (wrapped > centerIndex ? 1 : -1));
		setCenterIndex(wrapped);
	}, [centerIndex]);
	const goNext = (0, import_react.useCallback)(() => {
		setDirection(1);
		setCenterIndex((prev) => (prev + 1) % TOTAL);
	}, []);
	const goPrev = (0, import_react.useCallback)(() => {
		setDirection(-1);
		setCenterIndex((prev) => (prev - 1 + TOTAL) % TOTAL);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		timerRef.current = setTimeout(goNext, AUTO_PLAY_INTERVAL);
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current);
		};
	}, [
		centerIndex,
		isPaused,
		goNext
	]);
	const pauseAutoPlay = (0, import_react.useCallback)(() => {
		setIsPaused(true);
		if (timerRef.current) clearTimeout(timerRef.current);
		const resumeTimer = setTimeout(() => setIsPaused(false), 6e3);
		return () => clearTimeout(resumeTimer);
	}, []);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.key === "ArrowRight") {
				goNext();
				pauseAutoPlay();
			}
			if (e.key === "ArrowLeft") {
				goPrev();
				pauseAutoPlay();
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [
		goNext,
		goPrev,
		pauseAutoPlay
	]);
	const visibleIndices = [
		(centerIndex - 1 + TOTAL) % TOTAL,
		centerIndex,
		(centerIndex + 1) % TOTAL
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Capabilities",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["End-to-end capabilities for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient",
				children: "intelligent operations"
			})] }),
			intro: "Six practices that work as one delivery story — from transformation strategy through steady-state operations."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-section py-20 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					onMouseEnter: () => setIsPaused(true),
					onMouseLeave: () => setIsPaused(false),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								goPrev();
								pauseAutoPlay();
							},
							className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 -translate-x-1/2",
							"aria-label": "Previous capability",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								goNext();
								pauseAutoPlay();
							},
							className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 translate-x-1/2",
							"aria-label": "Next capability",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-4 md:gap-6 py-8 cursor-grab active:cursor-grabbing select-none",
							onPointerDown: (e) => {
								dragStartX.current = e.clientX;
							},
							onPointerUp: (e) => {
								const diff = e.clientX - dragStartX.current;
								if (Math.abs(diff) > 50) {
									if (diff < 0) goNext();
									else goPrev();
									pauseAutoPlay();
								}
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "popLayout",
								custom: direction,
								children: visibleIndices.map((capIdx, position) => {
									const c = CAPABILITIES[capIdx];
									const Icon = CAP_ICONS[capIdx] ?? Workflow;
									const isCenter = position === 1;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										custom: direction,
										initial: {
											opacity: 0,
											scale: .8,
											x: direction > 0 ? 200 : -200
										},
										animate: {
											opacity: isCenter ? 1 : .7,
											scale: isCenter ? 1 : .88,
											x: 0,
											y: isCenter ? -8 : 0,
											filter: isCenter ? "blur(0px)" : "blur(1px)"
										},
										exit: {
											opacity: 0,
											scale: .8,
											x: direction > 0 ? -200 : 200
										},
										transition: {
											type: "spring",
											stiffness: 300,
											damping: 30,
											mass: .8
										},
										className: `
                        w-full transition-shadow duration-500
                        ${isCenter ? "md:w-[38%] w-[70%] z-10" : "md:w-[28%] w-0 md:opacity-100 opacity-0 hidden md:block z-0"}
                      `,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative pb-7",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/capabilities/$slug",
												params: { slug: c.slug },
												onClick: (e) => {
													if (!isCenter) {
														e.preventDefault();
														goTo(capIdx, position === 0 ? -1 : 1);
														pauseAutoPlay();
													}
												},
												className: `
                          group relative block h-full overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-500
                          ${isCenter ? "border-primary/30 p-8 md:p-10 shadow-glow-cyan" : "border-border p-6 md:p-8 hover:border-primary/20 cursor-pointer"}
                        `,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `
                          absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet blur-3xl transition-opacity duration-500
                          ${isCenter ? "opacity-30" : "opacity-0 group-hover:opacity-20"}
                        ` }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `
                          absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-violet-teal blur-3xl transition-opacity duration-500
                          ${isCenter ? "opacity-20" : "opacity-0"}
                        ` }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-display text-xs font-semibold tracking-widest text-gradient",
																children: ["0", capIdx + 1]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: `
                            mt-4 font-semibold text-foreground transition-all duration-300
                            ${isCenter ? "text-xl md:text-2xl" : "text-lg md:text-xl"}
                          `,
																children: c.title
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: `
                            mt-3 leading-relaxed text-muted-foreground transition-all duration-300
                            ${isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"}
                          `,
																children: c.tagline
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: `
                            mt-6 inline-flex items-center gap-1.5 font-medium text-primary transition-all duration-300
                            ${isCenter ? "text-sm opacity-100 translate-y-0" : "text-xs opacity-60 translate-y-1"}
                            group-hover:translate-x-1
                          `,
																children: ["Explore capability ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
															})
														]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-0 left-1/2 -translate-x-1/2 z-10",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `
                          grid place-items-center rounded-full bg-accent-gradient text-primary-foreground transition-all duration-500 border-4 border-background
                          ${isCenter ? "h-14 w-14 shadow-glow-cyan" : "h-11 w-11 shadow-card opacity-90"}
                        `,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `transition-all duration-300 ${isCenter ? "h-6 w-6" : "h-4.5 w-4.5"}` })
												})
											})]
										})
									}, `${c.slug}-${capIdx}`);
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-center gap-2 mt-6",
							children: CAPABILITIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									goTo(i);
									pauseAutoPlay();
								},
								className: `
                    relative h-2.5 rounded-full transition-all duration-500
                    ${i === centerIndex ? "w-8 bg-accent-gradient shadow-glow-cyan" : "w-2.5 bg-border hover:bg-primary/40"}
                  `,
								"aria-label": `Go to ${c.title}`,
								children: i === centerIndex && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									layoutId: "active-dot",
									className: "absolute inset-0 rounded-full bg-accent-gradient",
									transition: {
										type: "spring",
										stiffness: 400,
										damping: 30
									}
								})
							}, c.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 mx-auto max-w-xs h-0.5 rounded-full bg-border/50 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-full rounded-full bg-accent-gradient",
								initial: { width: "0%" },
								animate: { width: isPaused ? `${(centerIndex + 1) / TOTAL * 100}%` : "100%" },
								transition: isPaused ? { duration: .3 } : {
									duration: AUTO_PLAY_INTERVAL / 1e3,
									ease: "linear"
								}
							}, `progress-${centerIndex}-${isPaused}`)
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border bg-background py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-4xl px-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Ready to Start",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Bring the right capability to the right problem" }),
					intro: "Tell us where the work is stuck — we'll help define a practical path forward."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]",
					children: ["Talk to an Expert ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
function CapabilityDetailShared({ slug }) {
	const cap = CAPABILITIES.find((c) => c.slug === slug);
	if (!cap) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Capability Practice",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cap.title }),
		intro: cap.tagline
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
			})
		})
	})] });
}
//#endregion
export { CapabilityDetailShared, CapabilitiesIndex as component };
