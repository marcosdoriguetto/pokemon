import { useEffect } from 'react';
import { useState } from 'react';
import { Pokemon } from './components/Pokemon';

import axios from 'axios'

export type TypesPokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

type PokemonType = {
  data: {
    id: number;
    name: string;
    types: TypesPokemonType[];
    sprites: {
      front_default: string;
    }
  }
}

export function App() {
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  const initialUrlApi = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    async function fetchApi() {
      const getAllPokemons = await axios.get(initialUrlApi);

      setNextUrl(getAllPokemons.data.next)
      setPreviousUrl(getAllPokemons.data.previous)
      await savePokemons(getAllPokemons.data.results)
    }
    fetchApi()
  }, [])

  const savePokemons: ([]) => void = async previous => {
    let _pokemon: PokemonType[] = await Promise.all(previous.map(async pokemon => {
      let pokemonRegister = await axios.get(pokemon.url)
      return pokemonRegister
    }))

    setPokemon(_pokemon)
  }

  return (
    <div>
      {
        pokemon.map(pokemon => {
          return (
            <Pokemon name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
          )
        })
      }
    </div>
  )
}