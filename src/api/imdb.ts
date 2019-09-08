import axios from 'axios'
import { BASE_URL, PUBLIC_KEY } from '../constants'
import { EnumMovieItems } from 'interfaces/movie'

interface IOmdbMovie {
    data: { Search: Array<any> }
}
interface IOmdbDetails {
    data: EnumMovieItems
}

export const findMovieByName = (search: string): Promise<IOmdbMovie> => {
    const params = {
        s: search,
        apikey: PUBLIC_KEY,
    }
    return axios.get(BASE_URL, { params })
}

export const getMovieDetails = (id: string): Promise<IOmdbDetails> => {
    const params = {
        i: id,
        apikey: PUBLIC_KEY,
    }
    return axios.get(BASE_URL, { params })
}
