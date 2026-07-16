import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact.index-D01eGAx1.js
var $$splitComponentImporter = () => import("./contact.index-C4EI5pZK.mjs");
var contactSearchSchema = objectType({ channel: stringType().optional() });
var Route = createFileRoute("/contact/")({
	validateSearch: (search) => contactSearchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	head: () => ({
		meta: [
			{ title: "Contact — Tech Tammina" },
			{
				name: "description",
				content: "Start a conversation with Tech Tammina, explore office locations, and share the work you need help solving."
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
//#endregion
export { Route as t };
