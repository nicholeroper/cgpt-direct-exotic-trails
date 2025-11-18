import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, Award, Shield, Heart, Users, Clock, CheckCircle } from 'lucide-react';

export default function Home() {
  const featuredTours = [
    {
      id: 1,
      title: "Delhi-Agra-Rajasthan Adventure",
      duration: "11 Days / 10 Nights",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Experience the majestic palaces, forts, and rich culture of Rajasthan combined with the iconic Taj Mahal.",
      destinations: ["Delhi", "Agra", "Jaipur", "Jodhpur", "Udaipur"]
    },
    {
      id: 2,
      title: "Golden Triangle Luxury Tour",
      duration: "7 Days / 6 Nights",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Discover India's most iconic destinations in luxury: Delhi, Agra, and Jaipur with premium accommodations.",
      destinations: ["Delhi", "Agra", "Jaipur"]
    },
    {
      id: 3,
      title: "Rajasthan Royal Heritage Trail",
      duration: "14 Days / 13 Nights",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Immerse yourself in the royal heritage of Rajasthan's most magnificent cities and desert landscapes.",
      destinations: ["Jaipur", "Pushkar", "Jodhpur", "Jaisalmer", "Udaipur"]
    },
    {
      id: 4,
      title: "North India Spiritual Journey",
      duration: "10 Days / 9 Nights",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A spiritual odyssey through India's sacred cities and temples along the holy Ganges.",
      destinations: ["Delhi", "Haridwar", "Rishikesh", "Varanasi"]
    },
    {
      id: 5,
      title: "Nepal Himalayan Experience",
      duration: "8 Days / 7 Nights",
      image: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Explore the breathtaking Himalayas, ancient temples, and vibrant culture of Nepal.",
      destinations: ["Kathmandu", "Pokhara", "Chitwan"]
    },
    {
      id: 6,
      title: "Sri Lanka Beaches & Culture",
      duration: "9 Days / 8 Nights",
      image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Discover pristine beaches, ancient temples, tea plantations, and wildlife in tropical Sri Lanka.",
      destinations: ["Colombo", "Kandy", "Ella", "Galle"]
    }
  ];

  const destinations = [
    {
      name: "India",
      image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: "Rajasthan, Golden Triangle, Himalayas, Spiritual Sites"
    },
    {
      name: "Nepal",
      image: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: "Kathmandu Valley, Pokhara, Chitwan National Park"
    },
    {
      name: "Sri Lanka",
      image: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: "Colombo, Kandy, Ella, Pristine Beaches"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      text: "Exotic Trails made our Rajasthan tour absolutely magical! Every detail was perfectly planned, and our guide was incredibly knowledgeable. The luxury accommodations exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Schmidt",
      country: "Germany",
      text: "An unforgettable experience! Mr. Shrimali and his team took care of everything. We felt safe, welcomed, and truly immersed in Indian culture. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Chen",
      country: "Australia",
      text: "The Golden Triangle tour was breathtaking. Professional service, beautiful hotels, and authentic experiences. Already planning our next trip with Exotic Trails!",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12 text-gold" />,
      title: "Handpicked Experiences",
      description: "Carefully curated journeys that showcase the best of each destination"
    },
    {
      icon: <Star className="w-12 h-12 text-gold" />,
      title: "Luxury Accommodations",
      description: "Premium hotels and heritage properties for your comfort"
    },
    {
      icon: <Heart className="w-12 h-12 text-gold" />,
      title: "Cultural Immersion",
      description: "Authentic local experiences beyond typical tourist paths"
    },
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: "Certified Guides",
      description: "Expert local guides with deep cultural knowledge"
    },
    {
      icon: <Phone className="w-12 h-12 text-gold" />,
      title: "24×7 WhatsApp Support",
      description: "Round-the-clock assistance throughout your journey"
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Safe & Hassle-Free",
      description: "Complete peace of mind with our safety-first approach"
    }
  ];

  const faqs = [
    {
      question: "Is India safe for foreign travelers?",
      answer: "Yes, India is safe for tourists when traveling with a reputable tour operator. We ensure all safety measures, vetted accommodations, and 24/7 support throughout your journey."
    },
    {
      question: "What is included in your tour packages?",
      answer: "Our tours typically include accommodations, transportation, guided tours, entrance fees, some meals, and 24/7 support. Specific inclusions vary by package."
    },
    {
      question: "Do I need a visa to visit India?",
      answer: "Most foreign nationals require a visa to enter India. We can guide you through the e-Visa application process, which is straightforward and can be done online."
    },
    {
      question: "Can you customize tours according to our preferences?",
      answer: "Absolutely! We specialize in creating tailor-made itineraries based on your interests, budget, and travel style."
    },
    {
      question: "What is the best time to visit Rajasthan?",
      answer: "October to March is ideal, with pleasant weather perfect for sightseeing. We can advise on the best time for your specific destinations."
    }
  ];

  return (
    <div className="home-page">
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Exotic Trails India"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Crafting Unforgettable Journeys
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light animate-fade-in-delay">
            Across India, Nepal & Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/tours"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition-all transform hover:scale-105"
            >
              Explore Tours
            </Link>
            <a
              href="https://wa.me/919414295539"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="quick-inquiry bg-gold py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 text-navy">
            <a href="tel:+919414295539" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+91 94142 95539</span>
            </a>
            <a href="https://wa.me/919414295539" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">WhatsApp Chat</span>
            </a>
            <a href="mailto:exotictours@example.com" className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">exotictours@example.com</span>
            </a>
          </div>
        </div>
      </section>

      <section className="about-mini py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Welcome to Exotic Trails</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Since 2020, Exotic Trails has been crafting extraordinary travel experiences for discerning international travelers. Founded by <strong>Mr. Upendra Shrimali</strong>, we specialize in immersive journeys through India, Nepal, and Sri Lanka that go beyond typical tourism.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in the historic city of Jodhpur, Rajasthan, we bring deep local knowledge, premium accommodations, and authentic cultural experiences to every journey we design.
              </p>
              <Link
                to="/about"
                className="inline-block bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Exotic Trails Founder"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-tours py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Signature Tours</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our carefully curated collection of premium travel experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="tour-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-3">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.destinations.slice(0, 3).map((dest, idx) => (
                      <span key={idx} className="text-xs bg-light-gray text-navy px-3 py-1 rounded-full">
                        {dest}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/tour-detail"
                    className="inline-block w-full text-center bg-navy text-white py-3 rounded-full hover:bg-navy/90 transition font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="destinations py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Explore Destinations</h2>
            <p className="text-gray-600 text-lg">Choose your dream destination</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {destinations.map((dest, idx) => (
              <Link
                key={idx}
                to="/destinations"
                className="destination-card group relative h-96 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/90">{dest.highlights}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose Exotic Trails</h2>
            <p className="text-white/80 text-lg">Experience the difference of traveling with experts</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="text-center p-6 hover:bg-white/5 rounded-lg transition">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Experience the Journey</h2>
            <p className="text-gray-600 text-lg">Watch highlights from our tours</p>
          </div>

          <div className="max-w-4xl mx-auto aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Video Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="gallery-preview py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Gallery Highlights</h2>
            <p className="text-gray-600 text-lg">Moments captured from our journeys</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=400"
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-block bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="faq py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know before you travel</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Start Your Journey Today</h2>
              <p className="text-white/80 text-lg">Tell us about your dream trip and we'll make it happen</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-lg">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Phone</label>
                <input type="tel" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Travel Dates</label>
                <input type="text" placeholder="e.g., Dec 2025" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Number of Travelers</label>
                <input type="number" min="1" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Destination of Interest</label>
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none">
                  <option value="">Select Destination</option>
                  <option value="india">India</option>
                  <option value="nepal">Nepal</option>
                  <option value="srilanka">Sri Lanka</option>
                  <option value="multiple">Multiple Countries</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none"></textarea>
              </div>
              <div className="md:col-span-2 flex gap-4">
                <a
                  href="mailto:exotictours@example.com?subject=Travel Inquiry"
                  className="flex-1 bg-gold text-navy py-4 rounded-full text-center font-semibold hover:bg-gold/90 transition"
                >
                  Send via Email
                </a>
                <a
                  href="https://wa.me/919414295539?text=Hello, I'm interested in booking a tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm py-4 rounded-full text-center font-semibold hover:bg-white/20 transition border-2 border-white"
                >
                  Send via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
