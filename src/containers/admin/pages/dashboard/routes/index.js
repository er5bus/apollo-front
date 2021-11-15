import {lazy} from "react";

export const dashboard = {
  path: "/dashboard",
  component: lazy(() => import("./../Dashboard"))
}
