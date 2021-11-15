import { ACTIONS } from "./../constants"
import { PURGE } from "redux-persist"


const initialState = {
  currentUser: null,
  permissions: null,
  token: null,
  isAuthenticated: false,
  isSuperuser: false
}


const authenticationReducer = (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.LOGIN_SUCCEDED : {
      const { user, isSuperuser=false, permissions = [], ...token } = payload
      return { ...state, isAuthenticated: true, currentUser: user, isSuperuser, permissions, token }
    }
    
    case ACTIONS.LOGOUT_SUCCEDED : {
      return { ...state, ...initialState }
    }
    case PURGE:{
      return { ...state, ...initialState }
    }

    case ACTIONS.RESET_PASSWORD_SUCCEDED : {
      const { user, isSuperuser=false, permissions = [], ...token } = payload
      return { ...state, isAuthenticated: true, currentUser: user, isSuperuser, permissions, token }
    }

    case ACTIONS.FETCH_USER_SUCCEDED : {
      return { ...state, currentUser: payload }
    }

    case ACTIONS.USER_UPDATED_SUCCEDED : {
      return { ...state, currentUser: payload }
    }
   
    default: {
      return state
    }
  }
}


export default authenticationReducer
