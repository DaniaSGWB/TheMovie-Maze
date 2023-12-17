
import React, { useState, useEffect } from 'react';

const MovieCategory = () => {
  const [movieCategories, setMovieCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = () => {
      fetch('')
        .then(response => {
          return response.json();
        })
        .then(data => {
          setMovieCategories(data.genres);
        })
        .catch(error => {
          console.error('Error', error);
        });
    }
    fetchCategories();
  }, []);


  return (
    <div>
      <h2>Movie Category</h2>
      {movieCategories.map(category => (
        <li key={category.id}>{category.name}</li>
      ))}
    </div>
  );
};

export default MovieCategory;