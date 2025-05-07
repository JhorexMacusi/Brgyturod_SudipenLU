import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

// Define the structure of a post
interface Post {
  id: number;
  title: string;
  content: string;
  type: string;
  image?: string; // Optional field
  created_at: string;
}

export default function BulletinBoard({ posts }: { posts: Post[] }) {
  // Group posts by type
  const groupedPosts = posts.reduce((acc: Record<string, Post[]>, post: Post) => {
    if (!acc[post.type]) {
      acc[post.type] = [];
    }
    acc[post.type].push(post);
    return acc;
  }, {});

  // State for modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // State for hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white text-gray-800">
      {/* Header */}
      <header className="bg-white/70 backdrop-blur-md text-green-900 p-6 fixed top-0 left-0 w-full z-50 shadow-md">
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
                  Officials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="h-24" />

      {/* Bulletin Board Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
            📌 <span className="underline decoration-green-500">Bulletin Board</span>
          </h2>

          {Object.keys(groupedPosts).length > 0 ? (
            Object.entries(groupedPosts).map(([type, posts]) => (
              <div key={type} className="mb-10">
                <h3 className="text-3xl font-semibold text-green-900 mb-6 capitalize">{type}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all">
                      <h4 className="text-xl font-semibold text-green-900 mb-2">{post.title}</h4>
                      {post.image && (
                        <img
                          src={`/storage/${post.image}`}
                          alt={post.title}
                          className="w-auto h-auto object-cover rounded mb-4 cursor-pointer"
                          onClick={() => setSelectedImage(`/storage/${post.image}`)} // Open modal on click
                        />
                      )}
                      <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
                      <p className="text-sm text-gray-500 text-right">
                        🕒 {new Date(post.created_at).toLocaleString()}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 italic">No posts available at the moment.</p>
          )}
        </div>
      </section>

      {/* Modal for Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded" />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-green-100 text-green-900 py-6 mt-10 border-t border-green-200">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          &copy; 2025 Barangay Turod. All rights reserved.
        </div>
      </footer>
    </div>
  );
}