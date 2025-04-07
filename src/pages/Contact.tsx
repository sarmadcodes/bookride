import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const branches = [
  { city: 'Karachi', address: 'Downtown Plaza, Block 4' },
  { city: 'Lahore', address: 'Liberty Market, Main Road' },
  { city: 'Islamabad', address: 'Blue Area, F-6' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  return (
    <div className="bg-white pt-6">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Request a Call</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border border-gray-300 rounded focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-500 transition-colors"
                >
                  Request Call
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-green-600">Our Branches</h3>
            <div className="grid gap-6">
              {branches.map((branch, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{branch.city}</h3>
                  <p className="text-gray-600">{branch.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}