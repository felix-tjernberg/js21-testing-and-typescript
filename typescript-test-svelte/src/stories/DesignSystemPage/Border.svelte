<div class="flex-column spacing-vertical-flow width-fit-content gap-300">
  {#each [100, 200, 300, 400, 500] as weight}
    <div class="relative">
      <div
        style={`border-top: var(--stroke-${weight}) solid var(--color-500); width: 100px;`}
      />
      <p class="absolute" style="line-height:1; text-align:center">
        {weight}
      </p>
    </div>
  {/each}
</div>

<style>
  .absolute {
    background-color: var(--color-100);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    border-radius: 30px;
  }
</style>
