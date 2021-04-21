export function addPosterToFilmData(filmData){
  return {
    ...filmData,
    poster_url: `https://image.tmdb.org/t/p/w500/${filmData.poster_path}`
  }
}