{#each [200, 300, 400, 500, 600, 700] as weight}
  <div
    class="flex justify-center items-center width-fit-content"
    style={`padding: var(--spacing-root-${weight}); margin: auto; margin-top: 1em`}
  >
    <div class="flex justify-center items-center">{weight}</div>
  </div>
{/each}

<style>
  div {
    background-color: var(--color-300);
    border-radius: var(--border-radius-100);
  }
  div > div {
    background-color: var(--color-100);
    padding: 1em;
  }
</style>
