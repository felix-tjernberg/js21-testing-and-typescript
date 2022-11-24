import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Roles from '../../Enums/Roles'
import { UserProps } from '../../Interfaces/UserProps'
import UsersList from './UsersList'

// Render this user with User.tsx

describe('UsersList test', () => {
  test('User text rendering on screen', () => {
    // Arrange
    const users: UserProps[] = [
      { userName: 'Dawid', age: 100, role: Roles.User },
      { userName: 'Felix', age: 99, role: Roles.Admin }
    ]

    // Act
    render(<UsersList users={users} />)

    // Assert
    expect(screen.getByText(new RegExp(users[0].userName))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(users[1].userName))).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(users[0].age?.toString() || '1337'))
    ).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(users[1].age?.toString() || '1337'))
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(users[0].role))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(users[1].role))).toBeInTheDocument()
  })
})
