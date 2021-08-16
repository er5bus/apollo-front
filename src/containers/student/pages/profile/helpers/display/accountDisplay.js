import {fromJS} from 'immutable'


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
