import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy font-bold text-xl">ET</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Exotic Trails</h3>
                <p className="text-sm text-white/80">Since 2020</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Crafting unforgettable journeys across India, Nepal & Sri Lanka with personalized service and local expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-gold transition">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-gold transition">About Us</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Our Tours</Link></li>
              <li><Link to="/destinations" className="text-white/80 hover:text-gold transition">Destinations</Link></li>
              <li><Link to="/gallery" className="text-white/80 hover:text-gold transition">Gallery</Link></li>
              <li><Link to="/why-us" className="text-white/80 hover:text-gold transition">Why Choose Us</Link></li>
              <li><Link to="/reviews" className="text-white/80 hover:text-gold transition">Testimonials</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-gold transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Popular Tours</h4>
            <ul className="space-y-2">
              <li><Link to="/tour-detail" className="text-white/80 hover:text-gold transition">Delhi-Agra-Rajasthan Adventure</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Golden Triangle Tour</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Rajasthan Heritage Trail</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Spiritual India Journey</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Nepal Himalayan Experience</Link></li>
              <li><Link to="/tours" className="text-white/80 hover:text-gold transition">Sri Lanka Beach & Culture</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 leading-relaxed">
                    Hotel Haveli (The Stepwell House)<br />
                    Makrana Mohalla<br />
                    Jodhpur, Rajasthan<br />
                    INDIA
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+919414295539" className="text-white/80 hover:text-gold transition">
                  +91 94142 95539
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:exotictours@example.com" className="text-white/80 hover:text-gold transition">
                  exotictours@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2020-2025 Exotic Trails. All rights reserved. Founder: Mr. Upendra Shrimali</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition">Terms of Service</a>
              <a href="#" className="hover:text-gold transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
