import Counter from './Counter.svelte'

import { withDesign } from 'storybook-addon-designs'
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<Counter>

const meta: Meta<Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['docsPage'],
  decorators: [withDesign],
  parameters: {
    docs: {
      description: {
        component: 'Button that increments and shows a counter'
      }
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/D4ytlSaO41unhZYevTXGUQ/Untitled?node-id=2%3A7&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A7'
    }
  },
  argTypes: {
    count: {
      control: {
        type: 'number'
      }
    }
  }
}

export default meta

export const DefaultState: Story = {}

export const Story1: Story = {}
Story1.args = {
  count: -1
}
Story1.storyName = 'Count is -1'
Story1.play = async ({ canvasElement }) => {
  const button = canvasElement.querySelector('button')
  await expect(button.textContent).toBe('count is -1')
}

export const Story2: Story = {}
Story2.args = {
  count: undefined
}
Story2.storyName = 'Count is undefined'
Story2.play = async ({ canvasElement }) => {
  const button = canvasElement.querySelector('button')
  await expect(button.textContent).toBe('count is 0')
}

export const Story3: Story = {}
Story3.args = {
  //@ts-ignore // This is a chaos test
  count: 'A string'
}
Story3.storyName = 'Count is string'
Story3.play = async ({ canvasElement }) => {
  const button = canvasElement.querySelector('button')
  await expect(button.textContent).toBe('count is 0')
}

export const Story4: Story = {}
Story4.args = {
  count: null
}
Story4.storyName = 'Count is null'
Story4.play = async ({ canvasElement }) => {
  const button = canvasElement.querySelector('button')
  await expect(button.textContent).toBe('count is 0')
}
