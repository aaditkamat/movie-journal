import axios from "axios";
import { addMoviesToFetchedStore, Movie } from "../movieStore.ts";
import { FormEvent, useState} from "react";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const apiKey = import.meta.env.PUBLIC_OMDB_API_KEY;
	const baseURL = "https://www.omdbapi.com";

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		await axios.get(baseURL, {
			params: {
				apikey: apiKey,
				s: searchTerm
			}
		}).then(async (response) => {
			if (response.data.Response === "True") {
				let movies: Movie[] = [];
				for (let searchedMovie of response.data.Search) {
					let movieData = await axios.get(baseURL, {
						params: {
							apikey: apiKey,
							i: searchedMovie.imdbID
						}
					});
					let newMovie = movieData.data;
					newMovie.JournalStatus = false;
					movies.push(newMovie);
				}
				addMoviesToFetchedStore(movies);
			} else {
				console.log(response.data.Error);
			}
		}).catch((error) => console.log(error));

	}
    return (
        <form onSubmit={handleSubmit} className="m-3">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter movie name" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    );
};

export default Search;
