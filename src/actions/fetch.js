import Axios from 'axios'

const client = Axios.create({
  baseURL: 'http://localhost:3030',
  timeout: 1500,
  headers: { 'Content-Type': 'application/json' }
})

export default client