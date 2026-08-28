// src/pages/News.jsx
import React from 'react';
export default function News() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-brand-darkBlue mb-4">School News & Announcements</h1>
      <p className="text-gray-500 text-sm">No news has been published yet.</p>
    </div>
  );
}

// src/pages/Events.jsx
export function EventsPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-brand-darkBlue mb-4">Upcoming Events</h1>
      <p className="text-gray-500 text-sm">No upcoming events at the moment.</p>
    </div>
  );
}

// src/pages/Gallery.jsx
export function GalleryPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-3xl font-bold text-brand-darkBlue mb-4">School Gallery</h1>
      <p className="text-gray-500 text-sm">School photos will appear here soon.</p>
    </div>
  );
}
