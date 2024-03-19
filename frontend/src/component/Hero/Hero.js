import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import dark_arrow from '../../assets/imgs/dark-arrow.png';

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleExploreClick = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/explore'); // Change '/explore' to the path of the route you want to navigate to
  };

  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to GemBook</h1>
        <p>The MiniMaster in Business Management program, also known as “Business Essentials,” 
            is meticulously crafted to empower accomplished professionals in enhancing their career trajectory. 
            This program integrates contemporary concepts and strategies, providing a comprehensive set of tools and 
            resources for confident and strategic leadership in today’s dynamic business landscape.</p>
        <button className='btn' onClick={handleExploreClick}>Explore More</button>
      </div>
    </div>
  );
};

export default Hero;
