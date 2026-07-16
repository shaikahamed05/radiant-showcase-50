import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as SolutionDetailShared, t as Route } from "./solutions._slug-CAsvy-HI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions._slug-BMMUsuAz.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionDetail() {
	const { slug } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SolutionDetailShared, { slug });
}
//#endregion
export { SolutionDetail as component };
