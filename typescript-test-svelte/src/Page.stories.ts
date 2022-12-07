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
  const canvas = within(canvasElement)
  const buttons = await canvas.getAllByRole('button')
  const numberInput = (await canvas.getByRole('spinbutton')) as HTMLInputElement

  const buttonValues = buttons.map((button) => button.textContent.slice(-1))
  const finalButtonsValues = buttonValues.map((value) => Number(value) + 1)

  await buttons.forEach(async (button, index) => {
    await userEvent.click(button)
    await expect(button.textContent).toBe(
      `count is ${finalButtonsValues[index]}`
    )
  })
  await expect(numberInput.value).toBe('1')
}
