import Head from 'next/head'
import { Preloader } from './../components/Preloader';
import { App } from './../components/App';

import { createDateMinus6Months } from '../utils/client';
import { addMovieDetailsFromAPI } from '../utils/addMovieDetailsFromAPI';

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
  const fullFilmsList = await getFullFilmsList();

  const fullFilmsListWithDetails = addMovieDetailsFromAPI(fullFilmsList);
  const films = await Promise.all(fullFilmsListWithDetails);
  const filmsFlatttened = films.reduce((acc, current) => {
    const filmsWithDate = current.films.map(film => ({
      ...film,
      dateWatched: current.date
    }));
    
    return [...acc, ...filmsWithDate]
  }, []);

  return {
    props: {
      films,
      filmsFlatttened
    },
  }
}

async function getFullFilmsList() {
  const res = await fetch('http://localhost:3000/api/getFilmsList');
  return res.json();
}