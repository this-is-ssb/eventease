// src/pages/EventList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/bookings/events')
      .then(res => res.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map(event => (
          <div key={event._id} className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
            <Link to={`/book/${event._id}`} className="text-blue-600 mt-2 inline-block">
              Book Ticket →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
