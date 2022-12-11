<script>
  import Icons from './Icons.svelte'
  import Border from './Border.svelte'
  import Colors from './Colors.svelte'
</script>

<div class="flex-column justify-center items-center gap-300">
  <Colors overview={true} />
  <Border overview={true} />
  <Icons />
</div>
