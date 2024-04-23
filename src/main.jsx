import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Error404 from './components/Error404.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviePlayer from './pages/MoviePlayer.jsx';
import TvShowPlayer from './pages/TvShowPlayer.jsx';
import SearchedContent from './pages/SearchedContent.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error404 />,
	},
	{
		path: '/movies/:id',
		element: <MoviePlayer />,
	},
	{
		path: '/tv-shows/:id',
		element: <TvShowPlayer />,
	},
	{
		path: '/search/results/:query',
		element: <SearchedContent />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
