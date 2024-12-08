	import axios from "axios";
	import { NextResponse } from "next/server";

	export async function GET(request: Request, { params }: { params: { id: string } }) {
		const apiKey = process.env.TMDB_API_KEY;
		const movieId = params.id;

		try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
				params: {
					api_key: apiKey,
					language: 'eng-US'
				},
			});

			return NextResponse.json(response.data)

		} catch(error) {
			console.error("Error getting movie details", error.response ? error.response.data : error.message);
			return NextResponse.json({ error: "Faild to get movie details" }, { status: 500 })
		}
	}