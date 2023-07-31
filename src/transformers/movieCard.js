export const movieCardTransformer=(movie)=>{
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    return {
        id : movie.id,
        title : movie.original_title?? movie.original_name,
        image : baseUrl + movie.poster_path,
        date : movie.release_date ?? movie.first_air_date,
        voteAverage: movie.vote_average,
        intro : movie.overview
    }
}