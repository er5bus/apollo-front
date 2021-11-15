import {Img} from "src/components/controls"


const Brand = () => {
  return (
    <>
      {/*<!--begin::Brand-->*/}
      <div className="aside-logo flex-column-auto" id="kt_aside_logo">
        {/*<!--begin::Logo-->*/}
        <a href="index.html">
          <Img alt="Logo" path="/media/logos/logo.svg" className="h-15px logo" />
        </a>
        {/*<!--end::Logo-->*/}
        {/*<!--begin::Aside toggler-->*/}
        <div id="kt_aside_toggle" className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
          {/*<!--begin::Svg Icon | path: icons/stockholm/Navigation/Angle-double-left.svg-->*/}
          <span className="svg-icon svg-icon-1 rotate-180">
            <Img alt="Logo" path="/media/icons/stockholm/General/Angle-double-left.svg" />
          </span>
          {/*<!--end::Svg Icon-->*/}
        </div>
        {/*<!--end::Aside toggler-->*/}
      </div>
      {/*<!--end::Brand-->*/}
    </>
  )
}


export default Brand
