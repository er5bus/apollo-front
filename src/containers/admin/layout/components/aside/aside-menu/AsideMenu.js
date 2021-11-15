import {NavLink} from "react-router-dom"
import {Svg} from "src/components/controls"

const AsideMenuItem = ({ item }) => {
  return (
    <>
      { item.has("url") && item.has("title") && <div className="menu-item">
        <NavLink className="menu-link" to={item.get("url")}>
          <span className="menu-icon">
            {/*<!--begin::Svg Icon | path: icons/duotone/Design/PenAndRuller.svg-->*/}
            <span className="svg-icon svg-icon-2">
              <Svg path={ item.get("icon") || "/media/icons/stockholm/General/Lock.svg" } />
            </span>
            {/*<!--end::Svg Icon-->*/}
          </span>
          <span className="menu-title">{ item.get("title") }</span>
        </NavLink>
      </div>
      }
      { !item.has("icon") && !item.has("url") && item.has("title") && <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">{ item.get("title") }</span>
        </div>
      </div>
      }
    </>
  )
}


export default AsideMenuItem
