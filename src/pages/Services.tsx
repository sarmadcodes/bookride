import  { useState } from 'react';
import { Car, MapPin, Star, CarFront, Wind, Sun as Suv, CarTaxiFront, Users, Briefcase, Crown } from 'lucide-react';

const carTypes = [
  {
    name: 'Sedan',
    icon: CarFront,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800',
    description: 'Perfect for city travel with comfort and style',
    features: ['4 Passengers', 'Air Conditioning', 'Leather Seats'],
    price: 'From $25/hour'
  },
  {
    name: 'Hatchback',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    description: 'Compact and efficient for urban commuting',
    features: ['4 Passengers', 'Fuel Efficient', 'Easy Parking'],
    price: 'From $20/hour'
  },
  {
    name: 'SUV',
    icon: Suv,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    description: 'Spacious comfort for family and group travel',
    features: ['7 Passengers', 'Large Cargo Space', 'All-Terrain'],
    price: 'From $35/hour'
  },
  {
    name: 'Luxury',
    icon: CarTaxiFront,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800',
    description: 'Premium experience with top-tier service',
    features: ['4 Passengers', 'Premium Interior', 'Professional Driver'],
    price: 'From $50/hour'
  },
  {
    name: 'Premium SUV',
    icon: Wind,
    image: 'https://images.unsplash.com/photo-1519245887621-95be29989d5f?w=800',
    description: 'Ultimate luxury with maximum space',
    features: ['6 Passengers', 'Premium Audio', 'Extended Legroom'],
    price: 'From $45/hour'
  },
  {
    name: 'MPV',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
    description: 'Multi-purpose vehicle ideal for larger groups',
    features: ['7 Passengers', 'Flexible Seating', 'Extra Luggage Space'],
    price: 'From $40/hour'
  },
  {
    name: 'MPV+',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1543465077-db45d34b88a5?w=800',
    description: 'Premium multi-purpose vehicle with enhanced comfort',
    features: ['8 Passengers', 'Climate Control', 'Enhanced Entertainment'],
    price: 'From $55/hour'
  },
  {
    name: 'Wheelchair',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1626023772800-eadff10c3396?w=800',
    description: 'Specially equipped vehicles for wheelchair accessibility',
    features: ['Wheelchair Ramp', 'Extra Space', 'Trained Drivers'],
    price: 'From $35/hour'
  },
  {
    name: 'Executive',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1605515298946-d664194459d5?w=800',
    description: 'Premium business travel with professional service',
    features: ['4 Passengers', 'Wi-Fi Enabled', 'Work Station'],
    price: 'From $60/hour'
  },
  {
    name: 'First Class',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800',
    description: 'Ultimate luxury experience with VIP treatment',
    features: ['2 Passengers', 'Champagne Service', 'Privacy Partition'],
    price: 'From $85/hour'
  }
];

export default function Services() {
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 text-green-600">Choose Your Perfect Ride</h2>
        
        {/* Car Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {carTypes.map((car) => (
            <button
              key={car.name}
              onClick={() => setSelectedCar(car)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCar.name === car.name
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-2">
                <car.icon className="w-5 h-5" />
                <span>{car.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Car Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-2xl font-bold">{selectedCar.name}</p>
              <p className="text-green-400 font-semibold">{selectedCar.price}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{selectedCar.name} Experience</h3>
              <p className="text-gray-600 text-lg">{selectedCar.description}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800">Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedCar.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                    <Car className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center space-x-2">
              <CarFront className="w-6 h-6" />
              <span>Book This {selectedCar.name}</span>
            </button>
          </div>
        </div>

        {/* Extra Services Section - Optional */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Airport Transfers</h3>
              <p className="text-gray-600 text-center mb-4">Reliable and punctual airport pickup and drop-off services.</p>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">Corporate Packages</h3>
              <p className="text-gray-600 text-center mb-4">Special rates and dedicated service for business clients.</p>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">City Tours</h3>
              <p className="text-gray-600 text-center mb-4">Explore the city with our professional drivers and guides.</p>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}