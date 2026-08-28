import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AnnouncementBar from './components/common/AnnouncementBar';
import MobileBottomNav from './components/common/MobileBottomNav';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import News from './pages/News';
import { EventsPage, GalleryPage } from './pages/News';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between pb-12 xl:pb-0">
        <div>
          <AnnouncementBar />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
        <MobileBottomNav />
      </div>
    </Router>
  );
}
