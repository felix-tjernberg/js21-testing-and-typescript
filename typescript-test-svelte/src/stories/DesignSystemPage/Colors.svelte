<script lang="ts">
  export let overview: boolean = false
</script>

<div class="flex justify-center gap-600">
  {#each [100, 150, 200, 300, 400, 450, 500] as weight}
    <div
      class="circle"
      data-overview={overview}
      style="background-color: var(--color-{weight});"
    >
      <p class="description-text">{weight}</p>
    </div>
  {/each}
</div>

<style>
  .description-text {
    position: absolute;
    top: calc(-1 * var(--spacing-relative-600));
    left: 50%;
    transform: translateX(-50%);
  }
  .circle {
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 50%;
    margin-top: var(--spacing-relative-600);
  }
  .circle[data-overview='true'] {
    margin-top: 0;
  }

  p {
    margin: 0;
  }
  p.header {
    font-size: var(--font-size-400);
    margin-bottom: var(--spacing-relative-200);
  }
  p.header:nth-of-type(2) {
    margin-top: var(--spacing-relative-600);
  }
</style>
