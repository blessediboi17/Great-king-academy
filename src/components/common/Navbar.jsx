import React, { useState } from 'react';
import { Link, useLocation } from 'react{...}'; // react-router-dom
import { Link as RouterLink } from 'react-router-dom';
import { Menu, X, Phone, Award } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'News', path: '/news' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Branding */}
          <RouterLink to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl border-2 border-brand-gold shadow-sm">
              GKA
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-tight text-brand-darkBlue group-hover:text-brand-blue transition-colors">
                GREAT KING ACADEMY
              </span>
              <span className="text-xs font-semibold text-brand-red tracking-wide">
                TECHNICAL & ACADEMIC INSTITUTE
              </span>
            </div>
          </RouterLink>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <RouterLink
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive(link.path)
                    ? 'text-brand-blue font-semibold border-b-2 border-brand-blue py-1'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </RouterLink>
            ))}
            <RouterLink
              to="/admissions"
              className="bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition-all hover:shadow"
            >
              Apply Now
            </RouterLink>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <RouterLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-blue-50 text-brand-blue font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </RouterLink>
          ))}
          <div className="pt-2">
            <RouterLink
              to="/admissions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-red text-white font-bold px-4 py-3 rounded-md uppercase tracking-wider text-sm shadow"
            >
              Apply Now
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
          }
