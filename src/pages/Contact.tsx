import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="hero-section relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/70"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light">Let's Plan Your Dream Journey</p>
        </div>
      </section>

      <section className="contact-info py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-6 bg-light-gray rounded-lg">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Address</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hotel Haveli<br />
                  (The Stepwell House)<br />
                  Makrana Mohalla<br />
                  Jodhpur, Rajasthan<br />
                  INDIA
                </p>
              </div>

              <div className="text-center p-6 bg-light-gray rounded-lg">
                <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Phone</h3>
                <a href="tel:+919414295539" className="text-gray-700 hover:text-gold transition block mb-2">
                  +91 94142 95539
                </a>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>

              <div className="text-center p-6 bg-light-gray rounded-lg">
                <MessageCircle className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">WhatsApp</h3>
                <a
                  href="https://wa.me/919414295539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gold transition block mb-2"
                >
                  +91 94142 95539
                </a>
                <p className="text-sm text-gray-600">Instant replies</p>
              </div>

              <div className="text-center p-6 bg-light-gray rounded-lg">
                <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-navy mb-3">Email</h3>
                <a href="mailto:exotictours@example.com" className="text-gray-700 hover:text-gold transition block mb-2">
                  exotictours@example.com
                </a>
                <p className="text-sm text-gray-600">We reply within 24 hours</p>
              </div>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Office Hours</h3>
                  <p className="text-gray-700 mb-1"><strong>Monday - Saturday:</strong> 9:00 AM - 8:00 PM IST</p>
                  <p className="text-gray-700 mb-1"><strong>Sunday:</strong> 10:00 AM - 6:00 PM IST</p>
                  <p className="text-gray-600 text-sm mt-2">24/7 WhatsApp support available for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-forms py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">Choose the form that best suits your needs</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">General Contact Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="mailto:exotictours@example.com?subject=General Inquiry"
                      className="flex-1 bg-navy text-white py-3 rounded-full text-center font-semibold hover:bg-navy/90 transition"
                    >
                      Send via Email
                    </a>
                    <a
                      href="https://wa.me/919414295539?text=Hello, I have an inquiry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gold text-navy py-3 rounded-full text-center font-semibold hover:bg-gold/90 transition"
                    >
                      Send via WhatsApp
                    </a>
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Quick Travel Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Preferred Destination *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold">
                      <option value="">Select destination</option>
                      <option value="india">India</option>
                      <option value="nepal">Nepal</option>
                      <option value="srilanka">Sri Lanka</option>
                      <option value="multiple">Multiple Countries</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy font-semibold mb-2">Travel Dates</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                        placeholder="e.g., Dec 2025"
                      />
                    </div>

                    <div>
                      <label className="block text-navy font-semibold mb-2">Travelers</label>
                      <input
                        type="number"
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Budget Range</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold">
                      <option value="">Select budget range</option>
                      <option value="standard">Standard (Comfortable)</option>
                      <option value="premium">Premium (4-star)</option>
                      <option value="luxury">Luxury (5-star)</option>
                      <option value="ultra">Ultra Luxury</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Additional Details</label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Any specific interests or requirements?"
                    ></textarea>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="mailto:exotictours@example.com?subject=Travel Inquiry"
                      className="flex-1 bg-navy text-white py-3 rounded-full text-center font-semibold hover:bg-navy/90 transition"
                    >
                      Email Inquiry
                    </a>
                    <a
                      href="https://wa.me/919414295539?text=I would like to inquire about a tour"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gold text-navy py-3 rounded-full text-center font-semibold hover:bg-gold/90 transition"
                    >
                      WhatsApp Inquiry
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="group-booking py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-navy mb-4">Group Booking Request</h2>
              <p className="text-lg text-gray-600">Special arrangements for groups of 8 or more travelers</p>
            </div>

            <div className="bg-light-gray rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Organization/Group Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Your organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Contact Person *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="Primary contact name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="contact@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Number of Travelers *</label>
                    <input
                      type="number"
                      min="8"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="e.g., 15"
                    />
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Preferred Month</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold">
                      <option value="">Select month</option>
                      <option value="jan">January</option>
                      <option value="feb">February</option>
                      <option value="mar">March</option>
                      <option value="apr">April</option>
                      <option value="may">May</option>
                      <option value="jun">June</option>
                      <option value="jul">July</option>
                      <option value="aug">August</option>
                      <option value="sep">September</option>
                      <option value="oct">October</option>
                      <option value="nov">November</option>
                      <option value="dec">December</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy font-semibold mb-2">Duration (Days)</label>
                    <input
                      type="number"
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                      placeholder="e.g., 10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Interested Destinations</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-5 h-5 text-gold focus:ring-gold" />
                      <span>India - Rajasthan</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-5 h-5 text-gold focus:ring-gold" />
                      <span>India - Golden Triangle</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-5 h-5 text-gold focus:ring-gold" />
                      <span>India - Spiritual Sites</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-5 h-5 text-gold focus:ring-gold" />
                      <span>Nepal</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-5 h-5 text-gold focus:ring-gold" />
                      <span>Sri Lanka</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Special Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
                    placeholder="Dietary restrictions, accessibility needs, special interests, etc."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <a
                    href="mailto:exotictours@example.com?subject=Group Booking Request"
                    className="flex-1 bg-navy text-white py-4 rounded-full text-center font-semibold hover:bg-navy/90 transition"
                  >
                    Submit via Email
                  </a>
                  <a
                    href="https://wa.me/919414295539?text=I would like to request a group booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gold text-navy py-4 rounded-full text-center font-semibold hover:bg-gold/90 transition"
                  >
                    Submit via WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-navy mb-8 text-center">Visit Our Office</h2>

            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Jodhpur Location"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Hotel Haveli (The Stepwell House)</h3>
                    <p className="text-gray-700 mb-1">Makrana Mohalla</p>
                    <p className="text-gray-700 mb-1">Jodhpur, Rajasthan</p>
                    <p className="text-gray-700 mb-4">INDIA</p>
                    <p className="text-gray-600 text-sm">
                      Located in the historic old city of Jodhpur, near the famous Mehrangarh Fort.
                      Easily accessible by taxi or auto-rickshaw from anywhere in the city.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
