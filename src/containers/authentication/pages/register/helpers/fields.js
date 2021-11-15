import * as Yup from "yup"
import { fromJS } from 'immutable'
import {INPUT} from "src/components/form"

export const registerFields = fromJS([
  {
    name: "username",
    component: INPUT,
    placeholder: "Username",
    label: "Username",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-5 fv-plugins-icon-container",
    type: "text",
    validation: Yup.string().max(100).nullable().required()
  },
  {
    name: "email",
    component: INPUT,
    placeholder: "E-mail",
    label: "E-mail",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-5 fv-plugins-icon-container",
    type: "text",
    validation: Yup.string().email().max(200).nullable().required()
  },
  {
    name: "password",
    component: INPUT,
    placeholder: "Password",
    label: "Password",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-5 fv-plugins-icon-container",
    type: "password",
    validation: Yup.string().nullable().max(64).required()
  }
])
