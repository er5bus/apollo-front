import {changeAccountPassword} from "../../store/actions"
import { Trans } from "react-i18next"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import {FormCard} from "src/components/controls"
import {changePasswordFields} from "../../helpers"
import {Form} from "src/components/handle-fields"


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
        <Form
          isLoading={isLoading}
          onSubmit={onSubmit}
          fields={changePasswordFields}
          saveRef={saveRef} 
        />
      }
    </FormCard>
  )
}

export default ChangePassword
