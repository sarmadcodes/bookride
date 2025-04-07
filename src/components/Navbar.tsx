import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Phone, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">RideEase</span>
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)} 
              className="text-gray-500 hover:text-green-600"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`${location.pathname === '/' ? 'text-green-600' : 'text-gray-600'} hover:text-green-500 text-lg`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'text-green-600' : 'text-gray-600'} hover:text-green-500 text-lg`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/AboutUs" 
              className={`${location.pathname === '/reviews' ? 'text-green-600' : 'text-gray-600'} hover:text-green-500 text-lg`}
              onClick={() => setIsSidebarOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`${location.pathname === '/contact' ? 'text-green-600' : 'text-gray-600'} hover:text-green-500 text-lg`}
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="relative flex items-center">
            {/* Left side - Hamburger */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="absolute left-0 text-green-600 hover:text-green-500 transition-colors"
            >
              <Menu size={24} />
            </button>

            {/* Center - Logo */}
            <div className="flex justify-center w-full">
              <Link to="/" className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-green-600" />
                <span className="text-2xl font-bold text-green-600">RideEase</span>
              </Link>
            </div>

            {/* Right side - Buttons */}
<div className="absolute right-0 flex items-center space-x-4">
  {/* Desktop Buttons */}
  <button className="hidden sm:flex items-center space-x-2 text-green-600 hover:text-green-500 transition-colors">
    <Phone size={20} />
    <span>Call Now</span>
  </button>
  <button className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-500 transition-colors">
    <Download size={20} />
    <span>Get the App</span>
  </button>

  {/* Mobile Call Button */}
  <a
    href="tel:+1234567890"
    className="sm:hidden text-green-600 hover:text-green-500 transition-colors"
  >
    <Phone size={24} />
  </a>
</div>
          </div>
        </div>
      </nav>
    </>
  );
}