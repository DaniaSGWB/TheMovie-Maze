import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    const handlePageChange = (newPage) => {
        setMoviePage(newPage);
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
    }, [searchInit, moviePage]);


    return (
        <div>

            <div className='container-search'>
                <img className="background-image-search" src="images/background.png" alt="" />
                <div>
                    <div className='input-search'>
                        <input type="text" placeholder='Search a movie' value={searchInit} onChange={handleInputChange} />
                    </div>
                    <h1>Results of : {searchInit}</h1>
                    <div className='grid-movie-poster-search'>
                        {/* Afficher la liste de films */}
                        {searchResults ? (
                            searchResults.map((movie) => (
                                <div key={movie.id}>
                                   <Link to={`/movie-details/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                  </Link>
                                </div>
                            ))
                        ) : (
                            <p>No results found</p>
                        )}
                    </div>
                </div>
            </div>
           
            <div className="pagination-container-search">
  <div className='pagination-search'>
    {moviePage > 1 && (
      <span onClick={() => handlePageChange(moviePage - 1)}>
        Précédent
      </span>
    )}

    {Array.from({ length: 10 }, (_, index) => index + 1).map((page) => (
      ((moviePage <= 5 && page <= 10) || (moviePage > 5 && moviePage - 5 <= page && page <= moviePage + 5) || (page > 10)) && (
        <span
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === moviePage ? 'active' : ''}
        >
          {page}
        </span>
      )
    ))}

    {moviePage < 10 && (
      <span onClick={() => handlePageChange(moviePage + 1)}>
        Suivant
      </span>
    )}
  </div>
</div>

        </div>
    )
}

export default Search;