import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

import { Button } from './components/Button';
import { PokemonSort } from './components/PokemonSort';
import { PokemonSortReverse } from './components/PokemonSortReverse';

import AlphabeticalSort from './images/alphabetical-sort.svg'
import AlphabeticalSortReverse from './images/alphabetical-sort-reverse.svg'
import Search from './images/search.svg'

import { Content, ContentButton, ContentCard, ContentInput, ContentInputImage, ContentSort } from './styles/PokemonStyles';

import { PokemonType, TypePokemon, TypePokemonBoxes } from './@types/pokemon';
import { PokemonSortType } from './components/PokemonSortType';
import { PokemonList } from './components/PokemonList';
import { PokemonSortSearch } from './components/PokemonSortSearch';

export function App() {
  const [pokemon, setPokemon] = useState<PokemonType[]>([]);
  const [allPokemons, setAllPokemons] = useState<PokemonType[]>([]);
  const [pokemonType, setPokemonType] = useState<TypePokemon[]>([]);
  const [typePokemon, setTypePokemon] = useState<TypePokemonBoxes[]>([]);

  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');

  const [valueSearch, setValueSearch] = useState('');
  const [sendValueSearch, setSendValueSearch] = useState('')

  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState(false);
  const [sortReverse, setSortReverse] = useState(false);
  const [sortType, setSortType] = useState(false);
  const [sortSearch, setSortSearch] = useState(false)
  const [count, setCount] = useState(1);

  const initialUrlApi = 'https://pokeapi.co/api/v2/pokemon?limit=25&offset=0'
  const initialUrlApiGetAllPokemons = 'https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0'
  const initialPokemonTypes = 'https://pokeapi.co/api/v2/type/'

  useEffect(() => {
    async function fetchApi() {
      const allPokemons = axios.get('https://www.pokemon.com/us/api/pokedex/kalos');
      console.log(allPokemons);
    }
    fetchApi()
  }, []);

  useEffect(() => {
    async function fetchApi() {
      let getPokemonsPage = await axios.get(initialUrlApi);
      let getAllTypesPokemons = await axios.get(initialPokemonTypes);

      setNextUrl(getPokemonsPage.data.next)
      setPreviousUrl(getPokemonsPage.data.previous)
      await savePokemons(getPokemonsPage.data.results, '')
      await savePokemons(getAllTypesPokemons.data.results, 'types')
      setLoading(false)
    }
    fetchApi()
  }, []);

  async function savePokemons(previous: [{ url: string }], actionType: string) {
    let _pokemon: PokemonType[] = await Promise.all(previous.map(async pokemon => {
      let pokemonRegister = await axios.get(pokemon.url)
      return pokemonRegister
    }))

    if (actionType === '') {
      setPokemon(_pokemon)
    } else if (actionType === 'all') {
      setAllPokemons(_pokemon)
    } else if (actionType === 'types') {
      let _pokemon: TypePokemon[] = await Promise.all(previous.map(async pokemon => {
        let pokemonRegister = await axios.get(pokemon.url)
        return pokemonRegister
      }))

      setPokemonType(_pokemon)
    }
  }

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (valueSearch.trim().length > 0) {
      setLoading(true)
      await loadAllPokemons()
      setLoading(false)
      setSortSearch(true)
    } else {
      setSortSearch(false)
    }

    setSendValueSearch(valueSearch)
  }

  const handleSortPokemons = () => {
    setSort(!sort);
    setCount(count + 1);
    setSortReverse(sort);
    if (count % 3 === 0) {
      setSort(false)
      setSortReverse(false)
    }
  }

  const nextPage = async () => {
    setLoading(true)
    let pokemonsNextPage = await axios.get(nextUrl)
    await savePokemons(pokemonsNextPage.data.results, '')
    setNextUrl(pokemonsNextPage.data.next)
    setPreviousUrl(pokemonsNextPage.data.previous)
    setLoading(false)
  }

  const prevPage = async () => {
    setLoading(true)
    let pokemonsNextPage = await axios.get(previousUrl)
    await savePokemons(pokemonsNextPage.data.results, '')
    setNextUrl(pokemonsNextPage.data.next)
    setPreviousUrl(pokemonsNextPage.data.previous)
    setLoading(false)
  }

  const loadAllPokemons = async () => {
    if (allPokemons.length === 0) {
      setLoading(true)
      let getAllPokemons = await axios.get(initialUrlApiGetAllPokemons)
      await savePokemons(getAllPokemons.data.results, 'all')
      setLoading(false)
    }
  }

  const onChange: (value: []) => void = selectedOptions => {
    if (selectedOptions.length > 0) {
      setSortType(true)
      setSortSearch(false)
      setSort(false)
      setSortReverse(false)
      setCount(1)
    } else {
      setSortType(false)
    }

    setTypePokemon(selectedOptions)
  }

  const typesPokemons = pokemonType.map(type => {
    return {
      value: type.data.name,
      label: type.data.name.charAt(0).toUpperCase() + type.data.name.slice(1)
    }
  })

  return (
    <Content>
      <ContentSort>
        {!loading && <ReactMultiSelectCheckboxes onChange={onChange} value={!sortSearch ? typePokemon : []} placeholderButtonLabel="Selecione o(s) tipo(s)" options={typesPokemons} />}
        <ContentInput onSubmit={handleSubmitForm}>
          <input disabled={loading} placeholder="Search..." type="text" onChange={event => setValueSearch(event.target.value)} />
          <Button disabled={loading}><ContentInputImage src={Search} alt="Buscar" /></Button>
        </ContentInput>
        <Button
          sort
          disabled={sortType || sortSearch}
          className={!sort && !sortReverse ? '' : 'disabled'}
          onClick={() => handleSortPokemons()}>
          <img
            src={sort ? AlphabeticalSort : sortReverse ? AlphabeticalSortReverse : AlphabeticalSort}
            alt={sortReverse ? "Ordem alfabética decrescente" : sort ? "Ordem alfabética crescente" : "Ativar ordem alfabética crescente"}
          />
        </Button>
      </ContentSort>
      {!loading ? (
        <>
          <ContentCard>
            {
              !sortSearch ? (
                <>
                  {
                    sort ? (
                      <PokemonSort pokemons={pokemon} />
                    ) : sortReverse ? (
                      <PokemonSortReverse pokemons={pokemon} />
                    ) : sortType ? (
                      loadAllPokemons(),
                      <PokemonSortType pokemons={allPokemons} types={typePokemon} />
                    ) : (
                      <PokemonList pokemons={pokemon} />
                    )
                  }
                </>
              ) : (
                <PokemonSortSearch pokemons={allPokemons} valueSearch={sendValueSearch} />
              )
            }
          </ContentCard>

          {!sortType && !sortSearch && (
            <ContentButton>
              <Button
                next={false}
                disabled={previousUrl === null ? true : false}
                onClick={() => prevPage()}
              >Previous</Button>
              <Button disabled={nextUrl === null ? true : false} onClick={() => nextPage()}>Next</Button>
            </ContentButton>)}
        </>
      ) : <p>Loading...</p>}
    </Content>
  )
}
