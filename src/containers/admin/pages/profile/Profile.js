import { useSelector, shallowEqual, /*useDispatch*/ } from "react-redux"
import { Trans } from "react-i18next"

//import routes from "./.."
//import { fetchUser } from "./store/actions"

//import AccountInformationDisplay from "./components/display/AccountInformationDisplay"
//import {useEffect} from "react"
import {ObjectPath, Svg, UserAvatar} from "src/components/controls"

import {Menu} from "src/components/handle-fields"
import {profileMenu} from "./helpers"


const AccountInformation = () => {
  // Subheader
  //const subheader = useSubheader()
  //const dispatch = useDispatch()

  ///useEffect(() => {
  //  subheader.push(<Trans> Profile </Trans>)
  //}, [])

  //useEffect(() => {
  //   dispatch(fetchUser())
  //}, [])

  const { account } = useSelector(
    (state) => ({
      account: {}, //state.admin.profile.account,
    }),
    shallowEqual
  )

  return (
    <Menu items={profileMenu}>
      <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
        {/*<!--begin: Pic-->*/}
        <div className="me-7 mb-4">
          <div className="symbol symbol-100px symbol-lg-100px symbol-fixed position-relative">
            <UserAvatar email="rami2sfari@gmail.com" size="100" />
            <div className="position-absolute translate-middle top-0 mt-4 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
          </div>
        </div>
        {/*<!--end::Pic-->*/}
        {/*<!--begin::Info-->*/}
        <div className="flex-grow-1">
          {/*<!--begin::Title-->*/}
          <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
            {/*<!--begin::User-->*/}
            <div className="d-flex flex-column">
              {/*<!--begin::Name-->*/}
              <div className="d-flex align-items-center mb-2">
                <span className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"><ObjectPath object={account} path={["firstName", "lastName"]} /></span>
                <span>
                  {/*<!--begin::Svg Icon | path: icons/duotone/Design/Verified.svg-->*/}
                  <Svg path="/media/icons/stockholm/Design/Verified.svg" />
                  {/*<!--end::Svg Icon-->*/}
                </span>
              </div>
              {/*<!--end::Name-->*/}
              {/*<!--begin::Info-->*/}
              <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <span className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                  {/*<!--begin::Svg Icon | path: icons/duotone/General/User.svg-->*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <Svg path="/media/icons/stockholm/General/User.svg" />
                  </span>
                  {/*<!--end::Svg Icon-->*/}<ObjectPath object={account} path={"title"} />
                </span>
                <span className="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                  {/*<!--begin::Svg Icon | path: icons/duotone/Map/Marker1.svg-->*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <Svg path="/media/icons/stockholm/Map/Marker1.svg" />
                  </span>
                  {/*<!--end::Svg Icon-->*/}<ObjectPath object={account} path={"address"} />
                </span>
                <span className="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                  {/*<!--begin::Svg Icon | path: icons/duotone/Communication/Mail-at.svg-->*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <Svg path="/media/icons/stockholm/Communication/Mail-at.svg" />
                  </span>
                  {/*<!--end::Svg Icon-->*/}<ObjectPath object={account} path={"email"} /></span>
              </div>
              {/*<!--end::Info-->*/}
              <div className="d-flex align-items-center w-200px w-sm-300px flex-column">
                <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                  <span className="fw-bold fs-6 text-gray-400"><Trans>Profile Compleation</Trans></span>
                  <span className="fw-bolder fs-6">50%</span>
                </div>
                <div className="h-5px mx-3 w-100 bg-light mb-3">
                  <div className="bg-success rounded h-5px" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            {/*<!--end::User-->*/}
          </div>
          {/*<!--end::Title-->*/}
        </div>
        {/*<!--end::Info-->*/}
      </div>
    </Menu>
  )
}


export default AccountInformation
