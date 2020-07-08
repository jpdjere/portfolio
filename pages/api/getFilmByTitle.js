import axios from 'axios';
import { addPosterToFilmData } from '../../utils/addPoster';

export default async (req, res) => {
  const url = `https://api.themoviedb.org/4/search/movie?language=en-US&query=${req.query.t}&page=1&include_adult=false`;
  const films = await axios({
    url,
    headers: {
      Authorization: `Bearer ${process.env.MOVIEDB_ACCESS_TOKEN}`
    }
  });
  const [ firstResult ] = films.data.results;
  const firstResultWithPoster = addPosterToFilmData(firstResult);

  res.send(firstResultWithPoster);
}