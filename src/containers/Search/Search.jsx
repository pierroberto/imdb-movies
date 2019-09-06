import React, {useEffect} from 'react'
import axios from 'axios'
import SearchList from 'components/SearchList'
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
                findMovieByName(debouncedSearch).then(moviesFound => {
                    setIsSearching(false)
                    setResults(moviesFound && moviesFound.data && moviesFound.data.Search)
                })
            } else {
                setResults([])
            }
        },
        [debouncedSearch]
    )

    const findMovieByName = () => {
        return axios.get(BASE_URL, {params})
    }

    return (
        <div>
            <SearchList isSearching={isSearching} setSearch={setSearch} movies={results} />
        </div>
    )

}

export default Search