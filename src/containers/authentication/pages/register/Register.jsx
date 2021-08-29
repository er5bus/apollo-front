import React from 'react'
import { isEqual } from 'lodash'
import { Trans } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { register, clearError } from './../../store/actions'
import { ToastError, ToastSuccess } from './../../../../components/controls'
import { registerFields} from './helpers'
import {Form} from 'src/components/handle-fields'
import {Button} from 'react-bootstrap'
import pageRoutes from './..'

const Login = () => {
  const dispatch = useDispatch()
  const { error, isLoading, success } = useSelector((state) => ({
    error: state.common.auth.error,
    isLoading: state.common.auth.isLoading,
    success: state.common.auth.success
  }), isEqual)

  const onSubmit = (values) => {
    dispatch(register(values))
  }

  return (
    <div className='w-lg-500px p-lg-15 mx-auto'>
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'><Trans>Register In to our traning center</Trans></h1>
        <div className='text-gray-400 fw-bold fs-4'> <Trans> Already have account </Trans>
          <Link to={pageRoutes.login.path} className='link-primary fw-bolder'><Trans> login ?</Trans></Link>
        </div>
      </div>
      <ToastError
        error={error}
        onClose={() => dispatch(clearError())}
      />
      <ToastSuccess
          condition={success}
          message={<Trans>Your account has been createed successfully, Check your email for activation link. If it doesn’t appear within a few minutes, check your spam folder.</Trans>}
          onClose={() => dispatch(clearError())}
        />
      <Form
        onSubmit={onSubmit}
        fields={registerFields}
        clearFileds={success}
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      >
        <div className='form-group d-flex flex-wrap justify-content-between align-items-center'>
          <Link
            to={pageRoutes.forgotPassword.path}
            className='link-primary fs-6 fw-bolder'
          >
            <Trans> Forgot Password ? </Trans>
          </Link>
          <Button
            type='submit'
            color='primary'
            disabled={isLoading}
            className='btn btn-md btn-primary fw-bolder me-3 my-2'
          >
            {isLoading && <span className='spinner-border spinner-border-sm align-left spinner-white mx-2 ' />}
            <span>
              <Trans> Sign In </Trans>
            </span>
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Login
