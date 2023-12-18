import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../css/movieProfil.css';

function MovieProfil() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=credits`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container-movieprofil'>
      <img src="images/background.png" alt="" />
      <img className='images-movieProfil'
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <div className='infos-movieProfil'>
        <p>Acteurs: {' '}
          {movieDetails.credits?.cast.map((actor, index) => (
            <span key={actor.id}>
              {index > 0 && ', '}
              <Link to={`/actor-details/${actor.id}`}>{actor.name}</Link>
            </span>
          ))}</p>

        <p>Date de sortie: {movieDetails.release_date}</p>
        <p>Durée: {movieDetails.runtime} minutes</p>
        <p>Catégorie: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        <p>Synopsis: {movieDetails.overview}</p>
        <Link className="button-trailer" to={`/watch-trailer/${id}`}>
          <button>Watch Trailer</button>
        </Link>
        <div className='button-movieProfil'>
          <Link to="/category">
            <button>Back to Category</button>
          </Link>
          <Link to={`/watch-movie/${id}`}>
            <button>Watch Movie</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieProfil;
