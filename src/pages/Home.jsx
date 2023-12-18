import React from 'react';
import Carousel from '../components/CarouselMovie';
import CarouselTV from '../components/CarouselTv';
import useMovieList from '../hooks/useMovieList';
import useTvSeriesList from '../hooks/useTvSeriesList';
import '../css/home.css';


function Home() {

    return (
        <div className='container'>
            <div className='content'>
                <div className='homeImage'>
                    <img src="images/imageHome.jpg" alt="" style={{ width: '1920px' }} />
                    <div className="imageText">
                        <h1>A movie of <span>CHRISTOPHER NOLAN</span></h1>
                        <p>OPPENHEIMER</p>
                    </div>
                </div>
                <div className='movieSuggestion'>
                    <div>
                        <img src="images/background.png" alt="" />
                        <div className="carousel">
                            <Carousel movieList={useMovieList} />
                            <CarouselTV tvSeriesList={useTvSeriesList}>
                            </CarouselTV>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;