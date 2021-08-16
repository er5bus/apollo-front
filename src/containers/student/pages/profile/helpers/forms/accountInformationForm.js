import * as Yup from 'yup'
import { fromJS } from 'immutable'
import { INPUT } from '../../../../../../components/forms'

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
