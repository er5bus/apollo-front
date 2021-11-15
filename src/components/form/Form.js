import {memo} from "react"
import {ControlUIProvider} from "./context"
import FormGroup from "./FormGroup"


const Form = ({ children, ...props }) => (
  <ControlUIProvider>
    <FormGroup { ...props }>{ children }</FormGroup>
  </ControlUIProvider>
)


export default memo(Form)
