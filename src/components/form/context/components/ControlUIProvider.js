import React, {useContext, useReducer} from "react"

import { controlsReducer, initialState } from "./../reducer"

const ControlUIContext = React.createContext()


export const useControlUIStore = () => useContext(ControlUIContext)


export const ControlUIProvider = ({ children }) => {

  const [state, dispatch] = useReducer(controlsReducer, initialState)

  return <ControlUIContext.Provider value={[state.toObject(), dispatch]}>
    {children}
  </ControlUIContext.Provider>
}
