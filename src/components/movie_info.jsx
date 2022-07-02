function MovieInfo(props) {

    const handleClose = (e) => {
        const el = document.querySelector(".container").lastChild;
        if (el.style.display === "flex") {
            el.style.display = "none";
        }
    }

    return ( 
        <div className="movie-info-container">
            <div className="movie-info-poster">
                <img src={props.poster_url} alt="poster"/>
            </div>
            <div className="movie-info-text">
                <h2>{props.title} {props.dup_title}</h2>
                <div className="movie-info-data">
                    <p>Date: <br></br><b>{props.date}</b></p>
                    <p>Language: <br></br><b>{props.language}</b></p>
                    <p>Popularity: <br></br><b>{props.popularity}</b></p>
                    <p>Type: <br></br><b>Movie</b></p>
                </div>
                <div className="movie-info-summary">
                    <h3>SUMMARY</h3>
                    <p>{props.summary}</p>
                </div>
                <button onClick={handleClose}>CLOSE</button>
            </div>
        </div>
     )
}

export default MovieInfo;