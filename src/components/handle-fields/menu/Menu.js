import {memo} from 'react'
import {Switch, withRouter} from 'react-router-dom'
import {Card, CardBody} from '../../controls'
import RouteTransition from './MenuRouteTransition'
import RenderItems from './RenderItems'

const Menu = ({ children, items, match: { path } }) => {

  return (
    <>
      <Card>
        <CardBody>
          { children }
          <div class='d-flex overflow-auto h-55px'>
            <ul class='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
              {items.map((item, idx) => <RenderItems key={idx} {...item} path={`${path}/${item.path}`} />)}
            </ul>
          </div>
        </CardBody>
      </Card>
      <div className="mb-5 mb-xl-10" />
      <Switch>
        {items.map((item, idx) => <RouteTransition key={idx} path={`${path}/${item.path}`} exact component={item.component} /> )}
      </Switch>
    </>
  )
}

export default memo(withRouter(Menu))
