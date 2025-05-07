import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Welcome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-transparent text-green-900 p-6 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Barangay Turod</h1>
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-green-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-green-900 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/bulletin-board"
                  className="block px-4 py-2 text-green-900 hover:underline"
                >
                  Bulletin Board
                </Link>
              </li>

              <li>
                <Link
                  href="/officials"
                  className="block px-4 py-2 text-green-900 hover:underline"
                >
                  Barangay Officials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="h-24 bg-green-100"></section>

      {/* Hero Section */}
      <section id="home" className="h-screen bg-fixed bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/turod.jpg')" }}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Brgy Turod</h1>
            <p className="text-lg mb-6">Serving our community with pride and unity.</p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center gap-12">
            {/* Vision Box */}
            <div className="flex flex-col items-center justify-center w-64 h-64 border-4 border-gray-800 rounded-lg bg-green-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
              <p className="text-center text-gray-600 text-base px-6 mt-4">
                Our vision is to create a vibrant and thriving community.
              </p>
            </div>

            {/* Mission Box */}
            <div className="flex flex-col items-center justify-center w-64 h-64 border-4 border-gray-800 rounded-lg bg-green-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800">Mission</h2>
              <p className="text-center text-gray-600 text-base px-6 mt-4">
                Our mission is to serve and uplift the lives of our residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
            <p className="text-gray-600 mt-2">Visit us at Brgy Turod, Sudipen, La Union</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Google Map Embed */}
            <div className="w-full lg:w-2/3 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15465.79256886026!2d120.4644461!3d16.8959219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e6415db3cf3b%3A0xd51ac867ee321182!2sTurod%2C%20Sudipen%2C%20La%20Union!5e0!3m2!1sen!2sph!4v1681234567890!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3 bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-2"><strong>Address:</strong> Brgy Turod, Sudipen, La Union</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +63 912 345 6789</p>
              <p className="text-gray-600"><strong>Email:</strong> info@brgyturod.ph</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-100 text-green-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Brgy Turod. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}