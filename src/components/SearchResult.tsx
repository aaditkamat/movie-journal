import WatchButton from './WatchButton.tsx';
import { useStore } from '@nanostores/react';
import { fetchedMovieStore, Movie, addWatchedMovie, addWantToWatchMovie } from '../movieStore';

const SearchResult = () => {
    const movies = useStore(fetchedMovieStore);

    return (
        <div id="search-result" className="m-3 grid divide-y-2">
            {
                movies.map((movie: Movie) => (
                    <div key={movie.imdbID} className="text-black flex w-42 h-36 bg-white gap-4">
                        <div className="flex-none">
                            {
                                movie.Poster !== "N/A" ? <img className="relative object-cover h-24 w-16" alt="Movie image" src={movie.Poster} /> : <i className="fa-solid fa-film"></i>
                            }
                        </div>
                        <div className="flex-auto w-64">
                            <p>
                            <span className="text-xl">{movie.Title}</span>
                            <br />
                            <span className="text-xlfont-bold">{movie.Year}</span>
                            <br />
                            <span className="text-xlfont-bold">{movie.Actors}</span>
                            </p>
                            <WatchButton text="Watched" color="green" onClick={() => addWatchedMovie(movie)}/>
                            &nbsp;
                            <WatchButton text="Want to Watch" color="gray" onClick={() => addWantToWatchMovie(movie)}/>
                        </div>
                    </div>
                ))
            }
            {/* <ShowMore /> */}
        </div>
        
    )
}

export default SearchResult;
