import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award, Clock, Shield, Users, CreditCard, MapPin } from 'lucide-react';

// Company history timeline data
const companyHistory = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'RideEase was established with just 5 cars and a vision to transform urban transportation.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2017',
    title: 'City Expansion',
    description: 'Expanded our services to 5 major cities with a fleet of over 50 vehicles.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2019',
    title: 'App Launch',
    description: 'Launched our mobile application for seamless booking and real-time tracking.',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f99912f2e9?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2021',
    title: 'Eco-friendly Fleet',
    description: 'Introduced electric and hybrid vehicles as part of our commitment to sustainability.',
    image: 'https://images.unsplash.com/photo-1589391886641-c04f5a948ca0?auto=format&fit=crop&w=800&q=80'
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Awarded "Best Transportation Service" for exceptional customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1581093588401-4dfc6c407b11?auto=format&fit=crop&w=800&q=80'
  }
];


// Team member data
const teamMembers = [
  {
    name: 'Michael Rodriguez',
    position: 'Founder & CEO',
    bio: 'Former transportation executive with 15+ years of industry experience.',
    image: 'https://common.usembassy.gov/wp-content/uploads/sites/48/2022/02/123.png'

  },
  {
    name: 'Emily Chen',
    position: 'Operations Director',
    bio: 'Logistics expert specializing in fleet management and route optimization.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'David Williams',
    position: 'Customer Experience',
    bio: 'Dedicated to creating exceptional journeys for every passenger.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sarah Johnson',
    position: 'Technology Lead',
    bio: 'Developing innovative solutions for seamless ride experiences.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80'
  }
  
];

// Core values data
const coreValues = [
  {
    icon: <Shield className="h-12 w-12 text-green-600" />,
    title: 'Safety',
    description: 'Your safety is our top priority with vetted drivers and well-maintained vehicles.'
  },
  {
    icon: <Clock className="h-12 w-12 text-green-600" />,
    title: 'Reliability',
    description: 'Punctual service you can count on, every time you book with us.'
  },
  {
    icon: <Award className="h-12 w-12 text-green-600" />,
    title: 'Excellence',
    description: 'Committed to providing the highest quality transportation experience.'
  },
  {
    icon: <Users className="h-12 w-12 text-green-600" />,
    title: 'Customer Focus',
    description: 'Personalized service tailored to meet your specific needs and preferences.'
  },
  {
    icon: <CreditCard className="h-12 w-12 text-green-600" />,
    title: 'Transparency',
    description: 'Clear pricing with no hidden fees or surprises.'
  },
  {
    icon: <MapPin className="h-12 w-12 text-green-600" />,
    title: 'Local Expertise',
    description: 'Drivers with extensive knowledge of local routes and traffic patterns.'
  }
];

export default function AboutUs() {
  const [activeHistoryIndex, setActiveHistoryIndex] = useState(0);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const teamSliderRef = useRef(null);
  const historySliderRef = useRef(null);

  // Auto-rotate history slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHistoryIndex((prevIndex) => 
        prevIndex === companyHistory.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Navigation functions for history slider
  const goToPrevHistory = () => {
    setActiveHistoryIndex((prevIndex) => 
      prevIndex === 0 ? companyHistory.length - 1 : prevIndex - 1
    );
  };

  const goToNextHistory = () => {
    setActiveHistoryIndex((prevIndex) => 
      prevIndex === companyHistory.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigation functions for team slider
  const goToPrevTeam = () => {
    setActiveTeamIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNextTeam = () => {
    setActiveTeamIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="RideEase fleet" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About RideEase</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your reliable partner for premium transportation services since 2015.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-green-600 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              RideEase was founded with a simple mission: to provide safe, reliable, and comfortable transportation services that exceed customer expectations. What started as a small local service has grown into a trusted transportation partner across multiple cities.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began when our founder, Michael Rodriguez, identified a need for transportation services that prioritized both quality and customer experience. Since then, we've been committed to continuous improvement and innovation in the transportation industry.
            </p>
            <p className="text-gray-700">
              Today, RideEase operates a diverse fleet of vehicles and employs professional drivers who share our passion for exceptional service. We take pride in our ability to adapt to changing customer needs while maintaining the core values that have guided us from the beginning.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/api/placeholder/600/600" 
              alt="RideEase story" 
              className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Company History Timeline */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Our Journey</h2>
          
          <div className="relative" ref={historySliderRef}>
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={goToPrevHistory}
                className="bg-white p-2 rounded-full shadow-md hover:bg-green-100 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-green-600" />
              </button>
              
              <div className="text-center">
                <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-lg font-bold">
                  {companyHistory[activeHistoryIndex].year}
                </span>
              </div>
              
              <button 
                onClick={goToNextHistory}
                className="bg-white p-2 rounded-full shadow-md hover:bg-green-100 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-green-600" />
              </button>
            </div>
            
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeHistoryIndex * 100}%)` }}
              >
                <div className="flex">
                  {companyHistory.map((item, index) => (
                    <div 
                      key={index}
                      className="min-w-full"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {companyHistory.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveHistoryIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeHistoryIndex === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Our Core Values</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-700 text-center">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Meet Our Leadership Team</h2>
          
          <div className="relative" ref={teamSliderRef}>
            <div className="flex items-center">
              <button 
                onClick={goToPrevTeam}
                className="hidden md:block bg-white p-2 rounded-full shadow-md hover:bg-green-100 transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6 text-green-600" />
              </button>
              
              <div className="overflow-hidden mx-auto w-full md:w-auto">
                <div 
                  className="md:flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeTeamIndex * 100}%)` }}
                >
                  {teamMembers.map((member, index) => (
                    <div 
                      key={index} 
                      className="p-4 min-w-full md:min-w-0 md:w-64"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                          <p className="text-green-600 font-medium mb-3">{member.position}</p>
                          <p className="text-gray-700">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={goToNextTeam}
                className="hidden md:block bg-white p-2 rounded-full shadow-md hover:bg-green-100 transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6 text-green-600" />
              </button>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    activeTeamIndex === index ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700">Cities Served</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-700">Professional Drivers</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
            <div className="text-gray-700">Completed Rides</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-700">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience the RideEase Difference?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who rely on us for their transportation needs. Download our app today or call us to book your next ride.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Download Our App
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}