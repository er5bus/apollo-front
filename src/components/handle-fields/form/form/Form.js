import React, {useEffect, useRef} from "react"
import _ from "lodash"
import * as Yup from "yup"
import { Formik, Form as FormikForm, useFormikContext } from "formik"
import { createYupSchema } from "../helpers"

import RenderFormFields from "../render/RenderFormFields"
import {ControlUIProvider, useControlUISelector} from "../../store"


const DynamicFormError = () => {

  const { errors, submitCount } = useFormikContext()
  const formUiProps = useControlUISelector()

  React.useEffect(() => {
    if (!_.isEmpty(errors)){
      formUiProps.setFormError(errors)
      formUiProps.updateSubmitCount(submitCount)
    }
    // eslint-disable-next-line
  }, [submitCount, errors]);
  return null;
};

const DynamicForm = (props) => {

  const {
    children,
    fields = [],
    className,
    clearValuesAfterSubmit,
    validationSchema,
    reset = false,
    onChange,
    saveRef,
    onSubmit,
    initialValues = {}
  } = props

  const formUiProps = useControlUISelector()
  const resetRef = useRef()

  useEffect(() => {
    formUiProps.setFields(fields)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields])

  const fieldsValidation = React.useMemo(() =>  {
    return createYupSchema(formUiProps.fields)
  }, [formUiProps.fields])

  const initialSnapshot = React.useMemo(() => {
    const snapshot = {}
    formUiProps.fields.forEach(field => {
      if (!field.get("name").includes("[]")) {
        _.set(snapshot, field.get("name"), _.get(initialValues, field.get("name"), _.get(field, "initialValue", "")) )
      }
    })
    return snapshot

    // eslint-disable-next-line
  }, [formUiProps.fields, initialValues])

  const handleSubmit = (values) => {
    onSubmit(values)
    formUiProps.setIsSubmitted(true)
  }

  const handleReset = () => {
    if (reset){
      handleSubmit({})
    }
  }

  useEffect(() => {
    if (clearValuesAfterSubmit && !reset){
      resetRef && resetRef.current.click()
    }
    // eslint-disable-next-line
  }, [clearValuesAfterSubmit, reset])

  return (
      <Formik
        enableReinitialize={true}
        onSubmit={handleSubmit}
        onChange={onChange}
        onReset={handleReset}
        validationSchema={Yup.isSchema(validationSchema) ? validationSchema : fieldsValidation }
        initialValues={ Object.assign(initialSnapshot, !_.isEmpty(initialValues) && initialValues) }
        validateOnChange={true}
      >
        {(form) => {
          return (
            <FormikForm className={className} onSubmit={form.handleSubmit}>
              <RenderFormFields fields={fields} />
              { children }
              { saveRef && <button ref={saveRef} className="d-none" type="submit"></button> }
              <button ref={resetRef} className="d-none" type="reset"></button>
              <DynamicFormError />
            </FormikForm>
          )
        }}
      </Formik>
  )
}


const Form = ({ children, ...props }) => (<ControlUIProvider><DynamicForm { ...props }>{ children }</DynamicForm></ControlUIProvider>)

export default React.memo(Form)
