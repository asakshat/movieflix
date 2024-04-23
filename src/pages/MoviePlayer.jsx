import { useState, useEffect } from 'react';
import { Nav } from '../components/Navbar';
import { SearchProvider } from '../hooks/searchState';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const MoviePlayer = () => {
	const { id } = useParams();
	const [videoId, setVideoId] = useState(null);
	const opts = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 1,
			controls: 1,
			modestbranding: 1,
			rel: 0,
			start: 2,
		},
	};

	useEffect(() => {
		const getMovieId = async () => {
			const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
				import.meta.env.VITE_APP_API_KEY
			}`;
			const response = await fetch(url);
			const data = await response.json();

			const trailers = data.results.filter(
				(result) => result.type === 'Trailer'
			);

			const lastTrailer = trailers[trailers.length - 1];

			if (lastTrailer) {
				setVideoId(lastTrailer.key);
			}
		};

		getMovieId();
	}, [id]);

	return (
		<div className="m-0 p-0 bg-black">
			<SearchProvider>
				<Nav />
			</SearchProvider>
			<div>
				<YouTube className="h-[90vh]" opts={opts} videoId={videoId} />
			</div>
		</div>
	);
};

export default MoviePlayer;
