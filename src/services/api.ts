import axios from 'axios'

export function getAllPokemon(url: string) {
  return axios.get(url)
}