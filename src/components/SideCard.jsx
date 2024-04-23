import { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';
import { useNavigateToTvShows } from '../hooks/navigate';

const SideCard = () => {
	const navigateToTvShows = useNavigateToTvShows();

	const [trendingTv, setTrendingTv] = useState([]);
	const getTrending = () =>
		fetch(
			`https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${
				import.meta.env.VITE_APP_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((data) => setTrendingTv(data.results.slice(0, 2)));

	useEffect(() => {
		getTrending();
	}, []);

	return (
		<>
			<div className=" bg-[#242424] w-4/12 sm:block hidden">
				<h2 className="text-lg font-bold text-white ml-10 my-5">
					Trending this week :
				</h2>
				{trendingTv.map((tv) => {
					const handleWatchTv = () => {
						navigateToTvShows(tv.id);
					};

					return (
						<Card
							key={tv.id}
							onClick={handleWatchTv}
							className="max-w-sm border-none bg-[#242424] m-5 hover:scale-105 hover:cursor-pointer ease-in-out transition-all duration-300"
						>
							<div className="flex gap-4">
								<img
									className="w-[110px] h-[150px]"
									src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
									alt={tv.name}
								/>
								<div>
									<h5 className="text-sm sm:text-base lg:text-2xl font-bold tracking-tight text-white">
										<span className="mr-2">{tv.name}</span>
										<FaStar className="inline-block text-yellow-400 mb-1 mr-2" />
										<span>{parseFloat(tv.vote_average.toFixed(1))}</span>
									</h5>
									<div className="flex flex-col gap-2 mt-2">
										<p className="text-sm text-gray-300">
											Released Date :- {tv.first_air_date}
										</p>
										<p className="text-sm text-gray-300">
											Origin :- {tv.origin_country}
										</p>
									</div>
								</div>
							</div>
						</Card>
					);
				})}
			</div>
		</>
	);
};

export default SideCard;
