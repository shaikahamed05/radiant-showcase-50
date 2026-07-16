import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { i as stagger, n as SectionHeading, r as fadeUp } from "./section-heading-hdwy3nex.mjs";
import { F as ArrowRight, M as Boxes, O as ChartLine, S as Cpu, _ as LayoutGrid, f as Network, g as LifeBuoy, j as Brain, l as Repeat, o as Sparkles, r as Workflow, s as ShieldCheck, t as Zap } from "../_libs/lucide-react.mjs";
import { n as INDUSTRIES, r as SOLUTIONS, t as CAPABILITIES } from "./site-data-Bv2epvEs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CHGRgIn2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Interactive AI Neural Sphere – a 3D geodesic network of nodes
* connected by synaptic edges that pulse with neon light.
* Auto-rotates and responds to mouse drag / hover.
*/
function InteractiveTorus() {
	const canvasRef = (0, import_react.useRef)(null);
	const rotationRef = (0, import_react.useRef)({
		x: .4,
		y: .3
	});
	const velocityRef = (0, import_react.useRef)({
		x: .003,
		y: .005
	});
	const isDraggingRef = (0, import_react.useRef)(false);
	const previousMousePosition = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let width = 0;
		let height = 0;
		const resizeCanvas = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			canvas.width = width * window.devicePixelRatio;
			canvas.height = height * window.devicePixelRatio;
			ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);
		const phi = (1 + Math.sqrt(5)) / 2;
		const icoVerts = [
			[
				-1,
				phi,
				0
			],
			[
				1,
				phi,
				0
			],
			[
				-1,
				-phi,
				0
			],
			[
				1,
				-phi,
				0
			],
			[
				0,
				-1,
				phi
			],
			[
				0,
				1,
				phi
			],
			[
				0,
				-1,
				-phi
			],
			[
				0,
				1,
				-phi
			],
			[
				phi,
				0,
				-1
			],
			[
				phi,
				0,
				1
			],
			[
				-phi,
				0,
				-1
			],
			[
				-phi,
				0,
				1
			]
		];
		icoVerts.forEach((v) => {
			const len = Math.hypot(...v);
			v[0] /= len;
			v[1] /= len;
			v[2] /= len;
		});
		const icoFaces = [
			[
				0,
				11,
				5
			],
			[
				0,
				5,
				1
			],
			[
				0,
				1,
				7
			],
			[
				0,
				7,
				10
			],
			[
				0,
				10,
				11
			],
			[
				1,
				5,
				9
			],
			[
				5,
				11,
				4
			],
			[
				11,
				10,
				2
			],
			[
				10,
				7,
				6
			],
			[
				7,
				1,
				8
			],
			[
				3,
				9,
				4
			],
			[
				3,
				4,
				2
			],
			[
				3,
				2,
				6
			],
			[
				3,
				6,
				8
			],
			[
				3,
				8,
				9
			],
			[
				4,
				9,
				5
			],
			[
				2,
				4,
				11
			],
			[
				6,
				2,
				10
			],
			[
				8,
				6,
				7
			],
			[
				9,
				8,
				1
			]
		];
		const midCache = /* @__PURE__ */ new Map();
		const verts = [...icoVerts];
		function getMidpoint(a, b) {
			const key = a < b ? `${a}-${b}` : `${b}-${a}`;
			if (midCache.has(key)) return midCache.get(key);
			const va = verts[a], vb = verts[b];
			const mid = [
				(va[0] + vb[0]) / 2,
				(va[1] + vb[1]) / 2,
				(va[2] + vb[2]) / 2
			];
			const len = Math.hypot(...mid);
			mid[0] /= len;
			mid[1] /= len;
			mid[2] /= len;
			const idx = verts.length;
			verts.push(mid);
			midCache.set(key, idx);
			return idx;
		}
		let faces = [...icoFaces];
		const newFaces = [];
		for (const [a, b, c] of faces) {
			const ab = getMidpoint(a, b);
			const bc = getMidpoint(b, c);
			const ca = getMidpoint(c, a);
			newFaces.push([
				a,
				ab,
				ca
			], [
				b,
				bc,
				ab
			], [
				c,
				ca,
				bc
			], [
				ab,
				bc,
				ca
			]);
		}
		faces = newFaces;
		const edgeSet = /* @__PURE__ */ new Set();
		const edges = [];
		for (const [a, b, c] of faces) for (const [p, q] of [
			[a, b],
			[b, c],
			[c, a]
		]) {
			const key = p < q ? `${p}-${q}` : `${q}-${p}`;
			if (!edgeSet.has(key)) {
				edgeSet.add(key);
				edges.push([p, q]);
			}
		}
		verts.length;
		const sphereRadius = 110;
		const nodePulse = verts.map(() => Math.random() * Math.PI * 2);
		const nodeActive = verts.map(() => Math.random());
		const edgeFire = edges.map(() => ({
			phase: Math.random() * Math.PI * 2,
			speed: .02 + Math.random() * .04,
			active: Math.random() > .6
		}));
		let frame = 0;
		const render = () => {
			ctx.clearRect(0, 0, width, height);
			frame++;
			if (!isDraggingRef.current) {
				rotationRef.current.x += velocityRef.current.x;
				rotationRef.current.y += velocityRef.current.y;
				velocityRef.current.x += (.002 - velocityRef.current.x) * .03;
				velocityRef.current.y += (.004 - velocityRef.current.y) * .03;
			} else {
				rotationRef.current.x += velocityRef.current.x;
				rotationRef.current.y += velocityRef.current.y;
				velocityRef.current.x *= .94;
				velocityRef.current.y *= .94;
			}
			const rX = rotationRef.current.x;
			const rY = rotationRef.current.y;
			const cX = Math.cos(rX), sX = Math.sin(rX);
			const cY = Math.cos(rY), sY = Math.sin(rY);
			const vScale = Math.min(width, height) * .42;
			const projected = verts.map((v) => {
				const x0 = v[0] * sphereRadius;
				const y0 = v[1] * sphereRadius;
				const z0 = v[2] * sphereRadius;
				const x1 = x0 * cY + z0 * sY;
				const z1 = -x0 * sY + z0 * cY;
				const y2 = y0 * cX - z1 * sX;
				const z2 = y0 * sX + z1 * cX;
				const d = 360, zOff = 320;
				const s = d / (z2 + zOff) * (vScale / (sphereRadius * (d / zOff)));
				return {
					x: x1 * s + width / 2,
					y: y2 * s + height / 2,
					z: z2
				};
			});
			const sortedEdges = edges.map((e, i) => {
				const a = projected[e[0]], b = projected[e[1]];
				return {
					i,
					a,
					b,
					avgZ: (a.z + b.z) / 2
				};
			}).sort((a, b) => b.avgZ - a.avgZ);
			const sortedNodes = projected.map((p, i) => ({
				...p,
				i
			})).sort((a, b) => b.z - a.z);
			sortedEdges.forEach(({ i, a, b, avgZ }) => {
				const depth = (avgZ + sphereRadius) / (2 * sphereRadius);
				const baseAlpha = Math.max(.04, .5 - depth * .45);
				const ef = edgeFire[i];
				ef.phase += ef.speed;
				const fireBrightness = ef.active ? Math.max(0, Math.sin(ef.phase)) * .6 : 0;
				const alpha = Math.min(.9, baseAlpha + fireBrightness);
				const lw = Math.max(.4, 1.8 - depth * 1.2 + fireBrightness * 1.5);
				const hue = 190 + depth * 60 + fireBrightness * 40;
				const sat = 80 + fireBrightness * 20;
				const light = 50 + fireBrightness * 20;
				ctx.strokeStyle = `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
				ctx.lineWidth = lw;
				ctx.beginPath();
				ctx.moveTo(a.x, a.y);
				ctx.lineTo(b.x, b.y);
				ctx.stroke();
			});
			sortedNodes.forEach(({ x, y, z, i }) => {
				const depth = (z + sphereRadius) / (2 * sphereRadius);
				const pulse = Math.sin(frame * .03 + nodePulse[i]) * .5 + .5;
				const isActive = nodeActive[i] > .5;
				const r = Math.max(1.5, 3.5 - depth * 2) + (isActive ? pulse * 2 : 0);
				const alpha = Math.max(.1, .9 - depth * .7);
				const hue = isActive ? 200 + pulse * 40 : 250;
				const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2.5);
				gradient.addColorStop(0, `hsla(${hue}, 90%, 75%, ${alpha})`);
				gradient.addColorStop(.4, `hsla(${hue}, 85%, 55%, ${alpha * .7})`);
				gradient.addColorStop(1, `hsla(${hue}, 80%, 40%, 0)`);
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(x, y, r * 2.5, 0, Math.PI * 2);
				ctx.fill();
				ctx.fillStyle = `hsla(${hue}, 90%, 85%, ${alpha})`;
				ctx.beginPath();
				ctx.arc(x, y, r * .6, 0, Math.PI * 2);
				ctx.fill();
			});
			animationFrameId = requestAnimationFrame(render);
		};
		render();
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, []);
	const handleMouseDown = (e) => {
		isDraggingRef.current = true;
		previousMousePosition.current = {
			x: e.clientX,
			y: e.clientY
		};
	};
	const handleMouseMove = (e) => {
		if (!isDraggingRef.current) {
			const canvas = canvasRef.current;
			if (canvas) {
				const rect = canvas.getBoundingClientRect();
				const mx = e.clientX - rect.left - rect.width / 2;
				const my = e.clientY - rect.top - rect.height / 2;
				velocityRef.current.x += (my * 2e-5 - velocityRef.current.x) * .05;
				velocityRef.current.y += (mx * 2e-5 - velocityRef.current.y) * .05;
			}
			return;
		}
		const dx = e.clientX - previousMousePosition.current.x;
		const dy = e.clientY - previousMousePosition.current.y;
		velocityRef.current.y = dx * .008;
		velocityRef.current.x = dy * .008;
		rotationRef.current.y += velocityRef.current.y;
		rotationRef.current.x += velocityRef.current.x;
		previousMousePosition.current = {
			x: e.clientX,
			y: e.clientY
		};
	};
	const handleMouseUp = () => {
		isDraggingRef.current = false;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-[400px] sm:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 pointer-events-none rounded-full bg-cyan-violet opacity-30 blur-3xl scale-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			onMouseDown: handleMouseDown,
			onMouseMove: handleMouseMove,
			onMouseUp: handleMouseUp,
			onMouseLeave: handleMouseUp,
			className: "w-full h-full relative z-10 touch-none"
		})]
	});
}
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
					x: [
						"-50%",
						"-30%",
						"-70%",
						"-50%"
					],
					y: [
						-60,
						40,
						-100,
						-60
					],
					scale: [
						1,
						1.25,
						.85,
						1
					],
					rotate: [
						0,
						120,
						240,
						360
					],
					opacity: [
						.35,
						.65,
						.25,
						.35
					]
				},
				transition: {
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut"
				},
				className: "pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] rounded-full bg-cyan-violet blur-[130px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				animate: {
					x: [
						0,
						-80,
						80,
						0
					],
					y: [
						0,
						100,
						-80,
						0
					],
					scale: [
						1.1,
						.8,
						1.3,
						1.1
					],
					rotate: [
						0,
						-120,
						-240,
						-360
					],
					opacity: [
						.2,
						.45,
						.15,
						.2
					]
				},
				transition: {
					duration: 10,
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
				className: "relative mx-auto grid min-h-[86vh] max-w-7xl gap-12 px-6 pb-24 pt-24 lg:grid-cols-12 lg:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7 flex flex-col items-start justify-center",
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
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5 flex items-center justify-center w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InteractiveTorus, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4",
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
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Enterprise Fit",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built to fit the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "enterprise"
				})] }),
				intro: "Tech Tammina solutions are designed to work across enterprise platforms, business applications, document repositories, identity services, cloud environments, and third-party systems. Integration is treated as part of the operating model — not an afterthought."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					amount: .2
				},
				transition: {
					duration: .6,
					ease: "easeOut"
				},
				className: "mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
				children: ENTERPRISE_BLOCKS.map((block, i) => {
					const Icon = block.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 14
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .06,
							duration: .45
						},
						whileHover: {
							y: -5,
							scale: 1.01
						},
						className: "group relative overflow-hidden rounded-[1.35rem] border border-border/70 bg-card p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(82,122,255,0.16),_transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary",
										children: "Connected"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 font-display text-lg font-semibold text-foreground",
									children: block.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: block.label === "ERP" ? "Fits into core finance, supply chain, and operational planning environments." : block.label === "CRM" ? "Supports customer-facing workflows and relationship-driven processes." : block.label === "ECM" ? "Works with document repositories, records, and knowledge-heavy operations." : block.label === "Identity" ? "Integrates securely with user directories and access management platforms." : block.label === "Cloud" ? "Deploys cleanly across modern cloud estates and hybrid infrastructure." : block.label === "Data" ? "Connects with analytics, reporting, and enterprise data sources." : block.label === "BPM" ? "Aligns with workflow orchestration and process automation layers." : block.label === "AI/ML" ? "Supports intelligent automation, prediction, and decision support." : "Exposes reusable APIs for seamless integration across business applications."
								})
							]
						})]
					}, block.label);
				})
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
var ENTERPRISE_BLOCKS = [
	{
		label: "ERP",
		icon: LayoutGrid
	},
	{
		label: "CRM",
		icon: Workflow
	},
	{
		label: "ECM",
		icon: Boxes
	},
	{
		label: "Identity",
		icon: ShieldCheck
	},
	{
		label: "Cloud",
		icon: Cpu
	},
	{
		label: "Data",
		icon: Network
	},
	{
		label: "BPM",
		icon: Workflow
	},
	{
		label: "AI/ML",
		icon: Brain
	},
	{
		label: "APIs",
		icon: Zap
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
