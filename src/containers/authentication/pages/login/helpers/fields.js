import * as Yup from "yup"
import { fromJS } from 'immutable'
import {INPUT} from "src/components/handle-fields"

export const loginFields = fromJS([
  {
    name: "username",
    component: INPUT,
    placeholder: "Username",
    label: "Username",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "text",
    validation: Yup.string().nullable().required()
  },
  {
    name: "password",
    component: INPUT,
    placeholder: "Password",
    label: "Password",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "password",
    validation: Yup.string().nullable().required()
  }
])
