import { useState, useEffect, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

// Import components from pages folder
import Services from '../pages/Services';
import Contact from '../pages/Contact';

const heroImages = [
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920',
  'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1920',
  'https://images.pistonheads.com/nimg/46601/blobid0.jpg'
];

const sponsors = [
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200',
  'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200'
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
    return () => {
      clearInterval(heroTimer);
      clearInterval(sponsorTimer);
    };
  }, [nextHeroSlide, nextSponsorSlide]);

  return (
    <div>
      {/* Hero Section */}
<div className="relative h-[60vh] sm:h-[70vh] md:h-screen" {...heroSwipeHandlers}>
  {heroImages.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-opacity duration-1000 ${
        index === currentHeroSlide ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img
        src={img}
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
  ))}

  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
    <div className="max-w-full md:max-w-2xl">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-tight">
        Premium Rides, Anytime
      </h1>
      <p className="text-sm sm:text-base md:text-xl text-gray-200 mb-4 md:mb-8 max-w-xl mx-auto">
        Experience luxury and comfort with our professional chauffeur service. Available 24/7 for your convenience.
      </p>
      <Link to="/services">
        <button className="bg-green-600 text-white px-5 py-2 text-sm sm:text-base rounded-full hover:bg-green-500 transition-colors">
          Book Now
        </button>
      </Link>
    </div>
  </div>

  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
    {heroImages.map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 rounded-full transition-colors ${
          index === currentHeroSlide ? 'bg-white' : 'bg-white/50'
        }`}
        onClick={() => setCurrentHeroSlide(index)}
      />
    ))}
  </div>
</div>

   {/* Sponsor Strip */}
   <div className="pt-12 md:pt-20 pb-4 md:pb-6 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-8">
      {[
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png",
        "https://upload.wikimedia.org/wikipedia/commons/0/02/Instagram_logo_2022.svg"
      ].map((sponsor, i) => (
        <div key={i} className="w-28 md:w-40 h-12 md:h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <img 
            src={sponsor} 
            alt={`Sponsor ${i + 1}`} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Services Section */}
      <Services />

      {/* Reviews Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 pb-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Customer Reviews</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex text-green-600">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}