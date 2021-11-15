import { NavLink } from "react-router-dom"

const Link = ({ path, hideOn=false, condition=false, label }) => {

  return ( (hideOn && condition === true) ? <></> :
    <li className="nav-item">
      <NavLink to={path} className="nav-link text-active-primary me-6 py-4">
        {label}
      </NavLink>
    </li>
  )
}

export default Link
