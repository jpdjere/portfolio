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

  if(!firstResult) {
    debugger;
    return res.status(404).send("No movie found");
  }

  const firstResultWithPoster = addPosterToFilmData(firstResult);
  if(req.query.id === "tt3704050") {
    debugger;
  }
  res.send(firstResultWithPoster);
}