import {DisplayItems} from "../../../../../../components/display-items"

const AccountInformationDisplay = ({ account, error, isFetching, fields }) => {

  return (
    <DisplayItems
      error={error}
      isFetching={isFetching}
      object={account}
      fields={fields}
    />
  )
}

export default AccountInformationDisplay
