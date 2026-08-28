import React from 'react';
import { Phone, MessageSquare, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 shadow-lg flex items-center justify-around xl:hidden z-40">
      <a
        href="tel:+231000000000"
        className="flex flex-col items-center text-xs text-brand-darkBlue font-medium hover:text-brand-blue"
      >
        <Phone className="w-5 h-5 mb-0.5" />
        <span>Call</span>
      </a>
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-xs text-emerald-600 font-medium hover:text-emerald-700"
      >
        <MessageSquare className="w-5 h-5 mb-0.5" />
        <span>WhatsApp</span>
      </a>
      <Link
        to="/admissions"
        className="flex items-center gap-1 bg-brand-red text-white font-bold text-xs uppercase px-4 py-2 rounded-full shadow"
      >
        <GraduationCap className="w-4 h-4" />
        <span>Apply</span>
      </Link>
    </div>
  );
}
