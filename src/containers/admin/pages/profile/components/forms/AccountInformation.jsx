import {useDispatch, shallowEqual, useSelector} from "react-redux"
import {Trans} from "react-i18next"
import {FormCard} from "src/components/controls"
import {Form} from "src/components/form"
import {accountInformationFields} from "../../helpers"
import {updateAccountInformation} from "src/store/actions"


const AccountInformation = () => {

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(updateAccountInformation(values))
  }

  const { account, isLoading } = useSelector(
    (state) => ({
      account: state.admin.profile.account,
      isLoading: state.admin.profile.isLoading
    }),
    shallowEqual
  )

  return (
    <FormCard
      title={<Trans>Account information</Trans>}
    >
      { ({ saveRef }) =>
        <Form
          isLoading={isLoading}
          fields={accountInformationFields}
          onSubmit={onSubmit}
          initialValues={account}
          saveRef={saveRef}
        />
      }
    </FormCard>
  )
}

export default AccountInformation
