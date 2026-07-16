import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/section-heading-hdwy3nex.js
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0
	}
};
var stagger = {
	hidden: {},
	show: { transition: { staggerChildren: .08 } }
};
function SectionHeading({ eyebrow, title, intro, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: stagger,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			amount: .4
		},
		className: center ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				transition: { duration: .5 },
				className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent-gradient" }), eyebrow]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
				variants: fadeUp,
				transition: { duration: .6 },
				className: "mt-5 text-4xl font-semibold leading-tight text-foreground md:text-5xl",
				children: title
			}),
			intro ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				variants: fadeUp,
				transition: { duration: .6 },
				className: `mt-4 text-lg leading-relaxed text-muted-foreground ${center ? "mx-auto" : ""}`,
				children: intro
			}) : null
		]
	});
}
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-hero pt-32 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-grid opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent-gradient opacity-25 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-7xl px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow,
					title,
					intro
				})
			})
		]
	});
}
//#endregion
export { stagger as i, SectionHeading as n, fadeUp as r, PageHero as t };
