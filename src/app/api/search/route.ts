import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const apiKey = process.env.TMDB_API_KEY;

	const query = "Avatar";

	try {
		const response 	= await axios.get("https://api.themoviedb.org/3/search/movie", {
			params: {
				api_key: apiKey,
				query: query,
				language: "en-US",
				page: 1,
			}
		})

		return NextResponse.json(response.data.results)
	} catch(error) {
		console.error('Error searching for movies:', error.response ? error.response.data : error.message);
		return NextResponse.json({error: 'Faild to search for movies'}, {status: 500})
	}


}