import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/registration.css'

const Registration = () => {

    return (
        <div className='container-registration'>
            <img className="background-registration" src="images/background.png" alt="" />
            <div className='content-registration'>
                <div className='inputregistration'>
                    <div className='email-input-registration'>
                        <input type="text" placeholder='Username' />
                        <hr />
                    </div>
                    <div className='email-input-registration'>
                        <input type="text" placeholder='Email' />
                        <hr />
                    </div>
                    <div>
                        <div className='email-input-registration'>
                            <input type="text" placeholder='Password' />
                            <hr />
                        </div>

                        <div className='email-input-registration'>
                            <input type="text" placeholder='Confirm Password' />
                            <hr />
                        </div>
                    </div>
                </div>

            </div>
            <Link className='button-create-account' to="/">
                Create Account
            </Link>
        </div>
    );
}

export default Registration;