import { Calendar, Users, MapPin, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';

export default function TourDetail() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Delhi",
      description: "Welcome to India! Upon arrival at Indira Gandhi International Airport, our representative will greet you and transfer you to your luxury hotel. Rest and recover from your journey. In the evening, enjoy a welcome dinner at the hotel. Overnight in Delhi."
    },
    {
      day: 2,
      title: "Delhi Sightseeing",
      description: "After breakfast, embark on a full-day tour of Delhi. Visit the historic Red Fort, Jama Masjid (India's largest mosque), Raj Ghat (Mahatma Gandhi Memorial), India Gate, President House, and Qutub Minar. Drive past Parliament House and Government Buildings. Experience the vibrant streets of Chandni Chowk with a rickshaw ride. Overnight in Delhi."
    },
    {
      day: 3,
      title: "Delhi to Agra",
      description: "After breakfast, drive to Agra (approximately 4 hours). Check into your hotel. In the afternoon, visit the magnificent Agra Fort, a UNESCO World Heritage site. In the evening, enjoy sunset views of the Taj Mahal from Mehtab Bagh (Moon Garden). Overnight in Agra."
    },
    {
      day: 4,
      title: "Agra to Jaipur via Fatehpur Sikri",
      description: "Wake up early to witness the breathtaking sunrise at the Taj Mahal. Return to hotel for breakfast. Check out and drive to Jaipur, stopping at Fatehpur Sikri, the abandoned Mughal city. Visit its stunning palaces and courtyards. Continue to Jaipur, the Pink City. Check into your heritage hotel. Overnight in Jaipur."
    },
    {
      day: 5,
      title: "Jaipur Sightseeing",
      description: "After breakfast, visit the magnificent Amber Fort with an elephant or jeep ride to the fort entrance. Explore the City Palace, Jantar Mantar (astronomical observatory), and the iconic Hawa Mahal (Palace of Winds). In the evening, explore the colorful local bazaars. Optional: attend a traditional Rajasthani cultural show with dinner. Overnight in Jaipur."
    },
    {
      day: 6,
      title: "Jaipur to Pushkar",
      description: "After breakfast, drive to the sacred town of Pushkar (approximately 3 hours). Visit the holy Pushkar Lake and the famous Brahma Temple. Explore the vibrant bazaars and experience the spiritual atmosphere. Witness the evening aarti ceremony at the ghats. Overnight in Pushkar."
    },
    {
      day: 7,
      title: "Pushkar to Jodhpur",
      description: "After breakfast, drive to Jodhpur, the Blue City (approximately 4 hours). Check into your heritage hotel. In the afternoon, visit the magnificent Mehrangarh Fort, one of India's largest and most impressive forts. Explore Jaswant Thada, a beautiful marble memorial. In the evening, walk through the blue-painted old city streets. Overnight in Jodhpur."
    },
    {
      day: 8,
      title: "Jodhpur to Udaipur",
      description: "After breakfast, drive to Udaipur (approximately 5 hours), passing through the scenic Aravalli hills. En route, visit the stunning Ranakpur Jain Temples, famous for their intricate marble architecture. Continue to Udaipur, the City of Lakes. Check into your hotel. Evening at leisure. Overnight in Udaipur."
    },
    {
      day: 9,
      title: "Udaipur Sightseeing",
      description: "After breakfast, enjoy a full day exploring Udaipur. Visit the magnificent City Palace complex overlooking Lake Pichola, Jagdish Temple, Saheliyon ki Bari (Garden of Maidens), and the Folk Art Museum. In the evening, enjoy a romantic boat ride on Lake Pichola, viewing the Lake Palace and Jag Mandir. Overnight in Udaipur."
    },
    {
      day: 10,
      title: "Udaipur Leisure Day",
      description: "Enjoy a leisurely day in Udaipur. Optional activities include visiting the vintage car museum, taking a cooking class, exploring local markets, or enjoying spa treatments at your hotel. Evening free to enjoy Udaipur's ambiance. Optional: dinner at a rooftop restaurant with lake views. Overnight in Udaipur."
    },
    {
      day: 11,
      title: "Departure from Udaipur",
      description: "After breakfast, check out from the hotel. Depending on your flight schedule, transfer to Udaipur Airport for your onward journey. Tour ends with wonderful memories of your Rajasthan adventure."
    }
  ];

  const inclusions = [
    "Accommodation in premium/luxury hotels as specified",
    "Daily breakfast at hotels",
    "Private air-conditioned vehicle for all transfers and sightseeing",
    "Professional English-speaking guide throughout the tour",
    "All monument entrance fees and camera charges",
    "Elephant/jeep ride at Amber Fort",
    "Boat ride on Lake Pichola, Udaipur",
    "Rickshaw ride in Old Delhi",
    "Welcome and farewell dinners",
    "All applicable taxes and service charges",
    "24/7 WhatsApp support during the tour"
  ];

  const exclusions = [
    "International/domestic airfare",
    "Visa fees and travel insurance",
    "Lunch and dinner (except where specified)",
    "Personal expenses (laundry, telephone, tips, etc.)",
    "Optional activities and services",
    "Camera/video fees where applicable",
    "Any meals not mentioned in inclusions",
    "Anything not mentioned in inclusions"
  ];

  const hotels = [
    { city: "Delhi", hotel: "The Leela Palace or similar (5-star luxury)" },
    { city: "Agra", hotel: "The Oberoi Amarvilas or similar (5-star luxury)" },
    { city: "Jaipur", hotel: "Taj Rambagh Palace or similar (Heritage 5-star)" },
    { city: "Pushkar", hotel: "Ananta Spa & Resort or similar (4-star)" },
    { city: "Jodhpur", hotel: "Umaid Bhawan Palace or similar (Heritage 5-star)" },
    { city: "Udaipur", hotel: "The Oberoi Udaivilas or similar (5-star luxury)" }
  ];

  const relatedTours = [
    {
      title: "Golden Triangle Luxury Tour",
      duration: "7 Days",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Rajasthan Royal Heritage Trail",
      duration: "14 Days",
      image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "North India Spiritual Journey",
      duration: "10 Days",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="tour-detail-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Delhi-Agra-Rajasthan Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Delhi-Agra-Rajasthan Adventure</h1>
          <p className="text-xl md:text-2xl font-light">11 Days / 10 Nights of Royal Splendor</p>
        </div>
      </section>

      <section className="quick-facts py-8 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold text-navy">11 Days / 10 Nights</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm text-gray-600">Destinations</p>
                <p className="font-bold text-navy">6 Cities</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-gold" />
              <div>
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-bold text-navy">Private Tour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tour-overview py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Tour Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Embark on an unforgettable journey through the heart of India's most iconic destinations. This carefully curated 11-day tour takes you from the bustling capital of Delhi to the romantic city of Udaipur, covering the magnificent Taj Mahal and the royal cities of Rajasthan.
              </p>
              <p className="leading-relaxed mb-4">
                Experience the perfect blend of history, culture, architecture, and luxury as you explore majestic forts, opulent palaces, sacred temples, and vibrant bazaars. Stay in premium heritage hotels, enjoy authentic Rajasthani cuisine, and immerse yourself in the rich traditions of India's most colorful state.
              </p>
              <p className="leading-relaxed">
                This tour is ideal for travelers seeking a comprehensive introduction to India's cultural heritage with the comfort and safety of private transportation, expert guides, and carefully selected accommodations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="itinerary py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Detailed Itinerary</h2>

            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                      <span className="text-navy font-bold text-xl">Day {day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-navy mb-3">{day.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{day.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hotels py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Accommodation</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {hotels.map((hotel, idx) => (
                <div key={idx} className="bg-light-gray rounded-lg p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{hotel.city}</h3>
                  <p className="text-gray-700">{hotel.hotel}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gold/10 rounded-lg border-l-4 border-gold">
              <p className="text-gray-700">
                <strong>Note:</strong> Hotels are subject to availability. If the mentioned hotels are not available, we will provide similar category accommodations ensuring the same level of comfort and luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="inclusions-exclusions py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-serif font-bold text-navy mb-6">Inclusions</h2>
                <ul className="space-y-3">
                  {inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-serif font-bold text-navy mb-6">Exclusions</h2>
                <ul className="space-y-3">
                  {exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Tour Map</h2>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Tour Route Map Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              Route: Delhi → Agra → Jaipur → Pushkar → Jodhpur → Udaipur
            </p>
          </div>
        </div>
      </section>

      <section className="gallery py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Tour Gallery</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400",
                "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400"
              ].map((img, idx) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="price-request py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Request Tour Price</h2>
              <p className="text-xl text-white/90">Get a personalized quote for your travel dates and group size</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm p-8 rounded-lg">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Phone</label>
                <input type="tel" required className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Preferred Travel Date</label>
                <input type="text" placeholder="e.g., December 2025" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Number of Travelers</label>
                <input type="number" min="1" className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Accommodation Preference</label>
                <select className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white">
                  <option value="luxury">Luxury (5-star)</option>
                  <option value="premium">Premium (4-star)</option>
                  <option value="standard">Standard (3-star)</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">Special Requirements / Questions</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 focus:border-gold focus:outline-none text-white"></textarea>
              </div>
              <div className="md:col-span-2 flex gap-4">
                <a
                  href="mailto:exotictours@example.com?subject=Price Request for Delhi-Agra-Rajasthan Tour"
                  className="flex-1 bg-gold text-navy py-4 rounded-full text-center font-semibold hover:bg-gold/90 transition"
                >
                  <Mail className="inline-block w-5 h-5 mr-2" />
                  Email Request
                </a>
                <a
                  href="https://wa.me/919414295539?text=I would like a price quote for the Delhi-Agra-Rajasthan Adventure tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 backdrop-blur-sm py-4 rounded-full text-center font-semibold hover:bg-white/20 transition border-2 border-white"
                >
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  WhatsApp Request
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="faq py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  Can this tour be customized?
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700">Yes, absolutely! We can customize this tour according to your preferences, including adding or removing destinations, changing accommodation categories, and adjusting the pace.</p>
              </details>

              <details className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  What is the best time to take this tour?
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700">October to March is the ideal time, with pleasant weather perfect for sightseeing. Peak season is November to February.</p>
              </details>

              <details className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  Is this tour suitable for families?
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700">Yes, this is a family-friendly tour with comfortable pace and accommodations suitable for all ages.</p>
              </details>

              <details className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  What type of vehicle is provided?
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700">Private air-conditioned vehicle with professional driver based on group size (sedan, SUV, or minibus).</p>
              </details>

              <details className="group bg-light-gray rounded-lg p-6 shadow hover:shadow-lg transition">
                <summary className="font-bold text-navy cursor-pointer flex justify-between items-center">
                  Are vegetarian meals available?
                  <span className="ml-4 text-gold">+</span>
                </summary>
                <p className="mt-4 text-gray-700">Yes, India offers excellent vegetarian cuisine. All dietary requirements can be accommodated with advance notice.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="related-tours py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">You May Also Like</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedTours.map((tour, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">{tour.title}</h3>
                    <p className="text-gold font-semibold mb-4">{tour.duration}</p>
                    <a href="/tour-detail" className="text-navy font-semibold hover:text-gold transition">
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
