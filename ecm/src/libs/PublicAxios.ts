import axios from 'axios'

const PublicAxios = axios.create({
  timeout: 1000 * 60 * 60,
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default PublicAxios
