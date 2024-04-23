/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
	const [inputValue, setInputValue] = useState('');

	return (
		<SearchContext.Provider value={{ inputValue, setInputValue }}>
			{children}
		</SearchContext.Provider>
	);
}
