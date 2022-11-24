import React from 'react'
import Select from 'react-select'
import Roles from '../../Enums/Roles'

export interface SelectProps {
  value: string
  label: string
}

export function rolesSelectPropsArray() {
  return Object.keys(Roles).map((role) => ({
    value: role,
    label: role
  }))
}

const RoleDropDown = () => {
  const options: SelectProps[] = rolesSelectPropsArray()
  return <Select options={options} />
}

export default RoleDropDown
