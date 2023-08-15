import { atom } from 'nanostores';

export type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export const fetchedMovieStore = atom<Movie[]>([]);
export const watchedMovieStore = atom<Movie[]>([]);
export const wantToWatchMovieStore = atom<Movie[]>([]);