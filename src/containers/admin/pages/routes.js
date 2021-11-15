import layoutRoute from "../layoutRoute"
import { combinePathRoutes } from "src/helpers"

import * as profileRoutes from "./profile/routes"
import * as dashboardRoutes from "./dashboard/routes"


// Combined routes
export default combinePathRoutes({ path: layoutRoute.path }, profileRoutes, dashboardRoutes)
