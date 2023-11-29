// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


// function Category() {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [movies, setMovies] = useState([]);
//     const [totalPages, setTotalPages] = useState(1);
//     const [visiblePages, setVisiblePages] = useState([]);
//     const [genres, setGenres] = useState([]);
//     const [CategoryChoice, setCategoryChoice] = useState(null);
//     const [categoryMovies, setCategoryMovies] = useState([]);



//     const items = 6;
//     const firstIndex = (currentPage - 1) * items;
//     const lastIndex = firstIndex + items;

//     const moviesToDisplay = movies.slice(firstIndex, lastIndex);


//     useEffect(() => {
//         const fetchMovies = (category) => {
//             const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
//             fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}&with_genres=${category}`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setMovies(data.results);
//                     setCategoryMovies(data.results);
//                     setTotalPages(data.total_pages);
//                     setGenres(data.genres);

//                     const totalVisiblePages = 3;
//                     const startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
//                     const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

//                     setVisiblePages(Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index));
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching movies:', error);
//                 });
//         };

//         fetchMovies(CategoryChoice);

//     }, [currentPage, CategoryChoice,totalPages]);

//     const fetchGenres = () => {
//         console.log('resalut');
//         const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
//         fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 setGenres(data.genres || []);
//             })
//             .catch((error) => {
//                 console.error('Error fetching genres:', error);
//             });
//     };

//     useEffect(() => {
//         fetchGenres();
//     }, []);

//     const handlePageChange = (newPage) => {
//         setCurrentPage(newPage);
//     };
//     const handleCategoryChoice = (category) => {
//         setCategoryChoice(category);
//         setCurrentPage(1);
//     }



//     console.log("allo");


//     return (
//         <div className='category-container'>
//             <div className='category-choice'>
//                 <div className='input-movie'>
//                     <input type="text" placeholder='Search a movie' />
//                 </div>
//                 <h1>{CategoryChoice ? `Catégorie : ${CategoryChoice}` : 'Sélectionnez une catégorie'}</h1>


//                 <div className='grid-container'>
//                     {genres && genres.map((category) => (
//                         <span className='grid-category' key={category.id} onClick={() => handleCategoryChoice(category.id)}>
//                             {category.name}
//                         </span>
//                     ))}

//                     {/* <Link className='grid-category' to="/category/1">Horror</Link>
//                     <Link className='grid-category' to="/category/1">Romance</Link>
//                     <Link className='grid-category' to="/category/1">Drama</Link>
//                     <Link className='grid-category' to="/category/1">Animation</Link>
//                     <Link className='grid-category' to="/category/1">Fantasy</Link>
//                     <Link className='grid-category' to="/category/1">Thriller</Link>
//                     <Link className='grid-category' to="/category/1">Documentary</Link>
//                     <Link className='grid-category' to="/category/1">Adventure</Link> */}
//                 </div>
//             </div>
//             <div className='movie-poster'>
//                 <div>
//                     <img src="images/background.png" alt="" /><img src="" alt="" />
//                     <h1>Category title</h1>

//                     <div className='grid-movie-poster'>
//                         {moviesToDisplay.map((movie) => (
//                             <div key={movie.id} className='image-poster'>
//                                 {movie.poster_path && (
//                                     <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
//                                 )}
//                                 <div className='infos-poster'>
//                                     <h2>{movie.title}</h2>
//                                     <p>
//                                         {genres && movie.genre_ids.map((genreId) => genres.find((genre) => genre.id === genreId)?.name).join(', ')}
//                                     </p>

//                                     <p>{movie.release_date}</p>
//                                     <div className='button-poster'>
//                                         <Link className='button-poster-infos' to={`/movie-details/${movie.id}`}>
//                                             More informations
//                                         </Link>
//                                         <Link className='button-poster-watch' to={`/watch-movie/${movie.id}`}>
//                                             Watch movie
//                                         </Link>
//                                     </div>

