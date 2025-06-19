import React from 'react';
import Navbar from './Navbar';

import '../styles/About_Component.css';


const About_Component = () => {
  return (
    <div>
      <Navbar />

      <div className="our-story">
        <div className='story'>
          <h2>Our Story</h2>
          <p>
            Heaven Hunt was founded with the vision of making property discovery
            seamless and transparent. We aim to connect buyers with dream homes and
            provide hassle-free search experiences.
          </p>
          <div className='image'>
            <img src='/images/house6.jpeg' alt="About Heaven Hunt"/>
          </div>
        </div>

        <div className='mission'>
          <h2>Mission & Vision</h2>
          <p>
            Our mission is to revolutionize the real estate search with tech-driven
            solutions. We envision a world where anyone can find their perfect place
            with confidence and ease.
          </p>
          <div className='image'>
            <img src='/images/house7.jpeg' alt="About Heaven Hunt"/>
          </div>
        </div>
      </div >

      <div className="specialities-section">
        <div className="image-container">
          <img src='/images/house8.jpeg' alt="About Heaven Hunt"/>
        </div>
        <div className="specialities">
          <h2>Our Specialities</h2>
          <ul>
            <li>Verified & Curated Property Listings</li>
            <li>Smart Location-Based Search</li>
            <li>High-Quality Photos & Virtual Tours</li>
            <li>Dedicated Customer Service</li>
            <li>Insights, Trends & Valuation Tools</li>
          </ul>
        </div>
      </div >

    </div>
  );
};

export default About_Component;
