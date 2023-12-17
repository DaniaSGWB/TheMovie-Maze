import React, { useState } from 'react';
import '../App.css';
import useMovieList from '../hooks/useMovieList';
import useTvSeriesList from '../hooks/useTvSeriesList';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTvSerieIndex, setCurrentTvSeriesIndex] = useState(0);

  const imagesPerPage = 4;
  // Clé API
  const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

  const movies = useMovieList(apiKey);
  const tvseries = useTvSeriesList(apiKey);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(movies.length - imagesPerPage, prevIndex + imagesPerPage)
    );
  };
  const goToPreviousTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) => Math.max(0, prevIndex - imagesPerPage));
  };

  const goToNextTvSeriesSlide = () => {
    setCurrentTvSeriesIndex((prevIndex) =>
      Math.min(tvseries.length - imagesPerPage, prevIndex + imagesPerPage)
    );
  };


  const showMovies = movies.slice(currentIndex, currentIndex + imagesPerPage);
  const showtvSeries = tvseries.slice(currentTvSerieIndex, currentTvSerieIndex + imagesPerPage);

  return (
    <div>
      <div className='carouselMovie'>
        <h1>Movies Suggestion</h1>
        <div className='buttonCarousel'>
          <button className='carousel-button prev' onClick={goToPreviousSlide}>
            Back
          </button>
          <button className='carousel-button next' onClick={goToNextSlide}>
            Next
          </button>
        </div>
        <div className='imagesCarousel'>
          {showMovies.map((movie) => (
            <div className="items" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <h2>{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
