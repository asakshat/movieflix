/* eslint-disable react/prop-types */
import { Carousel } from 'flowbite-react';
import { CarouselCard } from './CarouselCard';
import SideCard from './SideCard';

export function MovieCarousel({ movie }) {
	return (
		<div className="flex rounded-none">
			<Carousel
				indicators={false}
				className="roun md:w-[500px] h-[300px] lg:h-[500px] lg:w-[900px] "
			>
				{movie.map((movie) => (
					<div
						key={movie.id}
						className="w-full h-full bg-cover bg-no-repeat p-0 m-0"
						style={{
							backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
						}}
					>
						<CarouselCard movie={movie} className="w-full" />
					</div>
				))}
			</Carousel>
			<SideCard />
		</div>
	);
}
