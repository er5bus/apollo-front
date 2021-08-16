import { useDispatch, useSelector } from 'react-redux'
import { Trans } from 'react-i18next'
import { isEqual } from 'lodash'
import { forgotPassword, clearError } from './../../store/actions'
import { ToastError, ToastSuccess } from 'src/components/controls'
import {forgotPasswordFields} from './helpers'
import {Form} from 'src/components/handle-fields'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import pageRoutes from './..'

const ForgotPassword = () => {
  const dispatch = useDispatch()

  const { isLoading, error, success } = useSelector((state) => ({
    isLoading: state.common.auth.isLoading,
    error: state.common.auth.error,
    success: state.common.success
  }), isEqual)

  const onSubmit = (values) => {
    dispatch(forgotPassword(values))
  }

  return (
    <>
      <div className='w-lg-500px p-10 p-lg-15 mx-auto'>
        {/* <!--begin::Heading--> */}
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'><Trans>Forgot Password ?</Trans></h1>
          <div className='text-gray-400 fw-bold fs-4'>
            <Trans>Enter your user account's verified email address and we will send you a password reset link.</Trans>
          </div>
        </div>
        {/* <!--end::Heading--> */}
        <ToastError
          error={error}
          onClose={() => dispatch(clearError())}
        />
        <ToastSuccess
          condition={success}
          message={<Trans>Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.</Trans>}
          onClose={() => dispatch(clearError())}
        />
        <Form
          onSubmit={onSubmit}
          fields={forgotPasswordFields}
          className='form fv-plugins-bootstrap fv-plugins-framework'
        >
          <div className='form-group d-flex flex-wrap justify-content-between align-items-center'>
            <Link
              to={pageRoutes.login.path}
              className='link-primary fs-6 fw-bolder'
            >
              <Trans> Already have an account ? </Trans>
            </Link>
            <Button
              type='submit'
              color='primary'
              disabled={isLoading}
              className='btn btn-md btn-primary fw-bolder me-3 my-2'
            >
              {isLoading && <span className='spinner-border spinner-border-sm align-left spinner-white mx-2 ' />}
              <span>
                <Trans> Reset password </Trans>
              </span>
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default ForgotPassword
