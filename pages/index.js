import Head from 'next/head'
import { App } from './../components/App';
import { getEnrichedFilmsFromSpreadsheetAPI } from "./../utils/getEnrichedFilmsFromSpreadsheetAPI";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>Juan Pablo Djeredjian</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="/js/jquery-2.1.3.min.js"></script>
        <script src="/js/plugins.js"></script>
        <script src="/js/main.js"></script>
      </Head>
      <div id="top">
        <App {...props} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { films, filmsFlattened } = await getEnrichedFilmsFromSpreadsheetAPI();

  return {
    props: {
      films,
      filmsFlattened
    },
  }
};