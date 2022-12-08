import DesignSystemPage from './DesignSystemPage.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
import { Section } from './DesignSystemPage.enum'
type Story = StoryObj<DesignSystemPage>

const OVERVIEW_DOC_STRING = `
Our system builds on weights for headings, body text, and other elements. We use a 4px baseline grid for spacing and sizing.

__Below is an overview of the system__
`
const COLORS_DOC_STRING = `
Our color system uses weight visually on the page and switches colors depending on light/dark mode:
  - 100 lightest
  - 200 lighter
  - 300 base
  - 400 heavy
  - 500 heaviest

There is also a set of accent weights that can be used for special cases like hovers:
- 150 light accent
- 450 heavy accent

To pick a color use \`var(--color-XXX)\` where XXX is the weight you want to use. For example \`var(--color-300)\` will give you the base color.
`
const TYPOGRAPHY_DOC_STRING = `
We also use weights for our type scale em were 300 is base (1rem), we let the browser decide what root em is and work from there. The scale is as follows:
- 100: 0.75rem
- 200: 0.8rem
- 300: 1rem
- 400: 1.25rem
- 500: 1.563rem
- 600: 1.953rem
- 700: 2.441rem

There is also a utility class to enlarge the text that is useful for headers \`.text-enlarge\`: it takes the font size and multiplies it by 1.25 (\`calc(1em * 1.25)\`)

Headers have the default line height of 1.1 and the rest has 1.5

Paragrafs has a max-width of 50ch by default to improve readability for dyslexic people: note that if the text is inside a flexbox or grid the paragraf might need either a width of 100% \`.text-full-width\` or margins need to be set to auto _(like how they are rendered in storybook docs it might be nicer to set margin auto so they live in the middle of the page)_
`
const BORDERS_DOC_STRING = `
Border/Strokes
`
const SPACING_DOC_STRING = `
Spacing
`
const ICONS_DOC_STRING = `
Icons
`

const meta: Meta<DesignSystemPage> = {
  component: DesignSystemPage,
  tags: ['docsPage'],
  title: 'Design System',
  parameters: {
    docs: {
      description: {
        component: OVERVIEW_DOC_STRING
      }
    }
  },
  argTypes: {
    section: {
      table: {
        disable: true
      }
    }
  }
}
export default meta

export const Story1: Story = {
  args: {
    section: Section.enum.overview
  }
}
Story1.storyName = 'Overview'
export const Story2: Story = {
  args: {
    section: Section.enum.colors
  }
}
Story2.storyName = 'Colors'
Story2.parameters = {
  docs: {
    description: {
      story: COLORS_DOC_STRING
    }
  }
}
export const Story3: Story = {
  args: {
    section: Section.enum.typography
  }
}
Story3.storyName = 'Typography'
Story3.parameters = {
  docs: {
    description: {
      story: TYPOGRAPHY_DOC_STRING
    }
  }
}
export const Story4: Story = {
  args: {
    section: Section.enum.borders
  }
}
Story4.storyName = 'Borders'
Story4.parameters = {
  docs: {
    description: {
      story: BORDERS_DOC_STRING
    }
  }
}
export const Story5: Story = {
  args: {
    section: Section.enum.spacing
  }
}
Story5.storyName = 'Spacing'
Story5.parameters = {
  docs: {
    description: {
      story: SPACING_DOC_STRING
    }
  }
}
export const Story6: Story = {
  args: {
    section: Section.enum.icons
  }
}
Story6.storyName = 'Icons'
Story6.parameters = {
  docs: {
    description: {
      story: ICONS_DOC_STRING
    }
  }
}
