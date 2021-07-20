import { useEffect } from 'react';
import { useState } from 'react';
import { Pokemon } from './components/Pokemon';

import { Content, ContentButton, ContentButtonSort, ContentInput } from './styles/PokemonStyles';
import { Button } from './components/Button';

import AlphabeticalSort from './images/alphabetical-sort.svg'
import AlphabeticalSortReverse from './images/alphabetical-sort-reverse.svg'

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
  const [pokemonsSort, setPokemonsSort] = useState<PokemonType[]>([])
  const [pokemonsSortReverse, setPokemonsSortReverse] = useState<PokemonType[]>([])
  const [allPokemons, setAllPokemons] = useState<PokemonType[]>([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [valueSearch, setValueSearch] = useState('');
  const [sort, setSort] = useState(false)
  const [sortReverse, setSortReverse] = useState(false)

  const initialUrlApi = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'
  const initialUrlApiGetAllPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0'

  useEffect(() => {
    async function fetchApiAllPokemons() {
      const getAllPokemons = await axios.get(initialUrlApiGetAllPokemons);

      await savePokemons(getAllPokemons.data.results, 'all')
    }
    fetchApiAllPokemons()
    fetchApi(initialUrlApi)
  }, []);

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

    if (actionType === '') {
      setPokemon(_pokemon)
      setPokemonsSort(pokemonSort(_pokemon))
      setPokemonsSortReverse(pokemonSort(_pokemon).reverse())
    } else if (actionType === 'all') {
      setAllPokemons(_pokemon)
    }
  }

  function compareStrings(a: string, b: string) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
  }

  function pokemonSort(pokemons: PokemonType[]) {
    let _pokemons = pokemons.slice().sort(function (a, b) {
      return compareStrings(a.data.name, b.data.name)
    })

    return _pokemons
  }

  return (
    <Content>
      <ContentInput type="text" onChange={event => setValueSearch(event.target.value)} />
      <ContentButtonSort>
        <Button
          sort
          disabled={valueSearch.trim() !== ''}
          className={!sort ? '' : 'disabled'}
          onClick={() => {
            setSort(!sort)
            setSortReverse(false)
          }}><img src={AlphabeticalSort} alt="Ordem alfabética" /></Button>

        <Button
          sort
          disabled={valueSearch.trim() !== ''}
          className={!sortReverse ? '' : 'disabled'}
          onClick={() => {
            setSortReverse(!sortReverse)
            setSort(false)
          }}><img src={AlphabeticalSortReverse} alt="Ordem alfabética reversa" /></Button>
      </ContentButtonSort>

      {valueSearch.trim() === "" ? (
        <>
          {
            sort ? (
              pokemonsSort.map(pokemon => {
                return (
                  <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
                )
              })
            ) : sortReverse ? (
              pokemonsSortReverse.map(pokemon => {
                return (
                  <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
                )
              })
            ) : (
              pokemon.map(pokemon => {
                return (
                  <Pokemon key={pokemon.data.id} name={pokemon.data.name} types={pokemon.data.types} sprites={pokemon.data.sprites.front_default} />
                )
              })
            )
          }
          <ContentButton>
            <Button
              next={false}
              disabled={previousUrl === null ? true : false}
              onClick={() => fetchApi(previousUrl)}
            >Previous</Button>
            <Button disabled={nextUrl === null ? true : false} onClick={() => fetchApi(nextUrl)}>Next</Button>
          </ContentButton>
        </>
      ) : (
        allPokemons.filter(value => {
          if (value.data.name.toLowerCase().includes(valueSearch.toLowerCase())) {
            return value
          }
          return false
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