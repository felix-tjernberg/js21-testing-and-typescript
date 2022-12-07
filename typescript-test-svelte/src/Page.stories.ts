import Page from './Page.svelte'

import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import type { Meta, StoryObj } from '@storybook/svelte'
type Story = StoryObj<Page>

const meta: Meta<Page> = {
  title: 'Pages/Page',
  component: Page,
  tags: ['docsPage'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple page that renders NumberInput and Counter components together.'
      }
    }
  }
}
export default meta

export const Default: Story = {}
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const button = await canvas.getByRole('button')
  const input = (await canvas.getByRole('spinbutton')) as HTMLInputElement
  await userEvent.type(input, '5')
  await userEvent.click(button)
  await expect(button.textContent).toBe('count is 6')

  await expect(input.value).toBe('6')

  //TODO Both of these userEvents generates an error but typing and pasting with the browser works fine
  await userEvent.type(input, '-1337', { delay: 10 })
  await expect(button.textContent).toBe('count is -1337')
  await userEvent.paste(input, '-1337')
  await expect(button.textContent).toBe('count is -1337')
}
