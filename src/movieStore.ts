import { atom } from 'nanostores';

export type Rating = {
    Source: string;
    Value: string;
};

export type Movie = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type:string;
    DVD:string;
    BoxOffice:string;
    Production:string;
    Website:string;
}

export enum WatchStatus {
    Watched = 1,
    WantToWatch = 2
}

export const fetchedMovieStore = atom<Movie[]>([]);

const movieSorter = (first: Movie, second: Movie) => parseInt(second.imdbRating) - parseInt(first.imdbRating);

export const removeMovie = (index: number, movieStore: typeof fetchedMovieStore) => {
    let updatedMovies = [];
    if (index < movieStore.get().length - 1) {
        updatedMovies = movieStore.get().splice(index, 1);
    } else {
        updatedMovies = movieStore.get().slice(0, index);
    }
    console.log(`updatedMovies: ${updatedMovies.toString()}`)
    updatedMovies.sort(movieSorter);
    console.log(`updatedMovies after sorting: ${updatedMovies.toString()}`)
    movieStore.set(updatedMovies);
}
export const addMovie = (movie: Movie, movieStore: typeof fetchedMovieStore) => {
    let updatedMovies = movieStore.get();
    if (updatedMovies.find((m) => m.imdbID === movie.imdbID)) {
        return;
    } 
    updatedMovies = [...updatedMovies, movie];
    updatedMovies.sort(movieSorter);
    movieStore.set(updatedMovies);
}
export const addMovies = (movies: Movie[]) => {
    const updatedMovies = [...fetchedMovieStore.get(), ...movies];
    updatedMovies.sort(movieSorter);
    fetchedMovieStore.set(updatedMovies);
}

export const watchedMovieStore = atom<Movie[]>([]);
export const removeWatchedMovie = (index: number) => removeMovie(index, watchedMovieStore);
export const addWatchedMovie = (movie: Movie) => addMovie(movie, watchedMovieStore);


export const wantToWatchMovieStore = atom<Movie[]>([]);
export const removeWantToWatchMovie = (index: number) => removeMovie(index, wantToWatchMovieStore);
export const addWantToWatchMovie = (movie: Movie) => addMovie(movie, wantToWatchMovieStore);