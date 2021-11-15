import {memo} from "react"
import {ControlUIProvider} from "./context"
import DisplayItem from "./DisplayItem"


const DisplayList = ({ children, ...props }) => (
  <ControlUIProvider>
    <DisplayItem { ...props }>{ children }</DisplayItem>
  </ControlUIProvider>
)


export default memo(DisplayList)
