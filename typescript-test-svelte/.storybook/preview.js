import GlobalStyling from './GlobalStyling.svelte'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: [
        'Design System',
        'Pages',
        'Components',
        ['Components/Basic', 'Components/Composition']
      ]
    }
  }
}
export const decorators = [() => GlobalStyling]
