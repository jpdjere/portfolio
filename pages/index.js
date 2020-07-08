import Head from 'next/head'
import { Preloader } from './../components/Preloader';
import { Intro } from '../components/Intro';
import { About } from './../components/About';
import { Contact } from './../components/Contact';
import { Footer } from './../components/Footer';
import { Films } from './../components/Films';

export default function Index({ films }) {
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
        <Intro />
        <About />
        <Films films={films}/>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/getFilmsList');
  const films = await res.json();

  return {
    props: {
      films,
    },
  }
}