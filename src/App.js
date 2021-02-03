import "./css/main.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";

import { FaSearch } from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    );
}

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("Avenger");
    const [watched, setWatched] = useState([]);

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("watchlist"));
        if (storage) {
            setWatched(storage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(watched));
    }, [watched]);

    useEffect(() => {
        getMovies();
    }, [query]);

    const getMovies = async () => {
        try {
            const res = await axios(
                `https://api.themoviedb.org/3/search/movie?`,
                {
                    params: {
                        api_key: "1e448e0dfcdbb565f5d329820065b4d2",
                        query: query,
                    },
                }
            );
            const data = res.data.results;

            setMovies(
                data.map((result) => {
                    return {
                        id: result.id,
                        title: result.title,
                        description: result.overview,
                        poster: `https://image.tmdb.org/t/p/w780${result.poster_path}`,
                        rating: result.vote_average,
                        release_date: result.release_date,
                        watched: false,
                    };
                })
            );
        } catch (error) {
            alert(error);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div>
            <Header />
            <div className="form-container">
                <form className="search" onSubmit={handleInput}>
                    <FaSearch className="icon-search" />
                    <input
                        className="search-field"
                        placeholder="Search movie and press Enter"
                        onChange={handleSearch}
                        type="text"
                        value={search}
                    />
                </form>
                <div className="search-result">
                    <p>Showing results for</p>
                    <h1>"{query}"</h1>
                </div>
            </div>
            <WatchList watched={watched} setWatched={setWatched} />
            <MovieList
                watched={watched}
                movies={movies}
                setMovies={setMovies}
                setWatched={setWatched}
            />
            <Footer />
        </div>
    );
};

export default App;
