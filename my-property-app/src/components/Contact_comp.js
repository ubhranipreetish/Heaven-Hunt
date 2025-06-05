import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Contact_comp.css";


const Contact_comp = () => {
  return (
    <>
      <Navbar />

      <section className="contact-section">
        <h2>ThankYou for Visiting Us</h2>
        <h2>Contact Us</h2>
        <p className="contact-subtitle">We’d love to hear from you. Reach out to us!</p>

        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-map">
            <iframe
              title="Heaven Hunt Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.734552831463!2d77.23067107580249!3d28.57773268656651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2563fe800f9%3A0x4553f8726287e6be!2sSouth%20Delhi%20Floors!5e0!3m2!1sen!2sin!4v1746346531526!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      

    <Footer />
    </>
  );
};

export default Contact_comp;
