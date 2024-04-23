import { useState, useEffect } from 'react';

export const useFectchTvShows = (sortBy = 'popularity.desc') => {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		const getMovie = () => {
			fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${
					import.meta.env.VITE_APP_API_KEY
				}&sort_by=${sortBy}`
			)
				.then((res) => res.json())
				.then((json) => setMovieList(json.results));
		};

		getMovie();
	}, [sortBy]);

	return movieList;
};
