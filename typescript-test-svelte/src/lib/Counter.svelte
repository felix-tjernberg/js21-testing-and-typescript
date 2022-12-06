<script lang="ts">
  import { z } from 'zod'
  const DEFAULT_VALUE = 0
  const valueSchema = z.number()

  export let count: number = 0

  if (!valueSchema.safeParse(count).success) count = DEFAULT_VALUE

  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
