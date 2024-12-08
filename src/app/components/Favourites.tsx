"use client";

import { useEffect, useState } from "react";
import { MovieProps } from "./Movie";

const Favourites = () => {
  	const [favourites, setFavourites] = useState<MovieProps[]>([]);

	useEffect(() => {
		const storedFavourites = localStorage.getItem("favourites");
		if(storedFavourites) {
			setFavourites(JSON.parse(storedFavourites));
		}
	}, []);

	const removeFromFavourites = (id: string) => {
		const updatedFavourites = favourites.filter((movie) => movie.id !== id);
		setFavourites(updatedFavourites);
		localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
	};

	return (
		<div>
			<h2>Your Favourite Movies</h2>
			{favourites.length === 0 ? (
				<p>You have no favourite movies yet.</p>
			) : (
				<ul>
					{favourites.map((movie) => (
						<li key={movie.id}>
							<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
							<h3>{movie.title}</h3>
							<button onClick={() => removeFromFavourites(movie.id)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
};

export default Favourites;