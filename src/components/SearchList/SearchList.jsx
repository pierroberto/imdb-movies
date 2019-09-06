import React from 'react'
import { Row, Col, Spin, Input, Card, Icon, Avatar} from 'antd'


const { Meta } = Card

function SearchList(props) {
    const { isSearching, setSearch, movies } = props
    return (
        <div>
            <Row>
                <Input onChange={(e) => setSearch(e.target.value)}/>
            </Row>
            {isSearching && <Spin tip={'searching'} />}
            <Row type={'flex'} justify="space-between">
                {
                    movies && movies.map((movie, i) => {
                        const Img = movie.Poster
                        return (
                            <Col key={i} style={{margin: 50}}>
                                <Card onClick={console.log('ciao')} hoverable style={{ width: 250, height:'100%', marginBottom: 20 }} cover={<img src={Img} />}>
                                    <Meta title={`${movie.Title} (${movie.Year})`} />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default SearchList