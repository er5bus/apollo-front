import React from "react"
import {DEFAULT_MENU_COMPONENT, MENU_COMPONENTS} from "./../link-types"

const RenderItems = ({ component, ...props }) => {
  const Component = MENU_COMPONENTS[component] || DEFAULT_MENU_COMPONENT
  return (
    <Component {...props} />
  )
}


export default RenderItems
