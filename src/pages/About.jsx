import React, { useState } from 'react';
import '../css/about.css'

const About = () => {

    return (
        <div className='container-about'>
            <img className="background" src="images/background.png" alt="" />
            <div className='content-about'>
                <img className="popcorn"  src="images/popcorn.png" alt="" />
                <div className='about'>
                    <h1>About us</h1>
                    <h3>Our story</h3>
                    <p>At MovieMaze, we believe in the power of storytelling. It has the ability to transport us to different worlds, evoke emotions, and create unforgettable memories. This belief is what inspired us to create a platform dedicated to bringing you the best in movies and series from around the globe.</p>
                    <h3>Our Mission</h3>
                    <p>Our mission is simple: to provide a seamless and immersive entertainment experience for movie and series enthusiasts of all kinds. We aim to be your go-to destination for the latest releases, timeless classics, and hidden gems.</p>
                    <h3>What Sets Us Apart</h3>
                    <h3>Extensive Library</h3>
                    <p>We pride ourselves on offering a vast and diverse library of movies and series spanning across genres, languages, and cultures. From heartwarming dramas to edge-of-your-seat thrillers, we've got something for everyone.</p>
                    <h3>User-Friendly Interface</h3>
                    <p>We believe that navigating through your favorite movies and series should be a breeze. That's why we've designed an intuitive interface that's easy to use, allowing you to find and enjoy content with just a few clicks.</p>
                    <h3>High-Quality Streaming</h3>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default About;