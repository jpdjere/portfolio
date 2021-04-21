import { NextApiRequest, NextApiResponse } from 'next';
import { getEnrichedFilmsFromSpreadsheetAPI } from "../../utils/getEnrichedFilmsFromSpreadsheetAPI";


export default async (req: NextApiRequest, res: NextApiResponse) => {
  // try {
  //   if(process.env.ENVIRONMENT === 'development'){
  //     const data = await getEnrichedFilmsFromSpreadsheetAPI();
  //     return res.send(data);
  //   } else {
  //     const data = await getDataFromDatabase('summary');
  //     res.send(data._doc.datos);
  //   }
  // } catch (error) {
  //   return res.send(error);
  // }
};

