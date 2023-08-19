import { atom, WritableAtom } from 'nanostores';

type Rating = {
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
    Response:string;
    JournalStatus: boolean;
}

type MovieStore = WritableAtom<Movie[]>;

export enum WatchStatus {
    Watched = 1,
    WantToWatch = 2
}

export const fetchedMovieStore: MovieStore = atom<Movie[]>([]);

const movieSorter = (first: Movie, second: Movie) => parseInt(second.imdbRating) - parseInt(first.imdbRating);

const removeMovieFromList = (index: number, movies: Movie[]) => {
    if (index < movies.length - 1) {
        movies.splice(index, 1);
    } else {
        movies = movies.slice(0, index);
    }
    return movies;
}

const insertMovieInList = (index: number, movies: Movie[], movie: Movie) => {
    movies.splice(index, 0, movie);
    return movies;
}

const updateMovieJournalStatus = (movie: Movie, journalStatus: boolean) => {
    let fetchedMovies: Movie[] = fetchedMovieStore.get();
    let fetchedMovieIndex: number = fetchedMovies.findIndex((m) => m.imdbID === movie.imdbID);
    if (fetchedMovieIndex !== -1) {
        let fetchedMovie: Movie = fetchedMovies[fetchedMovieIndex];
        fetchedMovie.JournalStatus = journalStatus;
        let updatedMovies = removeMovieFromList(fetchedMovieIndex, fetchedMovies);
        updatedMovies = insertMovieInList(fetchedMovieIndex, updatedMovies, fetchedMovie);
        fetchedMovieStore.set(updatedMovies);
        return true;
    } else {
        return false;
    }
}

const sortMovies = (updatedMovies: Movie[], movieStore: MovieStore) => {
    updatedMovies.sort(movieSorter);
    movieStore.set(updatedMovies);
}

export const removeMovieFromStore = (index: number, movieStore: MovieStore) => {
    updateMovieJournalStatus(movieStore.get()[index], false);
    let updatedMovies = removeMovieFromList(index, movieStore.get());
    sortMovies(updatedMovies, movieStore);
}
export const addMovieToStore = (movie: Movie, movieStore: MovieStore) => {
    const hasMovieJournalStatusUpdated = updateMovieJournalStatus(movie, true);
    if (!hasMovieJournalStatusUpdated) return false;
    let updatedMovies = movieStore.get();
    updatedMovies = [...updatedMovies, movie];
    sortMovies(updatedMovies, movieStore);
}

export const addMoviesToFetchedStore = (movies: Movie[]) => {
    fetchedMovieStore.set([...fetchedMovieStore.get(), ...movies]);
}

export const watchedMovieStore: MovieStore = atom<Movie[]>([]);
export const removeWatchedMovieFromStore = (index: number) => removeMovieFromStore(index, watchedMovieStore);
export const addWatchedMovieToStore = (movie: Movie) => addMovieToStore(movie, watchedMovieStore);


export const wantToWatchMovieStore: MovieStore = atom<Movie[]>([]);
export const removeWantToWatchMovieFromStore = (index: number) => removeMovieFromStore(index, wantToWatchMovieStore);
export const addWantToWatchMovieToStore = (movie: Movie) => addMovieToStore(movie, wantToWatchMovieStore);