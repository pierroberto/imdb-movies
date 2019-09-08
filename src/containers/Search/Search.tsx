import React, { useEffect } from 'react'
import SearchList from 'components/SearchList'
import useDebounce from 'utils/hooks/debounce'
import { findMovieByName, getMovieDetails } from 'api/imdb'
import { EnumMovieItem, EnumMovieItems } from 'interfaces/movie'

function Search() {
    const [search, setSearch] = React.useState('')
    const [results, setResults] = React.useState([])
    const [isSearching, setIsSearching] = React.useState(false)
    const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
        setResults([])
        setIsSearching(true)
        findMovieByName(debouncedSearch).then(moviesFound => {
            moviesFound &&
                moviesFound.data &&
                moviesFound.data.Search &&
                moviesFound.data.Search.forEach((movie: EnumMovieItem) => {
                    getMovieDetails(movie.imdbID).then(movieDetails => {
                        setResults((results: EnumMovieItems): any => {
                            return [...results, movieDetails.data]
                        })
                    })
                })
            setIsSearching(false)
        })
    }, [debouncedSearch])

    return (
        <SearchList
            isSearching={isSearching}
            setSearch={setSearch}
            movies={results}
        />
    )
}

export default Search
