import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/actor.css'

const Actor = () => {
    const { id } = useParams();
    const [actorDetails, setActorDetails] = useState(null);

    useEffect(() => {
        const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch actor details');
                }
                return response.json();
            })
            .then(data => setActorDetails(data))
            .catch(error => console.error('Error fetching actor details:', error.message));
    }, [id]);

    if (!actorDetails) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <div className='input-actor'>
                <input type="text" placeholder='Search a movie' />
            </div>
            <div className='container-actor'>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${actorDetails.profile_path}`}
                    alt={actorDetails.name}
                />
                <div className='content-actor'>
                    <h2>{actorDetails.name}</h2>
                    <p><strong>Gender:</strong> {actorDetails.gender === 2 ? 'Male' : 'Female'}</p>
                    <p><strong>Birthday:</strong>  {actorDetails.birthday}</p>
                    <p><strong> Place of birth:</strong>  {actorDetails.place_of_birth}</p>
                </div>
            </div>
            <div className='biography'>
                <h1>
                    Biography
                </h1>
                <p>{actorDetails.biography}</p>
            </div>
            <Link className="button-back-movie" to="/category">
                Back to movie
            </Link>
        </div>
    );
}

export default Actor;