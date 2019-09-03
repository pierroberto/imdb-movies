import React from 'react'

function SearchBox(props) {
    const { setSearch } = props
    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchBox