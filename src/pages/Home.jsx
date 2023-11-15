import React from 'react';

function Home() {
    return (
        <div className='container'>
            <div className='content'>
                <div className='homeImage'>
                    <img src="images/imageHome.jpg" alt="" style={{ width: '1920px' }} />
                    <div className="imageText">
                        <h1>UN FILM DE <span>CHRISTOPHER NOLAN</span></h1>
                        <p>OPPENHEIMER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;