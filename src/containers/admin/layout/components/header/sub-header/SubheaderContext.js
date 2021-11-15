import {useContext, createContext, useState} from "react"
import {Trans} from "react-i18next"


const SubheaderUIContext = createContext()


export const useSubheaderContext = () => useContext(SubheaderUIContext)


export const SubheaderUIProvider = ({ children }) => {

  const [subheaders, setSubheaders] = useState([ <Trans>Home</Trans> ])
  const [title, setTitle] = useState(subheaders.length && subheaders[subheaders.length - 1])

  return <SubheaderUIContext.Provider value={{ subheaders, setSubheaders, title, setTitle }}>
    {children}
  </SubheaderUIContext.Provider>
}

