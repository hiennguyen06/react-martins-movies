import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, watched, setWatched }) => {
    const addWatchedMovie = () => {
        if (watched.findIndex((el) => el.id === movie.id) === -1) {
            setWatched([...watched, movie]);
        }
    };
    const poster =
        movie.poster === "https://image.tmdb.org/t/p/w780null"
            ? "https://hn-photos.s3-ap-southeast-2.amazonaws.com/poster.png"
            : movie.poster;

    return (
        <div className="movie-card">
            <Link to={`/${movie.id}`} key={movie.id}>
                <div className="movie-poster">
                    <img src={poster} alt="movie-poster" />
                </div>
            </Link>
            <div className="movie-info">
                <div>
                    <h1>{movie.title}</h1>
                    <p className="rating">
                        <FaStar className="star"></FaStar>
                        {movie.rating} / 10
                    </p>
                    <p className="description">{movie.description}</p>
                </div>
                <Link className="btn-main" to={`/${movie.id}`}>
                    DETAILS
                </Link>
                <button className="btn-watch" onClick={() => addWatchedMovie()}>
                    ADD TO WATCHED
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
