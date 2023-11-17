// Importez les hooks nécessaires depuis React
import React, { useState } from 'react';
import '../App.css';
// Importez le hook personnalisé useMovieList

import useTvSeriesList from '../hooks/useTvSeriesList';

// Ont définis le composant Carousel
const CarouselTV = () => {
  // État pour gérer l'index courant du carousel

  const [currentTvSerieIndex, setCurrentTvSeriesIndex] = useState(0);

  // Nombre d'images à afficher par page dans le carousel
  const imagesPerPage = 4;
  // Clé API
  const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

  // hook useMovieList pour récupérer la liste de films

  const tvseries = useTvSeriesList(apiKey);

 
  const goToPreviousTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
  };

  const goToNextTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) =>
      Math.min(tvseries.length - imagesPerPage, prevIndex + imagesPerPage)
    );
  };


  // Sélectionnez les films à afficher en fonction de l'image actuelle

  const showtvSeries = tvseries.slice(currentTvSerieIndex, currentTvSerieIndex + imagesPerPage);

  // Affichage du composant Carousel
  return (
    <div>
      <div className='carouselTvseries'>
      <h1>TV series Suggestion</h1>
      <div className='buttonCarousel'>
        {/* Bouton pour passer à la diapositive précédente */}
        <button className='carousel-button prev' onClick={goToPreviousTvSeriesSlide}>
          Back
        </button>
        {/* Bouton pour passer à la diapositive suivante */}
        <button className='carousel-button next' onClick={goToNextTvSeriesSlide}>
          Next
        </button>
      </div>
      <div className='imagesCarousel'>
        {/* Affichage des films */}
        {showtvSeries.map((tvSeries) => (
          <div key={tvSeries.id}>
            {/* Image du film */}
            <img
              src={`https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`}
              alt={tvSeries.name}
            />
            {/* Titre du film */}
            <h2>{tvSeries.name}</h2>
          </div>
        ))}
      </div>
      </div>
      
      
    </div>
  );
};

export default CarouselTV;
