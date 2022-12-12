<div class="flex-column spacing-vertical-flow width-fit-content">
  {#each [100, 200, 300, 400, 500] as weight}
    <div class="relative">
      <p style="line-height:1; text-align:center">{weight}</p>
      <div
        class="absolute"
        style={`border-top: var(--stroke-${weight}) solid var(--color-500);`}
      />
    </div>
  {/each}
</div>

<style>
  p {
    background-color: #fff;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .absolute {
    width: 100px;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
  }
</style>
