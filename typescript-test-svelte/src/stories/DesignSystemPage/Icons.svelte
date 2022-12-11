<script lang="ts">
  import Icons from '$assets/icons/Icons.svelte'
  import { IconNames } from '$assets/icons/Icons.enum'
  import Moon from '$assets/icons/Moon.svelte'
</script>

<div class="font-size-600">
  <Icons name={IconNames.enum.moon} />
  <Icons name={IconNames.enum.sun} />
  <Icons />
  <Moon />
</div>
