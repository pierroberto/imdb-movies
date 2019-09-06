import React from 'react'
import { Row, Col } from 'antd'

function SearchList(props) {
    const { isSearching, setSearch, movies } = props
    return (
        <div>
            {isSearching && <div>Searching ...</div>}
            <Row>
                <input onChange={(e) => setSearch(e.target.value)}/>
            </Row>

            {
                movies && movies.map((movie, i) => {
                    return (
                        <div key={i}>
                            {movie.Title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchList