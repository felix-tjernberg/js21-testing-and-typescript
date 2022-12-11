<script lang="ts">
  export let overview: boolean = false
</script>

<div class="flex-column justify-center">
  {#each [100, 200, 300, 400, 500] as weight}
    <div class="flex">
      {#if !overview} <p>{weight}</p>{/if}
      <div
        style={`border-top: var(--stroke-${weight}) solid var(--color-300);`}
      />
    </div>
  {/each}
</div>

<style>
  .flex-column {
    width: fit-content;
    gap: 20px;
  }
  div.flex > div {
    margin: auto;
    width: 100px;
  }
  p {
    margin-right: 1em;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
