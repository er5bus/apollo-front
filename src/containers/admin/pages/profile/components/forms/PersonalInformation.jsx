import {updatePersonalInformation} from "src/store/actions"
import {Trans} from "react-i18next"
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import {FormCard} from "src/components/controls"
import {Form} from "src/components/form"
import {personalInformationFields} from "../../helpers"


const PersonalInformation = () => {

  const dispatch = useDispatch()

  const onSubmit = (values) => {
    dispatch(updatePersonalInformation(values))
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
      title={<Trans>Personal information</Trans>}
    >
      { ({ saveRef }) => (
          <Form
            isLoading={isLoading}
            onSubmit={onSubmit}
            fields={personalInformationFields}
            initialValues={account}
            saveRef={saveRef}
          />
      )}
    </FormCard>
  )
}

export default PersonalInformation
