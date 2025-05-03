import React from 'react';
import Navbar from './Navbar';
import '../styles/About_Component.css';


const About_Component = () => {
  return (
    <div>
      <Navbar />

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Heaven Hunt was founded with the vision of making property discovery
          seamless and transparent. We aim to connect buyers with dream homes and
          provide hassle-free search experiences.
        </p>

        <h3>Mission & Vision</h3>
        <p>
          Our mission is to revolutionize the real estate search with tech-driven
          solutions. We envision a world where anyone can find their perfect place
          with confidence and ease.
        </p>
      </section>

      <section className="specialities-section">
        <div className="image-container">
          <img src='/images/hero_section_main2.jpg' alt="About Heaven Hunt" />
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
      </section>

    </div>
  );
};

export default About_Component;
