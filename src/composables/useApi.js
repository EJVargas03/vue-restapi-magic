/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://openlibrary.org/dev/docs/api/covers',
})

const useApi = () => {
  return { instance }
}

export default useApi
