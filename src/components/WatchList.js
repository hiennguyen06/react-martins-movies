import React from "react";

const WatchList = ({ watched }) => {
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
                                    src={
                                        item.poster ===
                                        "https://image.tmdb.org/t/p/w780null"
                                            ? "https://hn-photos.s3-ap-southeast-2.amazonaws.com/poster.png"
                                            : item.poster
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default WatchList;
