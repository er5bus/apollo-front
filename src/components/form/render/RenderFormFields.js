import React, {useEffect} from "react"
import _ from 'lodash'
import { FastField } from "formik"
import { Row, Col } from "react-bootstrap"

import { FORM_COMPONENT, DEFAULT_TYPE } from "./../inputs-types/index"
import {useControlUISelector} from "../context"

const RenderFields = (props) => {

  const { fields } = props

  const formUiProps = useControlUISelector()

  useEffect(() => {
    if (!_.isEmpty(fields) && formUiProps){
      formUiProps.setFields(fields)
    }
    // eslint-disable-next-line
  }, [fields])

  const renderField = _.memoize(({ name, component, ...props }) => (
    <FastField
      name={name}
      component={FORM_COMPONENT[component] || DEFAULT_TYPE }
      { ...props }
    />
  ))

  const renderFields = React.useMemo(()=> (<Row>
    {fields.toArray().map((input, i) => {
      const { size = "12", validation, ...field } = input.toObject()
      return (
        <Col key={i} lg={size}>
          { renderField(field) }
        </Col>
      )
    })}
  </Row>), [fields, renderField])

  return <div>{ renderFields }</div>
}

export default RenderFields
