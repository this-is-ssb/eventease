// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/bookings/pending', {
      headers: { Authorization: token }
    })
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const handleApprove = async (id) => {
    const token = localStorage.getItem('token');
    await fetch(`/api/bookings/approve/${id}`, {
      method: 'POST',
      headers: { Authorization: token }
    });
    setBookings(bookings.filter(b => b._id !== id));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard - Pending Approvals</h2>
      {bookings.length === 0 ? (
        <p>All bookings approved.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map(booking => (
            <div key={booking._id} className="border p-4 rounded shadow flex justify-between items-center">
              <div>
                <p><strong>{booking.event.title}</strong> - {booking.quantity} ticket(s)</p>
                <p>By: {booking.user.email}</p>
              </div>
              <button
                onClick={() => handleApprove(booking._id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
