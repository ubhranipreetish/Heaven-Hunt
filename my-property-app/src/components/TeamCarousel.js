import React from 'react';
import '../styles/TeamCarousel.css';

const teamMembers = [
  {
    name: 'Anjali Mehta',
    propertiesDelivered: 120,
    experience: 7,
    image: '/team/anjali.jpg',
  },
  {
    name: 'Rohit Sharma',
    propertiesDelivered: 95,
    experience: 5,
    image: '/team/rohit.jpg',
  },
  {
    name: 'Neha Kapoor',
    propertiesDelivered: 110,
    experience: 6,
    image: '/team/neha.jpg',
  },
  {
    name: 'Amit Verma',
    propertiesDelivered: 130,
    experience: 8,
    image: '/team/amit.jpg',
  },
  {
    name: 'Sara Ali',
    propertiesDelivered: 90,
    experience: 4,
    image: '/team/sara.jpg',
  },
];

const TeamCarousel = () => {
  const scroll = (direction) => {
    const container = document.querySelector('.carousel-container');
    container.scrollBy({
      left: direction === 'left' ? -300 : 300,
      behavior: 'smooth',
    });
  };

  return (
    <section className="team-carousel-section">
      <h2>Meet Our Agents</h2>
      <div className="carousel-wrapper">

        <div className="carousel-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src='/images/employee.avif' alt={member.name} />
              <h3>{member.name}</h3>
              <p><strong>Properties Delivered:</strong> {member.propertiesDelivered}</p>
              <p><strong>Experience:</strong> {member.experience} years</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamCarousel;
