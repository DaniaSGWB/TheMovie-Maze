import React, { useState, useEffect } from 'react';
import detectLanguage from 'detectlanguage';


const TvseriesList = () => {
    const [tvSeries, setTvSeries] = useState([]);
    const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

    useEffect(() => {
        const fetchtvSeries = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${apiKey}`
                );
                if (response.ok) {
                    var detectlanguage = new detectLanguage('6689695d4889e2d0bbbbca964661757a');
                    const data = await response.json();
                    let text = data.results[0].title;
                    detectlanguage.detect(text).then(function (result) {
                        console.log(JSON.stringify(result))
                    })
                    setTvSeries(data.results);
                }
            } catch (error) {
                console.error('Error fetching my data: ', error);
            }
        }
        fetchtvSeries()
    }, [apiKey])


    return (
        <div className='tvseriesList'>
            <h1>Séries Populaires</h1>
            <ul>
                {tvSeries.map((tvSeries) => (
                    <li key={tvSeries.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${tvSeries.poster_path}`}
                            alt={tvSeries.title}
                        />
                        <h2>{tvSeries.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default TvseriesList;