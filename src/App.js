import React, { useState } from 'react';
import Form from "./components/Form";
import MoviesList from './components/Movies_display';
import MovieInfo from './components/movie_info';
import NewRelease from './components/new_released';
import Recommend from './components/Recommend_movie';

const api_key = "f470f0d8b22aaf0be1a06fc449c35a30";

function App() {

  const [ text, setText ]  = useState("");

  let [searchRes, setSearchRes ] = useState(null);

  const [info_data,setInfoData] = useState({})

  const handleTextSubmit = () => {
    console.log(`TEXT SUBMITED IS ${text}`);
    let searchBase = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${text}&page=all`;
    fetch(searchBase).then((result) => {
      return result.json()
    }).then((data) => {
      console.log('okay')
      console.log(data);
      if (data.errors) {
        setSearchRes(null);
      } else {
        setSearchRes(data.results);
      }
    }).catch(
      setSearchRes(null)
    )
  }

  const handleTextChange = (newText) => {
    setText(newText);
  }


  let trending_base_movies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;
  let trending_base_tv = `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`;

  const handleShowMovieInfo = (data) => {
    setInfoData(data);
    console.log(info_data)
  }

  return (
    <div className='container'>
      <h1>MOVIES APP</h1>
      <Form 
        textSubmit={handleTextSubmit}
        text={text}
        textChange={handleTextChange}
      />

      <br></br>
      <MoviesList
        searchData={searchRes}
        classType="search movies_container"
        showData={handleShowMovieInfo}
      />
      <br></br>
      
      <h2>TODAY"S MOVIE RECOMMENDTION</h2>
      <Recommend
        api_key={api_key}
        showData={handleShowMovieInfo}
      />
      <br></br>

      <h2>NEW RELEASES</h2>
      <NewRelease
        api_key={api_key}
        showInfo={handleShowMovieInfo}
      />
      <br></br>

      <h2>TRENDENG MOVIES TODAY</h2>
      <MoviesList
        base={trending_base_movies}
        classType="trending movies_container"
        showData={handleShowMovieInfo}
      />

      <br>
      </br>

      <h2>TRENDENG TV-SERIES TODAY</h2>
      <MoviesList
        base={trending_base_tv}
        classType="trending movies_container"
        showData={handleShowMovieInfo}
      />


      {
        <MovieInfo
        title={info_data.title}
        dup_title={info_data.dup_title}
        language={info_data.language}
        poster_url={info_data.poster_url}
        date={info_data.date}
        popularity={info_data.popularity}
        summary={info_data.summary}
      />}
    </div>
  )
}

export default App;
