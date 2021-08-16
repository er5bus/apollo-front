import {forwardRef} from "react"


export const DropdownTopbarItemToggler = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="topbar-item d-flex align-items-center ms-1 ms-lg-3"
      onClick={e => {
        e.preventDefault()
        props.onClick && props.onClick(e)
      }}
    >
      {props.children}
    </div>
  )
})

DropdownTopbarItemToggler.displayName = 'DropdownTopbarItemToggler'
