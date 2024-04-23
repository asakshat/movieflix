/* eslint-disable no-undef */
import { MovieCarousel } from './MovieCarousel';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MovieMap } from './MovieMap';
const Home = () => {
	const movieListForCarousel = useFetchMovies();
	const movieListForMap = useFetchMovies('vote_count.desc');
	return (
		<>
			<MovieCarousel movie={movieListForCarousel} />
			<MovieMap movie={movieListForMap} />
		</>
	);
};

export default Home;
