// src/pages/MyBookings.jsx
import React, { useEffect, useState } from 'react';
import QRPass from '../components/QRPass';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/bookings/mine', {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="border p-4 rounded shadow">
              <h3 className="font-semibold">{booking.event.title}</h3>
              <p>Quantity: {booking.quantity}</p>
              <p>Status: {booking.status}</p>
              <QRPass bookingId={booking._id} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
