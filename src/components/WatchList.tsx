import MoviesList from './MoviesList.tsx';
import { useStore } from '@nanostores/react';
import { watchedMovieStore, wantToWatchMovieStore } from '../movieStore.ts';

const WatchList = () => {
    const watchedMovies = useStore(watchedMovieStore);
    const wantToWatchMovies = useStore(wantToWatchMovieStore);

    return (
        <div className="relative top-10 m-3 bg-white overflow-auto">
            <MoviesList text="Top 10 movies I have watched" movies={watchedMovies} />
            <br />
            <MoviesList text="Top 10 movies I want to watch" movies={wantToWatchMovies} />
        </div>
    );
}

export default WatchList;