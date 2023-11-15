import React, { useState } from 'react';

const Header = () => {

    return (
        <div>
            <header className='header'>
                <div className="logo">
                    <img src="images/logo.png" alt="" style={{ width: '300px' }} />
                </div>
                <nav className='nav-container'>
                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Category">Category</a></li>
                        <li><a href="Search">Search</a></li>
                        <li><a href="About">About</a></li>
                    </ul>

                </nav>
                <div className='iconSearch'>
                    <a href=""><i className="fa fa-search" aria-hidden="true"></i></a>
                </div>
                <div className='iconUser'>
                    <a href=""><i className="fa fa-user" aria-hidden="true"></i></a>
                </div>
            </header>
        </div>
    );
}

export default Header;