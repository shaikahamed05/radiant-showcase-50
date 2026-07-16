import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./section-heading-hdwy3nex.mjs";
import { h as Mail, m as MapPin, u as Phone, w as Clock, z as Accessibility } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.locations-xtG3O4aQ.js
var import_jsx_runtime = require_jsx_runtime();
var OFFICES = [
	{
		city: "McLean, Virginia",
		country: "United States",
		role: "Global Headquarters",
		address: "8000 Towers Crescent Dr, Suite 1350, McLean, VA 22102",
		phone: "+1 (703) 349-1022",
		email: "hello@techtammina.com",
		hours: "9:00 AM — 6:00 PM EST (Monday - Friday)",
		accessibility: "Wheelchair accessible entrance, elevators, and parking."
	},
	{
		city: "Visakhapatnam, Andhra Pradesh",
		country: "India",
		role: "Global Delivery Center",
		address: "Hill No. 3, IT SEZ, Madhurawada, Visakhapatnam, AP 530048",
		phone: "+91 (891) 662-2555",
		email: "india.ops@techtammina.com",
		hours: "9:00 AM — 6:00 PM IST (Monday - Friday)",
		accessibility: "Accessible workstations, ramp access, and parking."
	},
	{
		city: "Noida, Uttar Pradesh",
		country: "India",
		role: "Regional Delivery Hub",
		address: "Sector 62, Noida, UP 201301",
		phone: "+91 (120) 420-1111",
		email: "india.ops@techtammina.com",
		hours: "9:00 AM — 6:00 PM IST (Monday - Friday)",
		accessibility: "Elevator access, handicap accessible building layout."
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
				children: OFFICES.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gradient-border rounded-2xl bg-card p-8 flex flex-col justify-between space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-bold tracking-wider text-gradient uppercase block mb-1",
							children: office.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-foreground mb-1",
							children: office.city
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground block mb-4",
							children: office.country
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${office.phone.replace(/\s+/g, "")}`,
										className: "text-muted-foreground hover:text-primary transition-colors",
										children: office.phone
									})]
								}),
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
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-border/80 pt-4 space-y-3 text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 items-start text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.hours })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 items-start text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accessibility, { className: "h-3.5 w-3.5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: office.accessibility })]
						})]
					})]
				}, office.city))
			})
		})
	})] });
}
//#endregion
export { LocationsPage as component };
