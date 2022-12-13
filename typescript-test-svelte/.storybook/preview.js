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
  backgrounds: {
    default: 'Light (#FFF)',
    values: [
      { name: 'Light (#FFF)', value: '#FFF' },
      { name: 'Light (--color-100)', value: 'hsl(0, 0%, 98%)' },
      { name: 'Dark (--color-100)', value: 'hsl(0, 0%, 10%)' },
      { name: 'Dark (#333)', value: '#333333' }
    ]
  },
  viewport: customViewports,
  options: {
    storySort: {
      order: ['Design System', 'Pages', 'Compositions', 'Components']
    }
  }
}

export const globalTypes = {
  theme: {
    name: 'Custom toolbar name',
    defaultValue: '420',
    toolbar: {
      items: ['420', '69'],
      name: true,
      dynamicTitle: true
    }
  }
}

export const decorators = [
  (_, story) => ({
    Component: GlobalStyling,
    props: { context: story.globals }
  })
]
