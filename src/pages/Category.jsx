import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Category() {
    const [currentPage, setCurrentPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [visiblePages, setVisiblePages] = useState([]);
    const [genres, setGenres] = useState([]);


    useEffect(() => {
        const fetchMovies = () => {
            const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                    setGenres(data.genres);

                    const totalVisiblePages = 3;
                    const startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
                    const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

                    setVisiblePages(Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index));
                })
                .catch((error) => {
                    console.error('Error fetching movies:', error);
                });
        };

        fetchMovies();

    }, [currentPage, totalPages]);

    const fetchGenres = () => {
        console.log('resalut');
        const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                setGenres(data.genres || []); // Assurez-vous que genres est défini même si l'API ne renvoie pas de données
            })
            .catch((error) => {
                console.error('Error fetching genres:', error);
            });
    };

    useEffect(() => {
        fetchGenres();
    }, []); // Assurez-vous d'appeler fetchGenres une seule fois au montage du composant

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };



    console.log("allo");


    return (
        <div className='category-container'>
            <div className='category-choice'>
                <div className='input-movie'>
                    <input type="text" placeholder='Search a movie' />
                </div>
                <h1>Select a category</h1>
                <div className='grid-container'>
                    <Link className='grid-category' to="/category/1">Action</Link>
                    <Link className='grid-category' to="/category/1">Horror</Link>
                    <Link className='grid-category' to="/category/1">Romance</Link>
                    <Link className='grid-category' to="/category/1">Drama</Link>
                    <Link className='grid-category' to="/category/1">Animation</Link>
                    <Link className='grid-category' to="/category/1">Fantasy</Link>
                    <Link className='grid-category' to="/category/1">Thriller</Link>
                    <Link className='grid-category' to="/category/1">Documentary</Link>
                    <Link className='grid-category' to="/category/1">Adventure</Link>
                </div>
            </div>
            <div className='movie-poster'>
                <div>
                    <img src="images/background.png" alt="" /><img src="" alt="" />
                    <h1>Category title</h1>

                    <div className='grid-movie-poster'>
                        {movies.map((movie) => (
                            <div key={movie.id} className='image-poster'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className='infos-poster'>
                                    <h2>{movie.title}</h2>
                                    <p>
                                        {genres && movie.genre_ids.map((genreId) => genres.find((genre) => genre.id === genreId)?.name).join(', ')}
                                    </p>

                                    <p>{movie.release_date}</p>
                                    <div className='button-poster'>
                                    <Link className='button-poster-infos' to={`/movie-details/${movie.id}`}>
                                        More informations
                                    </Link>
                                    <Link className='button-poster-watch' to={`/watch-movie/${movie.id}`}>
                                        Watch movie
                                    </Link>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="pagination-container">

                        <div className='pagination'>
                            {currentPage > 1 && (
                                <span onClick={() => handlePageChange(currentPage - 1)}>
                                    &laquo; Précédent
                                </span>
                            )}
                            {visiblePages.map((page) => (
                                <span
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={page === currentPage ? 'active' : ''}
                                >
                                    {page}
                                </span>
                            ))}
                            <span onClick={() => handlePageChange(totalPages)}>
                                {totalPages}
                            </span>
                            {currentPage < totalPages && (
                                <span onClick={() => handlePageChange(currentPage + 1)}>
                                    Suivant &raquo;
                                </span>
                            )}
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Category;