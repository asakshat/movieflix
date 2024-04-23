/* eslint-disable no-unused-vars */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Navbar,
	NavbarBrand,
	NavbarCollapse,
	NavbarLink,
	NavbarToggle,
	TextInput,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { SearchContext } from '../hooks/searchState';
import { ModalComponent } from './Modal';
export function Nav() {
	const navigate = useNavigate();

	const { inputValue, setInputValue } = useContext(SearchContext);
	const [movieResults, setMovieResults] = useState([]);
	const [showResults, setShowResults] = useState([]);

	const handleSearch = (e) => {
		return setInputValue(e.target.value);
	};
	async function searchMovies() {
		const url = `https://api.themoviedb.org/3/search/movie?api_key=${
			import.meta.env.VITE_APP_API_KEY
		}&query=${inputValue}`;
		const response = await fetch(url);
		const movieData = await response.json();
		return movieData.results;
	}
	async function searchShows() {
		const urlShow = `https://api.themoviedb.org/3/search/tv?api_key=${
			import.meta.env.VITE_APP_API_KEY
		}&query=${inputValue}`;
		const responseShow = await fetch(urlShow);
		const showData = await responseShow.json();
		return showData.results;
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		const movieData = await searchMovies();
		const showData = await searchShows();
		setMovieResults(movieData);
		setShowResults(showData);
		navigate(`/search/results/${inputValue}`, {
			state: { movieResults: movieData, showResults: showData },
		});
	};
	return (
		<>
			<Navbar fluid className="bg-[#121212]">
				<NavbarBrand as={Link} to="/" className="h-16 ">
					<p className="font-mono font-bold text-yellow-400">DopeFlix</p>
				</NavbarBrand>
				<form onSubmit={handleSubmit}>
					<TextInput
						className="2xl:w-96 xl:w-96 l:w-96  border-none rounded-lg "
						placeholder="Search keywords ..."
						onChange={(e) => {
							handleSearch(e);
						}}
					/>
				</form>
				<NavbarToggle />

				<NavbarCollapse>
					<NavbarLink as={Link} to="/" className="text-yellow-400">
						Discover
					</NavbarLink>

					<NavbarLink>
						<ModalComponent />
					</NavbarLink>
				</NavbarCollapse>
			</Navbar>
		</>
	);
}
