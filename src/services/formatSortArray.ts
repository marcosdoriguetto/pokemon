import { PokemonType } from "../@types/pokemon";

export function compareStrings(a: string, b: string) {
   return (a < b) ? -1 : (a > b) ? 1 : 0;
}

export function handlePokemonSort(pokemons: PokemonType[]) {
   let _pokemons = pokemons.slice().sort(function (a, b) {
      return compareStrings(a.data.name, b.data.name)
   })

   return _pokemons
}