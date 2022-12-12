import GlobalStyling from './GlobalStyling.svelte'
import customViewports from './customViewports'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: customViewports,
  options: {
    storySort: {
      order: ['Design System', 'Pages', 'Compositions', 'Components']
    }
  }
}
export const decorators = [() => GlobalStyling]
