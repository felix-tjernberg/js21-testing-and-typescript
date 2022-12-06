import Counters from '$lib/Counters.svelte'
import sleep from '$utilities/sleep'

import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<Counters>

const meta: Meta<Counters> = {
  title: 'Components/Counters',
  component: Counters,
  tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component: 'Component that renders multiple counters next to each other'
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

Story1.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const buttonLeft = await canvas.getAllByText('count is 3')[0]
  const buttonMiddle = await canvas.getByText('count is 2')
  await sleep(10)
  await userEvent.click(buttonLeft)
  await expect(buttonLeft.textContent).toBe('count is 4')
  await userEvent.click(buttonLeft)
  await expect(buttonLeft.textContent).toBe('count is 5')
  await sleep(10)
  await userEvent.click(buttonMiddle)
  await expect(buttonMiddle.textContent).toBe('count is 3')
}
Story1.storyName = 'Press the left button twice and middle button once'
Story1.parameters = {
  docs: {
    description: {
      story: 'Some story **markdown**'
    }
  }
}
