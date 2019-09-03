import React, { useEffect } from 'react'
import {BASE_URL, PUBLIC_KEY} from '../../constants'
import Search from '../Search'

const params = {
    apikey: PUBLIC_KEY,
}

function Movies() {
    return (
        <>
        <Search />
        </>
    )

}

export default Movies