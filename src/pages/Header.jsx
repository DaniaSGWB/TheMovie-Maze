import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

const Header = () => {

    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <Link to="/">
                        <img src="images/logo.png" alt="" style={{ width: '300px' }} />
                    </Link>
                </div>
                <nav className='nav-container'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className='iconSearch'>
                    <Link to="/search"><i className="fa fa-search" aria-hidden="true"></i></Link>
                </div>
                <div className='iconUser'>
                    <Link to="/connexion"><i className="fa fa-user" aria-hidden="true"></i></Link>
                </div>
            </header>
        </div>
    );
}

export default Header;