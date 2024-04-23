import Home from './components/Home';
import { Nav } from './components/Navbar';
import { SearchProvider } from './hooks/searchState';

function App() {
	return (
		<>
			<div className="bg-black">
				<SearchProvider>
					<Nav />
				</SearchProvider>
				<Home />
			</div>
		</>
	);
}

export default App;
