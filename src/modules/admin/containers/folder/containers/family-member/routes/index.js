import * as routes from "./../../../routes/family-member"

import { combinePathRoutes, getBaseUrl } from "./../../../../../../../helpers"

import * as dialogRoute from "./dialog"

//export const basePath = 
export const getBasePath = () => getBaseUrl(routes.familyMemberList.path)
export const getDialogRoutes = () => combinePathRoutes({ path: getBasePath() }, dialogRoute)
