<div class="flex-column justify-center gap-100">
  {#each [100, 200, 300, 400, 500] as weight}
    <div class="flex">
      <p>{weight}</p>
      <div
        style={`border-top: var(--stroke-${weight}) solid var(--color-300);`}
      />
    </div>
  {/each}
</div>

<style>
  div.flex > div {
    margin: auto;
    width: 100px;
  }
  p {
    margin-right: 1em;
  }
</style>
