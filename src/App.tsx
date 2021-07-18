import { useEffect } from 'react';
import { useState } from 'react';
import { Pokemon } from './components/Pokemon';

import axios from 'axios'
import { Content, ContentButton } from './styles/PokemonStyles';
import { Button } from './components/Button';

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

  const initialUrlApi = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'

  useEffect(() => {
    fetchApi(initialUrlApi)
  }, [])

  async function fetchApi(props: string) {
    const getAllPokemons = await axios.get(props);

    setNextUrl(getAllPokemons.data.next)
    setPreviousUrl(getAllPokemons.data.previous)
    await savePokemons(getAllPokemons.data.results)
  }

  const savePokemons: ([]) => void = async previous => {
    let _pokemon: PokemonType[] = await Promise.all(previous.map(async pokemon => {
      let pokemonRegister = await axios.get(pokemon.url)
      return pokemonRegister
    }))

    setPokemon(_pokemon)
  }

  return (
    <Content>
      <ContentButton>
        <Button next={false} disabled={previousUrl === null ? true : false} onClick={() => fetchApi(previousUrl)}>Previous</Button>
        <Button disabled={nextUrl === null ? true : false} onClick={() => fetchApi(nextUrl)}>Next</Button>
      </ContentButton>
      {
        pokemon.map(pokemon => {
          return (
            <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
          )
        })
      }
    </Content>
  )
}