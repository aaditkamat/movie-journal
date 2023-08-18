import MoviesList from './MoviesList.tsx';
import { useStore } from '@nanostores/react';
import { watchedMovieStore, wantToWatchMovieStore, Movie, WatchStatus } from '../movieStore.ts';

const WatchList = () => {
    return (
        <div className="text-black relative top-10 m-3 bg-white overflow-auto">
            <MoviesList text="Top 10 movies I have watched" movieStore={watchedMovieStore} watchStatus={WatchStatus.Watched} />
            <br />
            <MoviesList text="Top 10 movies I want to watch" movieStore={wantToWatchMovieStore} watchStatus={WatchStatus.WantToWatch} />
        </div>
    );
}

export default WatchList;