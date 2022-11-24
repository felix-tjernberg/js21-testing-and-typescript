import React from 'react'
import { UserProps } from '../Interfaces/UserProps'

const UserList = (users: UserProps[]) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.userName}>{user.userName}</li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
