import {updatePersonalInformation} from "../../store/actions"
import { Trans } from "react-i18next"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import {FormCard} from "../../../../../../components/controls"
import {personalInformationFields} from "../../helpers"
import {FormProvider, Form} from "../../../../../../components/forms"


const PersonalInformation = () => {

  const dispatch = useDispatch()
  const onSubmit = (values) => {
    dispatch(updatePersonalInformation(values))
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
      title={<Trans>Personal information</Trans>}
    >
      { ({ saveRef }) => (
        <FormProvider>
          <Form
            isLoading={isLoading}
            onSubmit={onSubmit}
            fields={personalInformationFields}
            initialValues={account}
            saveRef={saveRef}
          />
        </FormProvider>)
      }
    </FormCard>
  )
}

export default PersonalInformation
