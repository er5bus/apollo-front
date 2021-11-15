import {useSelector, shallowEqual} from "react-redux"
import {Trans} from "react-i18next"
import {ViewCard} from "src/components/controls"
import {DisplayList} from "src/components/display-list"
import {accountOverviewFields} from "../../helpers"


const Overview = () => {

  const {account, error, isFetching} = useSelector(
    (state) => ({
      account: state.admin.profile.account,
      isFetching: state.admin.profile.isFetching,
      error: state.admin.profile.error
    }),
    shallowEqual
  )

  return (
    <ViewCard
      title={<Trans>Account overview</Trans>}
    >
      <DisplayList
        error={error}
        isFetching={isFetching}
        object={account}
        fields={accountOverviewFields}
      />
    </ViewCard>
  )
}


export default Overview
