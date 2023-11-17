import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './pages/Header'
import Home from './pages/Home'
import Category from './pages/Category';
import Search from './pages/Search';
import About from './pages/About';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer'

import './App.css'

/*Api Key : e2531ea78db099a16fc1c0cef503b213*/
/* Api URL : https://api.themoviedb.org/3/movie/ */

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App



