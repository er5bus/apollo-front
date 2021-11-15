/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from "redux"

import userReducer from "./userReducer"
import collectionReducer from "./collectionReducer" 
import documentReducer from "./documentReducer"
import statusReducer from "./statusReducer"

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  user: userReducer,
  collection: collectionReducer,
  document: documentReducer,
  status: statusReducer
})
