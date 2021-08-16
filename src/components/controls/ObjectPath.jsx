import {getAttr} from "../../helpers"
import { Trans } from "react-i18next"

const ObjectPath = ({ object, path, defaultValue = <Trans>Unspecified</Trans> }) => 
  getAttr(object, path, defaultValue)


export default ObjectPath
