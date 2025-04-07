import { Link } from 'react-router-dom';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t w-full">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-4 justify-center md:justify-start">
              <Car className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold text-green-500">RideEase</span>
            </div>
            <p className="text-gray-600">Your trusted ride partner</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-green-500">Home</Link>
              <Link to="/services" className="block text-gray-600 hover:text-green-500">Services</Link>
              <Link to="/AboutUs" className="block text-gray-600 hover:text-green-500">About Us</Link>
              <Link to="/contact" className="block text-gray-600 hover:text-green-500">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Download App</h4>
            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors">
                App Store
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors">
                Google Play
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Facebook className="w-6 h-6 cursor-pointer text-gray-600 hover:text-green-500" />
              <Instagram className="w-6 h-6 cursor-pointer text-gray-600 hover:text-green-500" />
              <Twitter className="w-6 h-6 cursor-pointer text-gray-600 hover:text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
