import React from 'react';
import Movie from './Movie';

interface SearchResultProps {
	result: any[];
}

const SearchResult: React.FC<SearchResultProps> = ({result}) => {
	return (
		<div>
			{result.length > 0 && (
				<ul>
					{result.map((movie) => (
						<li key={movie.id}>
							<Movie 
								id={movie.id}
								title={movie.title}
								release_date={movie.release_date}
								poster_path={movie.poster_path}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchResult;