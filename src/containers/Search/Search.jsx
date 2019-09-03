import React, {useEffect} from 'react'
import axios from 'axios'
import SearchBox from 'components/SearchBox'
import {BASE_URL, PUBLIC_KEY} from '../../constants'
import useDebounce from 'utils/hooks/debounce'


function Search() {
    const [search, setSearch] = React.useState('')
    const [results, setResults] = React.useState([])
    const [isSearching, setIsSearching] = React.useState(false)
    const params = {
        s: search, 
        apikey: PUBLIC_KEY
    }
    
    const debouncedSearch = useDebounce(search, 500)

    useEffect(
        () => {
            if (debouncedSearch) {
                setIsSearching(true)
                findMovieByName(debouncedSearch).then(results => {
                    setIsSearching(false)
                    setResults(results)
                })
            } else {
                setResults([])
            }
        },
        [debouncedSearch]
    )
    const findMovieByName = () => {
        return axios.get(BASE_URL, {params}).then(response => setResults(response.data))
    }

    return <SearchBox setSearch={setSearch} results={results} />

}

export default Search