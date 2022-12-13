module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/jest',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/svelte-vite'
  },
  docs: {
    docsPage: true
  }
}
