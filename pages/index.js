import Head from 'next/head'
import { getEnrichedFilmsFromSpreadsheetAPI } from '../utils/getEnrichedFilmsFromSpreadsheetAPI';
import { App } from './../components/App';
import { getDataFromDatabase } from "./../utils/databaseActions";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Juan Pablo Djeredjian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/js/jquery-2.1.3.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/main.js"></script>
        <script src="https://kit.fontawesome.com/8b966f91b6.js" crossorigin="anonymous"></script>
      </Head>
      <div id="top">
        <App {...props} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { films, filmsFlattened } = await getDataFromDatabase();

  return {
    props: JSON.parse(JSON.stringify({
      films: films.datos,
      filmsFlattened: filmsFlattened.datos
    })),
  }
};