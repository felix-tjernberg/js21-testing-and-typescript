<script lang="ts">
  import Counter from './Counter.svelte'
  export let buttonsInitialValues: number[] = [1, 2, 3]
</script>

{#each buttonsInitialValues as value}
  <Counter count={value} />
{/each}
