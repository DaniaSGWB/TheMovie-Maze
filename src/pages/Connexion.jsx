import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/connexion.css'

const Connexion = () => {

    return (
        <div className='container-connexion'>
            <img className="background" src="images/background.png" alt="" />
            <div className='content-connexion'>
                <div className='inputconnexion'>
                <input type="text" placeholder='Email or Username'/>
                <hr />
                    <input type="text" placeholder='Password'/>
                    <hr />
                    
                </div>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <Link to="/connexion">
        <button>Login</button>
      </Link>
        <div className='create-account'>
        <h3>No account?</h3>
        <Link to="/registration">Create One</Link>
        </div>
      
        </div>
    );
}

export default Connexion;