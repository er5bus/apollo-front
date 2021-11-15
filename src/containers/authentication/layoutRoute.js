import {lazy} from "react"

const layoutRoute = {
  path: "/auth",
  component: lazy(() =>  import("./layout/Layout"))
}


export default layoutRoute
