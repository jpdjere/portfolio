import { model, models,  Schema, Model, Document, Types } from 'mongoose';
import { Film } from "../types/types"


interface FilmDate {
  date: Date;
  films: Film[];
  count: number;
}

export interface IFilmsSchema extends Document {
  created_at: Date;
  datos: FilmDate
}

export interface IFilmsFlattenedSchema extends Document {
  created_at: Date;
  datos: Film[]
}

const FilmsSchema = new Schema({ 
  created_at: { type: Date, required: true, default: Date.now }}, { strict: false });

const FilmsFlattenedSchema = new Schema({ 
  created_at: { type: Date, required: true, default: Date.now }}, { strict: false });

// https://stackoverflow.com/questions/59851947/now-mongoose-cannot-overwrite-model-once-compiled
const FilmsModel: Model<IFilmsSchema> = models['films'] || model('films', FilmsSchema);
const FilmsFlattenedModel: Model<IFilmsFlattenedSchema> = models['flattenedFilms'] || model('flattenedFilms', FilmsFlattenedSchema);

export { FilmsModel, FilmsFlattenedModel };