import { NextApiRequest, NextApiResponse } from 'next';
import { updateDatabase } from "../../utils/databaseActions";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await updateDatabase();
    res.send("Database updated at: "+new Date())
  } catch (error) {
    return res.send(error);
  }
};