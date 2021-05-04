/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { activateSchoolDropout, fetchSchoolDropouts } from "../../store/actions"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {ActionModal} from "../../../../../../components/partials"

const SchoolDropoutActivateDialog = ({ params, show, onHide }) => {
  // SchoolDropouts UI Context
  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()

  // SchoolDropouts Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.schoolDropout.isLoading, success: state.admin.schoolDropout.success }),
    shallowEqual
  )

  const onActivateSchoolDropout = () => {
    // server request for deleting schoolDropout by id
    dispatch(activateSchoolDropout(params))
  }

  const onRefresh = () => {
    dispatch(fetchSchoolDropouts(schoolDropoutsUIProps.queryParams))
    schoolDropoutsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onActivateSchoolDropout}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="SCHOOL_DROPOUT.DELETE.TITLE" />}
      body={<FormattedMessage id="SCHOOL_DROPOUT.DELETE.MSG" />}
    />
  )
}


export default SchoolDropoutActivateDialog
