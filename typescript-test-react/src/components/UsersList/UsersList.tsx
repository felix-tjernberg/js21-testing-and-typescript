import React from 'react'
import { UserProps } from '../../Interfaces/UserProps'
import User from './User'

interface UsersListProps {
  users: UserProps[]
}

const UserList = ({ users }: UsersListProps) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.userName}>
          <User age={user.age} userName={user.userName} role={user.role} />
        </li>
      ))}
    </ul>
  )
}

export default UserList
