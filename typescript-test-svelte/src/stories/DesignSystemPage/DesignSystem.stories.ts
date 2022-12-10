import DesignSystemPage from './DesignSystemPage.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
import { Section } from './DesignSystemPage.enum'
type Story = StoryObj<DesignSystemPage>

const OVERVIEW_DOC_STRING = `
Our system builds on defining a weights of an styling attribute, weight means how visually heavy the element becomes on the page. We use this thought process for the whole design system, 100 is the lightest 300 is base and 500 is the heaviest

__Below is an overview of the system__
`
const COLORS_DOC_STRING = `
Our color system switches colors depending on light/dark mode preference by the user and we also provide \`[darkmode="true/false"]\` to force a specific color mode

#### Weights
The primary weights included are
- 100 Lightest
- 200 Light
- 300 Base
- 400 Heavy
- 500 Heaviest

There is also a set of accent weights that can be used for special cases like hovers
- 150 light accent
- 450 heavy accent

#### CSS Variable
To pick a color use \`var(--color-XXX)\` _(where XXX is the weight you want to use)_
`
const TYPOGRAPHY_DOC_STRING = `
### Type scale

The type scale uses 1 rem as base (weight 300) which is decided by the browser which is usually 16px, then we times 1 rem according to [the major third ratio](https://type-scale.com/) 

The scale is as follows
- 200: 0.8rem
- 300: 1rem
- 400: 1.25rem
- 500: 1.563rem
- 600: 1.953rem
- 700: 2.441rem

There is a couple of utility classes to enlarge/reduce jump up or down in the type scale: <br> \`.font-size-enlarge\` / \`.font-size-reduce\` <br>adding \`-X\` will increase how many steps <br>The classes takes the current font size (1em) and multiplies it by the ratio and number of steps up or down

### Line height

Headers have the default line height of 1.1 and the rest has 1.65, feel free to change this if you need to at the block level

<section class="center-container max-width-50ch">
### Paragraph width

Paragrafs has a max-width of 50ch by default to improve readability for dyslexic people

Note that because of the smaller max-width (50ch) paragrafs will not be visually balanced next to wider content <br>_(Like how the text sections are rendered in storybook docs)_

We recommend two solutions either widen the text if the other elements does not exceed 75ch width with the class \`.text-full-width\` <br>_(As we should never exceed ~75ch for readability sake)_ 

Or we could wrap the paragraf in a section with the classes \`.center-container\` and add the class \`.max-width-50ch\` to the section if the header has the potential to be wider that paragraph 50ch <br>_(Like how we have done for this section)_

### _This is a very long header to show how the width does not exceed 50ch_
</section>

### CSS Variable
To pick a font size use \`var(--font-size-XXX)\` _(where XXX is the weight you want to use)_
`
const BORDERS_DOC_STRING = `
Borders and strokes doubles in width for every weight step with the base (300) of 4px
- 100: 1px
- 200: 2px
- 300: 4px
- 400: 8px
- 500: 16px

### CSS Variable
To pick a border use \`var(--stroke-XXX)\` where XXX is the weight you want to use
`
const SPACING_DOC_STRING = `
Spacing
`
const ICONS_DOC_STRING = `
Icons
`
const CSS_STYLING_GUIDE = `
We follow the CUBE CSS methodology when writing our styles

CUBE CSS stands for:

### Composition

Global styles and higher level component styling, like the layer name suggest this is where you define the composition of the page

### Utility

Utility classes similar to how Tailwind and Atom methodology define all of their classes, these classes directive in life is to do one thing and that thing very well


### Block

Styling inside to a specific component, at this point C/U layers should have defined most of the styles so this layer should be very small


### Exception

The one-off styles usually defined with attribute selector and are usually triggered by events like \`[darkmode="true"]\`


### CSS (Layers)

Using this though process of layers means that we use the cascading nature of CSS unlike many other methodologies, we think that CUBE CSS takes the best parts of other methodologies and combines them into one cohesive system if you want more detail [read more about CUBE CSS](https://cube.fyi/)
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
Story4.storyName = 'Border/Strokes'
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
export const Story7: Story = {
  args: {
    section: Section.enum.icons
  }
}
Story7.storyName = 'CSS Styling Guide'
Story7.parameters = {
  docs: {
    description: {
      story: CSS_STYLING_GUIDE
    }
  }
}
