"use client";
import "../styles/FeaturedProperties.css";

const properties = [
  {
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: "/images/hero_section_main2.jpg", 
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: "/images/hero_section_main2.jpg",
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: "/images/hero_section_main2.jpg",
  },
  {
    title: "Palm Retreat",
    price: "$3,10,000",
    location: "Florida",
    image: "/images/hero_section_main2.jpg",
  }
];

export default function FeaturedProperties() {
  return (
    <section className="featured-section">
      <h2>Featured Properties</h2>
      <div className="property-grid">
        {properties.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={property.title} />
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
