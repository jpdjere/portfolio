import { useState } from 'react';
import { FilmsGraph } from './FilmsGraph';
import { FilmsResults } from './FilmsResults';

export const Films = ({ films, filmsFlattened }) => {
	const lastDate = films[0].date;
	const [selectedDate, setSelectedDate] = useState(lastDate);

	const changeSelectedDate = (value) => {
		if(!value || !value.date) {
			return
		}
		setSelectedDate(value.date);
	}
	const deleteSelectedDate = () => {
		setSelectedDate(null);
	}

  return (
  	<section id="films">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>Cinema</h5>
					<h1>Movies I've watched</h1>
					<p>I'm a big cinema fan and I (obsessively) keep track of the films I have seen. So I've decided to share this list with you, making use of the Google Spreadsheet API and The Internet Movie DB API.</p>
				</div>
				<FilmsGraph
					filmsDate={films}
					changeSelectedDate={changeSelectedDate}
					deleteSelectedDate={deleteSelectedDate}
				/>
				<FilmsResults films={filmsFlattened} selectedDate={selectedDate}/>
			</div>
   </section> 
  )
}