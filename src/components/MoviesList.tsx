import { Movie, WatchStatus, removeWatchedMovieFromStore, removeWantToWatchMovieFromStore } from "../movieStore.ts";
import type { Store } from "nanostores";
import { useStore } from "@nanostores/react";
import { useState } from "react";

type MovieTextProps = {
  text: string;
  movieStore: Store;
  watchStatus: WatchStatus
}

const MovieList = ({ text, movieStore, watchStatus }: MovieTextProps) => {
  const movies: Movie[] = useStore(movieStore);

  const handleClick = (index: number) => {
    if (watchStatus === WatchStatus.Watched) {
        removeWatchedMovieFromStore(index);
    } else {
      removeWantToWatchMovieFromStore(index);
    }
  }

  return (
    <div className="overflow-auto h-100 ml-10 text-black">
      <h2 className="font-bold"> {text} </h2>
      <ol className="list-decimal">
        {
          movies.map((movie: Movie, index: number) => (
            <li key={movie.imdbID}>
              {movie.Title} ({movie.Year}) &nbsp; <i className="fa-solid fa-trash fa-xs" onClick={() => handleClick(index)}></i>
            </li>
          ))
        }
      </ol>
    </div>
  );
}

export default MovieList;