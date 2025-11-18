import { Award, Heart, Shield, Users, Star, Clock, Globe, HeartHandshake, BadgeCheck, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Award className="w-16 h-16 text-gold" />,
      title: "Expert Local Knowledge",
      description: "Founded and operated by Jodhpur native Mr. Upendra Shrimali, we bring authentic insider knowledge that only locals possess. Our deep understanding of culture, traditions, and hidden gems ensures experiences that go beyond typical tourist paths."
    },
    {
      icon: <Star className="w-16 h-16 text-gold" />,
      title: "Handpicked Experiences",
      description: "Every tour is carefully curated with attention to detail. We personally inspect all hotels, restaurants, and attractions to ensure they meet our high standards. No generic packages—only authentic, memorable experiences."
    },
    {
      icon: <HeartHandshake className="w-16 h-16 text-gold" />,
      title: "Personalized Service",
      description: "We treat every traveler as a guest in our home. From the moment you contact us until you return home, you receive personalized attention and care. Your preferences, interests, and comfort are our top priorities."
    },
    {
      icon: <Shield className="w-16 h-16 text-gold" />,
      title: "Safety First Approach",
      description: "Your safety is non-negotiable. We provide verified accommodations, licensed guides, insured vehicles, and 24/7 support. All our partners are thoroughly vetted for reliability and professionalism."
    },
    {
      icon: <Sparkles className="w-16 h-16 text-gold" />,
      title: "Luxury Accommodations",
      description: "Stay in premium and heritage hotels that combine comfort with character. From converted palace hotels to boutique properties, each accommodation is selected for its quality, location, and unique charm."
    },
    {
      icon: <Heart className="w-16 h-16 text-gold" />,
      title: "Cultural Immersion",
      description: "Experience authentic local culture through traditional meals, artisan workshops, cultural performances, and interactions with local communities. We create connections, not just sightseeing."
    },
    {
      icon: <BadgeCheck className="w-16 h-16 text-gold" />,
      title: "Certified Expert Guides",
      description: "Our guides are professionally trained, government-certified, and experienced with international tourists. They speak excellent English and are passionate storytellers who bring history and culture to life."
    },
    {
      icon: <Clock className="w-16 h-16 text-gold" />,
      title: "24/7 WhatsApp Support",
      description: "Round-the-clock assistance throughout your journey. Whether you need help, have questions, or want to adjust plans, we're always just a message away. Real human support, not automated responses."
    },
    {
      icon: <Globe className="w-16 h-16 text-gold" />,
      title: "Understanding Foreign Travelers",
      description: "We specialize in serving international guests and understand your unique needs—dietary preferences, comfort expectations, cultural differences, and language requirements. We bridge cultures seamlessly."
    },
    {
      icon: <Users className="w-16 h-16 text-gold" />,
      title: "Small Groups & Privacy",
      description: "We focus on private tours and small groups for intimate, flexible experiences. No rushing to keep up with large tour buses. Travel at your own pace with personalized attention."
    }
  ];

  const testimonials = [
    {
      name: "James Anderson",
      country: "United States",
      text: "Exotic Trails exceeded all our expectations! The attention to detail, the quality of accommodations, and especially our guide's knowledge made this trip unforgettable. We felt safe, cared for, and truly immersed in Indian culture.",
      rating: 5,
      tour: "Rajasthan Heritage Tour"
    },
    {
      name: "Sophie Martin",
      country: "France",
      text: "Mr. Shrimali and his team are exceptional. They handled every detail perfectly and were always available on WhatsApp. The hotels were stunning, and the experiences were authentic. I've recommended them to all my friends!",
      rating: 5,
      tour: "Golden Triangle Tour"
    },
    {
      name: "David Thompson",
      country: "Australia",
      text: "As first-time visitors to India, we were nervous, but Exotic Trails made everything seamless. Their local knowledge, professional service, and genuine hospitality made us feel like VIPs. Already planning our next trip with them!",
      rating: 5,
      tour: "North India Spiritual Journey"
    }
  ];

  return (
    <div className="why-us-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Why Choose Exotic Trails"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Why Choose Exotic Trails</h1>
          <p className="text-xl md:text-2xl font-light">Experience the Difference of Traveling with Experts</p>
        </div>
      </section>

      <section className="intro py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Since 2020, Exotic Trails has been the trusted choice for discerning travelers seeking authentic, luxurious, and safe experiences in India, Nepal, and Sri Lanka.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by Mr. Upendra Shrimali, a Jodhpur native with over a decade of experience in luxury tourism, we combine local expertise with international hospitality standards to create journeys that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="reasons py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-gray-600">Ten compelling reasons to travel with Exotic Trails</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-3">{reason.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-standards py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Our Luxury Standards</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Premium Accommodations</h3>
                <p className="text-gray-700">
                  Carefully selected 4-star and 5-star hotels, heritage properties, and boutique resorts. Every accommodation is personally inspected for quality, location, and service excellence.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Professional Team</h3>
                <p className="text-gray-700">
                  Licensed guides, experienced drivers, and dedicated support staff. All team members are trained in hospitality, safety protocols, and cultural sensitivity for international guests.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gold/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Safety & Comfort</h3>
                <p className="text-gray-700">
                  Modern air-conditioned vehicles, comprehensive insurance, verified partners, and 24/7 emergency support. Your safety and comfort are never compromised.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="commitment py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold mb-8 text-center">Our Commitment to You</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-white/90">No hidden costs or surprise charges. Every expense is clearly itemized upfront so you know exactly what you're paying for.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Flexible Customization</h3>
                  <p className="text-white/90">Every itinerary can be tailored to your preferences. Want to spend more time somewhere? Skip an activity? We adjust to suit you.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
                  <p className="text-white/90">We support local communities, partner with responsible suppliers, and minimize environmental impact while preserving cultural heritage.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Post-Trip Support</h3>
                  <p className="text-white/90">Our relationship doesn't end when your trip does. We stay in touch, help with travel photos, and assist with planning your next adventure.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real travelers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.country}</p>
                  <p className="text-gold text-sm mt-2">{testimonial.tour}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-navy mb-2">500+</div>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-navy mb-2">50+</div>
              <p className="text-gray-600">Tour Packages</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-navy mb-2">3</div>
              <p className="text-gray-600">Countries Covered</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-navy mb-2">5★</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Experience the Exotic Trails Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers who have discovered the magic of South Asia with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Explore Our Tours
            </a>
            <a
              href="https://wa.me/919414295539?text=I want to learn more about Exotic Trails"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
