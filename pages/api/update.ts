import { NextApiRequest, NextApiResponse } from 'next';
import { updateDatabase } from "../../utils/databaseActions";
import { triggerDeployment } from "../../utils/triggerDeployment";
import connectToDatabase from "../../utils/dbConnect";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  try {
    await updateDatabase();
    await triggerDeployment();
    res.send("Database updated at: "+new Date())
  } catch (error) {
    console.log({error})
    return res.status(500).send(error);
  }
};