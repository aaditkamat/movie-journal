import WatchButton from './WatchButton.tsx';
import ShowMore from './ShowMore.tsx';
import { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { fetchedMovieStore, watchedMovieStore, wantToWatchMovieStore, Movie } from '../movieStore';

const SearchResult = () => {
    const movies = useStore(fetchedMovieStore);

    return (
        <div id="search-result" className="m-3 grid divide-y-2">
            {
                movies.map((movie: Movie) => (
                    <div key={movie.imdbID} className="w-42 h-24 bg-white columns-3">
                        <img className="relative object-cover h-24 w-16" alt="Movie image" src={movie.Poster} />
                        <p>
                        <span className="text-xl text-black">{movie.Title}</span>
                        <br />
                        <span className="text-xl text-black font-bold">{movie.Year}</span>
                        </p>
                        <WatchButton text="Watched" color="green" onClick={() => watchedMovieStore.set([...watchedMovieStore.get(), movie])}/>
                        <WatchButton text="Want to Watch" color="gray" onClick={() => wantToWatchMovieStore.set([...wantToWatchMovieStore.get(), movie])}/>
                    </div>
                ))
            }
            <ShowMore />
        </div>
        
    )
}

export default SearchResult;
