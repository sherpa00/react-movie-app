import React, { useState, useEffect } from 'react';
import MoviesList from './Movies_display';


function NewRelease(props) {

    const base = `https://api.themoviedb.org/3/discover/movie?api_key=${props.api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&with_watch_monetization_types=flatrate`;

    const handleShow = (val) => {
        console.log("PASSED DATA")
        props.showInfo(val);
    }
    return ( 
        <MoviesList
            base={base}
            classType="trending movies_container"
            showData={handleShow}
        />
     );
}

export default NewRelease;