import { Intro } from '../components/Intro';
import { About } from './../components/About';
import { Contact } from './../components/Contact';
import { Footer } from './../components/Footer';
import { Films } from './../components/Films';

import { Film, Films as FilmList } from './../types/types';

interface Props {
	films: FilmList;
	filmsFlattened: Film[];
};

export function App({films, filmsFlattened}: Props) {
	return (
		<>
			<Intro />
			<About />
			<Films
				films={films}
				filmsFlattened={filmsFlattened}
			/>
			<Contact />
			<Footer />
		</>
	)
}
