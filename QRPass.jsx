// src/components/QRPass.jsx
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRPass({ bookingId }) {
  return (
    <div className="mt-2">
      <p className="text-sm text-gray-500">Your Pass:</p>
      <QRCodeCanvas value={bookingId} size={100} />
    </div>
  );
}
