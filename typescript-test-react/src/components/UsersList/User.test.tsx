import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Roles from '../../Enums/Roles'
import { UserProps } from '../../Interfaces/UserProps'
import User from './User'

// Render this user with User.tsx

describe('User test', () => {
  test('User text rendering on screen', () => {
    // Arrange
    const user: UserProps = { userName: 'Dawid', age: 100, role: Roles.User }

    // Act
    render(<User userName={user.userName} role={user.role} age={user.age} />)

    // Assert
    expect(screen.getByText(new RegExp(user.userName))).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(user.age?.toString() || '1337')) // Add number incase age is undefined
    ).toBeInTheDocument()
    expect(screen.getByText(new RegExp(user.role))).toBeInTheDocument()
  })
})
