import { Award, Heart, Shield, Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Exotic Trails"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Exotic Trails</h1>
          <p className="text-xl md:text-2xl font-light">Crafting Journeys, Creating Memories</p>
        </div>
      </section>

      <section className="story-section py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-8 text-center">The Exotic Trails Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Founded in 2020 by <strong>Mr. Upendra Shrimali</strong>, Exotic Trails was born from a passion for showcasing the incredible beauty, culture, and heritage of India, Nepal, and Sri Lanka to travelers from around the world.
              </p>
              <p>
                What started as a vision to create meaningful travel experiences has grown into a trusted name in luxury tourism. Based in the heart of Rajasthan's blue city, Jodhpur, we bring authentic local knowledge combined with international hospitality standards.
              </p>
              <p>
                We believe that travel should be transformative. Every journey we design goes beyond sightseeing to create deep cultural connections, unforgettable moments, and stories that last a lifetime. Our commitment to excellence, safety, and personalized service has made us the preferred choice for discerning travelers seeking genuine experiences in South Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-section py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mr. Upendra Shrimali"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-navy mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-bold text-gold mb-4">Mr. Upendra Shrimali</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over a decade of experience in the travel and hospitality industry, Mr. Upendra Shrimali founded Exotic Trails with a vision to redefine luxury travel in South Asia.
                </p>
                <p>
                  Born and raised in Rajasthan, Mr. Shrimali grew up surrounded by the rich heritage and culture that makes India so captivating. His deep understanding of local traditions, combined with his experience working with international tourists, enables him to create journeys that are both authentic and comfortable for foreign travelers.
                </p>
                <p>
                  His personal commitment to every tour ensures that each traveler receives not just a trip, but a carefully curated experience that reflects the true spirit of the destinations we serve.
                </p>
                <p className="font-semibold text-navy">
                  "Travel is not just about visiting places; it's about understanding cultures, connecting with people, and creating memories that enrich our lives forever."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-light-gray rounded-lg">
              <Target className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create exceptional travel experiences that showcase the authentic beauty and culture of South Asia while ensuring the highest standards of safety, comfort, and personalized service.
              </p>
            </div>

            <div className="text-center p-8 bg-light-gray rounded-lg">
              <Globe className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and preferred luxury tour operator for international travelers exploring India, Nepal, and Sri Lanka, known for our commitment to excellence and authentic experiences.
              </p>
            </div>

            <div className="text-center p-8 bg-light-gray rounded-lg">
              <Heart className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-4">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Integrity, Excellence, Authenticity, Safety, Cultural Respect, and Sustainable Tourism. We believe in creating value for our travelers, partners, and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-foreign-travelers py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-8">Why We Serve Foreign Travelers</h2>
            <p className="text-xl leading-relaxed mb-6">
              We understand the unique needs and concerns of international visitors. From navigating cultural differences to ensuring dietary preferences and safety standards, we provide comprehensive support that makes traveling in South Asia comfortable and enjoyable.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
              Our team speaks multiple languages, understands Western expectations, and maintains 24/7 communication to ensure you always feel supported. We take pride in being the bridge between cultures, helping you discover the magic of South Asia with complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-safety py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-12 text-center">Safety & Trust Standards</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Verified Accommodations</h3>
                  <p className="text-gray-700">All hotels and accommodations are personally inspected and meet international safety and hygiene standards.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Licensed Guides</h3>
                  <p className="text-gray-700">Our guides are professionally trained, certified, and experienced in working with international tourists.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Safe Transportation</h3>
                  <p className="text-gray-700">Modern, well-maintained vehicles with professional drivers ensure safe and comfortable travel.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">24/7 Support</h3>
                  <p className="text-gray-700">Round-the-clock WhatsApp support ensures help is always available whenever you need it.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Insurance & Documentation</h3>
                  <p className="text-gray-700">Comprehensive travel insurance options and proper documentation support for visa and travel requirements.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Shield className="w-12 h-12 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Transparent Pricing</h3>
                  <p className="text-gray-700">No hidden costs. Clear, upfront pricing with detailed breakdowns of all inclusions and exclusions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="csr py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Community & Sustainability</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At Exotic Trails, we believe in responsible tourism that benefits local communities. We partner with local artisans, family-run businesses, and community tourism initiatives to ensure that travel creates positive impact.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our commitment to sustainable tourism means we minimize environmental impact, respect local cultures, and contribute to the economic development of the regions we operate in. When you travel with us, you're not just exploring beautiful destinations—you're supporting local livelihoods and preserving cultural heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="awards py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Award className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">Recognition & Achievements</h2>
            <p className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
              Since our founding in 2020, Exotic Trails has been recognized for excellence in service, customer satisfaction, and contribution to sustainable tourism. Our growing portfolio of satisfied international travelers and repeat customers is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-cta py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Ready to Explore with Us?</h2>
          <p className="text-xl mb-8">Let's create your perfect journey together</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919414295539"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Contact on WhatsApp
            </a>
            <a
              href="mailto:exotictours@example.com"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
