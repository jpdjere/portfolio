import mongoose from 'mongoose';
const { Schema } = mongoose;

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })

  }
  cached.conn = await cached.promise;
  return cached.conn;
}


const FilmsSchema = new Schema({created_at: { type: Date, required: true, default: Date.now }},{ strict: false });
const FilmsFlattenedSchema = new Schema({created_at: { type: Date, required: true, default: Date.now }},{ strict: false });

// https://stackoverflow.com/questions/59851947/now-mongoose-cannot-overwrite-model-once-compiled
const FilmsModel = mongoose.models['films'] || mongoose.model('films', FilmsSchema);
const FilmsFlattenedModel = mongoose.models['flattenedFilms'] || mongoose.model('flattenedFilms', FilmsFlattenedSchema);

export { FilmsModel, FilmsFlattenedModel };
export default dbConnect;