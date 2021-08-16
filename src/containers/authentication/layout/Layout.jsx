/* eslint-disable jsx-a11y/anchor-is-valid */
import { Switch, Redirect, withRouter} from "react-router-dom"
import pageRoutes from "../pages"

import AuthenticationLayout from "./components/AuthenticationLayout"
import RouteTransition from "./components/RouteTransition"

const BaseLayout = () => {

  return (
    <AuthenticationLayout>
      <Switch>
        { Object.keys(pageRoutes).map((route) => (
          <RouteTransition key={route} { ...pageRoutes[route] } />
        )) }
        <Redirect from="*" to={pageRoutes.login.path} />
      </Switch>
    </AuthenticationLayout>
  )
}


export default withRouter(BaseLayout)
