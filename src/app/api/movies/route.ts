import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
	const apiKey = process.env.TMDB_API_KEY;

	try {
		const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
			params: {
				api_key: apiKey,
				language:'en-Us',
				page: 1,
			}
		})

		const topMovies = response.data.results.slice(0,10);

		return NextResponse.json(topMovies)
	} catch (error) {
	    console.error('Error fetching top movies:', error.response ? error.response.data : error.message);

    	return NextResponse.json({ error: 'Failed to fetch top movies' }, { status: 500 });
	}
}