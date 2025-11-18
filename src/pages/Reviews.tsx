import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      tour: "Delhi-Agra-Rajasthan Adventure",
      rating: 5,
      date: "November 2024",
      text: "Absolutely phenomenal experience! From the moment we landed to our final goodbye, everything was perfectly orchestrated. Mr. Shrimali personally ensured every detail was taken care of. Our guide was incredibly knowledgeable, the hotels were stunning, and the experiences were authentic. The Taj Mahal at sunrise was magical, and the palace hotels in Rajasthan made us feel like royalty. Cannot recommend Exotic Trails highly enough!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Michael Schmidt",
      country: "Germany",
      tour: "Golden Triangle Luxury Tour",
      rating: 5,
      date: "October 2024",
      text: "This was our first visit to India, and we couldn't have asked for a better experience. Exotic Trails made everything seamless and stress-free. The attention to detail was remarkable—from the luxury accommodations to the cultural experiences. Our guide spoke excellent English and brought history to life. The 24/7 WhatsApp support gave us peace of mind. We felt completely safe and welcomed throughout our journey.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Emily Chen",
      country: "Australia",
      tour: "Rajasthan Royal Heritage Trail",
      rating: 5,
      date: "September 2024",
      text: "What an incredible two weeks! Every city was more beautiful than the last. The team at Exotic Trails understands what international travelers need—comfortable beds, clean facilities, and authentic experiences. We loved the cooking class in Jaipur, the desert safari in Jaisalmer, and the boat ride in Udaipur. The quality of service exceeded our expectations. Already planning our next trip with them to Nepal!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "David Thompson",
      country: "Australia",
      tour: "North India Spiritual Journey",
      rating: 5,
      date: "March 2024",
      text: "A truly transformative journey. The spiritual sites of Varanasi, Haridwar, and Rishikesh were profound experiences made even more meaningful by our guide's insights. Exotic Trails balanced tourist comforts with authentic spiritual experiences perfectly. The sunrise boat ride on the Ganges in Varanasi is something I'll never forget. Professional, respectful, and deeply knowledgeable about Indian spirituality.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Sophie Martin",
      country: "France",
      tour: "Nepal Himalayan Experience",
      rating: 5,
      date: "April 2024",
      text: "Magnifique! Our Nepal tour was breathtaking in every sense. The mountain views, the temples, the warm Nepali hospitality—all perfectly curated by Exotic Trails. Despite some challenging treks, we always felt safe and supported. Our guide was patient, knowledgeable, and went above and beyond. The accommodation choices were excellent, especially in Pokhara with its stunning lake views. Merci, Exotic Trails!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "James Anderson",
      country: "United States",
      tour: "Sri Lanka Beaches & Culture",
      rating: 5,
      date: "February 2024",
      text: "Sri Lanka was on our bucket list for years, and Exotic Trails delivered beyond our expectations. The combination of ancient temples, tea plantations, wildlife safaris, and pristine beaches was perfect. Our driver was professional and friendly, and the itinerary had just the right balance of activities and relaxation time. The train ride to Ella was a highlight! Excellent value for money and outstanding service.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Isabella Rodriguez",
      country: "Spain",
      tour: "Golden Triangle Luxury Tour",
      rating: 5,
      date: "January 2024",
      text: "Increíble! We celebrated our 25th anniversary with this tour, and it was absolutely perfect. The romantic settings, the luxury hotels, the special touches—Exotic Trails made us feel so special. The Taj Mahal visit was arranged at the best time for photos, and our guide's stories made every monument come alive. Mr. Shrimali even arranged a surprise anniversary dinner at a rooftop restaurant in Jaipur. Unforgettable!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "William Brown",
      country: "Canada",
      tour: "Wildlife & Tiger Safari Tour",
      rating: 5,
      date: "December 2023",
      text: "As a wildlife photographer, I had high expectations, and Exotic Trails delivered spectacularly. We spotted tigers on three different safaris, along with leopards, sloth bears, and countless bird species. Our naturalist guide knew exactly where and when to find wildlife. The lodges were comfortable and eco-friendly. The team's knowledge of wildlife behavior and conservation was impressive. Highly recommended for nature lovers!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Anna Kowalski",
      country: "Poland",
      tour: "Kerala Backwaters & Culture",
      rating: 5,
      date: "November 2023",
      text: "Kerala exceeded all expectations! The houseboat experience was magical—floating through the backwaters, enjoying fresh local cuisine, and watching village life pass by. Exotic Trails chose wonderful properties and experiences. The Ayurvedic spa treatments, the tea plantation tour, and the Kathakali dance performance were all highlights. South India is different from the north, and Exotic Trails knows it intimately.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Robert Lee",
      country: "Singapore",
      tour: "Himalayan Adventure Trek",
      rating: 5,
      date: "October 2023",
      text: "An adventure of a lifetime! The trekking route was challenging but rewarding, with spectacular mountain views every day. Our guide and porters were experienced professionals who made us feel safe even on difficult trails. The mountain lodges were basic but clean and warm. Exotic Trails' preparation and guidance made this trek accessible for moderately fit travelers. The sunrise over the Himalayas—priceless!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Marie Dubois",
      country: "Belgium",
      tour: "India Multi-City Cultural Tour",
      rating: 5,
      date: "March 2024",
      text: "Three weeks exploring India's diversity was mind-blowing! From the chaos of Delhi to the spirituality of Varanasi, the beaches of Mumbai to the palaces of Rajasthan—each place offered something unique. Exotic Trails managed the complex logistics flawlessly. Trains, flights, hotels, guides—everything ran like clockwork. This comprehensive tour is perfect for first-time visitors who want to see it all. Excellent organization!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Thomas Anderson",
      country: "Sweden",
      tour: "Luxury Palace Hotels Experience",
      rating: 5,
      date: "February 2024",
      text: "Living like maharajas for ten days was a dream come true! The palace hotels were extraordinary—authentic heritage properties with modern amenities. Each palace had its own character and history. The staff treated us royally, the cuisine was exquisite, and the architecture was breathtaking. Exotic Trails knows these properties intimately and secured excellent rooms. Worth every penny for a once-in-a-lifetime experience!",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="reviews-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Testimonials"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Traveler Testimonials</h1>
          <p className="text-xl md:text-2xl font-light">Real Stories from Real Travelers</p>
        </div>
      </section>

      <section className="stats py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-navy mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>

              <div>
                <div className="text-5xl font-bold text-navy mb-2">{totalReviews}+</div>
                <p className="text-gray-600 mt-4">Verified Reviews</p>
              </div>

              <div>
                <div className="text-5xl font-bold text-navy mb-2">100%</div>
                <p className="text-gray-600 mt-4">Satisfied Travelers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">What Our Travelers Say</h2>
              <p className="text-lg text-gray-600">Read authentic reviews from travelers who experienced Exotic Trails</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition">
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy">{review.name}</h3>
                      <p className="text-gray-600 text-sm">{review.country}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-gold/20 flex-shrink-0" />
                  </div>

                  <div className="mb-4">
                    <p className="text-gold font-semibold text-sm mb-1">{review.tour}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed italic">"{review.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="review-platforms py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Find Us On</h2>
            <p className="text-lg text-gray-700 mb-8">
              See more reviews from our satisfied travelers on popular travel platforms
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-light-gray rounded-lg p-6 w-64">
                <div className="text-3xl font-bold text-navy mb-2">TripAdvisor</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600">5.0 / 5.0</p>
              </div>

              <div className="bg-light-gray rounded-lg p-6 w-64">
                <div className="text-3xl font-bold text-navy mb-2">Google Reviews</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600">4.9 / 5.0</p>
              </div>

              <div className="bg-light-gray rounded-lg p-6 w-64">
                <div className="text-3xl font-bold text-navy mb-2">Facebook</div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-600">5.0 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers and experience the magic of South Asia with Exotic Trails
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Browse Tours
            </a>
            <a
              href="https://wa.me/919414295539?text=I'm interested in booking a tour"
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
