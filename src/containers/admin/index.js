import { combineReducers } from "redux"
import {lazy} from "react"

import adminReducer from "./store/reducers"

// Combined routes
export const layoutRoute = {
  path: "/admin",
  component: lazy(() =>  import("./layout/Layout"))
}


export const rootReducer = combineReducers({
  admin: adminReducer
})
