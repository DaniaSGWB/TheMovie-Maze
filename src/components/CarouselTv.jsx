
import React, { useState } from 'react';
import '../App.css';


import useTvSeriesList from '../hooks/useTvSeriesList';

const CarouselTV = () => {
  const [currentTvSerieIndex, setCurrentTvSeriesIndex] = useState(0);
  const imagesPerPage = 4;

  const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

  const tvseries = useTvSeriesList(apiKey);

  const goToPreviousTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
  };

  const goToNextTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) =>
      Math.min(tvseries.length - imagesPerPage, prevIndex + imagesPerPage)
    );
  };


  const showtvSeries = tvseries.slice(currentTvSerieIndex, currentTvSerieIndex + imagesPerPage);

  return (
    <div>
      <div className='carouselTvseries'>
        <h1>TV series Suggestion</h1>
        <div className='buttonCarousel'>
          {/* Bouton pour passer à la diapositive précédente */}
          <button className='carousel-button prev' onClick={goToPreviousTvSeriesSlide}>
            Back
          </button>
          <button className='carousel-button next' onClick={goToNextTvSeriesSlide}>
            Next
          </button>
        </div>
        <div className='imagesCarousel'>
          {showtvSeries.map((tvSeries) => (
            <div key={tvSeries.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`}
                alt={tvSeries.name}
              />
              <h2>{tvSeries.name}</h2>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default CarouselTV;
