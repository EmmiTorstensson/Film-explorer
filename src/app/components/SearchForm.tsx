import { useState } from "react";

const SearchForm = () => {
	const [query, setQuery] = useState("");

	const handleSearch = async (e) => {
		e.preventDefault();

		console.log(query)
	}

	return (
		<>
			<form onSubmit={handleSearch}>
				<input 
					type="text" 
					placeholder="Enter movie title"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Search</button>
			</form>
		</>
	)
}

export default SearchForm;