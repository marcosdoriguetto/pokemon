export type TypePokemonTypes = {
   slot: number;
   type: {
      name: string;
      url: string;
   }
}

export type TypePokemonBoxes = {
   value: string;
   label: string;
}

export type TypePokemon = {
   data: {
      name: string;
      url: string;
   }
}

export type PokemonType = {
   data: {
      id: number;
      name: string;
      types: TypePokemonTypes[];
      sprites: {
         front_default: string;
      }
   }
}

export type TypePokemonSort = {
   pokemons: PokemonType[]
}

export type TypePokemonSortSearch = {
   pokemons: PokemonType[];
   valueSearch: string;
}