import * as Pokedex from "pokeapi-js-wrapper";
import type { Generation, PokemonItem } from "$lib/interfaces";
const P = new Pokedex.Pokedex();

export async function load({ params }) {
  let pokemons: PokemonItem[] = [];
  const response = await fetch(
    `https://pokeapi.co/api/v2/generation/${params.generation}`
  );
  const data: Generation = await response.json();
  pokemons = data.pokemon_species.map((item) => {
    const id = item.url.match(/pokemon-species\/(\d+)\//)?.[1];
    return {
      id: Number(id),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      ...item,
    };
  });
  return { pokemons: pokemons };
}
