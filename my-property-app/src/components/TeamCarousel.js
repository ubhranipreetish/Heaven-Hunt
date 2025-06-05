import React from 'react';
import '../styles/TeamCarousel.css';

const teamMembers = [
  {
    name: 'Hem Batra',
    propertiesDelivered: 120,
    experience: 7,
    image: '/images/hem.jpeg',
    review: '⭑⭑⭑⭑'
  },
  {
    name: 'Josh Flangg',
    propertiesDelivered: 95,
    experience: 5,
    image: '/images/josh.webp',
    review: '⭑⭑⭑⭑'
  },
  {
    name: 'Karuna Gidwani',
    propertiesDelivered: 110,
    experience: 6,
    image: '/images/karuna.jpg',
    review: '⭑⭑⭑⭑⭑'
  },
  {
    name: 'Navdeep Khanuja',
    propertiesDelivered: 130,
    experience: 8,
    image: '/images/navdeep.jpeg',
    review: '⭑⭑⭑⭑⭑'
  },
  {
    name: 'Steve Altman',
    propertiesDelivered: 90,
    experience: 4,
    image: '/images/steve.jpeg',
    review: '⭑⭑⭑⭑'
  },
  {
    name: 'Peter Roy',
    propertiesDelivered: 42,
    experience: 2,
    image: '/images/peter.jpeg',
    review: '⭑⭑⭑⭑'
  },
  {
    name: 'Kevin Parker',
    propertiesDelivered: 55,
    experience: 3,
    image: '/images/kevin.jpeg',
    review: '⭑⭑⭑⭑'
  },
];

const TeamCarousel = () => {

  return (
    <section className="team-carousel-section">
      <h2>Meet Our Agents</h2>
      <div className="carousel-wrapper">

        <div className="carousel-container">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p><strong>Properties Delivered:</strong> {member.propertiesDelivered}</p>
              <p><strong>Experience:</strong> {member.experience} years</p>
              <p><strong>Customer Reviews:</strong> {member.review}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamCarousel;
