import React from "react";
import "../styles/WhyChooseUs.css";

const features = [
  {
    title: "Verified Listings Only",
    description: "We ensure that every property is thoroughly verified for authenticity.",
  },
  {
    title: "Hyperlocal Search Filters",
    description: "Find homes in your preferred neighborhoods with smart filtering options.",
  },
  {
    title: "Expert Support",
    description: "Our professional agents guide you at every step of your property journey.",
  },
  {
    title: "Transparent Dealings",
    description: "No hidden fees or misleading listings. We believe in 100% transparency.",
  },
  {
    title: "Virtual Tours",
    description: "View properties from home with immersive virtual tours and high-res images.",
  },
  {
    title: "Market Insights",
    description: "Access data-driven insights to make smart investment decisions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <p className="subtitle">Your trusted partner in finding the perfect property</p>
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
