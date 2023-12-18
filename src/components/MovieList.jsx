import React, { useState, useEffect } from 'react';
import detectLanguage from 'detectlanguage';



const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
                );
                if (response.ok) {
                    var detectlanguage = new detectLanguage('6689695d4889e2d0bbbbca964661757a');
                    const data = await response.json();
                    let text = data.results[0].title;
                    detectlanguage.detect(text).then(function (result) {
                        console.log(JSON.stringify(result))
                    })
                    setMovies(data.results);
                }
            } catch (error) {
                console.error('Error fetching my data: ', error);
            }
        }
        fetchMovies()
    }, [apiKey])


    return (
        <div className='movieList'>
            <h1>Films Populaires</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />

                        <h2>{movie.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default MovieList;