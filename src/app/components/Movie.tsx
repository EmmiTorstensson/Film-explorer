	interface MovieProps {
		id: number,
		title: string;
		release_date: string;
		poster_path: string;
	}

	const Movie: React.FC<MovieProps> = ({title, release_date, poster_path, id}) => {
		const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

		const addToFavourites = () => {
			const movie = { id, title, release_date, poster_path };

			const storedFavourites = JSON.parse(localStorage.getItem('favourites') || '[]');

			if(storedFavourites.some((fave: any) => fave.id === id)) {
				alert('This movie is already an favourite!');
				return;
			}

			storedFavourites.push(movie);

			localStorage.setItem('favourites', JSON.stringify(storedFavourites));

			alert(`${title} added to favourites`)
		};

		return (
			<div>
				<img 
					src={imgUrl}
					alt={title}
				/>
				<a href={`/movies/${id}`}><h3>{title}</h3></a>
				<p>Release date: {release_date}</p>
				<button onClick={addToFavourites}>Add to favourites</button>
			</div>
		)
	}

	export default Movie;