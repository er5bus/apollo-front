import Aside from './aside/Aside'
import Footer from './extras/footer/Footer'
import Header from './header/Header'
import HeaderMobile from './header/HeaderMobile'

const BaseLayout = ({ children, routesMenu }) => {
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
              {/* <SubHeader homeURL={homeURL}/>} */}
              <div id='kt_toolbar_container' className='container-fluid d-flex my-5'>
                <div class="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
                  <h1 class="d-flex align-items-center text-dark fw-bolder my-1 fs-3">Account Overview</h1>
                  <span class="h-20px border-gray-200 border-start mx-4"></span>
                  <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
                    <li class="breadcrumb-item text-muted">
                      <a href="/metronic8/demo1/index.html" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">Account</li>
                    <li class="breadcrumb-item">
                      <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Overview</li>
                  </ul>
                </div>
              </div>
              <div className='post d-flex flex-column-fluid'>
                <div className='container-fluid'>
                  {/* begin::Entry */}
                  {children}
                  {/* end::Entry */}
                </div>
              </div>
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
