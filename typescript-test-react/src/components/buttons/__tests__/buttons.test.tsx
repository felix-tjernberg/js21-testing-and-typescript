import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import { SubmitButton } from '../submit/submitButton'

describe('Button tests', () => {
  test('Testing submit button', () => {
    // Arrange
    const color = 'red'
    const border = '1px solid black'
    const radius = '5px'
    const height = '50px'
    const width = '100px'
    const fontSize = '20px'
    const onClick = () => console.log('clicked')
    const logSpy = jest.spyOn(console, 'log')

    // Act
    render(
      <SubmitButton
        color={color}
        border={border}
        radius={radius}
        height={height}
        width={width}
        fontSize={fontSize}
        onClick={onClick}
      />
    )
    const buttonOnScreen = screen.getByTestId('submit-button')
    buttonOnScreen.click()

    // Assert
    expect(logSpy).toHaveBeenCalledWith('clicked')
    expect(buttonOnScreen).toBeEnabled()
    expect(buttonOnScreen).toHaveStyle({
      backgroundColor: color,
      border: border,
      borderRadius: radius,
      height: height,
      width: width,
      fontSize: fontSize
    })
  })
})
