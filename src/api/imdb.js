import axios from 'axios'
import { BASE_URL, PUBLIC_KEY } from '../constants'

export const findMovieByName = search => {
    const params = {
        s: search,
        apikey: PUBLIC_KEY,
    }
    return axios.get(BASE_URL, { params })
}

export const getMovieDetails = id => {
    const params = {
        i: id,
        apikey: PUBLIC_KEY,
    }
    return axios.get(BASE_URL, { params })
}
