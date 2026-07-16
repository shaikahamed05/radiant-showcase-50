import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources-DjXwTMHJ.js
var $$splitComponentImporter = () => import("./resources-BechcOQv.mjs");
var resourcesSearchSchema = objectType({ type: stringType().optional() });
var Route = createFileRoute("/resources")({
	validateSearch: (search) => resourcesSearchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
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
//#endregion
export { Route as t };
