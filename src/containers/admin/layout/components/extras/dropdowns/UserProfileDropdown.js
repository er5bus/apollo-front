/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import {Link} from "react-router-dom"
import { Trans } from "react-i18next"
import Dropdown from "react-bootstrap/Dropdown"
import {useSelector, shallowEqual} from "react-redux"
import {DropdownTopbarItemToggler} from "./DropdownTopbarItemToggler"
import {ObjectPath, UserAvatar} from "../../../../../../components/controls"

import adminRoutes from 'src/containers/admin/pages/routes'
import commonRoutes from 'src/containers/authentication/pages/routes'


const UserProfileDropdown = () => {
  const { currentUser } = useSelector(state => ({ currentUser: state.common.auth.currentUser}), shallowEqual)

  return (
    <Dropdown as={DropdownTopbarItemToggler} variant="secondary" navbar={true} drop="down" alignRight>
      <Dropdown.Toggle
        as="a"
        id="dropdown-toggle-user-profile"
        className="cursor-pointer symbol symbol-30px symbol-md-40px"
      >
        <UserAvatar email="rami2sfari@gmail.com" size="100" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold py-4 fs-6 w-275px">
        <div className="menu-item px-3">
          <div className="menu-content d-flex align-items-center px-3">
            <div className="symbol symbol-50px me-5">
              <UserAvatar email="rami2sfari@gmail.com" size="100" />
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bolder d-flex align-items-center fs-5"><ObjectPath object={currentUser} path={["firstName", "lastName"]} />
                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2"><ObjectPath object={currentUser} path="title" /></span></div>
              <a href="#" className="fw-bold text-muted text-hover-primary fs-7"><ObjectPath object={currentUser} path="email" /></a>
            </div>
          </div>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5">
          <Link to={adminRoutes.profile.path} className="menu-link px-5"><Trans>My Profile</Trans></Link>
        </div>

        <div className="menu-item px-5">
          <Link to={adminRoutes.profile.path} className="menu-link px-5"><Trans>Account Settings</Trans></Link>
        </div>

        <div className="separator my-2"></div>

        <div className="menu-item px-5">
          <Link to={commonRoutes.logout.path} className="menu-link px-5"><Trans>Sign Out</Trans></Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  )
}


export default UserProfileDropdown
