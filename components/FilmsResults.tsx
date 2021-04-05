import { useState, useEffect, FC } from 'react';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Virtual]);

export const FilmsResults: FC = ({films, selectedDate}) => {
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

const Slider: FC = ({films, currentSlide}) => {
	const [swiperController, setSwiperController] = useState();
	// Do my slide settings and calculations
	// ...
	const swiper = (
			<Swiper 
				onSwiper={setSwiperController}
				slidesPerView={3}
				spaceBetween={20}
				initialSlide={currentSlide}
				virtual
			>
				{films.map((film, index) => {
						if(!film) return null;

						return (
							<SwiperSlide key={film.hexId || Math.random()} index={index} virtualIndex={index}>
								<FilmPoster film={film}/>
							</SwiperSlide>
						)})
					}
			</Swiper>
	);
	swiperController?.slideTo(currentSlide);
	return swiper;
}

export const FilmPoster = ({film}) => {
	const [isLoaded, setLoaded] = useState(false);

	return (
		<div>
			<img 
				src={film.posterURL}
				alt={film.title}
				onLoad={()=> setLoaded(true)}
			/>
			<p>{film.title}</p>
		</div>
	)
}