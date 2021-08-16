import {changeAccountPassword} from "../../store/actions"
import { Trans } from "react-i18next"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import {FormCard} from "../../../../../../components/controls"
import {changePasswordFields} from "../../helpers"
import {Form, FormProvider} from "../../../../../../components/forms"


const ChangePassword = () => {

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(changeAccountPassword(values))
  }

  const { isLoading } = useSelector(
    (state) => ({
      account: {},//state.admin.profile.account,
      isLoading: true //state.admin.profile.isLoading
    }),
    shallowEqual
  )

  return (
    <FormCard
      title={<Trans> Change password</Trans>}
    >
      { ({ saveRef }) =>
      <FormProvider>
        <Form
          isLoading={isLoading}
          onSubmit={onSubmit}
          fields={changePasswordFields}
          saveRef={saveRef} 
        />
      </FormProvider>
      }
    </FormCard>
  )
}

export default ChangePassword
