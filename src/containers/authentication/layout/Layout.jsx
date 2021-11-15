/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from "react"
import { Switch, Redirect, withRouter, useHistory} from "react-router-dom"
import { useCurrentUser } from "src/store/hooks"

import layoutRoute from "../../admin/layoutRoute"
import pageRoutes from "../pages/routes"

import AuthenticationLayout from "./components/AuthenticationLayout"
import RouteTransition from "./components/RouteTransition"

const BaseLayout = () => {

  const { isAuthenticated } = useCurrentUser()
  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated){
      history.push(layoutRoute.path)
    }

    // eslint-disable-next-line
  }, [isAuthenticated])

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
