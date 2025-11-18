import { MapPin, Calendar, Camera, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Destinations() {
  const indiaDestinations = [
    {
      name: "Rajasthan",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The Land of Kings, known for magnificent forts, palaces, deserts, and rich cultural heritage.",
      highlights: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"],
      bestTime: "October to March",
      experiences: ["Palace Hotels", "Desert Safari", "Camel Rides", "Royal Forts", "Traditional Bazaars"]
    },
    {
      name: "Golden Triangle",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "India's most famous tourist circuit connecting Delhi, Agra, and Jaipur.",
      highlights: ["Delhi", "Agra", "Jaipur"],
      bestTime: "October to March",
      experiences: ["Taj Mahal", "Red Fort", "Amber Fort", "City Palace", "Mughal Architecture"]
    },
    {
      name: "North India",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "From spiritual Varanasi to the Himalayan foothills, experience diverse cultures and landscapes.",
      highlights: ["Varanasi", "Haridwar", "Rishikesh", "Delhi", "Amritsar"],
      bestTime: "September to April",
      experiences: ["Ganga Aarti", "Yoga & Meditation", "Temple Visits", "Golden Temple", "Spiritual Journey"]
    },
    {
      name: "Himalayas",
      image: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Breathtaking mountain landscapes, hill stations, and adventure opportunities.",
      highlights: ["Shimla", "Manali", "Dharamshala", "Leh", "Ladakh"],
      bestTime: "May to October",
      experiences: ["Mountain Trekking", "Monasteries", "Adventure Sports", "Scenic Valleys", "Buddhist Culture"]
    }
  ];

  const nepalDestinations = [
    {
      name: "Kathmandu Valley",
      image: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Ancient temples, stupas, and UNESCO World Heritage sites in Nepal's cultural heart.",
      highlights: ["Kathmandu", "Patan", "Bhaktapur"],
      bestTime: "October to December, March to May",
      experiences: ["Durbar Squares", "Swayambhunath", "Boudhanath", "Ancient Temples", "Newari Culture"]
    },
    {
      name: "Pokhara",
      image: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Gateway to the Annapurna region with stunning lake and mountain views.",
      highlights: ["Phewa Lake", "Peace Pagoda", "Sarangkot"],
      bestTime: "September to November, March to May",
      experiences: ["Lakeside Relaxation", "Sunrise Views", "Paragliding", "Boating", "Mountain Vistas"]
    },
    {
      name: "Chitwan",
      image: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Nepal's premier wildlife destination with jungle safaris and biodiversity.",
      highlights: ["Chitwan National Park"],
      bestTime: "October to March",
      experiences: ["Jungle Safari", "Elephant Rides", "Wildlife Spotting", "Canoe Rides", "Cultural Programs"]
    }
  ];

  const sriLankaDestinations = [
    {
      name: "Colombo",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Sri Lanka's vibrant capital blending colonial charm with modern dynamism.",
      highlights: ["Galle Face Green", "Gangaramaya Temple", "Fort District"],
      bestTime: "January to March",
      experiences: ["City Tours", "Shopping", "Colonial Architecture", "Beach Walks", "Local Markets"]
    },
    {
      name: "Kandy",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "The cultural capital of Sri Lanka, home to the sacred Temple of the Tooth.",
      highlights: ["Temple of Tooth", "Royal Botanical Gardens", "Kandy Lake"],
      bestTime: "December to April",
      experiences: ["Temple Visits", "Cultural Shows", "Tea Plantations", "Botanical Gardens", "Hill Country"]
    },
    {
      name: "Ella",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Picturesque hill country town famous for tea estates and stunning views.",
      highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls"],
      bestTime: "December to March",
      experiences: ["Train Rides", "Hiking", "Tea Tasting", "Waterfalls", "Scenic Views"]
    },
    {
      name: "Galle & Beaches",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Historic Galle Fort and pristine beaches along the southern coast.",
      highlights: ["Galle Fort", "Unawatuna", "Mirissa", "Hikkaduwa"],
      bestTime: "December to March",
      experiences: ["Beach Relaxation", "Fort Exploration", "Whale Watching", "Snorkeling", "Coastal Cuisine"]
    }
  ];

  return (
    <div className="destinations-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Destinations</h1>
          <p className="text-xl md:text-2xl font-light">Explore the Wonders of South Asia</p>
        </div>
      </section>

      <section className="intro py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover the incredible diversity of India, Nepal, and Sri Lanka. From the majestic Himalayas to tropical beaches,
              ancient temples to modern cities, royal palaces to vibrant bazaars—each destination offers unique experiences
              that will leave you with unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      <section className="india-section py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">India</h2>
            <p className="text-lg text-gray-600">Land of Diversity, Heritage, and Spirituality</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {indiaDestinations.map((dest, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{dest.name}</h3>
                  <p className="text-gray-700 mb-4">{dest.description}</p>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold" />
                      Key Destinations:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((highlight, i) => (
                        <span key={i} className="bg-light-gray text-navy px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gold" />
                      Best Time to Visit:
                    </p>
                    <p className="text-gray-700">{dest.bestTime}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-gold" />
                      Experiences:
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      {dest.experiences.map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/tours"
                    className="inline-block w-full text-center bg-navy text-white py-3 rounded-full hover:bg-navy/90 transition font-semibold"
                  >
                    View Tours
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nepal-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Nepal</h2>
            <p className="text-lg text-gray-600">Home of the Himalayas and Ancient Temples</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nepalDestinations.map((dest, idx) => (
              <div key={idx} className="bg-light-gray rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{dest.name}</h3>
                  <p className="text-gray-700 mb-4">{dest.description}</p>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold" />
                      Highlights:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((highlight, i) => (
                        <span key={i} className="bg-white text-navy px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gold" />
                      Best Time:
                    </p>
                    <p className="text-gray-700 text-sm">{dest.bestTime}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2">Top Experiences:</p>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      {dest.experiences.slice(0, 3).map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/tours"
                    className="inline-block w-full text-center bg-navy text-white py-3 rounded-full hover:bg-navy/90 transition font-semibold"
                  >
                    Explore Tours
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="srilanka-section py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Sri Lanka</h2>
            <p className="text-lg text-gray-600">The Pearl of the Indian Ocean</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sriLankaDestinations.map((dest, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <div className="h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{dest.name}</h3>
                  <p className="text-gray-700 mb-4">{dest.description}</p>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold" />
                      Key Places:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dest.highlights.map((highlight, i) => (
                        <span key={i} className="bg-light-gray text-navy px-3 py-1 rounded-full text-sm">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gold" />
                      Best Time to Visit:
                    </p>
                    <p className="text-gray-700">{dest.bestTime}</p>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold text-navy mb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5 text-gold" />
                      What to Do:
                    </p>
                    <ul className="text-gray-700 space-y-1">
                      {dest.experiences.map((exp, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/tours"
                    className="inline-block w-full text-center bg-navy text-white py-3 rounded-full hover:bg-navy/90 transition font-semibold"
                  >
                    Discover Tours
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <Mountain className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Explore These Destinations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create a personalized itinerary that brings your travel dreams to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/tours"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Browse All Tours
            </Link>
            <a
              href="https://wa.me/919414295539?text=I'm interested in exploring destinations"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
