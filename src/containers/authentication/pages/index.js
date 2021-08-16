import {layoutRoute} from ".."
import {combinePathRoutes} from "./../../../helpers"

import * as loginRoutes from "./login/routes"
import * as registerRoutes from "./register/routes"
import * as forgotPasswordRoutes from "./forgot-password/routes"
import * as resetPasswordRoutes from "./reset-password/routes"


// Combined routes
export default combinePathRoutes({ path: layoutRoute.path }, loginRoutes, registerRoutes, forgotPasswordRoutes, resetPasswordRoutes)
