import React from 'react';

const Button = ({ primary, children }) => (
  <a
    href="#"
    className={`inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm transition duration-150 ease-in-out ${
      primary
        ? 'text-white bg-teal-600 hover:bg-teal-700'
        : 'text-teal-600 bg-white hover:bg-teal-50'
    }`}
  >
    {children}
  </a>
);

const Hero = () => (
  <div className="bg-gradient-to-r from-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Let us solve your</span>
            <span className="block text-teal-600 mt-1">
              critical website
            </span>
            <span className="block text-teal-600">
              development challenges
            </span>
          </h2>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row lg:mt-0 lg:flex-shrink-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <Button primary>Get started</Button>
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;