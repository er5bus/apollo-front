import { Map, List } from 'immutable'
import * as ACTIONS from "./../constants"

export const initialState = Map({
  fields: List(),
  isSubmitted: false,
  object: undefined,
  isFetching: false,
  error: undefined,
  formError: List(),
  success: false,
  submitCount: 0,
  hasError: false
})

export const controlsReducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case ACTIONS.CLEAR_CONTRTOLS : {
      return initialState
    }
    case ACTIONS.SET_FIELDS: {
      return state.update('fields', fields => fields.merge(payload))
    }
    case ACTIONS.SET_ERROR_FORM: {
      return state.set("formError", payload)
    }
    case ACTIONS.ADD_SUBMIT_COUNT: {
      return state.set("submitCount", payload)
    }
    case ACTIONS.SET_SUBMITTED: {
      return state.set("isSubmitted", payload)
    }
    case ACTIONS.SET_OBJECT: {
      return state.set("object", payload)
    }
    case ACTIONS.SET_FETCHING: {
      return state.set("isFetching", payload)
    }
    case ACTIONS.SET_ERROR: {
      return state.set("error", payload).set("hasError", true)
    }
    case ACTIONS.SET_SUCCESS: {
      return state.set("success", payload)
    }
    default: {
      return state
    }
  }
}
