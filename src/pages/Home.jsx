import React from 'react';
import bot from '../assets/images/home.gif';

function Home() {
    return (
        <div className="main-container">
            <div className="text-center mt-6 md:mt-16">
                <h1 className="text-2xl md:text-5xl">Your Online Bot Here</h1>
                <p className="text-center md:w-2/3 mx-auto px-4 md:px-16 lg:px-24 mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem molestiae
                    numquam velit natus.
                </p>
            </div>
            <div className="flex justify-center items-center h-72 md:h-96">
                <div className="text-center">
                    <img className="h-64" src={bot} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
