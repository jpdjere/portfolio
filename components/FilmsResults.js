import { useState } from 'react';

export const FilmsResults = ({films, selectedDate}) => {
	const dateIndex = films.findIndex(dateGroup => dateGroup.date === selectedDate)
  return (
		<div className="col-twelve" id="filmsResults">
			{
				films[dateIndex].films.map(film => {
					return (
						<img src={film.posterURL} alt={film.title} style={{width: '50%'}}/>
					)
				})
			}
		</div>

  )
}