import Page from './Page.svelte'

import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<Page>

const meta: Meta<Page> = {
  title: 'Pages/Page',
  component: Page,
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
