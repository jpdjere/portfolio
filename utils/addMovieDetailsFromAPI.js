export function addMovieDetailsFromAPI(fullFilmsList){
  return fullFilmsList.map(async currentDate => {
    const filmsWithDetailsPromises = currentDate.films.map(async film => {
      try {
        const URL = encodeURI(`http://localhost:3000/api/getFilmByTitle?t=${film.title}`);
        const res = await fetch(URL);
        const filmData = await res.json()
        return {...film, ...filmData}
      } catch (e) {
        return;
      }
    });
    const filmsWithDetails = await Promise.all(filmsWithDetailsPromises);

    return {...currentDate, films: filmsWithDetails}
  });
}