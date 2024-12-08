"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

const MoviePage = () => {
	const pathname = usePathname();
	const [movie, setMovie] = useState<any>(null);
	const [error, setError] = useState<string>('');

 	const movieId = pathname?.split("/")[2];

	useEffect(() => {
		if(!movieId) {
			setError("Movie ID is missing!");
			return;
			
		}
	
		const getMovie = async () => {
			try {
				const response = await axios.get(`/api/movies/${movieId}`);
				setMovie(response.data)
			} catch(error) {
				setError("Failed to load movie")
			}
		}

		getMovie();
	}, [movieId]);

	if (error) {
		return <p>{error}</p>;
	}

	if (!movie) {
		return <p>Loading...</p>;
	}

	const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	return (
		<div>
			<img 	
				src={imgUrl}
				alt={movie.title}
			/>

			<h1>{movie.title}</h1>
			<p>{movie.overview}</p>
		</div>	
	)
}

export default MoviePage;