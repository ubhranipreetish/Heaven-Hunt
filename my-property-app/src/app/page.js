import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedProperties />
      <Footer />
    </>
  );
}
