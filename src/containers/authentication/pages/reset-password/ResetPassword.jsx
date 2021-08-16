import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { isEqual } from 'lodash'
import { Trans } from 'react-i18next'
import {ToastError} from "src/components/controls/Toast"
import {resetPasswordFields} from './helpers'
import {Form} from 'src/components/handle-fields'
import {Button} from 'react-bootstrap'

import { resetPassword, fetchToken, clearError } from "./../../store/actions"


const ResetPassword = ({ match: { params } }) => {

  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => ({
    error: state.common.auth.error,
    isLoading: state.common.auth.isLoading
  }), isEqual)

  useEffect(() => {
    dispatch(fetchToken(params))

    // eslint-disable-next-line
  }, [params])

  const onSubmit = (values) => {
    const { param } = params
    dispatch(resetPassword({ ...values, token: param }))
  }

  return <div className='w-lg-500px p-lg-15 mx-auto'>
    <div className='text-center mb-10'>
      <h1 className='text-dark mb-3'><Trans>Change your password</Trans></h1>
      <div className='text-gray-400 fw-bold fs-4'>
        <Trans>Enter your new password.</Trans>
      </div>
    </div>
    <ToastError
      error={error}
      onClose={() => dispatch(clearError())}
    />
    <Form
      onSubmit={onSubmit}
      fields={resetPasswordFields}
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
    >
      <div className='form-group d-flex flex-wrap justify-content-between flex-row-reverse'>
        <Button
          type='submit'
          color='primary'
          disabled={isLoading}
          className='btn btn-md btn-primary fw-bolder me-3 my-2'
        >
          {isLoading && <span className='spinner-border spinner-border-sm align-left spinner-white mx-2 ' />}
          <span>
            <Trans> Reset Password </Trans>
          </span>
        </Button>
      </div>
    </Form>
  </div>
}
export default ResetPassword
