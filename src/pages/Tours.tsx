import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Star } from 'lucide-react';

export default function Tours() {
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterDestination, setFilterDestination] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const tours = [
    {
      id: 1,
      title: "Delhi-Agra-Rajasthan Adventure",
      duration: "11 Days",
      destination: "India",
      type: "Luxury",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Experience the majestic palaces, forts, and rich culture of Rajasthan combined with the iconic Taj Mahal.",
      highlights: ["Taj Mahal", "Amber Fort", "Udaipur Palaces", "Desert Safari"],
      price: "Contact for pricing"
    },
    {
      id: 2,
      title: "Golden Triangle Luxury Tour",
      duration: "7 Days",
      destination: "India",
      type: "Luxury",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Discover India's most iconic destinations: Delhi, Agra, and Jaipur with premium accommodations.",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "City Palace"],
      price: "Contact for pricing"
    },
    {
      id: 3,
      title: "Rajasthan Royal Heritage Trail",
      duration: "14 Days",
      destination: "India",
      type: "Culture",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Immerse yourself in the royal heritage of Rajasthan's most magnificent cities.",
      highlights: ["Jaipur", "Jodhpur", "Jaisalmer", "Udaipur"],
      price: "Contact for pricing"
    },
    {
      id: 4,
      title: "North India Spiritual Journey",
      duration: "10 Days",
      destination: "India",
      type: "Spiritual",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A spiritual odyssey through India's sacred cities and temples along the holy Ganges.",
      highlights: ["Varanasi", "Haridwar", "Rishikesh", "Delhi"],
      price: "Contact for pricing"
    },
    {
      id: 5,
      title: "Nepal Himalayan Experience",
      duration: "8 Days",
      destination: "Nepal",
      type: "Adventure",
      image: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Explore the breathtaking Himalayas, ancient temples, and vibrant culture of Nepal.",
      highlights: ["Kathmandu Valley", "Pokhara", "Chitwan", "Mountain Views"],
      price: "Contact for pricing"
    },
    {
      id: 6,
      title: "Sri Lanka Beaches & Culture",
      duration: "9 Days",
      destination: "Sri Lanka",
      type: "Beach",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Discover pristine beaches, ancient temples, tea plantations, and wildlife.",
      highlights: ["Colombo", "Kandy", "Ella", "Galle Beaches"],
      price: "Contact for pricing"
    },
    {
      id: 7,
      title: "Wildlife & Tiger Safari Tour",
      duration: "6 Days",
      destination: "India",
      type: "Wildlife",
      image: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Experience thrilling wildlife safaris in India's premier national parks and tiger reserves.",
      highlights: ["Ranthambore", "Jungle Safari", "Tiger Spotting", "Bird Watching"],
      price: "Contact for pricing"
    },
    {
      id: 8,
      title: "Kerala Backwaters & Culture",
      duration: "8 Days",
      destination: "India",
      type: "Culture",
      image: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Explore the serene backwaters, lush landscapes, and rich culture of God's Own Country.",
      highlights: ["Houseboat Stay", "Alleppey", "Kochi", "Tea Gardens"],
      price: "Contact for pricing"
    },
    {
      id: 9,
      title: "Himalayan Adventure Trek",
      duration: "12 Days",
      destination: "Nepal",
      type: "Adventure",
      image: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Trekking experience through stunning Himalayan landscapes and traditional mountain villages.",
      highlights: ["Mountain Trekking", "Sherpa Villages", "Monasteries", "Panoramic Views"],
      price: "Contact for pricing"
    },
    {
      id: 10,
      title: "Sri Lanka Hill Country Explorer",
      duration: "7 Days",
      destination: "Sri Lanka",
      type: "Culture",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Journey through Sri Lanka's stunning hill country with tea plantations and waterfalls.",
      highlights: ["Nuwara Eliya", "Tea Estates", "Waterfalls", "Train Ride"],
      price: "Contact for pricing"
    },
    {
      id: 11,
      title: "India Multi-City Cultural Tour",
      duration: "16 Days",
      destination: "India",
      type: "Culture",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Comprehensive journey covering multiple cities showcasing India's diverse culture.",
      highlights: ["Delhi", "Agra", "Jaipur", "Varanasi", "Mumbai"],
      price: "Contact for pricing"
    },
    {
      id: 12,
      title: "Luxury Palace Hotels Experience",
      duration: "10 Days",
      destination: "India",
      type: "Luxury",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Stay in converted palace hotels and experience royal hospitality across Rajasthan.",
      highlights: ["Heritage Hotels", "Royal Dining", "Palace Tours", "Luxury Service"],
      price: "Contact for pricing"
    }
  ];

  const filteredTours = tours.filter(tour => {
    const durationMatch = filterDuration === 'all' ||
      (filterDuration === 'short' && parseInt(tour.duration) <= 7) ||
      (filterDuration === 'medium' && parseInt(tour.duration) > 7 && parseInt(tour.duration) <= 12) ||
      (filterDuration === 'long' && parseInt(tour.duration) > 12);

    const destinationMatch = filterDestination === 'all' || tour.destination === filterDestination;
    const typeMatch = filterType === 'all' || tour.type === filterType;

    return durationMatch && destinationMatch && typeMatch;
  });

  return (
    <div className="tours-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Tours</h1>
          <p className="text-xl md:text-2xl font-light">Discover Your Perfect Journey</p>
        </div>
      </section>

      <section className="filters py-8 bg-light-gray sticky top-20 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Duration</label>
              <select
                value={filterDuration}
                onChange={(e) => setFilterDuration(e.target.value)}
                className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (1-7 days)</option>
                <option value="medium">Medium (8-12 days)</option>
                <option value="long">Long (13+ days)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Destination</label>
              <select
                value={filterDestination}
                onChange={(e) => setFilterDestination(e.target.value)}
                className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="all">All Destinations</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
                <option value="Sri Lanka">Sri Lanka</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-navy mb-2">Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border border-navy/20 rounded-lg focus:outline-none focus:border-gold"
              >
                <option value="all">All Types</option>
                <option value="Luxury">Luxury</option>
                <option value="Culture">Culture</option>
                <option value="Adventure">Adventure</option>
                <option value="Wildlife">Wildlife</option>
                <option value="Spiritual">Spiritual</option>
                <option value="Beach">Beach</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600">
              Showing <span className="font-bold text-navy">{filteredTours.length}</span> of {tours.length} tours
            </p>
          </div>
        </div>
      </section>

      <section className="tours-grid py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTours.map((tour) => (
              <div key={tour.id} className="tour-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.destination}</span>
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-3">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-navy mb-2">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-light-gray text-navy px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gold font-bold">{tour.price}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/tour-detail"
                    className="block w-full text-center bg-navy text-white py-3 rounded-full hover:bg-navy/90 transition font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tours found matching your filters. Please try different criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="custom-tour py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in creating custom itineraries tailored to your preferences, interests, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919414295539?text=I'm interested in a custom tour"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Request Custom Tour
            </a>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
