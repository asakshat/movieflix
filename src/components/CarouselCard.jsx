/* eslint-disable react/prop-types */
import { Card } from 'flowbite-react';
import { FaStar } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useNavigateToMovies } from '../hooks/navigate';

export function CarouselCard({ movie }) {
	const navigateToMovies = useNavigateToMovies();

	const handleWatchMov = () => {
		navigateToMovies(movie.id);
	};

	const limitWords = (text, limit = 20) => {
		const words = text.split(' ');
		if (words.length > limit) {
			return words.slice(0, limit).join(' ') + '...';
		} else {
			return text;
		}
	};
	return (
		<Card className="absolute bottom-0 w-full bg-black bg-opacity-70 border-none rounded-none h-full">
			<div className="flex items-center gap-4">
				<img
					className="w-[150px] h-[200px]"
					src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
					alt={movie.title}
				/>
				<div className="flex flex-col items-start gap-2">
					<div>
						<h5 className="text-sm sm:text-base lg:text-2xl font-bold tracking-tight text-white">
							<span className="mr-2">{movie.title}</span>
							<FaStar className="inline-block text-yellow-400 mb-2 mr-2" />
							<span>{parseFloat(movie.vote_average.toFixed(1))}</span>
						</h5>
					</div>
					<p className="text-xs sm:text-sm lg:text-base font-normal text-gray-200">
						Release Year : {movie.release_date}
					</p>
					<p className="lg:w-80 sm:w-48 text-xs sm:text-sm lg:text-base font-normal text-gray-400 ">
						{limitWords(movie.overview)}
					</p>
				</div>
			</div>
			<Button outline pill className="w-44" onClick={handleWatchMov}>
				<span className="mx-2">Watch Now </span>{' '}
				<HiOutlineArrowRight className="h-6 w-6" />
			</Button>
		</Card>
	);
}
