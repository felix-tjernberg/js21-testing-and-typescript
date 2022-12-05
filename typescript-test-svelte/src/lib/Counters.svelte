<script lang="ts">
  import Counter from './Counter.svelte'
  interface ICounter {
    count: number
  }
  export let buttons: ICounter[] = [{ count: 0 }, { count: 0 }, { count: 0 }]
</script>

{#each buttons as { count }}
  <Counter {count} />
{/each}
