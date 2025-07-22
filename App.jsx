import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventList from './pages/EventList';
import BookEvent from './pages/BookEvent';
import MyBookings from './pages/MyBookings';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <nav className="bg-indigo-600 text-white p-4 flex gap-4 justify-center">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/my-bookings">My Bookings</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/book/:id" element={<BookEvent />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
