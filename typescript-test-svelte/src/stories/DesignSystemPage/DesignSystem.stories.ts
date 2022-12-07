import DesignSystemPage from './DesignSystemPage.svelte'
import type { Meta, StoryObj } from '@storybook/svelte'
import { Section } from './DesignSystemPage.enum'
type Story = StoryObj<DesignSystemPage>

const OVERVIEW_DOC_STRING = `
Our system builds on weights for headings, body text, and other elements. We use a 4px baseline grid for spacing and sizing.

__Below is an overview of the system__
`
const BORDERS_DOC_STRING = `
Border
`
const COLORS_DOC_STRING = `
Colors
`
const TYPOGRAPHY_DOC_STRING = `
typography
`
const ICONS_DOC_STRING = `
Icons
`
const SPACING_DOC_STRING = `
Spacing
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
