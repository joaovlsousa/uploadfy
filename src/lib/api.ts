import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://joaov-api.vercel.app',
})
