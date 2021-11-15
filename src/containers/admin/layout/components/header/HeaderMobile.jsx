import { Link } from 'react-router-dom'
import { Img } from 'src/components/controls'

const HeaderMobile = () => {
  return (
    <>
      {/* begin::Header Mobile */}
      <div
        id='kt_header_mobile'
        className='header-mobile align-items-center'
      >
        {/* begin::Logo */}
        <Link to='/'>
          <img alt='logo' width='51' height='30' src='layoutProps.headerLogo' />
        </Link>
        {/* end::Logo */}

        {/* begin::Toolbar */}
        <div className='d-flex align-items-center'>
          {/* begin::Aside Mobile Toggle */}
          <button className='btn p-0 burger-icon burger-icon-left' id='kt_aside_mobile_toggle'>
            <span />
          </button>
          {/* end::Aside Mobile Toggle */}
          <button
            className='btn btn-hover-text-primary p-0 ml-2'
            id='kt_header_mobile_topbar_toggle'
          >
            <span className='svg-icon svg-icon-xl'>
              <Img path='/media/svg/icons/General/User.svg' />
            </span>
          </button>
          {/* end::Topbar Mobile Toggle */}
        </div>
        {/* end::Toolbar */}
      </div>
      {/* end::Header Mobile */}
    </>
  )
}

export default HeaderMobile
