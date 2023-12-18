import { useState, useEffect } from 'react';

const useTvSeriesList = (apiKey) => {
  const [tvseries, settvseries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${apiKey}`
        );
        if (response.ok) {
          const data = await response.json();
          settvseries(data.results);
        }
      } catch (error) {
        console.error('Error fetching my data: ', error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  return tvseries;
};

export default useTvSeriesList;