import { atom } from 'nanostores';

export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export enum WatchStatus {
    Watched = 1,
    WantToWatch = 2
}

export const fetchedMovieStore = atom<Movie[]>([]);

export const removeMovie = (index: number, movieStore: typeof fetchedMovieStore) => {
    if (index < movieStore.get().length - 1) {
        movieStore.set(movieStore.get().splice(index, 1));
    } else {
        movieStore.set(movieStore.get().slice(0, index));
    }
}

export const watchedMovieStore = atom<Movie[]>([]);
export const removeWatchedMovie = (index: number) => removeMovie(index, watchedMovieStore);


export const wantToWatchMovieStore = atom<Movie[]>([]);
export const removeWantToWatchMovie = (index: number) => removeMovie(index, wantToWatchMovieStore);