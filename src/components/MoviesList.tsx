import { Movie } from "../movieStore.ts";
import { useState } from "react";

type MovieTextProps = {
  text: string;
  movies: Movie[];
}

const MovieList = ({ text, movies }: MovieTextProps) => {
  const [currentMovies, setCurrentMovies] = useState(movies);
  const handleClick = (index: number) => {
    console.log('Trash icon clicked');
    if (index !== -1) {
      setCurrentMovies(currentMovies.splice(index, 1));
    }
  }

  return (
    <div className="h-52 ml-10 text-black">
      <h2 className="font-bold"> {text} </h2>
      <ol className="list-decimal">
        {
          currentMovies.map((movie: Movie, index: number) => (
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