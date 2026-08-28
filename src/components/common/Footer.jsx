import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-darkBlue text-white border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-brand-darkBlue flex items-center justify-center font-bold text-lg border-2 border-brand-gold">
                GKA
              </div>
              <span className="font-bold text-lg tracking-wide">GREAT KING ACADEMY</span>
            </div>
            <p className="text-xs text-blue-200 font-medium">A Technical and Academic Institute</p>
            <p className="text-sm italic text-brand-gold font-semibold">"TO BE GREAT... SERVE"</p>
            <p className="text-xs text-gray-300">Bible Reference: Luke 10:43-46</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-brand-gold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-brand-gold transition-colors">Academic & Vocational Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-brand-gold transition-colors">Admissions</Link></li>
              <li><Link to="/news" className="hover:text-brand-gold transition-colors">School News</Link></li>
              <li><Link to="/events" className="hover:text-brand-gold transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-semibold text-brand-gold mb-4 uppercase tracking-wider">Contact & Location</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>Peter's Farm, Unity Town Community, Johnsonville, Montserrado County, Monrovia, Liberia.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Phone / WhatsApp: Available upon request</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>info@greatkingacademy.edu.lr</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base font-semibold text-brand-gold mb-4 uppercase tracking-wider">Connect With Us</h3>
            <p className="text-sm text-gray-300 mb-4">Follow Great King Academy updates and events on social media.</p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider text-white transition-colors"
            >
              <Facebook className="w-4 h-4" /> Facebook Page
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-900/60 text-center text-xs text-gray-400">
          <p>© 2026 Great King Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
          }
