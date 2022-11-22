import React from 'react'
import { Roles } from './Roles'

interface UserProps {
  Name: string
  Age?: number
  Role: Roles
}

export const User: React.FC<UserProps> = ({ Name, Age, Role }: UserProps) => {
  return (
    <div>
      <h2>{Name}</h2>
      <p>{Age}</p>
      <p>{Role}</p>
    </div>
  )
}
