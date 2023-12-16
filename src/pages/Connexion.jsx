import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/connexion.css'

const Connexion = () => {

    return (
        <div className='container-connexion'>
            <img className="background-connexion" src="images/background.png" alt="" />
            <div className='content-connexion'>
                <div className='inputconnexion'>
                    <div className='email-input'>
                    <input type="text" placeholder='Email or Username' />
                    <hr />
                    </div>
                    <div>
                    <input type="text" placeholder='Password' />
                    <hr />
                    <Link className="psw-forgot" to="/forgot-password">Forgot Password?</Link>
                    </div>
                    
                </div>
                
            </div>
           
            <Link className='button-login' to="/">
                Login
            </Link>
          
            
            <div className='create-account'>
                <h3>No account?</h3>
                <Link className="account-registration" to="/registration">Create One</Link>
            </div>
        </div>
    );
}

export default Connexion;