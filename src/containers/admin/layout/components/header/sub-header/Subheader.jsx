import {Fragment} from "react"
import {Link} from "react-router-dom"
import {Img} from "src/components/controls"
import useSubheader from "./useSubheader"


const Subheader = ({ homeURL }) => {

  const subheaderProps = useSubheader()

  return (
    <div id='kt_toolbar_container' className='container-fluid d-flex my-5'>
      <div className="page-title d-flex align-items-center me-3 flex-wrap mb-5 mb-lg-0 lh-1">
        <h1 className="d-flex align-items-center text-dark fw-bolder my-1 fs-3">{ subheaderProps.title }</h1>
        <span className="h-20px border-gray-200 border-start mx-4"></span>
        <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1">
          <li className="breadcrumb-item text-muted">
            <Link to={homeURL} className="text-muted text-hover-primary"> <Img alt="Logo" path="/media/logos/logo.svg" className="h-15px logo" /> </Link>
          </li>
          {  subheaderProps.subheaders.map((title, idx) => (
            <Fragment key={idx}>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-200 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">{ title }</li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default Subheader
