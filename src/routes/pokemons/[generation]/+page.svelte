<script lang="ts">
  import type { PokemonItem } from "$lib/interfaces";
  export let data: { pokemons: PokemonItem[] };
</script>

<div class="container mx-auto px-4 pt-12">
  {#if data.pokemons && data.pokemons.length === 0}
    <p class="text-center text-lg">There is no pokemon.</p>
  {/if}
  <div class="container mx-auto px-4 mt-12 pb-64">
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
      {#each data.pokemons as pokemon, i}
        <div class="hover:ring-2 ring-gray-500 rounded-2xl p-2">
          <img src={pokemon.image} class="mx-auto" alt="pokemon" />
          <p class="text-center">{pokemon.name}</p>
        </div>
      {/each}
    </div>
  </div>
</div>
