import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import TvSeriesList from '../components/TvseriesList';
import '../css/search.css';
const items = 6;



function Search() {
    const [moviePage, setMoviePage] = useState(1);
  const [tvSeriesPage, setTvSeriesPage] = useState(1);

    const [searchInit, setSearchInit] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    const handleMoviePageChange = (newPage) => {
        setMoviePage(newPage);
      };
    
      const handleTvSeriesPageChange = (newPage) => {
        setTvSeriesPage(newPage);
      };



    useEffect(() => {
        const apiKey = 'e2531ea78db099a16fc1c0cef503b213';


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInit}`)
            .then(response => response.json())
            .then(data => setSearchResults(data.results))
            .catch(error => console.error('Error fetching:', error))


    }, [searchInit]);

    const handleInputChange = (e) => {
        setSearchInit(e.target.value);
    };

    return (
        <div>

            <div className='container-search'>
                <img className="background-image" src="images/background.png" alt="" />
                <div className='movie-poster'>
        <MovieList page={moviePage} />
                </div>
        <div>
          <button onClick={() => handleMoviePageChange(moviePage - 1)} disabled={moviePage === 1}>
            Previous Page
          </button>
          <span> Page {moviePage} </span>
          <button onClick={() => handleMoviePageChange(moviePage + 1)}>
            Next Page
          </button>
        </div>

        {/* Afficher la liste de séries télévisées */}
        <TvSeriesList page={tvSeriesPage} />
        {/* Pagination controls pour les séries télévisées */}
        <div>
          <button onClick={() => handleTvSeriesPageChange(tvSeriesPage - 1)} disabled={tvSeriesPage === 1}>
            Previous Page
          </button>
          <span> Page {tvSeriesPage} </span>
          <button onClick={() => handleTvSeriesPageChange(tvSeriesPage + 1)}>
            Next Page
          </button>
                <div className='input-movie'>
                    <input type="text" placeholder='Search a movie' value={searchInit} onChange={handleInputChange} />
                </div>
                <h1>Results of : {searchInit}</h1>
                <div className='movie-poster'>
                    {/* Afficher la liste de films */}
                    {searchResults ? (
                        searchResults.map((movie) => (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Search;