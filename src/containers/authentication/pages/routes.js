import layoutRoute from "../layoutRoute"
import {combinePathRoutes} from "src/helpers"

import * as loginRoutes from "./login/routes"
import * as logoutRoutes from "./logout/routes"
import * as registerRoutes from "./register/routes"
import * as forgotPasswordRoutes from "./forgot-password/routes"
import * as resetPasswordRoutes from "./reset-password/routes"


// Combined routes
export default combinePathRoutes({ path: layoutRoute.path }, loginRoutes, logoutRoutes, registerRoutes, forgotPasswordRoutes, resetPasswordRoutes)
