import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../public/logo.png"
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
            <a href="/" className="flex-shrink-0 flex gap-2 items-center">
              <img className="h-8 w-auto" src={logo} alt="Bigspring" />
              <p className="text-lg font-semibold text-gray-800">Bigspring</p>
            </a>

            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              </div>
            </div>
            <div className="hidden md:block">
              <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium">Get Started</a>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-teal-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
              <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white block px-3 py-2 rounded-md text-base font-medium">Get Started</a>
            </div>
          </div>
        )}
      </nav>
    );
  };
  


export default Navbar;