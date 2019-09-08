import React from 'react'
import Search from '../Search'
import Footer from '../../components/Footer'
import {Row} from 'antd'

function Movies() {
    return (
        <Row>
            <Search />
            <Footer />
        </Row>
    )

}

export default Movies