import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../css/screenmovie.css';

const Screenmovie = ({ videoId }) => {
    const [video, setVideo] = useState('');
    const [movieTitle, setMovieTitle] = useState('');
    const { id } = useParams();
    useEffect(() => {
        const apiKey = 'e2531ea78db099a16fc1c0cef503b213';

        const fetchVideo = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
                );

                if (response.ok) {
                    const data = await response.json();
                    const firstVideo = data.results[0];

                    if (firstVideo) {
                        setVideo(firstVideo.key);
                    } else {
                        console.error('Vidéo non disponible.');
                    }
                }
            } catch (err) {
                console.error('Erreur lors de la récupération de la vidéo :', err.message);
            }
        };
        fetchVideo()
    }, [id]);

    return (
        <div className='container-watch'>
            {movieTitle && <h1>{movieTitle}</h1>}
            {video ? (

                <iframe
                    width="960"
                    height="540"
                    src={`https://www.youtube.com/embed/${video}`}
                    title="Lecteur vidéo YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Aucune vidéo disponible pour le moment.</p>
            )}
        </div>
    );
}
export default Screenmovie;