import fs from 'fs';
import readline from 'readline';
const { google } = require('googleapis');
const { auth } = require('google-auth-library');

// load the environment variable with our keys
const keysEnvVar = process.env.GOOGLE_API_CREDENTIALS;
if (!keysEnvVar) {
  throw new Error('The $GOOGLE_API_CREDENTIALS environment variable was not found!');
}
const keys = JSON.parse(keysEnvVar);
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

/**
 * Authorize call to Spreadsheets api and use callback to get data
 * @param {function} callback The callback to call with the authorized client.
 */
export function authorize(callback) {
  const client = auth.fromJSON(keys);
  client.scopes = SCOPES;

  return new Promise((resolve, reject) => {
    callback(client).then(data => {
      return resolve(data);
    })
  })
}
  
/**
 * @param auth The authenticated Google Service Account client.
 */
export function listFilms(auth) {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({version: 'v4', auth});
    sheets.spreadsheets.values.get({
      spreadsheetId: '1MEgog9YuQ3TEuhI-MpF1mKoa4J3MXCnDX-XThY2sIiE',
      range: 'A2:C',
    }, (err, res) => {
      if (err) {
        return console.log('The API returned an error: ' + err);
      }
      const rows = res.data.values;
      if (rows.length) {
          return resolve(rows);
      } else {
        console.log('No data found.');
        reject('No data found.');
      }
    });

  })
}