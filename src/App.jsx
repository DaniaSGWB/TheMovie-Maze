import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './pages/Header'
import Home from './pages/Home'

import Footer from './pages/Footer'
import './App.css'

/*Api Key : e2531ea78db099a16fc1c0cef503b213*/ 
/* Api URL : https://api.themoviedb.org/3/movie/ */

function App() {
 
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App



