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
  const [allPokemons, setAllPokemons] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [valueSearch, setValueSearch] = useState('');

  const initialUrlApi = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'
  const initialUrlApiGetAllPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0'

  useEffect(() => {
    async function fetchApiAllPokemons() {
      const getAllPokemons = await axios.get(initialUrlApiGetAllPokemons);

      await savePokemons(getAllPokemons.data.results, 'all')
    }
    fetchApiAllPokemons()
    fetchApi(initialUrlApi)
  }, [])

  async function fetchApi(props: string) {
    const getAllPokemonsPage = await axios.get(props);

    setNextUrl(getAllPokemonsPage.data.next)
    setPreviousUrl(getAllPokemonsPage.data.previous)
    await savePokemons(getAllPokemonsPage.data.results, '')
  }

  const savePokemons: ([], actionType: string) => void = async (previous, actionType) => {
    let _pokemon: PokemonType[] = await Promise.all(previous.map(async pokemon => {
      let pokemonRegister = await axios.get(pokemon.url)
      return pokemonRegister
    }))

    actionType === 'all' ? setAllPokemons(_pokemon) : setPokemon(_pokemon)
  }

  return (
    <Content>
      <input type="text" onChange={event => setValueSearch(event.target.value)} />
      {valueSearch === "" ? (
        <>
          {
            pokemon.map(pokemon => {
              return (
                <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
              )
            })
          }
          <ContentButton>
            <Button next={false} disabled={previousUrl === null ? true : false} onClick={() => fetchApi(previousUrl)}>Previous</Button>
            <Button disabled={nextUrl === null ? true : false} onClick={() => fetchApi(nextUrl)}>Next</Button>
          </ContentButton>
        </>
      ) : (
        allPokemons.filter(value => {
          if (value.data.name.toLowerCase().includes(valueSearch.toLowerCase())) {
            return value
          }
        }).map(pokemon => {
          return (
            <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
          )
        })
      )
      }

    </Content>
  )
}