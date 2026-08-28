import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPreview() {
  return (
    <section className="py-16 bg-brand-lightBg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-darkBlue uppercase tracking-wide">
          About Great King Academy
        </h2>
        <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          Great King Academy is a faith-based technical and academic institution located in Peter's Farm, Unity Town Community, Johnsonville, Montserrado County, Liberia. Founded with a deep commitment to service and quality learning, we offer accessible educational pathways from early childhood through senior high and vocational skills training.
        </p>

        <div className="pt-4">
          <Link
            to="/about"
            className="inline-block bg-brand-blue hover:bg-brand-darkBlue text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow"
          >
            LEARN MORE ABOUT US
          </Link>
        </div>
      </div>
    </section>
  );
}
