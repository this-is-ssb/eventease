// src/pages/BookEvent.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BookEvent() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/bookings/events/${eventId}`)
      .then(res => res.json())
      .then(data => setEvent(data));
  }, [eventId]);

  const handleBooking = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/bookings/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ eventId, quantity }),
    });
    const result = await res.json();
    if (result.success) {
      alert('Booking successful!');
      navigate('/my-bookings');
    } else {
      alert('Booking failed');
    }
  };

  if (!event) return <p className="p-6">Loading event details...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="mb-4">{event.description}</p>
      <label className="block mb-2">Number of Tickets:</label>
      <input
        type="number"
        min="1"
        max="10"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="border px-3 py-1 mb-4 w-full"
      />
      <button onClick={handleBooking} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Confirm Booking
      </button>
    </div>
  );
}
