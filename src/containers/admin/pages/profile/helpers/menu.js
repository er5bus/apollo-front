import {lazy} from "react";

export const profileMenu = [
  {
    label: "Overview",
    path: "overview",
    component: lazy(() => import("../components/display/Overview"))
  },
  {
    label: "Personal information",
    path: "personal-information",
    component: lazy(() => import("../components/forms/PersonalInformation"))
  },
  {
    label: "Account information",
    path: "account-information",
    component: lazy(() => import("../components/forms/AccountInformation"))
  },
  {
    label: "Change password",
    path: "change-password",
    component: lazy(() => import("../components/forms/ChangePassword"))
  },
]
