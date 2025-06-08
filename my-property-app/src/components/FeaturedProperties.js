"use client";
import "../styles/FeaturedProperties.css";
import Image from 'next/image'


const properties = [
  {
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: "/images/house1.jpeg", 
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: "/images/house2.jpeg",
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: "/images/house3.jpeg",
  },
  {
    title: "Palm Retreat",
    price: "$3,10,000",
    location: "Florida",
    image: "/images/house4.jpeg",
  }
];

export default function FeaturedProperties() {
  return (
    <section className="featured-section">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div className="property-card" key={index}>
            <div className="feat-image">
              <Image src={property.image} alt={property.title} fill style={{ objectFit: "cover" }}/>
            </div>
            <div className="property-info">
              <h3>{property.title}</h3>
              <p>
                {property.price} &nbsp; | &nbsp; {property.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
