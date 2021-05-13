import axios from 'axios';
import axiosRetry from 'axios-retry';
import { addPosterToFilmData } from '../../utils/addPoster';

axiosRetry(axios, { retries: 3 });

export default async (req, res) => {
  const url = encodeURI(`https://api.themoviedb.org/4/search/movie?language=en-US&query=${req.query.t}&page=1&include_adult=false`);
  const films = await axios({
    url,
    headers: {
      Authorization: `Bearer ${process.env.MOVIEDB_ACCESS_TOKEN}`
    }
  });
  const [ firstResult ] = films.data.results;
  if(!firstResult) {
    return res.status(404).send("No movie found");
  }
  const firstResultWithPoster = firstResult.poster_path && addPosterToFilmData(firstResult);

  res.send(firstResultWithPoster);
}