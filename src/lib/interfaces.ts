interface Base {
  name: string;
  url: string;
}
export interface Pokemon extends Base {}

export interface Language extends Base {}

export interface Region extends Base {}

export interface Move extends Base {}

export interface PokemonSpecie extends Base {}

export interface Type extends Base {}

export interface VersionGroup extends Base {}

export interface Move extends Base {}

export interface Generation {
  id: number;
  name: string;
  abilities: [];
  main_region: Region[];
  moves: Move[];
  names: {
    name: string;
    language: Language[];
  };
  pokemon_species: PokemonSpecie[];
  types: Type[];
  version_groups: VersionGroup[];
}

export interface PokemonItem extends Pokemon {
  id: number;
  image: string;
}

export interface PartyPokemon extends PokemonItem {
  uuid: string;
  nickname: string;
  moves: Move[];
}

export interface Party {
  uuid: string;
  name: string;
  pokemons: PartyPokemon[];
  createdAt: string;
  updatedAt: string;
}
