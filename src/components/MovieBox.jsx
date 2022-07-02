import MovieInfo from "./movie_info";

function MovieBox(props) {

    let poster_base = `https://image.tmdb.org/t/p/w200${props.posterPath}`;
    let dup_title = props.ori_title === props.title ? null : `(${props.ori_title})`;

    const handleKnowMore = (e) => {
        const el = document.querySelector(".container").lastChild;
        el.style.display = "flex";
        let data = {
            title: props.title,
            poster_url: poster_base,
            dup_title: dup_title,
            date: props.date,
            language: props.language,
            popularity: props.popularity,
            type: "movie",
            summary: props.summary
        }
        props.passData(data);
    }

    return (
        <div className='box'>
            <img src={poster_base} alt="poster"/>
            <div className="box_info">
                <h3>{props.title} {dup_title}</h3>
                <p>Date: {props.date}</p>
                <p>language: {props.language}</p>
                <p>popularity: {props.popularity}</p>
                <p>Type: {props.media}</p>
                <button
                    onClick={handleKnowMore}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default MovieBox;