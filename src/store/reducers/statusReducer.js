import { ACTIONS } from './../constants'

const initialState = { 
  isLoading: false, 
  isFetching: false, 
  success: {
    isCreated: false,
    isUpdated: false,
    isDesactivated: false,
    isActivated: false,
    isDeleted: false,
    isRestored: false
  },
  error: null 
}


const statusReducer = (state = initialState, action) => {
  
  const { payload, type } = action
  
  switch (type) {

    
   
    default: {
      return state
    }
  }
}

export default statusReducer
