import axios from 'axios';
import { addPosterToFilmData } from '../../utils/addPoster';

export default async (req, res) => {
  const url = `https://api.themoviedb.org/3/find/${req.query.id}?language=en-US&external_source=imdb_id`;
  const films = await axios({
    url,
    headers: {
      Authorization: `Bearer ${process.env.MOVIEDB_ACCESS_TOKEN}`
    }
  });
  const [ firstResult ] = films.data.movie_results;
  const firstResultWithPoster = addPosterToFilmData(firstResult);

  res.send(firstResultWithPoster);
}