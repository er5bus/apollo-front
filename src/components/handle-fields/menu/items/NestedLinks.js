import React, {useEffect, useState} from "react"
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
//import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp"
import {useLocation} from "react-router-dom"
import RenderItems from "../RenderItems"
import {checkIsActive} from "../../../../helpers"


const NestedLinks = ({ items=[], label, icon }) => {

  const Icon = icon
  const location = useLocation()

  const [ show, setShow ] = useState(items.some((item) => checkIsActive(location, item.route)))

  useEffect(() => {
    if (items.some((item) => checkIsActive(window.location, item.route)) !== show) {
      setShow(items.some((item) => checkIsActive(location, item.route)))
    }

    // eslint-disable-next-line
  }, [location])

  return ( items.every((item) => item.hideOn && item.condition) ? <></> :
    <li className="navi navi-bold navi-hover navi-active navi-link-rounded">
        <div className="navi-item mb-2">
          <div onClick={ () => setShow(!show)} className="navi-link py-4">
            <span className="navi-icon mr-2">
              <span className="svg-icon">
                <Icon />
              </span>
            </span>
            <span className="navi-text font-size-lg">{ label }</span>
            <span>{/*!show ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />*/}</span>
          </div>
        </div>
      { show && items.map((item, idx) => <RenderItems key={idx} { ...item } spacing="px-5" /> )}
    </li>
  )
}


export default NestedLinks
