import React, { useEffect, useState } from 'react';
import Image from 'next/image'
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
	const [width, setWidth] = useState<number>();
	const [sliderPerView, setSlidesPerView] = useState(width < 600 ? 1 : 3);

	const handleWindowResize = () => setWidth(window.innerWidth);
	useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
	})

	useEffect(() => {
		handleWindowResize();
		setSlidesPerView(width < 600 ? 1 : 3)
	}, [width])
	
	const swiper = (
		<Swiper 
			style={{minHeight: "700px"}}
			onSwiper={setSwiperController}
			slidesPerView={sliderPerView}
			spaceBetween={20}
			initialSlide={currentSlide}
			virtual
		>
			{films.map((film, index) => {
				if(!film.posterURL) return null;

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
			<div className="card">
				<div className="card__image">
					<Image 
						src={film.posterURL}
						alt={film.title}
						placeholder="blur"
						width={500}
						height={750}
						blurDataURL={film.blurDataURL}
					/>
				</div>
				<div className="card__content">
					<div className="card__title">{film.title}</div>
					{showOriginalTitle && <p className="card__subtitle">({film.original_title})</p>}
					<p className="card__text">Director: {film.director}</p>
					<p className="card__text">Watched: {film.date_watched}</p>
				</div>
			</div>
		</div>
	)
}