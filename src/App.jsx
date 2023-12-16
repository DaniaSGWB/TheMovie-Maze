import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './pages/Header';

import Home from './pages/Home'
import MovieCategory from './components/MovieCategory';
import TvseriesCategory from './components/TVseriesCategory';
import Category from './pages/Category';
import Search from './pages/Search';
import About from './pages/About';
import MovieProfil from './pages/Movieprofil';
import Connexion from './pages/Connexion';
import Screenmovie from './pages/Screenmovie';
import Trailermovie  from './pages/trailermovie';
import Footer from './pages/Footer';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';



/*Api Key : e2531ea78db099a16fc1c0cef503b213*/
/* Api URL : https://api.themoviedb.org/3/movie/ */

function App() {  
  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/movies" element={<MovieCategory />} />
          <Route path="/tvseries" element={<TvseriesCategory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/watch-movie/:id" element={<Screenmovie />} />
          <Route path="/watch-trailer/:id" element={<Trailermovie />} />
          <Route path="/connexion" element={<Connexion />} />


          <Route path="/movie-details/:id" element={<MovieProfil />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;



