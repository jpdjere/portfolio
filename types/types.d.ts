export type Film = {
	title: string;
	hexId: string;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	release_date: Date;
	video:boolean;
	vote_average: number;
	vote_count: number;
	poster_url: string;
	dateWatched: Date;
}

export interface Films {
	count: number;
	date: Date;
	films: Film[];
}