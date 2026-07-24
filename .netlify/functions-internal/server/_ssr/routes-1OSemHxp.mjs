import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { i as stagger, n as SectionHeading, r as fadeUp } from "./section-heading-BdIj2xOd.mjs";
import { C as Cpu, D as ChevronRight, F as Boxes, L as Award, N as Briefcase, P as Brain, R as ArrowRight, _ as LayoutGrid, f as Network, g as LifeBuoy, i as Users, j as ChartLine, k as ChevronLeft, l as Repeat, r as Workflow, s as ShieldCheck, t as Zap, w as Clock, y as Globe } from "../_libs/lucide-react.mjs";
import { n as INDUSTRIES, r as SOLUTIONS, t as CAPABILITIES } from "./site-data-C1WZvCci.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-1OSemHxp.js
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
	Workflow,
	ShieldCheck,
	LifeBuoy,
	Briefcase
];
var CAP_TOTAL = CAPABILITIES.length;
var CAP_AUTO_PLAY = 3500;
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
								children: ["AI That Moves ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Business Forward"
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
								children: "Tech Tammina helps organizations turn AI into measurable business value by modernizing applications, transforming operations, and building intelligent solutions around real industry needs."
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
	const [centerIndex, setCenterIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const timerRef = (0, import_react.useRef)(null);
	const dragStartX = (0, import_react.useRef)(0);
	const goTo = (0, import_react.useCallback)((idx, dir) => {
		const wrapped = (idx % CAP_TOTAL + CAP_TOTAL) % CAP_TOTAL;
		setDirection(dir ?? (wrapped > centerIndex ? 1 : -1));
		setCenterIndex(wrapped);
	}, [centerIndex]);
	const goNext = (0, import_react.useCallback)(() => {
		setDirection(1);
		setCenterIndex((prev) => (prev + 1) % CAP_TOTAL);
	}, []);
	const goPrev = (0, import_react.useCallback)(() => {
		setDirection(-1);
		setCenterIndex((prev) => (prev - 1 + CAP_TOTAL) % CAP_TOTAL);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		timerRef.current = setTimeout(goNext, CAP_AUTO_PLAY);
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
	const visibleIndices = [
		(centerIndex - 1 + CAP_TOTAL) % CAP_TOTAL,
		centerIndex,
		(centerIndex + 1) % CAP_TOTAL
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-section py-24 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Capabilities",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["End-to-end capabilities for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "intelligent operations"
				})] }),
				intro: "We connect strategy, technology, and long-term support to help organizations apply AI, modernize critical work, and build sustainable enterprise capability."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-14",
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
						className: "flex items-center justify-center gap-4 md:gap-6 py-8 min-h-[360px] md:min-h-[380px] cursor-grab active:cursor-grabbing select-none",
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
										className: "relative pb-7 h-full flex flex-col justify-center",
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
                          group relative flex h-[280px] md:h-[300px] flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-500 p-7 md:p-8
                          ${isCenter ? "border-primary/30 shadow-glow-cyan" : "border-border hover:border-primary/20 cursor-pointer"}
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
													className: "relative flex h-full flex-col",
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
                          mt-3 flex-1 leading-relaxed text-muted-foreground transition-all duration-300
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
															children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
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
								}, `home-cap-${c.slug}-${capIdx}`);
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
								layoutId: "home-active-dot",
								className: "absolute inset-0 rounded-full bg-accent-gradient",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								}
							})
						}, `home-dot-${c.slug}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 mx-auto max-w-xs h-0.5 rounded-full bg-border/50 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full rounded-full bg-accent-gradient",
							initial: { width: "0%" },
							animate: { width: isPaused ? `${(centerIndex + 1) / CAP_TOTAL * 100}%` : "100%" },
							transition: isPaused ? { duration: .3 } : {
								duration: CAP_AUTO_PLAY / 1e3,
								ease: "linear"
							}
						}, `home-progress-${centerIndex}-${isPaused}`)
					})
				]
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
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Industry Knowledge That Shapes Better Solutions" }),
				intro: "Technology delivers stronger results when it reflects the industry in which it is used. Our teams bring domain understanding to the design, delivery, and operation of solutions across regulated, process-intensive, and service-driven sectors."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 overflow-hidden rounded-2xl border border-border bg-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .15
					},
					className: "grid gap-px bg-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-px bg-border lg:grid-cols-[1.75fr_1fr_1fr]",
						children: INDUSTRIES.slice(0, 3).map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .5 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/industries/$slug",
								params: { slug: ind.slug },
								className: "group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-elevated",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" })
									})
								]
							})
						}, ind.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-px bg-border lg:grid-cols-[1fr_1.75fr_1fr]",
						children: INDUSTRIES.slice(3, 6).map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .5 },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/industries/$slug",
								params: { slug: ind.slug },
								className: "group relative flex h-full flex-col bg-card p-8 transition-colors hover:bg-surface-elevated",
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" })
									})
								]
							})
						}, ind.slug))
					})]
				})
			})]
		})
	});
}
function SolutionsPreview() {
	const solutions = SOLUTIONS.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-section py-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-cyan-violet opacity-[0.04] blur-[100px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-20 left-0 h-[350px] w-[350px] rounded-full bg-violet-teal opacity-[0.04] blur-[100px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Featured Solutions",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Solutions Built Around Real Operational Work" }),
						intro: "Our solutions address document-heavy, decision-intensive, and operationally complex processes. Each can be configured around an organization's requirements and integrated with the systems already used by its teams."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/solutions",
						className: "gradient-border inline-flex shrink-0 items-center gap-2 rounded-full bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface-elevated",
						children: ["Explore All Solutions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .05
					},
					className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: {
								y: -6,
								scale: 1.005
							},
							className: "lg:col-span-5 lg:row-span-2 md:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[0].slug },
								className: "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pointer-events-none absolute -right-6 -top-10 select-none font-display text-[180px] font-black leading-none text-primary/[0.04] transition-all duration-700 group-hover:text-primary/[0.08] group-hover:-translate-y-2",
										children: "01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative h-40 w-full overflow-hidden bg-accent-gradient",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(255,255,255,0.2),_transparent_70%)]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(255,255,255,0.15),_transparent_60%)]" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, { className: "absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute bottom-4 left-8",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white animate-pulse" }), "Featured"]
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex flex-1 flex-col p-8 md:p-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-2xl font-semibold leading-tight text-foreground md:text-3xl",
												children: solutions[0].title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base",
												children: solutions[0].body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-8 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1",
													children: ["Explore solution ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-10 w-10 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow transition-all group-hover:scale-110 group-hover:shadow-glow-cyan",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-0.5" })
												})]
											})
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: { y: -5 },
							className: "lg:col-span-7 md:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[1].slug },
								className: "group relative flex h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/25 hover:shadow-glow-cyan",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 shrink-0 bg-accent-gradient transition-all duration-500 group-hover:w-2.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 p-7 md:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-start justify-between gap-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-5xl font-black text-primary/10 transition-colors group-hover:text-primary/20",
													children: "02"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-2 text-xl font-semibold text-foreground",
													children: solutions[1].title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-muted-foreground",
													children: solutions[1].body
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:translate-x-1",
										children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: { y: -5 },
							className: "lg:col-span-7 md:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[2].slug },
								className: "group relative flex h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:border-primary/25",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-accent-gradient opacity-[0.07] blur-2xl transition-all duration-500 group-hover:opacity-[0.15] group-hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex-1 p-7 md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow transition-all duration-300 group-hover:rounded-xl group-hover:scale-105",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-lg font-bold",
													children: "03"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-xl font-semibold text-foreground",
												children: solutions[2].title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-muted-foreground",
												children: "Operational Workflow"
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 text-sm leading-relaxed text-muted-foreground",
											children: solutions[2].body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1",
											children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: { y: -4 },
							className: "lg:col-span-12 md:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[3].slug },
								className: "group relative flex flex-col overflow-hidden rounded-3xl bg-accent-gradient shadow-glow md:flex-row md:items-stretch",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,_rgba(255,255,255,0.12),_transparent_50%)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_100%,_rgba(255,255,255,0.08),_transparent_50%)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex shrink-0 flex-col justify-center px-8 py-8 md:w-80 md:px-10 md:py-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-7xl font-black text-white/10 md:text-8xl",
												children: "04"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-2xl font-semibold text-primary-foreground md:text-3xl",
												children: solutions[3].title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-0.5 w-16 rounded-full bg-white/30" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex flex-1 flex-col justify-center border-t border-white/10 p-8 md:border-l md:border-t-0 md:p-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm leading-relaxed text-primary-foreground/80 md:text-base",
											children: solutions[3].body
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform group-hover:translate-x-2",
											children: ["Explore solution", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-8 w-8 place-items-center rounded-full bg-white/20 backdrop-blur-sm transition-all group-hover:bg-white/30 group-hover:scale-110",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-white" })
											})]
										})]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: {
								y: -5,
								scale: 1.01
							},
							className: "lg:col-span-7 md:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[4].slug },
								className: "group gradient-border relative block h-full overflow-hidden rounded-3xl bg-card p-8 md:p-10 shadow-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-teal-cyan opacity-[0.06] blur-[50px] transition-opacity group-hover:opacity-[0.14]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-6xl font-black text-primary/[0.07] transition-colors group-hover:text-primary/[0.15]",
											children: "05"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 pt-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-xl font-semibold text-foreground",
													children: solutions[4].title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-muted-foreground",
													children: solutions[4].body
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
													children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
												})
											]
										})]
									})
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							variants: fadeUp,
							transition: { duration: .6 },
							whileHover: {
								y: -5,
								scale: 1.01
							},
							className: "lg:col-span-5 md:col-span-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/solutions/$slug",
								params: { slug: solutions[5].slug },
								className: "group relative block h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:border-primary/25",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-full bg-accent-gradient transition-all duration-500 group-hover:h-1.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-violet opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative p-8 md:p-10",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-5xl font-black text-primary/[0.07] transition-colors group-hover:text-primary/[0.15]",
												children: "06"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 text-xl font-semibold text-foreground",
												children: solutions[5].title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-muted-foreground",
												children: solutions[5].body
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-medium text-primary transition-transform group-hover:translate-x-1",
													children: "Learn more →"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-8 w-8 place-items-center rounded-full border border-border bg-surface transition-all group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:scale-110",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" })
												})]
											})
										]
									})
								]
							})
						})
					]
				})]
			})
		]
	});
}
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
var ECO_TOTAL = ENTERPRISE_BLOCKS.length;
var ECO_AUTO_PLAY = 3500;
function Ecosystem() {
	const [centerIndex, setCenterIndex] = (0, import_react.useState)(0);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [direction, setDirection] = (0, import_react.useState)(1);
	const timerRef = (0, import_react.useRef)(null);
	const dragStartX = (0, import_react.useRef)(0);
	const goTo = (0, import_react.useCallback)((idx, dir) => {
		const wrapped = (idx % ECO_TOTAL + ECO_TOTAL) % ECO_TOTAL;
		setDirection(dir ?? (wrapped > centerIndex ? 1 : -1));
		setCenterIndex(wrapped);
	}, [centerIndex]);
	const goNext = (0, import_react.useCallback)(() => {
		setDirection(1);
		setCenterIndex((prev) => (prev + 1) % ECO_TOTAL);
	}, []);
	const goPrev = (0, import_react.useCallback)(() => {
		setDirection(-1);
		setCenterIndex((prev) => (prev - 1 + ECO_TOTAL) % ECO_TOTAL);
	}, []);
	(0, import_react.useEffect)(() => {
		if (isPaused) return;
		timerRef.current = setTimeout(goNext, ECO_AUTO_PLAY);
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
	const visibleIndices = [
		(centerIndex - 1 + ECO_TOTAL) % ECO_TOTAL,
		centerIndex,
		(centerIndex + 1) % ECO_TOTAL
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background py-24 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Enterprise Fit",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built for Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Enterprise Ecosystem"
				})] }),
				intro: "Your technology should work together, not in isolation. Tech Tammina connects your existing applications, data, cloud, workflows, and enterprise platforms to create a unified ecosystem built for modernization and growth.",
				wide: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-14",
				onMouseEnter: () => setIsPaused(true),
				onMouseLeave: () => setIsPaused(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							goPrev();
							pauseAutoPlay();
						},
						className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 -translate-x-1/2",
						"aria-label": "Previous ecosystem block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5 text-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							goNext();
							pauseAutoPlay();
						},
						className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:grid h-12 w-12 place-items-center rounded-full border border-border bg-card/80 shadow-card backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-glow-cyan hover:scale-110 translate-x-1/2",
						"aria-label": "Next ecosystem block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5 text-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-4 md:gap-6 py-8 min-h-[320px] md:min-h-[340px] cursor-grab active:cursor-grabbing select-none",
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
							children: visibleIndices.map((ecoIdx, position) => {
								const block = ENTERPRISE_BLOCKS[ecoIdx];
								const Icon = block.icon;
								const isCenter = position === 1;
								const description = block.label === "ERP" ? "Fits into core finance, supply chain, and operational planning environments." : block.label === "CRM" ? "Supports customer-facing workflows and relationship-driven processes." : block.label === "ECM" ? "Works with document repositories, records, and knowledge-heavy operations." : block.label === "Identity" ? "Integrates securely with user directories and access management platforms." : block.label === "Cloud" ? "Deploys cleanly across modern cloud estates and hybrid infrastructure." : block.label === "Data" ? "Connects with analytics, reporting, and enterprise data sources." : block.label === "BPM" ? "Aligns with workflow orchestration and process automation layers." : block.label === "AI/ML" ? "Supports intelligent automation, prediction, and decision support." : "Exposes reusable APIs for seamless integration across business applications.";
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
                      ${isCenter ? "md:w-[38%] w-[75%] z-10" : "md:w-[28%] w-0 md:opacity-100 opacity-0 hidden md:block z-0"}
                    `,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative pb-7 h-full flex flex-col justify-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => {
												if (!isCenter) {
													goTo(ecoIdx, position === 0 ? -1 : 1);
													pauseAutoPlay();
												}
											},
											className: `
                          group relative flex h-[240px] md:h-[260px] flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-500 p-7 md:p-8
                          ${isCenter ? "border-primary/30 shadow-glow-cyan" : "border-border hover:border-primary/20 cursor-pointer"}
                        `,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `
                          absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-violet blur-3xl transition-opacity duration-500
                          ${isCenter ? "opacity-30" : "opacity-0 group-hover:opacity-20"}
                        ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative flex h-full flex-col",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "font-display text-xs font-semibold tracking-widest text-gradient",
															children: ["0", ecoIdx + 1]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary",
															children: "Connected"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: `
                            mt-4 font-display font-semibold text-foreground transition-all duration-300
                            ${isCenter ? "text-xl md:text-2xl" : "text-lg md:text-xl"}
                          `,
														children: block.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `
                            mt-3 flex-1 leading-relaxed text-muted-foreground transition-all duration-300
                            ${isCenter ? "text-sm md:text-base" : "text-xs md:text-sm"}
                          `,
														children: description
													})
												]
											})]
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
								}, `home-eco-${block.label}-${ecoIdx}`);
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-2 mt-6",
						children: ENTERPRISE_BLOCKS.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								goTo(i);
								pauseAutoPlay();
							},
							className: `
                  relative h-2.5 rounded-full transition-all duration-500
                  ${i === centerIndex ? "w-8 bg-accent-gradient shadow-glow-cyan" : "w-2.5 bg-border hover:bg-primary/40"}
                `,
							"aria-label": `Go to ${block.label}`,
							children: i === centerIndex && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								layoutId: "home-active-eco-dot",
								className: "absolute inset-0 rounded-full bg-accent-gradient",
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 30
								}
							})
						}, `home-eco-dot-${block.label}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 mx-auto max-w-xs h-0.5 rounded-full bg-border/50 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full rounded-full bg-accent-gradient",
							initial: { width: "0%" },
							animate: { width: isPaused ? `${(centerIndex + 1) / ECO_TOTAL * 100}%` : "100%" },
							transition: isPaused ? { duration: .3 } : {
								duration: ECO_AUTO_PLAY / 1e3,
								ease: "linear"
							}
						}, `home-eco-progress-${centerIndex}-${isPaused}`)
					})
				]
			})]
		})
	});
}
var CREDIBILITY_PILLARS = [
	{
		value: "21+ Years",
		label: "of Technology & Operational Experience",
		icon: Award
	},
	{
		value: "700+",
		label: "Global Professionals & Delivery Organization",
		icon: Users
	},
	{
		value: "Appian & Low-Code",
		label: "Enterprise Platform Expertise",
		icon: Cpu
	},
	{
		value: "BFSI Domain",
		label: "Specialists, Life Science & Education",
		icon: Briefcase
	},
	{
		value: "Global Delivery",
		label: "Full Lifecycle Capability & Operations",
		icon: Globe
	}
];
var WHY_CARDS = [
	{
		icon: Brain,
		title: "AI with Purpose",
		body: "We focus AI investment on real business work - reducing effort, improving speed, supporting decisions, and strengthening consistency rather than pursuing technology for its own sake."
	},
	{
		icon: Briefcase,
		title: "Industry-Driven Solutions",
		body: "Our teams understand the documents, decisions, roles, exceptions, service expectations, and compliance requirements behind operational workflows."
	},
	{
		icon: Cpu,
		title: "Enterprise-Scale Delivery",
		body: "We combine platform expertise, modern engineering, integration, cloud, DevOps, data, and quality disciplines to deliver secure and maintainable solutions."
	},
	{
		icon: Users,
		title: "Flexible Engagement Models",
		body: "Organizations can engage us for advisory, projects, dedicated teams, managed services, quality engineering, or business operations."
	},
	{
		icon: LayoutGrid,
		title: "Built Around Your Business",
		body: "We design around the operating environment, people, systems, controls, and outcomes of each organization rather than forcing every problem into one platform."
	},
	{
		icon: Clock,
		title: "Long-Term Partnership",
		body: "We support the full lifecycle from discovery and implementation through production support, operations, enhancement, and continuous improvement."
	}
];
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative bg-section py-24 overflow-hidden border-t border-border/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-violet opacity-[0.05] blur-[140px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why Tech Tammina",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Enterprise Experience. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Practical Execution."
					})] }),
					intro: "Tech Tammina brings together more than 21 years of technology and operational experience, a global delivery organization, deep BFSI, Life Science & Educational knowledge, and capabilities across enterprise platforms, software engineering, quality, cloud, and managed operations.",
					wide: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						amount: .3
					},
					transition: { duration: .6 },
					className: "mt-12 overflow-hidden rounded-3xl border border-primary/30 bg-card/95 p-6 md:p-8 shadow-xl shadow-black/15 backdrop-blur-md relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/10 via-accent-cyan/15 to-primary/10 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-5 md:divide-x md:divide-border/60",
						children: CREDIBILITY_PILLARS.map((pillar, idx) => {
							const PillarIcon = pillar.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col items-center justify-center text-center p-3 ${idx > 0 ? "md:pl-6" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-11 w-11 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow mb-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarIcon, { className: "h-5.5 w-5.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg md:text-xl font-bold text-foreground text-gradient",
										children: pillar.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-xs font-medium leading-tight text-muted-foreground",
										children: pillar.label
									})
								]
							}, pillar.label);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .15
					},
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: WHY_CARDS.map((w, i) => {
						const Icon = w.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							transition: {
								duration: .5,
								delay: i * .08
							},
							whileHover: {
								y: -6,
								scale: 1.01
							},
							className: "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/95 p-7 md:p-8 shadow-xl shadow-black/15 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow-cyan hover:shadow-cyan-500/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-accent-gradient text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300",
									children: w.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: w.body
								})
							] })]
						}, w.title);
					})
				})
			]
		})]
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
					children: ["Move from AI Opportunity to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Business Outcome"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground",
					children: "Whether you are modernizing a critical process, building an intelligent application, applying AI to document-intensive work, improving software quality, or expanding operational capacity, Tech Tammina can help turn the opportunity into a practical delivery plan."
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
var FEATURED_CARDS = [
	{
		id: "mendix",
		tag: "Low-Code Platform",
		title: "Accelerating Enterprise Application Delivery with Mendix",
		body: "Mendix helps organizations move from business idea to scalable application faster through closer collaboration between business and technology teams. Explore how it supports modernization while balancing speed, architecture, integration, security, and long-term maintainability.",
		position: "left",
		image: "/images/mendix.jpg"
	},
	{
		id: "appian",
		tag: "Enterprise AI & Automation",
		title: "Enterprise AI with Appian",
		body: "Appian is bringing AI agents, intelligent document processing, process intelligence, and AI-assisted development into governed enterprise workflows. Explore how Tech Tammina uses Appian's evolving AI capabilities to build intelligent applications, modernize complex operations, and deliver secure, scalable outcomes for mission-critical work.",
		position: "center",
		image: "/images/appian.jpg"
	},
	{
		id: "doc-ai",
		tag: "Document Intelligence",
		title: "Enterprise Document Intelligence",
		body: "Business documents contain the information that drives critical decisions. Discover how organizations can transform policies, contracts, certificates, submissions, invoices, and other unstructured content into trusted business data through extraction, validation, comparison, and workflow integration.",
		position: "right",
		image: "/images/aws.jpg"
	}
];
function FeaturedInsightsSection() {
	const [hoveredId, setHoveredId] = (0, import_react.useState)(null);
	const activeId = hoveredId || "appian";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-border bg-background py-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-cyan-violet opacity-[0.06] blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Featured Insights",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Modern Perspectives on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient",
					children: "Enterprise AI & Platforms"
				})] }),
				intro: "Explore practical perspectives on enterprise AI, intelligent automation, low-code platforms, document intelligence, and the technologies reshaping modern operations."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-6 lg:gap-8 min-h-[520px]",
				onMouseLeave: () => setHoveredId(null),
				children: FEATURED_CARDS.map((card) => {
					const isActive = card.id === activeId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						onMouseEnter: () => setHoveredId(card.id),
						transition: {
							layout: {
								type: "spring",
								stiffness: 280,
								damping: 30,
								mass: .85
							},
							opacity: { duration: .3 }
						},
						className: `
                  w-full flex flex-col cursor-pointer transition-all duration-500 ease-out
                  ${isActive ? "lg:w-[38%] z-10 lg:-translate-y-2" : "lg:w-[30%] z-0 lg:translate-y-0 opacity-85 hover:opacity-100"}
                `,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							layout: true,
							className: `
                    group relative flex flex-col h-full overflow-hidden rounded-3xl border bg-card transition-all duration-500 ease-out shadow-xl shadow-black/15
                    ${isActive ? "border-primary/40 shadow-glow-cyan ring-1 ring-primary/25 bg-card/95" : "border-border/80 hover:border-primary/30 hover:shadow-2xl"}
                  `,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full aspect-[16/10] overflow-hidden bg-muted/40 border-b border-border/60 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: card.image,
										alt: card.title,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-4 left-4 z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `
                        inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold backdrop-blur-md border transition-all duration-500 ease-out
                        ${isActive ? "bg-accent-gradient text-primary-foreground border-white/20 shadow-glow" : "bg-surface/80 text-foreground border-border/80"}
                      `,
											children: [isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-white animate-pulse" }), card.tag]
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-7 md:p-8 transition-all duration-500 ease-out",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `
                      font-semibold text-foreground leading-snug transition-all duration-500 ease-out
                      ${isActive ? "text-xl md:text-2xl text-gradient" : "text-lg md:text-xl"}
                    `,
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `
                      mt-3 flex-1 leading-relaxed text-muted-foreground transition-all duration-500 ease-out
                      ${isActive ? "text-sm md:text-base opacity-100" : "text-xs md:text-sm opacity-80"}
                    `,
										children: card.body
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 pt-4 border-t border-border/40 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-500 ease-out ${isActive ? "text-primary translate-x-1" : "text-muted-foreground group-hover:text-primary"}`,
											children: ["Explore Insight ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `
                        grid place-items-center rounded-full transition-all duration-500 ease-out
                        ${isActive ? "h-9 w-9 bg-accent-gradient text-primary-foreground shadow-glow scale-110" : "h-8 w-8 border border-border bg-surface text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"}
                      `,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
										})]
									})
								]
							})]
						})
					}, card.id);
				})
			})]
		})]
	});
}
function AIActionWorkflow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-32 rounded-2xl bg-surface/60 border border-border/70 p-3 flex items-center justify-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-full h-full",
			viewBox: "0 0 320 100",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 45 50 H 125",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 195 50 H 275",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 160 20 V 80",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-border"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#3B82F6",
					animate: {
						cx: [45, 125],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 2.2,
						repeat: Infinity,
						ease: "easeInOut"
					},
					cy: "50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#8B5CF6",
					animate: {
						cx: [195, 275],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 2.2,
						repeat: Infinity,
						ease: "easeInOut",
						delay: .7
					},
					cy: "50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#06B6D4",
					animate: {
						cy: [20, 80],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 2.2,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1.1
					},
					cx: "160"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(45, 50)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "18",
						className: "fill-card stroke-primary/40",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, { className: "h-5 w-5 text-primary -translate-x-2.5 -translate-y-2.5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(160, 50)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "22",
						className: "fill-primary/20 stroke-primary shadow-glow",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-6 w-6 text-primary -translate-x-3 -translate-y-3" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(275, 50)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "18",
						className: "fill-card stroke-primary/40",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-primary -translate-x-2.5 -translate-y-2.5" })]
				})
			]
		})]
	});
}
function EngineeringDepthWorkflow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-32 rounded-2xl bg-surface/60 border border-border/70 p-3 flex items-center justify-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-full h-full",
			viewBox: "0 0 320 100",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 40 30 H 280",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-border",
					strokeDasharray: "4 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 40 70 H 280",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-border",
					strokeDasharray: "4 4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 80 30 V 70",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-primary/30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 160 30 V 70",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-primary/30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 240 30 V 70",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-primary/30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#3B82F6",
					animate: {
						cy: [30, 70],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 1.8,
						repeat: Infinity,
						ease: "linear"
					},
					cx: "80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#8B5CF6",
					animate: {
						cy: [70, 30],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 1.8,
						repeat: Infinity,
						ease: "linear",
						delay: .6
					},
					cx: "160"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
					r: "4",
					fill: "#06B6D4",
					animate: {
						cy: [30, 70],
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 1.8,
						repeat: Infinity,
						ease: "linear",
						delay: 1.2
					},
					cx: "240"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(80, 30)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(160, 30)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(240, 30)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(80, 70)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(160, 70)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutGrid, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(240, 70)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "14",
						className: "fill-card stroke-primary/50",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-4 w-4 text-primary -translate-x-2 -translate-y-2" })]
				})
			]
		})]
	});
}
function IndustryExecutionWorkflow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-32 rounded-2xl bg-surface/60 border border-border/70 p-3 flex items-center justify-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-full h-full",
			viewBox: "0 0 320 100",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "160",
					cy: "50",
					rx: "100",
					ry: "32",
					stroke: "currentColor",
					strokeWidth: "2",
					className: "text-primary/20",
					strokeDasharray: "6 6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
					animate: { rotate: 360 },
					transition: {
						duration: 8,
						repeat: Infinity,
						ease: "linear"
					},
					style: { transformOrigin: "160px 50px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "260",
						cy: "50",
						r: "5",
						fill: "#3B82F6",
						className: "shadow-glow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "60",
						cy: "50",
						r: "5",
						fill: "#8B5CF6",
						className: "shadow-glow"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(160, 50)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "22",
						className: "fill-primary/20 stroke-primary shadow-glow",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-6 w-6 text-primary -translate-x-3 -translate-y-3" })]
				})
			]
		})]
	});
}
function DeliveryLifecycleWorkflow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-32 rounded-2xl bg-surface/60 border border-border/70 p-3 flex items-center justify-center overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "w-full h-full",
			viewBox: "0 0 320 100",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 110 50 C 70 20, 50 80, 110 50 C 170 20, 210 80, 250 50 C 210 20, 170 80, 110 50 Z",
					stroke: "currentColor",
					strokeWidth: "2.5",
					className: "text-primary/30"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M 110 50 C 70 20, 50 80, 110 50 C 170 20, 210 80, 250 50 C 210 20, 170 80, 110 50 Z",
					stroke: "#06B6D4",
					strokeWidth: "3.5",
					strokeDasharray: "40 200",
					animate: { strokeDashoffset: [-240, 0] },
					transition: {
						duration: 4,
						repeat: Infinity,
						ease: "linear"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(160, 50)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "20",
						className: "fill-card stroke-primary shadow-glow",
						strokeWidth: "2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "h-5 w-5 text-primary -translate-x-2.5 -translate-y-2.5" })]
				})
			]
		})]
	});
}
var REAL_RESULTS_CARDS = [
	{
		title: "Enterprise AI in Action",
		body: "Apply AI within workflows, applications, documents, and decisions - with human oversight, auditability, and governance built in.",
		workflow: AIActionWorkflow
	},
	{
		title: "Platform and Engineering Depth",
		body: "Deliver across low-code, process automation, cloud, integration, data, DevOps, quality engineering, and custom development.",
		workflow: EngineeringDepthWorkflow
	},
	{
		title: "Industry-Led Execution",
		body: "Design around real operating models, regulatory requirements, document types, roles, exceptions, and service expectations.",
		workflow: IndustryExecutionWorkflow
	},
	{
		title: "Delivery Beyond Go-Live",
		body: "Support advisory, implementation, managed services, business operations, and continuous improvement through one partner.",
		workflow: DeliveryLifecycleWorkflow
	}
];
function RealResultsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative border-t border-border bg-section py-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-10 left-10 h-[400px] w-[400px] rounded-full bg-cyan-violet opacity-[0.04] blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-10 right-10 h-[400px] w-[400px] rounded-full bg-violet-teal opacity-[0.04] blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Enterprise Impact",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Built to Turn Enterprise AI into ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient",
						children: "Real Results"
					})] }),
					intro: "AI creates value when it becomes part of how work is performed, decisions are made, and customers are served. Tech Tammina brings together enterprise platforms, digital engineering, industry expertise, and operational delivery to move organizations from isolated experiments to governed, scalable solutions.",
					wide: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: stagger,
					initial: "hidden",
					whileInView: "show",
					viewport: {
						once: true,
						amount: .15
					},
					className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: REAL_RESULTS_CARDS.map((card, i) => {
						const WorkflowVisual = card.workflow;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							transition: {
								duration: .5,
								delay: i * .08
							},
							whileHover: {
								y: -6,
								scale: 1.02
							},
							className: "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/95 p-6 shadow-xl shadow-black/15 md:shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-glow-cyan hover:shadow-cyan-500/20 cursor-pointer",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-60 transition-opacity duration-300 group-hover:opacity-100" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkflowVisual, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300",
										children: card.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: card.body
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary transition-all duration-300 group-hover:translate-x-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Connected Workflow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" })]
								})
							]
						}, card.title);
					})
				})]
			})
		]
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedInsightsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RealResultsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilitiesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustriesPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionsPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ecosystem, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {})
	] });
}
//#endregion
export { HomePage as component };
