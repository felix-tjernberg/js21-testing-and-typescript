<script lang="ts">
  export let overview: boolean = false

  const WEIGHT_TEXT_COLOR = {
    100: 500,
    150: 500,
    200: 500,
    300: 100,
    400: 100,
    450: 100,
    500: 100
  }
</script>

<div class="flex justify-center gap-600">
  {#each [100, 150, 200, 300, 400, 450, 500] as weight}
    <div
      class="circle flex justify-center items-center"
      data-overview={overview}
      style="background-color: var(--color-{weight});"
    >
      <p
        class="description-text"
        style={`color: var(--color-${WEIGHT_TEXT_COLOR[weight]}`}
      >
        {weight}
      </p>
    </div>
  {/each}
</div>

<style>
  .circle {
    padding: 20px;
    border-radius: 50%;
  }
</style>
