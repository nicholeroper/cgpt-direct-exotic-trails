import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    { url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Taj Mahal, Agra" },
    { url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Rajasthan Palace" },
    { url: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Amber Fort, Jaipur" },
    { url: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Varanasi Ghats" },
    { url: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Himalayas, Nepal" },
    { url: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Mountain View" },
    { url: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Sri Lankan Beach" },
    { url: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Ella, Sri Lanka" },
    { url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Jodhpur Blue City" },
    { url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Hawa Mahal" },
    { url: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Temple Architecture" },
    { url: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Desert Safari" },
    { url: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Kathmandu Valley" },
    { url: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Prayer Flags" },
    { url: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Tropical Paradise" },
    { url: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Tea Plantations" },
    { url: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Udaipur Lake Palace" },
    { url: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Rajasthan Culture" },
    { url: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Spiritual India" },
    { url: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800", category: "india", title: "Royal Heritage" },
    { url: "https://images.pexels.com/photos/1384537/pexels-photo-1384537.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Mountain Monastery" },
    { url: "https://images.pexels.com/photos/1647012/pexels-photo-1647012.jpeg?auto=compress&cs=tinysrgb&w=800", category: "nepal", title: "Trekking Adventure" },
    { url: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Coastal Beauty" },
    { url: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800", category: "srilanka", title: "Hill Country" }
  ];

  const filteredImages = filter === 'all'
    ? images
    : images.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl md:text-2xl font-light">Moments Captured from Our Journeys</p>
        </div>
      </section>

      <section className="filter-bar py-8 bg-light-gray sticky top-20 z-30 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-navy hover:text-white'
              }`}
            >
              All Photos
            </button>
            <button
              onClick={() => setFilter('india')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'india'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-navy hover:text-white'
              }`}
            >
              India
            </button>
            <button
              onClick={() => setFilter('nepal')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'nepal'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-navy hover:text-white'
              }`}
            >
              Nepal
            </button>
            <button
              onClick={() => setFilter('srilanka')}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === 'srilanka'
                  ? 'bg-navy text-white'
                  : 'bg-white text-navy hover:bg-navy hover:text-white'
              }`}
            >
              Sri Lanka
            </button>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Showing {filteredImages.length} of {images.length} photos
          </p>
        </div>
      </section>

      <section className="gallery-grid py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="masonry-grid">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredImages.map((image, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="cta py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Want to Create Your Own Memories?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us on an unforgettable journey and capture your own amazing moments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tours"
              className="bg-gold text-navy px-8 py-4 rounded-full font-semibold hover:bg-gold/90 transition"
            >
              Explore Tours
            </a>
            <a
              href="https://wa.me/919414295539?text=I'm interested in booking a tour"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition border-2 border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
