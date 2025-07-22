// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to Event Ease!</h1>
      <p className="mb-6 text-lg">Your all-in-one college fest ticketing system.</p>
      <Link to="/events" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
        View Events
      </Link>
    </div>
  );
}
