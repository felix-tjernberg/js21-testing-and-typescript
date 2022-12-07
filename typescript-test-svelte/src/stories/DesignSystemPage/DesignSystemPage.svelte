<script lang="ts">
  import Overview from './Overview.svelte'
  import Colors from './Colors.svelte'
  import Typography from './Typography.svelte'
  import Border from './Border.svelte'
  import Icons from './Icons.svelte'
  import Spacing from './Spacing.svelte'

  import { Section } from './DesignSystemPage.enum'
  import type { Section as SectionType } from './DesignSystemPage.enum'

  export let section: SectionType

  const selectComponent = () => {
    switch (section) {
      case Section.enum.colors:
        return Colors
      case Section.enum.typography:
        return Typography
      case Section.enum.borders:
        return Border
      case Section.enum.icons:
        return Icons
      case Section.enum.spacing:
        return Spacing
      default:
        return Overview
    }
  }
</script>

<svelte:component this={selectComponent()} />
