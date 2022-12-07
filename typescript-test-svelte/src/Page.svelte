<script lang="ts">
  import Counters from '$lib/Counters.svelte'
  import CounterAndNumberInput from '$lib/CounterAndNumberInput.svelte'

  let number = 0
</script>

<CounterAndNumberInput />
<Counters buttons={[{ count: 2 }, { count: 2 }, { count: 6 }]} />
