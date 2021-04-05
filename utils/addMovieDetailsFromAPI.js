export function addMovieDetailsFromAPI(fullFilmsList){
  return fullFilmsList.map(async currentDate => {
    const filmsWithDetailsPromises = currentDate.films.map(async film => {
      if(film.code === "OMIT") return null;
      try {
        const URI = film.code ? `http://localhost:3000/api/getFilmByCode?id=${film.code}` : `http://localhost:3000/api/getFilmByTitle?t=${film.title}`;
        const URL = encodeURI(URI);
        const res = await fetch(URL);
        const filmData = await res.json()
        return {...film, ...filmData}
      } catch (e) {
        console.log(`Error fetching film by title: ${e}`)
        return null;
      }
    });
    const filmsWithDetails = await Promise.all(filmsWithDetailsPromises);

    return {...currentDate, films: filmsWithDetails}
  });
}