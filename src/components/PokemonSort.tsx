import { TypePokemonSort } from "../@types/pokemon";
import { handlePokemonSort } from "../services/formatSortArray";
import { Pokemon } from "./Pokemon";

export function PokemonSort({ pokemons }: TypePokemonSort) {
   const pokemonSort = handlePokemonSort(pokemons)
   return (
      <>
         {
            pokemonSort.map(pokemon => {
               return (
                  <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
               )
            })
         }
      </>
   )
}