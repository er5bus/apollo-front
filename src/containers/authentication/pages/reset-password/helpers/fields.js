import { fromJS } from 'immutable'
import {INPUT} from "src/components/handle-fields"



export const resetPasswordFields = fromJS([
  {
    name: "password",
    component: INPUT,
    placeholder: "Type the new password",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "password"
  },
  {
    name: "confirmPassword",
    component: INPUT,
    placeholder: "Confirm the new password",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "password"
  }
])
