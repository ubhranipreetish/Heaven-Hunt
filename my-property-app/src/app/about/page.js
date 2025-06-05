import About_Component from '@/components/About_Component';
import Footer from '@/components/Footer';
import TeamCarousel from '@/components/TeamCarousel';
import React from 'react';


const AboutPage = () => {
  return (
    <div>
        <About_Component />
        <TeamCarousel />
        <Footer />
    </div>
  );
};

export default AboutPage;
