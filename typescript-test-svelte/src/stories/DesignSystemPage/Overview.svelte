<script>
  import Icons from './Icons.svelte'
  import Border from './Border.svelte'
  import Colors from './Colors.svelte'
  import Typography from './Typography.svelte'
  import Spacing from './Spacing.svelte'
</script>

<div class="flex-column justify-center items-center gap-300">
  <Colors overview={true} />
  <Typography overview={true} />
  <Border overview={true} />
  <Spacing />
  <Icons />
</div>
