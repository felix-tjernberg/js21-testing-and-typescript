import * as React from 'react'
import { UserProps } from '../../Interfaces/UserProps'

const User: React.FC<UserProps> = ({ userName, age, role, children }) => {
  return (
    <>
      <h2>
        user: {userName} Age {age}
      </h2>
      <h3>Role: {role}</h3>
      <p>{children}</p>
    </>
  )
}
export default User
