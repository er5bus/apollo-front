import { Switch, Route } from 'react-router-dom'

import BaseLayout from './components/BaseLayout'

import routes from './../pages'

const AdminLayout = () => {
  
  return (
    <>
      <BaseLayout routesMenu={routes} homeURL={"routes.home.path"}>
        <Switch>
          {Object.keys(routes).map((key, i) => <Route key={i} {...routes[key]} />)}
          {/*<Redirect from='*' to={"routes.home.path"} />*/}
        </Switch>
      </BaseLayout>

    </>
  )
}

export default AdminLayout
