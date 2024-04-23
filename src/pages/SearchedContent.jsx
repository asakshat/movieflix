/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Nav } from '../components/Navbar';
import { SearchProvider } from '../hooks/searchState';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useNavigateToMovies, useNavigateToTvShows } from '../hooks/navigate';
import { useParams } from 'react-router-dom';

const SearchedContent = () => {
	let { query: movieName } = useParams();
	const location = useLocation();
	const { movieResults = [], showResults = [] } = location.state || {};
	const navigateToMovies = useNavigateToMovies();
	const navigateToTvShows = useNavigateToTvShows();

	const handleWatchMov = (id) => {
		navigateToMovies(id);
	};

	const handleWatchMovie = (id) => {
		navigateToTvShows(id);
	};

	return (
		<>
			<div className="bg-black">
				<SearchProvider>
					<Nav />
				</SearchProvider>
				<div className="bg-black p-2 m-2 ">
					<h2 className="p-2 border-b-2  text-center  border-yellow-300 text-white m-8 font-mono font-bold text-xl">
						Search Results For :
						<span className="text-red-500"> '{movieName}' </span>
					</h2>
					<h3 className="p-2 border-l-2   border-teal-300 text-white m-8 font-mono font-bold text-xl">
						Movies
					</h3>
					<div className="flex flex-nowrap overflow-x-auto gap-5 m-5 items-center scrollbar-hide">
						{movieResults.map((movie) => (
							<div key={movie.id} className="flex-shrink-0 w-56">
								<div className="bg-[#121212] border-none text-white  rounded-lg w-56  ">
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
												{movie.original_title}
											</p>
											<button
												className="bg-[#222222] w-full p-1 mt-4 rounded hover:bg-yellow-400"
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
					<h3 className="p-2 border-l-2   border-teal-300 text-white m-8 font-mono font-bold text-xl">
						Tv Shows
					</h3>
					<div className="flex flex-nowrap overflow-x-auto gap-5 m-5 items-center scrollbar-hide">
						{showResults.map((movie) => (
							<div key={movie.id} className="flex-shrink-0 w-56">
								<div className="bg-[#121212] border-none text-white  rounded-lg w-56  ">
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
												<span>{movie.first_air_date.slice(0, 4)}</span>
											</div>
											<p className="font-bold text-sm w-full">
												{movie.original_title}
											</p>
											<button
												className="bg-[#222222] w-full p-1 mt-4 rounded hover:bg-yellow-400"
												onClick={() => handleWatchMovie(movie.id)}
											>
												Watch Now
											</button>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchedContent;
