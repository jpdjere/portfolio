import axios from 'axios';
import axiosRetry from 'axios-retry';
import config from "./../config"
axiosRetry(axios, { retries: 3 });

export function addMovieDetailsFromAPI(fullFilmsList){
  return fullFilmsList.map(async currentDate => {
    const filmsWithDetailsPromises = currentDate.films.map(async film => {
      if(film.code === "OMIT") return null;
      try {
        const URI = film.code ? `${config.host}/api/getFilmByCode?id=${film.code}` : `${config.host}/api/getFilmByTitle?t=${film.title}`;
        const url = encodeURI(URI);
        const filmResult = await axios({
          url,
        });
        debugger;
        return {...film, ...filmResult.data}
      } catch (e) {
        console.log(`Error fetching film by title: ${e}`)
        return null;
      }
    });
    const filmsWithDetails = await Promise.all(filmsWithDetailsPromises);

    return {...currentDate, films: filmsWithDetails}
  });
}