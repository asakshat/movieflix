/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from 'react-icons/fa';
import { useNavigateToMovies } from '../hooks/navigate';

export function MovieMap({ movie }) {
	const navigateToMovies = useNavigateToMovies();

	const handleWatchMov = (movieId) => {
		navigateToMovies(movieId);
	};
	const limitWords = (text, limit = 3) => {
		const words = text.split(' ');
		if (words.length > limit) {
			return words.slice(0, limit).join(' ') + '...';
		} else {
			return text;
		}
	};

	return (
		<>
			<h2 className="border-l-2 p-4 mt-20	 border-yellow-300 text-white m-8 font-mono font-bold text-xl">
				Highest Rated Movies:{' '}
			</h2>
			<div className="flex flex-nowrap overflow-x-hidden gap-5 m-5 items-center scrollbar-hide">
				{movie.map((movie) => (
					<div key={movie.id} className="flex-shrink-0 w-56">
						<div className="bg-[#121212] border-none text-white  rounded-lg w-56 hover:scale-110 ease-in-out duration-300">
							<div className="flex flex-col">
								<img
									className="w-full h-[300px]"
									src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
									alt={movie.original_title}
								/>
								<div className="mx-4 mb-4 pb-4">
									<div className="flex gap-2 mt-2 items-center text-slate-400">
										<FaStar className="inline-block text-yellow-400 " />
										<span>{parseFloat(movie.vote_average.toFixed(1))}</span>
										<span>{movie.release_date.slice(0, 4)}</span>
									</div>
									<p className="font-bold text-sm w-full">
										{limitWords(movie.original_title)}
									</p>
									<button
										className="bg-[#222222] w-full p-1 mt-4 rounded "
										onClick={() => handleWatchMov(movie.id)}
									>
										Watch Now
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
