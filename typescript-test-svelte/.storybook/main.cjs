module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/jest',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage'
  ],
  framework: {
    name: '@storybook/svelte-vite',
    options: {}
  },
  docs: {
    docsPage: true
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      $lib: path.resolve(__dirname, '../src/lib')
    }
    return config
  }
}
