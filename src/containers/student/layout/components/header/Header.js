import React from "react"
import Topbar from "./Topbar"
import HeaderMenuWrapper from "./header-menu/HeaderMenuWrapper"


const Header = () => {
  return (
    <>
      {/*begin::Header*/}
      <div
        className={`header align-items-stretch`}
        id="kt_header"
      >
        {/*begin::Container*/}
        <div className={`container-fluid d-flex align-items-stretch justify-content-between`}>
          <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          {/*<AnimateLoading />*/}
          {/*begin::Header Menu Wrapper*/}
          <HeaderMenuWrapper />
          {/*end::Header Menu Wrapper*/}

          {/*begin::Topbar*/}
          <Topbar />
          {/*end::Topbar*/}
            </div>
        </div>
        {/*end::Container*/}
      </div>
      {/*end::Header*/}
    </>
  )
}


export default Header
