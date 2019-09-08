import React from 'react'
import { Row, Col, Spin, Input, Card } from 'antd'
import Modal from '../Modal'
import styles from './searchList.module.scss'
import notFound from '../../asset/not-available.png'
import { EnumMovieItems } from 'interfaces/movie'

interface Props {
    isSearching: boolean
    setSearch(search: string): void
    movies: EnumMovieItems
}

const { Meta } = Card
const { Search } = Input
const getCover = (url: string) => {
    if (url === 'N/A') {
        return notFound
    }
    return url
}

function SearchList(props: Props) {
    const { isSearching, setSearch, movies } = props
    const [showModal, setShowModal] = React.useState(false)
    const [movieTitle, setMovieTitle] = React.useState('')
    const [moviePlot, setMoviePlot] = React.useState('')
    return (
        <>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={movieTitle}
                plot={moviePlot}
            />
            <Row className={styles.searchBox}>
                <Search
                    placeholder={'search a movie by title'}
                    onChange={e => setSearch(e.target.value)}
                />
            </Row>
            <Row type={'flex'} justify={'center'}>
                {isSearching && <Spin tip={'searching'} size={'large'} />}
            </Row>
            <Row type={'flex'} className={styles.movieRow}>
                {movies &&
                    movies.map((movie, i) => {
                        return (
                            <Col key={i} className={styles.movieCol}>
                                <Card
                                    onClick={() => {
                                        setMovieTitle(movie.Title)
                                        setMoviePlot(movie.Plot)
                                        setShowModal(true)
                                    }}
                                    hoverable
                                    className={styles.movieCard}
                                    cover={<img src={getCover(movie.Poster)} />}
                                >
                                    <Meta
                                        title={`${movie.Title} (${movie.Year})`}
                                        description={`Rate: ${movie.imdbRating}`}
                                    />
                                </Card>
                            </Col>
                        )
                    })}
            </Row>
        </>
    )
}

export default SearchList
