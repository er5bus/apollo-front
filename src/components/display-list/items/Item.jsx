import React, {useMemo} from "react"
import { isArray, isString, isEmpty } from "lodash"
import ContentLoader from "react-content-loader"
import { Trans } from "react-i18next"
import DisplayItem from "./BaseItem"
import {Col} from "react-bootstrap"
import {getAttr} from "src/helpers"


const ItemLodaer = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height={10}
    viewBox="0 0 100% 10"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="10" />
  </ContentLoader>
)

const Item = ({ field, object }) => {

  const { name, hide, hideOn, condition, options, label, html=false, icon=undefined, size = 12 } = field

  const show = useMemo(() => {
    let hideField = hide
    if (isString(hideOn) && hideField){
      const value = getAttr(object, hideOn, null)
      hideField = isArray(condition) ? !condition.includes(value) : condition !== value
    }
    if (condition && hide){
      return false
    }
    return hideField
    // eslint-disable-next-line
  }, [object])


  const value = useMemo(() => {
    const attrValue = getAttr(object, name, <Trans> Unspecified </Trans>)
    if (isArray(options) && !isArray(attrValue)) {
      const selectedOption = options.find((option) => option.value === attrValue)
      return (selectedOption && selectedOption.label) || <Trans> Unspecified </Trans>
    }else if (isArray(attrValue) && isArray(attrValue) && isArray(options)){
      const selectedOptions = options.filter((option) =>  attrValue.includes(option.value))
      return (isArray(selectedOptions)) ? selectedOptions.map((val) => val.label).join(", ") : <Trans> Unspecified </Trans>
    }

    return attrValue
    // eslint-disable-next-line
  }, [object])

  return (
    <Col lg={size} className={ show ? 'd-none' : '' }>
      <DisplayItem
        primary={ label }
        html={html}
        icon={icon}
        secondary={ !isEmpty(object) ? value : <ItemLodaer /> }
      />
    </Col>
  )
}


export default Item
