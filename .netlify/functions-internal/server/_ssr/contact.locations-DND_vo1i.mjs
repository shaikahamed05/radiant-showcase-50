import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./section-heading-BdIj2xOd.mjs";
import { h as Mail, m as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.locations-DND_vo1i.js
var import_jsx_runtime = require_jsx_runtime();
var OFFICES = [
	{
		city: "USA",
		company: "Tech Tammina LLC",
		address: "4460 Brookfield Corporate Dr, Suite N, Chantilly, VA 20151, USA",
		phone: "+1-703-349-1074",
		altPhone: "703-991-5532",
		email: "info@tammina.com"
	},
	{
		city: "Visakhapatnam, India",
		company: "Sree Tammina Software Solutions (I) PVT LTD.",
		address: "SVS Towers, Sankaramatham Rd, Visakhapatnam, AP, India 530016",
		phone: "+91-891-2555200, 2555204",
		altPhone: "+91-891-2555201",
		email: "info@tammina.com"
	},
	{
		city: "Hyderabad, India",
		company: "Sree Tammina Software Solutions (I) PVT LTD.",
		address: "2nd Floor, C-Block, Win Win Towers, Madhapur, HITEC City, Hyderabad -500081, Telangana",
		phone: "",
		altPhone: "",
		email: "info@tammina.com"
	},
	{
		city: "Amsterdam, Netherlands",
		company: "Tech Tammina BV",
		address: "Keizersgracht 391A, 1016 EJ, Amsterdam, Netherlands",
		phone: "+31-645-828-790",
		altPhone: "",
		email: "netherlands@tammina.com"
	},
	{
		city: "Dubai, UAE",
		company: "Tech Tammina IT Services CO. L.L.C",
		address: "Office No. 106, Level 1, Coastal Building, Near Al Twar Centre, Al Qusais 2, P.O. Box: 51150 Dubai, UAE",
		phone: "",
		altPhone: "",
		email: "info@tammina.com"
	}
];
function LocationsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Our Offices",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Connect with the right ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient",
			children: "regional team"
		})] }),
		intro: "Find verified office locations, phone numbers, email addresses, and regional details below."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-section py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 space-y-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: OFFICES.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-foreground mb-1",
							children: office.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground block mb-4",
							children: office.company
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground leading-relaxed",
										children: office.address
									})]
								}),
								office.phone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${office.phone.replace(/\s+/g, "")}`,
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: office.phone
									})]
								}) : null,
								office.altPhone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${office.altPhone.replace(/\s+/g, "")}`,
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: office.altPhone
									})]
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${office.email}`,
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: office.email
									})]
								})
							]
						})
					] })
				}, office.city))
			})
		})
	})] });
}
//#endregion
export { LocationsPage as component };
