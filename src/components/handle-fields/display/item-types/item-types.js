import * as FIELDS from "./../../fieldsTypes"

import Item from "./../items/Item"
import ListOfItems from "./../items/ListOfItems"
import TableOfItems from "./../items/TableOfItems"


export const DEFAULT_ITEM = Item
export const ITEM_COMPONENT = {
  [FIELDS.ITEM]: Item,
  [FIELDS.LIST_OF_ITEMS]: ListOfItems,
  [FIELDS.TABLE_OF_ITEMS]: TableOfItems
}

