import { useState, useEffect } from 'react';

const useMovieList = (apiKey) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Erreur dans le fetching de mes données: ', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return movies;
};

export default useMovieList;
