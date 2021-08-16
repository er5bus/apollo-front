import * as Yup from 'yup'
import { fromJS } from 'immutable'
import { INPUT } from '../../../../../../components/forms'

// Validation schema
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
