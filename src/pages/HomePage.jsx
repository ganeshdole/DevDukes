import React from 'react';


import FeaturesSection from '../components/FeaturesSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hero = () => (
  <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Let us solve your critical website</span>
        <span className="block text-teal-600">development challenges</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700">
            Get started
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>
);

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