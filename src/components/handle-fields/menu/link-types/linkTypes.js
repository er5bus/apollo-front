import * as FIELDS from "./../../fieldsTypes"

import Link from "./../items/Link"
import NestedLinks from "./../items/NestedLinks"
import DownloadLink from "./../items/DownloadLink"
import Seperator from "./../items/Seperator"

export const DEFAULT_MENU_COMPONENT = Link
export const MENU_COMPONENTS = {
  [FIELDS.LINK]: Link,
  [FIELDS.DOWNLOAD_LINK]: DownloadLink,
  [FIELDS.NESTED_LINKS]: NestedLinks,
  [FIELDS.SEPARATOR]: Seperator
}

