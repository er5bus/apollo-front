import { useDispatch, shallowEqual, useSelector } from "react-redux"
import { Trans } from "react-i18next"
import {FormCard} from "../../../../../../components/controls"
import {accountInformationFields} from "../../helpers"
import {Form, FormProvider} from "../../../../../../components/forms"


const AccountInformation = () => {

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    //dispatch(updateAccountInformation(values))
  }

  const { account, isLoading } = useSelector(
    (state) => ({
      account: {},//state.admin.profile.account,
      isLoading: true //state.admin.profile.isLoading
    }),
    shallowEqual
  )

  return (
    <FormCard
      title={<Trans>Account information</Trans>}
    >
      { ({ saveRef }) =>
      <FormProvider>
        <Form
          isLoading={isLoading}
          fields={accountInformationFields}
          onSubmit={onSubmit}
          initialValues={account}
          saveRef={saveRef}
        />
      </FormProvider>
      }
    </FormCard>
  )
}

export default AccountInformation
