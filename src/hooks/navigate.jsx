import { useNavigate } from 'react-router-dom';

export function useNavigateToMovies() {
	const navigate = useNavigate();

	return (movieId) => {
		navigate(`/movies/${movieId}`);
	};
}

export function useNavigateToTvShows() {
	const navigate = useNavigate();

	return (movieId) => {
		navigate(`/tv-shows/${movieId}`);
	};
}
