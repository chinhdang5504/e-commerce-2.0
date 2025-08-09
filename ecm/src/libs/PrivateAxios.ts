import axios from 'axios'

const PrivateAxios = axios.create({
  timeout: 1000 * 60 * 60,
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

PrivateAxios.interceptors.request.use(
  (config) => {
    // const token = 123
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    throw error
  }
)

export default PrivateAxios
