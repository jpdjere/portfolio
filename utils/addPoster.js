export function addPosterToFilmData(filmData){
  return {
    ...filmData,
    posterURL: `https://image.tmdb.org/t/p/w500/${filmData.poster_path}`
  }
}