import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ movies, setMovies, watched, setWatched }) => {
    return (
        <>
            <div className="container">
                <h1 className="result-counter">Movies ({movies.length})</h1>
                <div className="movie-list">
                    {movies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                movies={movies}
                                setMovies={setMovies}
                                watched={watched}
                                setWatched={setWatched}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MovieList;
