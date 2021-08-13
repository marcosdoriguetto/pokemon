import { PokemonType, TypePokemonBoxes } from "../@types/pokemon";
import { Pokemon } from "./Pokemon";

type TypePokemonSort = {
  pokemons: PokemonType[];
  types: TypePokemonBoxes[];
}

export function PokemonSortType({ pokemons, types }: TypePokemonSort) {
  return (
    <>
      {
        pokemons.filter(value => {
          const typesPokemon = types.map(type => {
            return type.value
          })

          const typesAllPokemons = value.data.types.map(type => {
            return type.type.name
          })

          if (typesPokemon.length > 0) {
            let control = 0;

            for (var i = 0; i < typesPokemon.length; i++) {
              if (typesPokemon[i] === typesAllPokemons[i]) {
                control += 1;
              }
            }

            if (typesPokemon.length === control) {
              return value
            }
          }

          return false
        }).map(pokemon => {
          return (
            <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
          )
        })
      }
    </>
  )
}