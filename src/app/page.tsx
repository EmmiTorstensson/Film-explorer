"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from './components/Movie';
import Favourites from './components/Favourites';

const HomePage = () => {
	const [topMovies, setTopMovies] = useState([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getTopMovies = async () => {
			try {
				const res = await axios.get('/api/movies/');
				setTopMovies(res.data)
			} catch(error) {
				setError("Faild to get top moives");
				console.error(error)
			}
		}

		getTopMovies();
	}, []);
	
	return (
		<>
			<p>Top 10</p>
			{error && <p>{error}</p>}
			<ul>
				{topMovies.map((movie: { id: number; title:string}) => (
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

			<Favourites />
		</>
	)
}

export default HomePage;