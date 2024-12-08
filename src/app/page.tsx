"use client";

import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from './components/Movie';
import Favourites from './components/Favourites';
import Loader from './components/Loader';

const HomePage = () => {
	const [topMovies, setTopMovies] = useState([]);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(true);
		const getTopMovies = async () => {
			try {
				const res = await axios.get('/api/movies/');
				setTopMovies(res.data)
				setLoading(false);
			} catch(error) {
				setError("Faild to get top moives");
				console.error(error);
				setLoading(false);
			}
		}

		getTopMovies();
	}, []);

	if (loading) return <Loader />
	
	return (
		<>
			<h2>Top 10 movies</h2>
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