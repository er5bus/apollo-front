import { Img } from '../../../../../../../components/controls'

const SearchDropdown = () => {
  return (
    <div className='topbar-item d-flex align-items-stretch ms-1 ms-lg-3'>
      <div className='d-flex align-items-center ms-1 ms-lg-3'>
        <div
          className='btn btn-icon btn-clean btn-lg mr-1'
          id='kt_quick_search_toggle'
        >
          <span className='svg-icon svg-icon-xl svg-icon-primary'>
            <Img path='/media/icons/stockholm/General/Search.svg' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchDropdown
