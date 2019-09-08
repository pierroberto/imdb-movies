import React, { useEffect } from 'react'
import SearchList from 'components/SearchList'
import useDebounce from 'utils/hooks/debounce'
import { findMovieByName, getMovieDetails } from 'api/imdb'
import { EnumMovieItem, EnumMovieItems } from 'interfaces/movie'

type SearchType = string
type ResultType = EnumMovieItems | []
type IsSearchingType = boolean

function Search() {
    const [search, setSearch] = React.useState<SearchType>('')
    const [results, setResults] = React.useState<ResultType>([])
    const [isSearching, setIsSearching] = React.useState<IsSearchingType>(false)
    const debouncedSearch = useDebounce(search, 500)

    useEffect(() => {
        setResults([])
        setIsSearching(true)
        findMovieByName(debouncedSearch).then(({ data }) => {
            const { Search = [] } = data
            Search.forEach((movie: EnumMovieItem) => {
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
