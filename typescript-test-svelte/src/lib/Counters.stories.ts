import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'

import type { Meta, StoryObj } from '@storybook/svelte'
import Counters from './Counters.svelte'
type Story = StoryObj<Counters>

const meta: Meta<Counters> = {
  title: 'Components/Counters',
  component: Counters,
  tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component: 'A simple component that renders a button and a counter'
      }
    }
  }
}

export default meta

export const Default: Story = {}

export const Story1: Story = {
  args: {
    buttons: [{ count: 3 }, { count: 2 }, { count: 3 }]
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

Story1.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = await canvas.getAllByText('count is 3')[0]
  await sleep(10)
  await userEvent.click(button)
  await expect(button.textContent).toBe('count is 4')
  await sleep(10)
  await userEvent.click(button)
  await expect(button.textContent).toBe('count is 5')
}
Story1.storyName = 'Press the button twice'
