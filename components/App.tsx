import { Intro } from '../components/Intro';
import { About } from './../components/About';
import { Contact } from './../components/Contact';
import { Footer } from './../components/Footer';
import { Films } from './../components/Films';

export function App({films, filmsFlatttened}) {
	debugger;
	return (
		<>
			<Intro />
			<About />
			<Films
				films={films}
				filmsFlatttened={filmsFlatttened}
			/>
			<Contact />
			<Footer />
		</>
	)
}