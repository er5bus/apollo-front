import {aside} from "../../helpers/menu"
import Brand from "./../brand/Brand"
import AsideMenuItem from "./aside-menu/AsideMenu"

const Aside = () => {
  return (
    <>
      {/* begin::Aside */}
      <div id="kt_aside" className={`aside aside-dark aside-hoverable`}>
        <Brand />
        {/* begin::Aside Menu */}
        <div id="kt_aside_menu_wrapper" className="aside-menu flex-column-fluid">
          <div
            id="kt_aside_menu"
            className={`hover-scroll-overlay-y my-5 my-lg-5`}
          >
            <div
              className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
              id="#kt_aside_menu">
              { aside.toArray().map((item, idx) => (
                <AsideMenuItem key={idx} item={item} />
              ))
              }
            </div>
          </div>
        </div>
        {/* end::Aside Menu */}
      </div>
      {/* end::Aside */}
    </>
  )
}


export default Aside
