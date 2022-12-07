<script lang="ts">
  import { z } from 'zod'
  const DEFAULT_VALUE = 0
  const valueSchema = z.number()

  export let value: number = DEFAULT_VALUE

  $: if (!valueSchema.safeParse(value).success) value = DEFAULT_VALUE
</script>

<input type="number" bind:value />
