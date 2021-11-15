import { ACTIONS } from './../constants'

const initialState = { 
  documents: {} 
}


const documentReducer = (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    case ACTIONS.FETCH_USER_SUCCEDED : {
      return { ...state, isFetching: false, error: null }
    }
    
    case ACTIONS.CHANGE_PASSWORD_SUCCEDED : {
      return { ...state, isLoading: false, success: true, error: null }
    }
    
    case ACTIONS.UPDATE_ACCOUNT_INFORMATION_SUCCEDED : {
      return { ...state, isLoading: false, success: true, account: payload, error: null }
    }
    
    case ACTIONS.UPDATE_PERSONAL_INFORMATION_SUCCEDED : {
      return { ...state, isLoading: false, success: true, account: payload, error: null }
    }
   
    default: {
      return state
    }
  }
}

export default documentReducer
