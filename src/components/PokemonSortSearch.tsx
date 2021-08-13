import { TypePokemonSortSearch } from "../@types/pokemon"
import { Pokemon } from "./Pokemon"

export function PokemonSortSearch({ pokemons, valueSearch }: TypePokemonSortSearch) {
  return (
    <>
      {
        pokemons.filter(value => {
          if (value.data.name.toLowerCase().includes(valueSearch.toLowerCase())) {
            return value
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