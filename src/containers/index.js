import { combineReducers } from "redux"

import { layoutRoute as authRoute, rootReducer as authReducer } from "./authentication"
import { layoutRoute as adminhRoute, rootReducer as adminReducer } from "./admin"
//import { layoutRoute as studentRoute, rootReducer as studentReducer } from "./student"


export const rootRoutes = [ authRoute, adminhRoute, /*studentRoute*/ ]
export const rootReducer = combineReducers({
  common: authReducer,
  admin: adminReducer,
  //student: studentReducer
})
