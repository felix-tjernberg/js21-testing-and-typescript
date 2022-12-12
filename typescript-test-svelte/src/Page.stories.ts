import Page from './Page.svelte'

import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import type { StoryObj } from '@storybook/svelte'
type Story = StoryObj<Page>

export default {
  component: Page,
  title: 'Pages/Page'
}

export const InitialState: Story = {}

export const Story1: Story = {}
Story1.storyName = '1337 state'
Story1.play = async ({ canvasElement }) => {
  const STARTING_BUTTON_VALUES = [0, 1, 2, 3]
  const STARTING_INPUT_VALUE = 0
  const NUMBER_OF_CLICKS = [1, 2, 1, 4]
  const EXPECTED_FINAL_NUMBERS = [1, 3, 3, 7]

  const canvas = within(canvasElement)
  const buttons = await canvas.getAllByRole('button')
  const numberInput = (await canvas.getByRole('spinbutton')) as HTMLInputElement

  await await STARTING_BUTTON_VALUES.forEach(async (value, index) => {
    await expect(buttons[index].textContent).toBe(`count is ${value}`)
  })
  await expect(numberInput.value).toBe(`${STARTING_INPUT_VALUE}`)

  await await NUMBER_OF_CLICKS.forEach(async (clicks, index) => {
    console.log(clicks, buttons[index])

    for (let i = 0; i < clicks; i++) {
      await userEvent.click(buttons[index])
    }
    await expect(buttons[index].textContent).toBe(
      `count is ${EXPECTED_FINAL_NUMBERS[index]}`
    )
  })

  await expect(numberInput.value).toBe('1')
}
