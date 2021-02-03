import React from "react";

const WatchList = ({ watched, removeWatched }) => {
    return (
        <>
            <div className="container">
                <h1 className="result-counter">
                    Watched List ({watched.length})
                </h1>
                <div className="watched-list">
                    {watched.map((item) => {
                        return (
                            <div key={item.id} className="watched-poster">
                                <img
                                    alt="movie poster"
                                    src={
                                        item.poster ===
                                        "https://image.tmdb.org/t/p/w780null"
                                            ? "https://hn-photos.s3-ap-southeast-2.amazonaws.com/poster.png"
                                            : item.poster
                                    }
                                />
                                <button
                                    className="btn-delete"
                                    onClick={() => removeWatched(item)}
                                >
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default WatchList;
