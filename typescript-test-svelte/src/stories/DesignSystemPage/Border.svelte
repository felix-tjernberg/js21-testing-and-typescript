<script lang="ts">
  export let overview: boolean = false
</script>

<div class="flex-column spacing-vertical-flow width-fit-content">
  {#each [100, 200, 300, 400, 500] as weight}
    <div class="flex-column items-center">
      {#if !overview}
        <p style="line-height:1; text-align:center">{weight}</p>{/if}
      <div
        style={`border-top: var(--stroke-${weight}) solid var(--color-300);`}
      />
    </div>
  {/each}
</div>

<style>
  div.flex-column.items-center > div {
    width: 100px;
  }
</style>
