import { useState } from "react";
import { useEffect } from "react";
import MovieBox from "./MovieBox";

function MoviesList(props) {

    const [data, setData] = useState([]);

    const result_base = props.base;

    useEffect(() => {
            if (props.classType === "trending movies_container") {
                fetch(result_base).then((res) => {
                    return res.json();
                }).then((val) => {
                    console.log(val.results);
                    setData(val.results)
                })
            } else {
                
            }
    },[]);

    const handlePassData = (val) => {
        console.log("PASSED DATA");
        props.showData(val);
    }

    function getTrending() {
        if (props.classType === "trending movies_container") {
           return data.map((result) => {
                return <MovieBox 
                            key={result.original_title}
                            posterPath={result.poster_path}
                            title={result.title}
                            language={result.original_language}
                            date={result.release_date}
                            vote_avg={result.vote_average}
                            vote_count={result.vote_count}
                            popularity={result.popularity}
                            media={result.media_type}
                            ori_title={result.original_title}
                            summary={result.overview}
                            passData={handlePassData}
                        />
            })
        } else {
            if (props.searchData === null || props.searchData === [] || props.searchData === "") {
                return <h2>NO MOVIES FOUND</h2>
            } else {
                return props.searchData.map((result) => {
                    return <MovieBox 
                                key={result.id}
                                posterPath={result.poster_path}
                                title={result.title}
                                language={result.original_language}
                                date={result.release_date}
                                vote_avg={result.vote_average}
                                vote_count={result.vote_count}
                                popularity={result.popularity}
                                media={result.media_type}
                                ori_title={result.original_title}
                                summary={result.overview}
                                passData={handlePassData}
                            />
                })
            }
        }
    }

    return ( 
        <div className={props.classType}>

            {
                getTrending()
            }

        </div>
     );
}

export default MoviesList

