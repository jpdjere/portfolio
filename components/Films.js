import { useState } from 'react';
import { FilmsGraph } from './FilmsGraph';

export const Films = ({ films }) => {
	const [ first ] = films;

  return (
  	<section id="films">
			<div className="row section-intro">
				<div className="col-twelve">
					<h5>Cinema</h5>
					<h1>Movies I've watched</h1>
					<p>I'm a big cinema fan and I (obsessively) keep track of the films I have seen. So I've decided to share this list with you, making use of the Google Spreadsheet API and The Internet Movie DB API.</p>
				</div>
				<FilmsGraph films={films}/>
				{/* <FilmsResults /> */}
			</div>
   </section> 
  )
}