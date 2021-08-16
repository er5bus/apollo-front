import * as Yup from "yup"
import {fromJS} from 'immutable'
import {INPUT} from "../../../../../../components/forms"


// Validation schema
export const personalInformationFields = fromJS([
  {
    name: "firstName",
    component: INPUT,
    label: "First name",
    placeholder: "FIRST_NAME",
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "lastName",
    component: INPUT,
    label: "Last name",
    placeholder: "Last name",
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "phone",
    component: INPUT,
    mask: "99999999",
    label: "Phone",
    placeholder: "Phone",
    size: 6,
    validation: Yup.number().phone(),
    maxLength: 8,
  },
  {
    name: "currentPassword",
    inputGroupClassName: "pt-5",
    component: INPUT,
    type: "password",
    label: "Current password",
    placeholder:  "Current password",
    size: 12,
    validation: Yup.string().min(2).max(200).required(),
  },
])
