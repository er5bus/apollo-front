import Aside from './aside/Aside'
import Footer from './extras/footer/Footer'
import Header from './header/Header'
import HeaderMobile from './header/HeaderMobile'
import { Subheader } from './header/sub-header'


const BaseLayout = ({ children, routesMenu, homeURL }) => {
  
  return (
    <>
      {/* begin::Main */}
      <HeaderMobile />
      <div className='d-flex flex-column flex-root'>
        {/* begin::Page */}
        <div className='d-flex flex-row flex-column-fluid page'>
          <Aside routesMenu={routesMenu} />
          {/* begin::Wrapper */}
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <Header />
            {/* begin::Content */}
            <div
              id='kt_content'
              className='content d-flex flex-column flex-column-fluid'
            >
              <Subheader homeURL={homeURL} />
              {/* begin::Entry */}
              <div className='post d-flex flex-column-fluid'>
                <div className='container-fluid'>
                  {children}
                </div>
              </div>
              {/* end::Entry */}
            </div>
            {/* end::Content */}
            <Footer />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Page */}
      </div>
      {/* <ScrollTop/> */}
      {/* end::Main */}
    </>
  )
}

export default BaseLayout
