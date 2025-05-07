import React from 'react';
import { Link } from '@inertiajs/react';

export default function Officials() {
  const barangayOfficials = {
    captain: {
      name: 'Juan Dela Cruz',
      role: 'Barangay Captain',
      photo: '/images/officials/juan.jpg',
    },
    kagawads: [
      { name: 'Pedro Reyes', role: 'Kagawad', photo: '/images/officials/pedro.jpg' },
      { name: 'Maria Santos', role: 'Kagawad', photo: '/images/officials/maria.jpg' },
      { name: 'Jose Cruz', role: 'Kagawad', photo: '/images/officials/jose.jpg' },
      { name: 'Ana Lopez', role: 'Kagawad', photo: '/images/officials/ana.jpg' },
      { name: 'Luis Gomez', role: 'Kagawad', photo: '/images/officials/luis.jpg' },
      { name: 'Carmen Diaz', role: 'Kagawad', photo: '/images/officials/carmen.jpg' },
      { name: 'Ramon Torres', role: 'Kagawad', photo: '/images/officials/ramon.jpg' },
      { name: 'Elena Cruz', role: 'Kagawad', photo: '/images/officials/elena.jpg' },
    ],
  };

  const skOfficials = {
    chairperson: {
      name: 'Maria Santos',
      role: 'SK Chairperson',
      photo: '/images/officials/maria.jpg',
    },
    kagawads: [
      { name: 'SK Kagawad 1', role: 'SK Kagawad', photo: '/images/officials/sk1.jpg' },
      { name: 'SK Kagawad 2', role: 'SK Kagawad', photo: '/images/officials/sk2.jpg' },
      { name: 'SK Kagawad 3', role: 'SK Kagawad', photo: '/images/officials/sk3.jpg' },
      { name: 'SK Kagawad 4', role: 'SK Kagawad', photo: '/images/officials/sk4.jpg' },
      { name: 'SK Kagawad 5', role: 'SK Kagawad', photo: '/images/officials/sk5.jpg' },
      { name: 'SK Kagawad 6', role: 'SK Kagawad', photo: '/images/officials/sk6.jpg' },
      { name: 'SK Kagawad 7', role: 'SK Kagawad', photo: '/images/officials/sk7.jpg' },
      { name: 'SK Kagawad 8', role: 'SK Kagawad', photo: '/images/officials/sk8.jpg' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Barangay Officials</h1>
          <Link href="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Barangay Officials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Barangay Officials
          </h2>

          {/* Barangay Captain */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={barangayOfficials.captain.photo}
              alt={barangayOfficials.captain.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{barangayOfficials.captain.name}</h3>
            <p className="text-gray-600">{barangayOfficials.captain.role}</p>
          </div>

          {/* Kagawads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {barangayOfficials.kagawads.map((kagawad, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={kagawad.photo}
                  alt={kagawad.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">{kagawad.name}</h3>
                <p className="text-gray-600">{kagawad.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SK Officials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            SK Officials
          </h2>

          {/* SK Chairperson */}
          <div className="flex flex-col items-center mb-12">
            <img
              src={skOfficials.chairperson.photo}
              alt={skOfficials.chairperson.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{skOfficials.chairperson.name}</h3>
            <p className="text-gray-600">{skOfficials.chairperson.role}</p>
          </div>

          {/* SK Kagawads */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skOfficials.kagawads.map((kagawad, index) => (
              <div
                key={index}
                className="bg-green-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={kagawad.photo}
                  alt={kagawad.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">{kagawad.name}</h3>
                <p className="text-gray-600">{kagawad.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Brgy Turod. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}