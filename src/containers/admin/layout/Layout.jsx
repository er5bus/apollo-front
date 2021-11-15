import {useEffect} from 'react'
import { isEqual } from 'lodash'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { SubheaderUIProvider } from "./components/header/sub-header"
import BaseLayout from './components/BaseLayout'

import layoutRoute from "../../authentication/layoutRoute"
import routes from './../pages/routes'
import {useSelector} from 'react-redux'

const AdminLayout = () => {

  const { isAuthenticated } = useSelector((state) => state.common.auth.toObject(), isEqual )
  const history = useHistory()

  useEffect(() => {
    if (!isAuthenticated) {
      history.push(layoutRoute.path)
    }

    // eslint-disable-next-line
  }, [isAuthenticated])

  return (
    <>
      <SubheaderUIProvider>
        <BaseLayout routesMenu={routes} homeURL={routes.dashboard.path}>
          <Switch>
            {Object.keys(routes).map((key, i) => <Route key={i} {...routes[key]} />)}
            <Redirect from='*' to={routes.dashboard.path} />
          </Switch>
        </BaseLayout>
      </SubheaderUIProvider>
    </>
  )
}

export default AdminLayout
