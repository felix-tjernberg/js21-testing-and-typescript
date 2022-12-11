<script lang="ts">
  import Moon from './Moon.svelte'
  import Sun from './Sun.svelte'
  import Placeholder from './Placeholder.svelte'

  import { IconNames } from './Icons.enum'
  import type { IconNamesType } from './Icons.enum'

  export let name: IconNamesType = IconNames.enum.template

  function chooseIcon() {
    switch (name) {
      case IconNames.enum.moon:
        return Moon
      case IconNames.enum.sun:
        return Sun
      default:
        return Placeholder
    }
  }
</script>

<!-- TODO Figure out why this throws an typescript error -->
<svelte:component this={chooseIcon()} class={$$props.class} />
