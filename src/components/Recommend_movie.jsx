import { useState } from "react";
import { useEffect } from "react";
import MovieBox from "./MovieBox";

function Recommend(props) {

    const [data, setData] = useState([]);

    useEffect(() => {

        const alpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
        const random_alpha = alpha[Math.floor(Math.random() * alpha.length)];
        const base = `https://api.themoviedb.org/3/search/movie?api_key=${props.api_key}&query=${random_alpha}&page=1`;

        console.log(alpha);

        fetch(base).then((result) => {
            return result.json();
        }).then((val) => {
            let res = val.results[0];
            console.log(res);
            setData(res);
        })
    },[])

    const handlePassData = (val) => {
        console.log("PASSED DATA")
        props.showData(val);
    }

    return ( 
        <MovieBox
            title={data.title}
            ori_title={data.original_title}
            date={data.release_date}
            popularity={data.popularity}
            language={data.original_language}
            media={data.media_type}
            posterPath={data.poster_path}
            summary={data.overview}
            passData={handlePassData}
        />
     );
}

export default Recommend;