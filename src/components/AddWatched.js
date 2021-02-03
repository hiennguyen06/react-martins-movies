import React from "react";

const AddWatched = (props) => {
    return (
        <button onClick={() => props.addWatchedMovie()}>
            MARKED AS WATCHED
        </button>
    );
};

export default AddWatched;
