import * as Yup from 'yup'
import { fromJS } from 'immutable'
import { INPUT } from 'src/components/handle-fields'

// Validation schema
export const accountInformationFields = fromJS([
  {
    name: 'email',
    component: INPUT,
    label: 'Email',
    placeholder: 'Email',
    size: 12,
    validation: Yup.string().email().min(3).max(50).required()
  },
  {
    name: 'username',
    component: INPUT,
    label: 'Username',
    placeholder: 'Username',
    size: 12,
    validation: Yup.string().min(3).max(50).required()
  },
  {
    name: 'currentPassword',
    inputGroupClassName: 'pt-5',
    component: INPUT,
    type: 'password',
    label: 'Current password',
    placeholder: 'Current password',
    size: 12,
    validation: Yup.string().required()
  }
])

export const changePasswordFields = fromJS([
  {
    name: 'newPassword',
    component: INPUT,
    type: 'password',
    label: 'New password',
    placeholder: 'New password',
    size: 12,
    validation: Yup.string().min(3).max(50).required()
  },
  {
    name: 'confirmPassword',
    component: INPUT,
    type: 'password',
    label: 'Confirm password',
    placeholder: 'Confirm password',
    size: 12,
    validation: Yup.string().required().equalTo(Yup.ref('newPassword')).required()
  },
  {
    name: 'currentPassword',
    inputGroupClassName: 'pt-5',
    component: INPUT,
    type: 'password',
    label: 'Current password',
    placeholder: 'Current password',
    size: 12,
    validation: Yup.string().min(3).max(50).required()
  }
])


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


export const accountDisplayFields = fromJS([
  {
    name: "user.firstName",
    label: "First name",
    size: 6,
  },
  {
    name: "user.lastName",
    label: "Last name",
    size: 6
  },
  {
    name: "phone",
    label: "Phone",
    size: 6,
  },
  {
    name: "address",
    label: "Address",
    size: 6
  }
])
