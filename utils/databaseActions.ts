import connectToDatabase, { FilmsModel, FilmsFlattenedModel } from "./dbConnect";
import { getEnrichedFilmsFromSpreadsheetAPI } from "./../utils/getEnrichedFilmsFromSpreadsheetAPI";

export const getDataFromDatabase = async () => {
  await connectToDatabase();
  return new Promise(async (resolve, reject) => {
    return Promise.all([
      await FilmsModel.findOne({}, {}, { sort: { 'created_at' : -1 } }).lean(),
      await FilmsFlattenedModel.findOne({}, {}, { sort: { 'created_at' : -1 } }).lean()
    ]).then(([films, filmsFlattened]) => {
      resolve({
        films,
        filmsFlattened
      })
    }).catch(e => {
      reject(e)
    })
  })
}

export const updateDatabase = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        films,
        filmsFlattened
      } = await getEnrichedFilmsFromSpreadsheetAPI();

      const filmsInstance = new FilmsModel({datos: films});
      const filmsFlattenedInstance = new FilmsFlattenedModel({datos: filmsFlattened});
      const promises = [
        filmsInstance.save(),
        filmsFlattenedInstance.save()
      ]
      return Promise.all(promises).then(data => {
        resolve(data)
      }).catch(e => e);

    } catch (error) {
      reject(error);
    }
  })
}