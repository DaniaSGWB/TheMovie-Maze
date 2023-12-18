import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import '../css/trailermovie.css';

const Trailermovie = () => {
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
                        console.error('videos not available.');
                    }
                }
            } catch (err) {
                console.error('Error retrieving video :', err.message);
            }
        };
        fetchVideo()
    }, [id]);

    return (
        <div className='container-trailer'>
            {movieTitle && <h1>{movieTitle}</h1>}
            {video ? (
                <iframe
                    width="960"
                    height="540"
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>no videos available at the moment.</p>
            )}
        </div>
    );
}
export default Trailermovie;