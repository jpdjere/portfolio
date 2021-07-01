import React, { useState } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Film } from '../types/types';
SwiperCore.use([Virtual]);

interface SliderProps {
	films: Film[];
	currentSlide: number;
}

export const Slider = ({films, currentSlide}: SliderProps) => {
	const [swiperController, setSwiperController] = useState(null);
	// Do my slide settings and calculations
	// ...
	const swiper = (
		<Swiper 
			style={{minHeight: "500px"}}
			onSwiper={setSwiperController}
			slidesPerView={3}
			spaceBetween={20}
			initialSlide={currentSlide}
			virtual
		>
			{films.map((film, index) => {
				if(!film.poster_url) return null;

				return (
					<SwiperSlide key={film.hexId || Math.random()} virtualIndex={index}>
						<FilmPoster film={film}/>
					</SwiperSlide>
				)})
			}
		</Swiper>
	);
	swiperController?.slideTo(currentSlide);
	return swiper;
}

interface FilmPosterProps {
	film: Film;
}

const FilmPoster = ({film}: FilmPosterProps) => {
	const [isLoaded, setLoaded] = useState(false);
	const showOriginalTitle = film.original_language !== "en";

	return (
		<div className="filmResults">
			<img 
				src={film.poster_url}
				alt={film.title}
				onLoad={()=> setLoaded(true)}
			/>
			<p className={`${showOriginalTitle} "title" `}>{film.title}</p>
			{showOriginalTitle && <p className="subtitle">({film.original_title})</p>}
			<p>Director: {film.director}</p>
			<p>Watched: {film.date_watched}</p>
		</div>
	)
}