<script lang="ts">
  import '$lib/stylesheets/styles.css'
  import './storybook.css'

  export let context
  let darkMode: boolean = false

  $: darkMode =
    context.backgrounds?.value === '#333333' ||
    context.backgrounds?.value === 'hsl(0, 0%, 10%)'
</script>

<div data-dark-mode={darkMode}>
  <slot />
</div>
