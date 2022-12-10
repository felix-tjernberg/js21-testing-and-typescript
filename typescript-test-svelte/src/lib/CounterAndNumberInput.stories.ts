import CounterAndNumberInput from './CounterAndNumberInput.svelte'

import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<CounterAndNumberInput>

const meta: Meta<CounterAndNumberInput> = {
  title: 'Compositions/CounterAndNumberInput',
  component: CounterAndNumberInput,
  tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component: 'NumberInput and Counter components with a shared state'
      }
    }
  }
}
export default meta

export const DefaultState: Story = {}
