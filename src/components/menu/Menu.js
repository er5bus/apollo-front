import {memo, useEffect, useState} from 'react'
import {Redirect, Switch, withRouter} from 'react-router-dom'
import {Card, CardBody} from 'src/components/controls'
import RouteTransition from './transition/MenuRouteTransition'
import RenderItems from './render/RenderItems'


const Menu = ({ children, items, match: { path } }) => {

  const [redirectTo, setRedirectTo] = useState()

  useEffect(() => {
    setRedirectTo(items.length && items[0])
  }, [items])

  return (
    <>
      <Card>
        <CardBody>
          { children }
          <div className='d-flex overflow-auto h-55px'>
            <div className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              {items.map((item, idx) => <RenderItems key={`items-${idx}`} {...item} path={`${path}/${item.path}`} />)}
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="mb-5 mb-xl-10" />
      <Switch>
        {items.map((item, idx) => <RouteTransition key={`routes-${idx}`} path={`${path}/${item.path}`} component={item.component} /> )}
        {redirectTo && <Redirect from="*" to={`${path}/${redirectTo.path}`} />}
      </Switch>
    </>
  )
}

export default memo(withRouter(Menu))
