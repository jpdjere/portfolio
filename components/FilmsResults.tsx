import { useState, useEffect } from 'react';
import { Film } from './../types/types';
import { Slider } from './Slider';

interface Props {
	films: Film[];
	selectedDate: Date;
};

export const FilmsResults = ({films, selectedDate}: Props) => {
	const [currentSlide, setSlide] = useState(1);
	useEffect(() => {
		const slideIndex = films.findIndex(film => film.dateWatched === selectedDate);
		if(slideIndex !== -1){
			setSlide(slideIndex);
		}
	})

  return (
		<div className="col-twelve">
			{currentSlide}
			{films && <Slider films={films} currentSlide={currentSlide} />}
		</div>
  )
};
