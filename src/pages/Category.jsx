
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/category.css'

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const [genres, setGenres] = useState([]);
  const [CategoryChoice, setCategoryChoice] = useState(null);
  const [categoryMovies, setCategoryMovies] = useState([]);


  const items = 6;
  const firstIndex = (currentPage - 1) * items;
  const lastIndex = firstIndex + items;
  const moviesToDisplay = movies.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetchMovies = (category) => {
      const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}&with_genres=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          setCategoryMovies(data.results);
          setTotalPages(data.total_pages);
          const totalVisiblePages = 3;
          const startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
          const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);
          setVisiblePages(Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index));
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });
    };
    fetchMovies(CategoryChoice);
  }, [currentPage, CategoryChoice, totalPages]);

  const fetchGenres = () => {
    const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres || []);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleCategoryChoice = (category) => {
    setCategoryChoice(category);
    setCurrentPage(1);
  };

  return (
    <div className='category-container'>
      <div className='category-choice'>
        <div className='input-movie'>
          <input type="text" placeholder='Search a movie' />
        </div>
        <h1>{CategoryChoice ? `Catégorie : ${CategoryChoice}` : 'Sélectionnez une catégorie'}</h1>
        <div className='grid-container'>
          {genres && genres.map((category) => (
            <span className='grid-category' key={category.id} onClick={() => handleCategoryChoice(category.id)}>
              {category.name}
            </span>
          ))}
        </div>
      </div>
      <div className='movie-poster'>
        <img className='background-image' src="./images/background.png" alt="" />
        <div>
          <div className='grid-movie-poster-category'>
            {moviesToDisplay.map((movie) => (
              // Affichage des affiches de films avec informations
              <div key={movie.id} className='image-poster'>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                )}
                <div className='infos-poster'>
                  <h2>{movie.title}</h2>
                  <p>
                    {genres && movie.genre_ids.map((genreId) => genres.find((genre) => genre.id === genreId)?.name).join(', ')}
                  </p>
                  <p>{movie.release_date}</p>
                  <div className='button-poster'>
                    <Link className='button-poster-infos' to={`/movie-details/${movie.id}`}>
                      More informations
                    </Link>
                    <Link className='button-poster-watch' to={`/watch-movie/${movie.id}`}>
                      Watch movie
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {moviesToDisplay.length > 0 ? (
            <div className="pagination-container-category">
              <div className='pagination-category'>
                {currentPage > 1 && (
                  <span onClick={() => handlePageChange(currentPage - 1)}>
                    Précédent
                  </span>
                )}
                {visiblePages.map((page) => (
                  <span
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={page === currentPage ? 'active' : ''}
                  >
                    {page}
                  </span>
                ))}
                <span onClick={() => handlePageChange(totalPages)}>
                  {totalPages}
                </span>
                {currentPage < totalPages && (
                  <span onClick={() => handlePageChange(currentPage + 1)}>
                    Suivant
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div>
              <p>currentPage: {currentPage}, totalPages: {totalPages}</p>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default Category;
