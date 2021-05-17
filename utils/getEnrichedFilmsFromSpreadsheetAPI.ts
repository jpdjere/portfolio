import { addMovieDetailsFromAPI } from '../utils/addMovieDetailsFromAPI';
import config from "./../config"

export const getEnrichedFilmsFromSpreadsheetAPI = async () => {
  const fullFilmsList = await getFullFilmsList();

  const fullFilmsListWithDetails = addMovieDetailsFromAPI(fullFilmsList);
  const films = await Promise.all(fullFilmsListWithDetails);

  return {
    films,
    filmsFlattened: flattenFilms(films)
  };
}

async function getFullFilmsList() {
  const res = await fetch(`https://${config.host}/api/getFilmsList`);
  return res.json();
}

function flattenFilms(films) {
  return films.reduce((acc, current) => {
    const filmsWithDate = current.films.map(film => ({
      ...film,
      date_watched: current.date
    }));
    
    return [...acc, ...filmsWithDate]
  }, []);
}