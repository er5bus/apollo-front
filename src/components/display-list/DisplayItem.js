import {memo, cloneElement, Children, useEffect, Fragment} from "react"
import { memoize, isEmpty } from "lodash"
import {DEFAULT_ITEM, ITEM_COMPONENT} from "./item-types"
import {Row} from "react-bootstrap"
import {useControlUISelector} from "./context"


const DisplayItem = ({ fields = [], title, children, show=true, error, isFetching=false, object }) => {

  const displayUiProps = useControlUISelector()

  useEffect(() => {
    if (!isEmpty(fields) && displayUiProps){
      displayUiProps.setFields(fields)
    }
    if (displayUiProps){
      displayUiProps.setObject(object)
      displayUiProps.setFetching(isFetching && isEmpty(object))
    }

    if (!isEmpty(error)){
      displayUiProps.setError(error)
    }

    // eslint-disable-next-line
  }, [fields, isFetching, object, error])

  const renderField = memoize(({ component, ...props }) => {
    const Component = ITEM_COMPONENT[component] || DEFAULT_ITEM
    return (
      <Component field={props} isFetching={isFetching} object={object} />
    )
  })

  return (
    <>
      { title && <div className="mt-5">{ title }</div> }
      <Row className={ show ? "" : " d-none" }>
        { fields.map((field, i) => (
          <Fragment key={i}>{ renderField(field) }</Fragment>
        )) }
      </Row>
      {
        Children.map(children, (child, i) => (
          <Fragment key={i}>{ cloneElement(child, { ...child.props, isFetching, object }) }</Fragment>
        ))
      }
    </>
  )
}


export default memo(DisplayItem)
