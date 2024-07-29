import React from 'react';
import FeaturesSection from '../components/FeaturesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        {/* Add more sections here as needed */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;