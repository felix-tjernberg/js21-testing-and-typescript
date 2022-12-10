import DesignSystemPage from './DesignSystemPage.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
import { Section } from './DesignSystemPage.enum'
type Story = StoryObj<DesignSystemPage>

const OVERVIEW_DOC_STRING = `
Our system builds on defining a weights of an styling attribute, weight means how visually heavy the element becomes on the page. We use this thought process for the whole design system, \`100\` is the lightest \`300\` is base and \`500\` is the heaviest

__Below is an overview of the system__
`
const COLORS_DOC_STRING = `
Our color system switches colors depending on \`prefers-color-scheme\` and we also provide \`[data-dark-mode="true/false"]\` to force a specific color mode

#### _Weights_
The primary weights included are
- 100 \`Lightest\`
- 200 \`Light\`
- 300 \`Base\`
- 400 \`Heavy\`
- 500 \`Heaviest\`

There is also a set of accent weights that can be used for special cases like hovers
- 150 \`light accent\`
- 450 \`heavy accent\`

#### _CSS Variable_
To pick a color use \`var(--color-XXX)\` <br>_(where \`XXX\` is the weight you want to use)_
`
const TYPOGRAPHY_DOC_STRING = `
#### _Type scale_
The type scale uses \`1rem\` as base weight \`300\` which is decided by the browser which is usually \`16px\`, then we times \`1rem\` according to [the major third ratio](https://type-scale.com/) 

The scale is as follows
- 200 \`0.8rem\`
- 300 \`1rem\`
- 400 \`1.25rem\`
- 500 \`1.563rem\`
- 600 \`1.953rem\`
- 700 \`2.441rem\`

There is a couple of utility classes to enlarge/reduce jump up or down in the type scale: <br> \`.font-size-enlarge\` / \`.font-size-reduce\` <br>Adding a number \`-X\` to these classes will increase amount of jumps <br>The classes takes the current font size \`1em\` and multiplies it by the ratio and number of steps up or down

#### _Line height_
Headers have the default line height of \`1.1\` and the rest has \`1.65\`

<section class="width-fit-content-and-center max-width-50ch">
#### _Paragraph width_
Paragrafs has a \`max-width\` of \`50ch\` by default to improve readability for dyslexic people

Note that because of the smaller \`max-width\` \`50ch\` paragrafs will not be visually balanced next to wider content <br>_(Like how the text sections are rendered in storybook docs)_

We recommend two solutions either widen the text if the other elements does not exceed \`75ch\` width with the class \`.text-full-width\` <br>_(As we should never exceed \`~75ch\` for readability sake)_ 

Or we could wrap the paragraf in a section with the class \`.width-fit-content-and-center\` and add the class \`.max-width-50ch\` to the section if the header has the potential to be wider that paragraph \`50ch\` <br>_(Like how we have done for this section)_

### _This is a very long header to show how the width does not exceed 50ch_
</section>

#### _CSS Variable_
To pick a font size use \`var(--font-size-XXX)\` <br>_(where \`XXX\` is the weight you want to use)_
`
const BORDERS_DOC_STRING = `
Borders and strokes doubles in width for every weight step with the base \`300\` of \`4px\`
- 100 \`1px\`
- 200 \`2px\`
- 300 \`4px\`
- 400 \`8px\`
- 500 \`16px\`

#### _CSS Variable_
To pick a border use \`var(--stroke-XXX)\` <br>_where \`XXX\` is the weight you want to use_
`
const SPACING_DOC_STRING = `
Spacing kan be defined either with relative spacing or root spacing and follows the same sizes and weights as the type scale

The scale is as follows
- 200 \`0.8(em or rem)\`
- 300 \`1(em or rem)\`
- 400 \`1.25(em or rem)\`
- 500 \`1.563(em or rem)\`
- 600 \`1.953(em or rem)\`
- 700 \`2.441(em or rem)\`

But in most cases we use \`1em or 1rem\` for any spacing

There is also a \`.spacing-vertical-flow\` utility class that will add a margin-top of 1em to all direct child elements which creates a good visual hierarchy especially when mixing headings and paragraphs in a section <br>_(except for \`:first-child\` element or elements with \`.absolute\`)_ 

#### _CSS Variable_
To pick a relative spacing use \`var(--spacing-relative-XXX)\` <br>And to pick a root spacing use \`var(--spacing-root-XXX)\` 
_(where \`XXX\` is the weight you want to use)_
`
const ICONS_DOC_STRING = `
Icons
`
const CSS_STYLING_GUIDE = `
We follow the CUBE CSS methodology when writing our styles

CUBE CSS stands for:

#### _Composition_
Global styles and higher level component styling, like the layer name suggest this is where you define the composition of the page

#### _Utility_
Utility classes similar to how Tailwind and Atom methodology define all of their classes, these classes directive in life is to do one thing and that thing very well


#### _Block_
Styling inside to a specific component, at this point Composition and Utility layers should have defined most of cases so these styles are very specific to the component


#### _Exception_
The one-off styles for specific states, these are defined with any \`[data-*]\` attribute selector, usually triggered by events like setting \`[data-dark-mode="true"]\`


#### _CSS_
Using this though process of layers means that we use the cascading nature of CSS unlike many other methodologies, we think that CUBE CSS takes the best parts of other methodologies and combines them into one cohesive system

_[Read more in more detail about CUBE CSS](https://cube.fyi/)_
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
