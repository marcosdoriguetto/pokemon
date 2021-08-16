import { TypePokemonSort } from "../@types/pokemon";
import { Pokemon } from "./Pokemon";

export function PokemonList({ pokemons }: TypePokemonSort) {
  return (
    <>
      {
        pokemons.map(pokemon => {
          return (
            <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
          )
        })
      }
    </>
  )
}