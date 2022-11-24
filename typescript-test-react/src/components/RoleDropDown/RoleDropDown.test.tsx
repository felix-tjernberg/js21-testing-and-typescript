import '@testing-library/jest-dom'
import { rolesSelectPropsArray } from './RoleDropDown'

// test if roles of interface Roles exist in RoleDropDown
describe('RoleDropDown tests', () => {
  test('Testing if roles exist in RoleDropDown', () => {
    // Arrange
    const options = [
      { value: 'Admin', label: 'Admin' },
      { value: 'User', label: 'User' }
    ]

    // Act
    const generatedOptions = rolesSelectPropsArray()

    // Assert
    expect(generatedOptions).toEqual(options)
  })
})
