import {lazy} from "react"

const layoutRoute = {
  path: "/admin",
  component: lazy(() =>  import("./layout/Layout"))
}

export default layoutRoute
