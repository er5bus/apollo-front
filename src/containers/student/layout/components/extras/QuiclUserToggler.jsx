/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import {OverlayTrigger, Tooltip} from "react-bootstrap"
import UserProfileDropdown from "./dropdowns/UserProfileDropdown"


const QuickUserToggler = () => {

  return (<>
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="quick-user-tooltip">View user</Tooltip>}
    >
      <UserProfileDropdown/>
    </OverlayTrigger>

  </>
  )
}


export default QuickUserToggler
