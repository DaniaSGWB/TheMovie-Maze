// Importez les hooks nécessaires depuis React
import React, { useState } from 'react';
import '../App.css';
// Importez le hook personnalisé useMovieList
import useMovieList from '../hooks/useMovieList';

// Ont définis le composant Carousel
const Carousel = () => {
  // État pour gérer l'index courant du carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // Nombre d'images à afficher par page dans le carousel
  const imagesPerPage = 4;
  // Clé API
  const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

  // hook useMovieList pour récupérer la liste de films
  const movies = useMovieList(apiKey);

  // Fonction pour passer à la diapositive précédente
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
  };

  // Fonction pour passer à la diapositive suivante
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(movies.length - imagesPerPage, prevIndex + imagesPerPage)
    );
  };

  // Sélectionnez les films à afficher en fonction de l'image actuelle
  const showMovies = movies.slice(currentIndex, currentIndex + imagesPerPage);

  // Affichage du composant Carousel
  return (
    <div>
      <div className='buttonCarousel'>
        {/* Bouton pour passer à la diapositive précédente */}
        <button className='carousel-button prev' onClick={goToPreviousSlide}>
          Back
        </button>
        {/* Bouton pour passer à la diapositive suivante */}
        <button className='carousel-button next' onClick={goToNextSlide}>
          Suivant
        </button>
      </div>
      <div className='imagesCarousel'>
        {/* Affichage des films */}
        {showMovies.map((movie) => (
          <div key={movie.id}>
            {/* Image du film */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            {/* Titre du film */}
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
