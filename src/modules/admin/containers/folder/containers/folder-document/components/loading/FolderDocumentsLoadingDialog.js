import React from "react"
import { injectIntl } from "react-intl"
import {shallowEqual, useSelector} from "react-redux"
import {LoadingDialog} from "./../../../../../../../../components/partials/controls"

const FolderDocumentsLoadingDialog = ({ intl }) => {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.admin.folderDocument.isFetching }),
    shallowEqual
  )
  return <LoadingDialog isLoading={isLoading} text={ intl.formatMessage({ id: "GENERAL.LOADING"}) } />
}


export default injectIntl(FolderDocumentsLoadingDialog)
