<script lang="ts">
  import Counter from '$lib/Counter.svelte'
  import NumberInput from '$lib/NumberInput.svelte'

  export let number = 0
</script>

<Counter bind:count={number} />
<NumberInput bind:value={number} />
