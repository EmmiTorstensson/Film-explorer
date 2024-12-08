import React from 'react';

interface SearchResultProps {
	result: any[];
}

const SearchResult: React.FC<SearchResultProps> = ({result}) => {
	return (
		<div>
			{result.length > 0 && (
				<ul>
					{result.map((movie) => (
						<li key={movie.id}>{movie.title}</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchResult;