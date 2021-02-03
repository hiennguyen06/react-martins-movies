import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Item({ match }) {
    useEffect(() => {
        getMovieDetail();
    }, []);

    // create a state to put the items in
    const [movieDetail, setMovieDetail] = useState([]);

    // console.log(movieDetail);

    const getMovieDetail = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=1e448e0dfcdbb565f5d329820065b4d2&language=en-US`
        );
        const movie = await data.json();
        setMovieDetail({
            id: movie.id,
            imdb_id: movie.imdb_id,
            title: movie.title,
            description: movie.overview,
            genre: movie.genres.map((genre) => genre.name).join(" / "),
            year: movie.release_date.substring(0, 4),
            poster: `https://image.tmdb.org/t/p/w780${movie.poster_path}`,
            status: movie.status,
            rating: movie.vote_average,
        });
    };

    const poster =
        movieDetail.poster === "https://image.tmdb.org/t/p/w780null"
            ? "https://hn-photos.s3-ap-southeast-2.amazonaws.com/poster.png"
            : movieDetail.poster;

    return (
        <div className="movie-detail">
            <div className="poster">
                <img src={poster} alt="movie poster" />
            </div>
            <div className="movie-detail-info">
                <h1>{movieDetail.title}</h1>
                <h3>Storyline</h3>
                <p className="break">{movieDetail.description}</p>
                <h3>Detail</h3>
                <p>
                    <span>IMDB Rating: </span>
                    {movieDetail.rating}
                </p>
                <p>
                    <span>Genre: </span>
                    {movieDetail.genre}
                </p>
                <p>
                    <span>Year: </span>
                    {movieDetail.year}
                </p>
                <p className="break">
                    <span>Status: </span>
                    {movieDetail.status}
                </p>
                <a
                    href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main movie-detail-btn"
                >
                    READ MORE
                </a>
                <Link to="/" className="btn-main movie-detail-btn">
                    BACK TO SEARCH
                </Link>
            </div>
        </div>
    );
}

export default Item;
