import {lazy} from "react";


export const profile = {
  path: "/profile",
  component: lazy(() => import("./../Profile"))
}
