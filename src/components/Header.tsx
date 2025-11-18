import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/tours', label: 'Tours' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/why-us', label: 'Why Us' },
    { path: '/reviews', label: 'Reviews' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-navy text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:+919414295539" className="flex items-center gap-2 hover:text-gold transition">
                <Phone className="w-4 h-4" />
                <span>+91 94142 95539</span>
              </a>
              <a href="mailto:exotictours@example.com" className="flex items-center gap-2 hover:text-gold transition">
                <Mail className="w-4 h-4" />
                <span>exotictours@example.com</span>
              </a>
            </div>
            <div className="text-center">
              <span>Based in Jodhpur, Rajasthan | Since 2020</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
              <span className="text-navy font-bold text-xl">ET</span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-navy">Exotic Trails</h1>
              <p className="text-xs text-gray-600">Crafting Unforgettable Journeys</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://wa.me/919414295539"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block bg-gold text-navy px-6 py-2 rounded-full font-semibold hover:bg-gold/90 transition"
          >
            WhatsApp
          </a>

          <button
            className="lg:hidden text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold py-2 transition-colors ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-navy hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919414295539"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-navy px-6 py-3 rounded-full font-semibold hover:bg-gold/90 transition text-center"
            >
              WhatsApp Chat
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
