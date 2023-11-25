import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/search.css';


function Search() {

    return (
        <div>

            <div className='container-search'>
                <img className="background-image" src="images/background.png" alt="" />
                <div className='input-movie'>
                    <input type="text" placeholder='Search a movie' />
                </div>
                <h1>Results of :</h1>
                <div className='movie-poster'>
                    <div>
                        <img src="images/background.png" alt="" /><img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;