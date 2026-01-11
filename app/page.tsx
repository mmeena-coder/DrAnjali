'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MapPin, Eye, User, Activity, Stethoscope, Star } from 'lucide-react';
import profile from '../public/images/doctor-image.jpeg';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(true);
  const [mapError, setMapError] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Add timeout to detect if map doesn't load
  useEffect(() => {
    if (mapLoaded) return;

    const timer = setTimeout(() => {
      if (!mapLoaded && !mapError) {
        setMapError(true); // mark timeout as error
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [mapLoaded, mapError]);



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-900">
                Dr. <span className="text-indigo-600">Anjali</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-600">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600">
                Contact
              </button>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition"
            >
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen
                ? <span className="text-indigo-900"><X /></span>
                : <span className="text-indigo-900"><Menu /></span>
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-indigo-600">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-indigo-600">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-indigo-600">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-indigo-600">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-indigo-600">
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-indigo-900 text-white px-6 py-2 rounded-full hover:bg-indigo-800 transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home" 
        className="pt-16 bg-gradient-to-r from-indigo-50 to-indigo-100 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(../../images/bg-main.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert Eye Care in Jaipur
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-6">
              Dr. Anjali Meena
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition text-lg"
              >
                Book Appointment
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-indigo-900 border-2 border-indigo-900 px-8 py-3 rounded-full hover:bg-indigo-50 transition text-lg"
              >
                Our Services
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/30 px-4 py-2 rounded-full shadow">
                MBBS, M.S (Ophthalmology)
              </span>
              <span className="bg-white/30 px-4 py-2 rounded-full shadow">
                Navit Eye & Uro Care Clinic
              </span>
              <span className="bg-white/30 px-4 py-2 rounded-full shadow">
                Comprehensive Eye Care
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Doctor Image Placeholder */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={profile}
                  alt="Dr. Anjali Meena - MBBS, M.S (Ophthalmology) | Best Eye Specialist in Jaipur, Rajasthan"
                  title="Dr. Anjali Meena -  MBBS, M.S (Ophthalmology)"
                  width={400}
                  height={400}
                  className="w-full h-200 object-cover rounded-2xl"
                  priority
                  loading="eager"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div>
              <h2 className="text-4xl font-bold text-indigo-900 mb-3">
                About Dr. Anjali Meena
              </h2>

              <div className="mb-6">
                <p className="text-indigo-900 font-semibold text-lg mb-2">
                  MBBS, M.S (Ophthalmology)
                </p>
                <p className="text-gray-700 font-medium mb-1">
                  Eye Specialist
                </p>
                <p className="text-gray-700 mb-4">
                  Navit Eye & Uro Care Clinic, Jaipur
                </p>
              </div>

              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Dr. <strong className="text-indigo-600 font-semibold">Anjali Meena</strong> is a dedicated and experienced 
                  <strong className="font-semibold"> ophthalmologist </strong>
                  providing comprehensive eye care services in Jaipur. With specialized expertise in 
                  <span> eye examinations</span>,
                  <span> cataract surgery</span>,
                  <span> glaucoma management</span>,
                  <span> diabetic retinopathy</span> and
                  <span> pediatric eye care</span>,
                  Dr. Anjali combines advanced diagnostic techniques with compassionate patient care to ensure the best outcomes for your vision and eye health.
                </p>
              </div>

              <blockquote className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-l-4 border-indigo-600 p-5 mb-8 rounded-r-lg shadow-sm">
                <p className="text-gray-800 italic font-medium">
                  "Your vision is precious. I'm committed to protecting it with expertise and care."
                </p>
              </blockquote>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
                  <p className="text-indigo-900 font-semibold">Patient-centered care</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
                  <p className="text-indigo-900 font-semibold">Advanced diagnostics</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
                  <p className="text-indigo-900 font-semibold">Evidence-based treatment</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow">
                  <p className="text-indigo-900 font-semibold">Complete confidentiality</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-indigo-900 mb-1">Clinic Address</p>
                    <p className="text-sm leading-relaxed">
                      C-108 Aanand Vihar, Railway Colony, Jagatpura, Jaipur, Rajasthan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-700">
                  <Activity className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-indigo-900 mb-1">Availability</p>
                    <p className="text-sm">
                      Monday - Saturday: 5:00 PM to 7:00 PM<br />
                      Sunday : 11:00 AM to 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Specialized Eye Care Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive eye examinations, accurate diagnoses, and effective treatment plans for all your vision needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Eye className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Comprehensive Eye Exams</h3>
              <p className="text-gray-600 mb-4">
                Complete vision testing, refraction, and eye health evaluation for adults and children.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Stethoscope className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Cataract Treatment</h3>
              <p className="text-gray-600 mb-4">
                Expert diagnosis and management of cataracts, including surgical consultation and post-operative care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <Activity className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Glaucoma Management</h3>
              <p className="text-gray-600 mb-4">
                Early detection, monitoring, and treatment of glaucoma to prevent vision loss.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <User className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Pediatric Eye Care</h3>
              <p className="text-gray-600 mb-4">
                Specialized care for children's vision development, lazy eye, and childhood eye conditions.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-indigo-900 mb-2">Expert diagnosis</h4>
              <p className="text-gray-600 text-sm">Advanced equipment for accurate eye assessments.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-indigo-900 mb-2">Personalized care</h4>
              <p className="text-gray-600 text-sm">Treatment plans tailored to your unique needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-indigo-900 mb-2">Diabetic eye care</h4>
              <p className="text-gray-600 text-sm">Specialized screening and management for diabetic patients.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-bold text-indigo-900 mb-2">Ongoing support</h4>
              <p className="text-gray-600 text-sm">Regular follow-ups and preventive care guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Patient Stories</h2>
            <p className="text-gray-600 text-lg">Hear from our satisfied patients about their experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Dr. Anjali's care and expertise during my cataract surgery was exceptional. My vision is crystal clear now!"
              </p>
              <p className="font-semibold text-indigo-900">— Rajesh K.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Very patient and thorough. She explained everything clearly and made me feel comfortable throughout."
              </p>
              <p className="font-semibold text-indigo-900">— Meera P.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "My daughter's lazy eye is improving significantly thanks to Dr. Anjali's treatment plan. Highly recommended!"
              </p>
              <p className="font-semibold text-indigo-900">— Kavita S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">Schedule your eye examination today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  Clinic Location
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Navit Eye & Uro Care Clinic<br />
                  C-108 Aanand Vihar, Railway Colony, Jagatpura<br />
                  Jaipur, Rajasthan
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  Contact Number
                </h3>
                
                <a
                  href="tel:+917023977633"
                  className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
                >
                  +91 89555 46788
                </a>

                <p className="text-gray-600 text-sm mb-4">Call for appointments and inquiries</p>

                <button
                  onClick={() => window.open('https://wa.me/8955546788?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Anjali%20Meena', '_blank')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </button>

                {/* <div className="mt-4 text-center text-gray-500 text-sm">
                  Available Monday - Saturday: 5:00 PM to 7:00 PM, <br /> Sunday: 11:00 AM to 1:00 PM
                </div> */}
              </div>
            </div>
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 relative">
              {mapLoaded ? (
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2116.8925977125778!2d75.84459547682742!3d26.834392244756025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzA0LjkiTiA3NcKwNTAnMzkuNCJF!5e0!3m2!1sen!2sin!4v1768122091620!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 +'px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapError(false)}
                    onError={() => {
                      setMapLoaded(false);
                      setMapError(true);
                    }}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center text-gray-600 p-6">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
                    <p className="font-semibold text-lg mb-2">C-108 Aanand Vihar</p>
                    <p className="mb-4">Railway Colony, Jagatpura, Jaipur</p>
                    
                    <a
                      href="https://maps.app.goo.gl/1oobMDaANLNKKiVG9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Dr<span className="text-indigo-400">Anjali</span>
              </h3>
              <p className="text-indigo-200">Expert Eye Care • Ophthalmology</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-indigo-200 hover:text-white">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-indigo-200 hover:text-white">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-indigo-200 hover:text-white">
                  Services
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-indigo-200 hover:text-white">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-indigo-200 hover:text-white">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-indigo-200">
                <p>Navit Eye & Uro Care Clinic</p>
                <p>C-108 Aanand Vihar, Railway Colony, Jagatpura, Jaipur</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Clinic Hours</h4>
              <div className="text-indigo-200">
                <p>Monday - Saturday</p>
                <p className="text-sm mt-2">By Appointment</p>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
            <p>© 2025 Dr. Anjali Meena. All rights reserved.</p>
            <div className="mt-2">
              <button className="text-indigo-200 hover:text-white mx-2">Privacy</button>
              <button className="text-indigo-200 hover:text-white mx-2">Terms</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}