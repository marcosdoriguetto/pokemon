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
        pokemons.filter(pokemon => {
          const typesPokemon = types.map(type => {
            return type.value
          })

          const typesAllPokemons = pokemon.data.types.map(type => {
            return type.type.name
          })

          let control = 0;
          typesPokemon.map(type => typesAllPokemons.includes(type) && control++)

          if (typesPokemon.length === control) {
            return pokemon
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