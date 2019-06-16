import axios from 'axios'

export const client = axios.create({
  baseUrl: 'http://localhost:3030',
  headers: {
    'Content-Type': 'application/json'
  }
})