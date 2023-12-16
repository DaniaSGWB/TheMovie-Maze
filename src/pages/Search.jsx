import React, { useState, useEffect } from 'react';

import '../css/search.css';




function Search() {
    const [moviePage, setMoviePage] = useState(1);

    const [searchInit, setSearchInit] = useState('');
    const [searchResults, setSearchResults] = useState([]);

      const handleInputChange = (e) => {
        setSearchInit(e.target.value);
        setTimeout(() => {
          performSearch();
        }, 300);
    };

    const performSearch = () => {
      const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
  
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInit}&page=${moviePage}`)
        .then(response => response.json())
        .then(data => setSearchResults(data.results))
        .catch(error => console.error('Error fetching:', error));
    };
  

    useEffect(() => {
        const apiKey = 'e2531ea78db099a16fc1c0cef503b213';


        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchInit}`)
            .then(response => response.json())
            .then(data => setSearchResults(data.results))
            .catch(error => console.error('Error fetching:', error))

        performSearch();
    }, [searchInit,moviePage]);

   
    return (
        <div>

            <div className='container-search'>
                <img className="background-image" src="images/background.png" alt="" />
        <div>
                <div className='input-search'>
                    <input type="text" placeholder='Search a movie' value={searchInit} onChange={handleInputChange} />
                </div>
                <h1>Results of : {searchInit}</h1>
                <div className='movie-poster-search'>
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