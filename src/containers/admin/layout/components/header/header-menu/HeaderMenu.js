/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import { useHistory } from "react-router"
import { Svg } from "src/components/controls"


const HeaderMenu = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goForward = () => {
    history.goForward()
  }

  return <div
    id="kt_header_menu"
    className={`d-flex align-items-stretch`}
  >
    {/*begin::Header Nav*/}
    <ul className={`menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch`}>

      {/*begin::1 Level*/}
        <li className={`menu-item menu-item-rel`}>
          <div onClick={goBack} className="menu-link">
            <span className="svg-icon">
              <Svg path='/media/icons/stockholm/Navigation/Arrow-left.svg' />
            </span>
            {/*<span className="menu-text"><Trans>Back</Trans></span>*/}
          </div>
        </li>
      {/*end::1 Level*/}
      {/*begin::1 Level*/}
        <li className={`menu-item menu-item-rel`}>
          <div onClick={goForward} className="menu-link">
            {/*<span className="menu-text"><Trans>Forward</Trans></span>*/}
            <span className="svg-icon">
              <Svg path='/media/icons/stockholm/Navigation/Arrow-right.svg' />
            </span>
          </div>
        </li>
      {/*end::1 Level*/}
    </ul>
    {/*end::Header Nav*/}
  </div>
}


export default HeaderMenu
