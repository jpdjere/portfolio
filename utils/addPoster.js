import { getPlaiceholder } from "plaiceholder";

export async function addPosterToFilmData(filmData) {
  const { base64, img } = await getPlaiceholder(
    `https://image.tmdb.org/t/p/w500/${filmData.poster_path}`,
    { size: 10 }
  );
  
  return {
    ...filmData,
    posterURL: img.src,
    blurDataURL: base64, 
  }
}