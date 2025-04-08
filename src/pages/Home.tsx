import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Import components from pages folder
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const heroImages = [
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920',
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1920',
  'https://images.pistonheads.com/nimg/46601/blobid0.jpg'
];

const sponsors = [
  'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://1000logos.net/wp-content/uploads/2017/02/Apple-Logosu.png',
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png'
];

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    text: 'Excellent service! The driver was professional and punctual.',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Sarah Smith',
    rating: 5,
    text: 'Best taxi service in town. Clean cars and friendly drivers.',
    image: '/api/placeholder/400/400'
  },
  {
    name: 'Mike Johnson',
    rating: 5,
    text: 'Very reliable and affordable. Highly recommended!',
    image: '/api/placeholder/400/400'
  }
];

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentSponsorSlide, setCurrentSponsorSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const nextHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevHeroSlide = useCallback(() => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  const nextSponsorSlide = useCallback(() => {
    setCurrentSponsorSlide((prev) => (prev + 1) % sponsors.length);
  }, []);

  const prevSponsorSlide = useCallback(() => {
    setCurrentSponsorSlide((prev) => (prev - 1 + sponsors.length) % sponsors.length);
  }, []);

  const heroSwipeHandlers = useSwipeable({
    onSwipedLeft: nextHeroSlide,
    onSwipedRight: prevHeroSlide,
    trackMouse: true
  });

  const sponsorSwipeHandlers = useSwipeable({
    onSwipedLeft: nextSponsorSlide,
    onSwipedRight: prevSponsorSlide,
    trackMouse: true
  });

  useEffect(() => {
    const heroTimer = setInterval(nextHeroSlide, 5000);
    const sponsorTimer = setInterval(nextSponsorSlide, 3000);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(heroTimer);
      clearInterval(sponsorTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextHeroSlide, nextSponsorSlide]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Modern Styling */}
      <div className="relative h-[60vh] sm:h-[70vh] md:h-screen" {...heroSwipeHandlers}>
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 transform ${
              index === currentHeroSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={img}
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-full md:max-w-3xl transform transition-all duration-700 translate-y-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight tracking-tight">
              Premium Rides, <span className="text-green-400">Anytime</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
              Experience luxury and comfort with our professional chauffeur service. 
              Available 24/7 for your convenience.
            </p>
            <Link to="/services">
              <button className="bg-green-500 text-white px-6 py-2 text-sm sm:text-base rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Improved Navigation Arrows - Positioned farther from center */}
        <button 
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
          onClick={prevHeroSlide}
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        
        <button 
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300"
          onClick={nextHeroSlide}
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>

        {/* Modern Dot Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide 
                  ? 'bg-green-400 w-6 sm:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentHeroSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Modern Sponsor Strip - With Larger, More Responsive Logos */}
<div className="py-8 sm:py-10 bg-gradient-to-r from-gray-50 to-gray-100">
  <div className="container mx-auto px-4">
    <h3 className="text-center text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-6 sm:mb-8 font-medium">Trusted by Industry Leaders</h3>
    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
      {sponsors.map((sponsor, i) => (
        <div
          key={i}
          className="w-28 sm:w-32 md:w-40 h-14 sm:h-16 md:h-20 hover:opacity-80 transition-all duration-300 transform hover:scale-105 px-2 py-1"
        >
          <img
            src={sponsor}
            alt={`Sponsor ${i + 1}`}
            className="max-w-full max-h-full object-contain w-full h-full"
          />
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Services Section with Background Effect - No Top Margin/Padding */}
      <div className="relative overflow-hidden">
  <div className="absolute inset-0 opacity-5 pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-800"></div>
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
  </div>
  <Services />
</div>

      {/* Reviews Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Customer Reviews</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">See what our customers have to say about their experience with our premium service</p>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-green-500 shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{review.name}</h4>
                    <div className="flex text-green-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm sm:text-base">"<span>{review.text}</span>"</p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex justify-end">
                  <span className="text-green-500 text-xs sm:text-sm font-medium">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <Link to="/AboutUs">
              <button className="text-green-600 border border-green-600 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                View All Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action Before Contact */}
      <div className="bg-green-600 text-white py-10 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Experience Luxury?</h2>
          <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-green-100 text-sm sm:text-base">
            Book your next ride with us and discover why we're the preferred choice for premium transportation.
          </p>
          <Link to="/services">
            <button className="bg-white text-green-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-green-100 transition-colors duration-300 shadow-md text-sm sm:text-base">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
