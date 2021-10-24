import { NextApiRequest, NextApiResponse } from 'next';
import { updateDatabase } from "../../utils/databaseActions";
import connectToDatabase, { FilmsModel, FilmsFlattenedModel } from "../../utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  try {
    await updateDatabase();
    res.send("Database updated at: "+new Date())
  } catch (error) {
    console.log({error})
    return res.status(500).send(error);
  }
};