export interface EnumMovieItem {
    Title: string
    Poster: string
    Year: string
    Plot: string
    imdbRating: string
    imdbID: string
}

export interface EnumMovieItems extends Array<EnumMovieItem> {}
