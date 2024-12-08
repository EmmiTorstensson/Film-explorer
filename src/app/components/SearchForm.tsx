import axios from "axios";
import { useState } from "react";
import SearchResult from "./SearchResult";

const SearchForm = () => {
	const [query, setQuery] = useState("");
	const [result, setResult] = useState([]);

	const handleSearch = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
			const data = await response.data;

			setResult(data)
			console.log(result)

		} catch(error) {
			console.error("Error getting data", error);
		}
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
			<SearchResult result={result} />
		</>
	)
}

export default SearchForm;