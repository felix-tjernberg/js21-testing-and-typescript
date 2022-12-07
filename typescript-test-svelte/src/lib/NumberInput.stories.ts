import NumberInput from './NumberInput.svelte'

import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<NumberInput>

const meta: Meta<NumberInput> = {
  title: 'Components/NumberInput',
  component: NumberInput,
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

export const Story1: Story = {}
Story1.args = {
  value: -1
}
Story1.storyName = 'Value is -1'
Story1.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input')
  await expect(input.value).toBe('-1')
}

export const Story2: Story = {}
Story2.args = {
  value: undefined
}
Story2.storyName = 'Value is undefined'
Story2.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input')
  await expect(input.value).toBe('0')
}

export const Story3: Story = {}
Story3.args = {
  //@ts-ignore // This is a chaos test
  value: 'A string'
}
Story3.storyName = 'Value is string'
Story3.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input')
  await expect(input.value).toBe('0')
}

export const Story4: Story = {}
Story4.args = {
  value: null
}
Story4.storyName = 'Value is null'
Story4.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input')
  await expect(input.value).toBe('0')
}
