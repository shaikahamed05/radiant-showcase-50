import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Route, t as IndustryDetailShared } from "./industries._slug-mBlkcv2C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries._slug-B-A8Q7R5.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryDetail() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryDetailShared, { slug });
}
//#endregion
export { IndustryDetail as component };
