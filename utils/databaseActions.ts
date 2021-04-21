import mongoose from "mongoose";
import connectToDatabase from "./dbConnect";
import { getEnrichedFilmsFromSpreadsheetAPI } from "./../utils/getEnrichedFilmsFromSpreadsheetAPI";

const { Schema } = mongoose;
// const { extractDataSummaryFromAPI, extractDataPollsFromAPI } = require('./extractDataFromAPI');

const FilmsSchema = new Schema({created_at: { type: Date, required: true, default: Date.now }},{ strict: false });
const FilmsFlattenedSchema = new Schema({created_at: { type: Date, required: true, default: Date.now }},{ strict: false });

const FilmsModel = mongoose.model('films', FilmsSchema);  
const FilmsFlattenedModel = mongoose.model('flattenedFilms', FilmsFlattenedSchema);  

export const getDataFromDatabase = async (dataToFetch: string) => {
  await connectToDatabase();
  return new Promise( async (resolve, reject) => {
    try {
      if(dataToFetch === 'films'){
        const filmsData = await FilmsModel.findOne({}, {}, { sort: { 'created_at' : -1 } });
        return resolve(filmsData);
      } else if(dataToFetch === 'filmsFlattened') {
        const filmsFlattenedData = await FilmsFlattenedModel.findOne({}, {}, { sort: { 'created_at' : -1 } });
        return resolve(filmsFlattenedData);
      } else {
        reject('entity needed')
      }

    } catch (error) {
      reject(error);
    }
  })
}

export const updateDatabase = async () => {
  await connectToDatabase();
  return new Promise( async (resolve, reject) => {
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
      Promise.all(promises).then(data => {
        resolve(data)
      })

    } catch (error) {
      reject(error);
    }
  })
}