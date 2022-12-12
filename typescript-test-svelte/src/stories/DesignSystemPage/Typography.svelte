<script lang="ts">
  export let overview: boolean = false
</script>

<section class="width-fit-content-and-center">
  {#each [100, 200, 300, 400, 500, 600] as weight}
    <div>
      <p style={`font-size: var(--font-size-${weight}); text-align:center`}>
        Type {weight} Scale
      </p>
    </div>
  {/each}
</section>
{#if !overview}
  <section class="spacing-vertical-flow">
    <section
      class="width-fit-content-and-center max-width-50ch spacing-vertical-flow"
    >
      <p style="font-size: var(--font-size-400)">
        This is an example of a visually balanced 50ch wide section
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        consectetur commodi, ratione temporibus pariatur mollitia accusamus.
        Aliquam modi suscipit consequatur error hic, minima vero porro, quis
        doloremque dolorem voluptate velit? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Accusamus iste necessitatibus cum possimus
        officia maiores amet omnis quidem, vitae mollitia ab reprehenderit odio
        quibusdam repudiandae, voluptas aperiam officiis dignissimos recusandae?
      </p>
    </section>
    <p style="font-size: var(--font-size-400); max-width:100%">
      This is what happens if you limit the paragraf but not the heading to 50ch
      width
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
      consectetur commodi, ratione temporibus pariatur mollitia accusamus.
      Aliquam modi suscipit consequatur error hic, minima vero porro, quis
      doloremque dolorem voluptate velit? Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Accusamus iste necessitatibus cum possimus
      officia maiores amet omnis quidem, vitae mollitia ab reprehenderit odio
      quibusdam repudiandae, voluptas aperiam officiis dignissimos recusandae?
    </p>
    <p style="font-size: var(--font-size-400); max-width:100%">
      This is and example of when you do not a section 50ch width
    </p>
    <p class="max-width-100">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
      consectetur commodi, ratione temporibus pariatur mollitia accusamus.
      Aliquam modi suscipit consequatur error hic, minima vero porro, quis
      doloremque dolorem voluptate velit? Lorem, ipsum dolor sit amet
      consectetur adipisicing elit. Accusamus iste necessitatibus cum possimus
      officia maiores amet omnis quidem, vitae mollitia ab reprehenderit odio
      quibusdam repudiandae, voluptas aperiam officiis dignissimos recusandae?
    </p>
  </section>
{/if}
