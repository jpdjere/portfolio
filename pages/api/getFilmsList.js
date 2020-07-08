import { formatFilms } from '../../utils/formatFilms';
import { authorize, listFilms } from '../../utils/spreadsheetImport.js';

export  default async (req, res) => {
  const rawFilmData = await authorize(listFilms);
  const films = formatFilms(rawFilmData);

  res.send(films);
}