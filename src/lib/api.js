import axios from 'axios'


const baseUrl = 'https://akabab.github.io/superhero-api/api/'


export function getAllCharaters() {
  return axios.get(`${baseUrl}/all.json`)
}

export function getSingleCharacter(characterId) {
  return axios.get(`${baseUrl}/id/${characterId}.json`)
}