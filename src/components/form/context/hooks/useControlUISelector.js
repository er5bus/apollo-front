import { useMemo } from 'react'
import { isEqual, isEmpty } from 'lodash'
import { getAttr } from '../../../../helpers'
import * as actions from './../actions'
import {useControlUIStore} from './../components/ControlUIProvider'

const useControlUISelector = () => {

  const [state, dispatch] = useControlUIStore()

  const setObject = (payload) => {
    if (!isEqual(state.object, payload)) {
      dispatch(actions.updateObject(payload))
    }
  }

  const setSuccess = (payload) => {
    dispatch(actions.updateSuccess(payload))
    dispatch(actions.updateIsSubmitted(!payload))
  }

  const setFetching = (payload) => {
    if (payload !== state.isFetching) {
      dispatch(actions.updateIsFetching(payload))
    }
  }

  const setError = (payload) => {
    if (!isEqual(state.error, payload) && !isEmpty(payload)) {
      dispatch(actions.updateError(payload))
    }
  }

  const setIsSubmitted = (payload) => {
    dispatch(actions.updateSubmitCount(state.submitCount + 1))
    if (!isEqual(state.isSubmitted, payload)) {
      dispatch(actions.updateIsSubmitted(payload))
    }
  }

  const setDisplayContent = (payload) => {
    if (!isEqual(payload, state.displayContent)) {
      dispatch(actions.updateDisplayContent(payload))
    }
  }

  const setFields = (newFields) => {
    dispatch(actions.updateFields(newFields))
  }

  const formError = useMemo(() => {
    const { error, isSubmitted, success } = state
    if (!isEmpty(error) && isSubmitted && !success) {
      const { status, data = {} } = error
      const { code = undefined } = data

      if (status === 400 && !code) {
        //return formatFormError(state.formFields, data)
      }
    }
    return {}
    // eslint-disable-next-line
  }, [state.error, state.isSubmitted])

  const updateSubmitCount = (count) => {
    dispatch(actions.updateSubmitCount(count))
  }

  const setFormError = (fields) => {
    dispatch(actions.updateFormError(fields))
  }

  const getFieldError = (fieldName) => getAttr(formError, fieldName, undefined)

  return {
    ...state,
    getFieldError,
    setSuccess,
    setFetching,
    setError,
    setObject,
    setIsSubmitted,
    updateSubmitCount,
    setFormError,
    setFields,
    setDisplayContent
  }
}

export default useControlUISelector
