import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
        <div className="max-w-md">
      <h1 className="text-5xl font-bold">JavaScript</h1>
      <p className="py-6">JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.</p>
      
      <Link to="/tutorial"><button className="btn">Get Started</button></Link>
        </div>
        </div>
    </div>
    );
};

export default Hero;