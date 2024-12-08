	interface MovieProps {
		id: string,
		title: string;
		release_date: string;
		poster_path: string;
	}

	const Movie: React.FC<MovieProps> = ({title, release_date, poster_path, id}) => {
		const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

		return (
			<div>
				<img 
					src={imgUrl}
					alt={title}
				/>
				<a href={`/movies/${id}`}><h3>{title}</h3></a>
				<p>Release date: {release_date}</p>
			</div>
		)
	}

	export default Movie;