import React from 'react'
import { Row, Col, Spin, Input, Card} from 'antd'
import Modal from '../Modal'

const { Meta } = Card

function SearchList(props) {
    const { isSearching, setSearch, movies } = props
    const [showModal, setShowModal] = React.useState(false)
    const [movieTitle, setMovieTitle] = React.useState('')
    const [moviePlot, setMoviePlot] = React.useState('')
    return (
        <div>
            <Modal 
                showModal={showModal} 
                setShowModal={setShowModal}
                title={movieTitle}
                plot={moviePlot}
            />
            <Row style={{margin: 50}}>
                <Input onChange={(e) => setSearch(e.target.value)}/>
            </Row>
            <Row type={'flex'} justify={'center'}>
                {isSearching && <Spin tip={'searching'} size={'large'}/>}
            </Row>
            <Row type={'flex'} justify="space-between">
                {
                    movies && movies.map((movie, i) => {
                        const Img = movie.Poster
                        return (
                            <Col key={i} style={{margin: 50}}>
                                <Card onClick={() => {
                                    setMovieTitle(movie.Title)
                                    setMoviePlot(movie.Plot)
                                    setShowModal(true)
                                }} 
                                hoverable 
                                style={{ width: 250, height:'100%', marginBottom: 20 }} 
                                cover={<img src={Img} />}
                                >
                                    <Meta title={`${movie.Title} (${movie.Year})`} description={`Rate: ${movie.imdbRating}`}/>
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