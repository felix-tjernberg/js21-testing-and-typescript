import Counter from './Counter.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<Counter>

const meta: Meta<Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['docsPage']
}

export default meta

export const Default: Story = {}

export const Story1: Story = {}
Story1.args = {
  count: -1
}
Story1.storyName = 'Count is -1'

export const Story2: Story = {}
Story2.args = {
  count: undefined
}
Story2.storyName = 'Count is undefined'