//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                     <div className="pagination-container">

//                         <div className='pagination'>
//                             {currentPage > 1 && (
//                                 <span onClick={() => handlePageChange(currentPage - 1)}>
//                                     Précédent
//                                 </span>
//                             )}
//                             {visiblePages.map((page) => (
//                                 <span
//                                     key={page}
//                                     onClick={() => handlePageChange(page)}
//                                     className={page === currentPage ? 'active' : ''}
//                                 >
//                                     {page}
//                                 </span>
//                             ))}
//                             <span onClick={() => handlePageChange(totalPages)}>
//                                 {totalPages}
//                             </span>

//                             {currentPage < totalPages && (
//                                 <span onClick={() => handlePageChange(currentPage + 1)}>
//                                     Suivant 
//                                 </span>
//                             )}
//                         </div>

//                     </div>

//                 </div>


//             </div>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



import '../css/category.css'

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);
  const [genres, setGenres] = useState([]);
  const [CategoryChoice, setCategoryChoice] = useState(null);
  const [categoryMovies, setCategoryMovies] = useState([]);


  const items = 6;
  const firstIndex = (currentPage - 1) * items;
  const lastIndex = firstIndex + items;
  const moviesToDisplay = movies.slice(firstIndex, lastIndex);

  useEffect(() => {
    // Fonction pour récupérer les films en fonction de la catégorie et de la page actuelle
    const fetchMovies = (category) => {
      const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}&with_genres=${category}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
          setCategoryMovies(data.results);
          setTotalPages(data.total_pages);

          // Calcul des pages visibles pour la pagination
          const totalVisiblePages = 3;
          const startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
          const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);
          setVisiblePages(Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index));
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });
    };

    fetchMovies(CategoryChoice);
  }, [currentPage, CategoryChoice, totalPages]);

  const fetchGenres = () => {
    // Fonction pour récupérer la liste des genres
    const apiKey = 'e2531ea78db099a16fc1c0cef503b213';
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres || []);
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  };

  useEffect(() => {
    // Appel de la fonction pour récupérer les genres au montage du composant
    fetchGenres();
  }, []);

  const handlePageChange = (newPage) => {
    // Fonction pour gérer le changement de page
    setCurrentPage(newPage);
  };

  const handleCategoryChoice = (category) => {
    // Fonction pour gérer le choix d'une catégorie
    setCategoryChoice(category);
    setCurrentPage(1);
  };

  

  return (
    <div className='category-container'>
      <div className='category-choice'>
        <div className='input-movie'>
          <input type="text" placeholder='Search a movie' />
        </div>
        <h1>{CategoryChoice ? `Catégorie : ${CategoryChoice}` : 'Sélectionnez une catégorie'}</h1>

        <div className='grid-container'>
          {genres && genres.map((category) => (
            // Affichage des catégories avec gestion du clic
            <span className='grid-category' key={category.id} onClick={() => handleCategoryChoice(category.id)}>
              {category.name}
            </span>
          ))}
        </div>
      </div>
          

          
      <div className='movie-poster'>
        <img className='background-image' src="./images/background.png" alt="" />
        <div>
          <div className='grid-movie-poster'>
            {moviesToDisplay.map((movie) => (
              // Affichage des affiches de films avec informations
              <div key={movie.id} className='image-poster'>
                {movie.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                )}
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

          {moviesToDisplay.length > 0 ? (
            // Affichage de la pagination si des films sont à afficher
            <div className="pagination-container">
              <div className='pagination'>
                {currentPage > 1 && (
                  <span onClick={() => handlePageChange(currentPage - 1)}>
                    Précédent
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
                    Suivant 
                  </span>
                )}
              </div>
            </div>
          ) : (
            // Affichage d'un message si aucun film n'est à afficher
            <div>
              <p>Aucun film à afficher pour la page actuelle.</p>
              <p>currentPage: {currentPage}, totalPages: {totalPages}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default Category;
