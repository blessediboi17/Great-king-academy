import React from 'react';
import MissionVision from '../components/home/MissionVision';
import FounderSection from '../components/home/FounderSection';

export default function About() {
  return (
    <div className="py-12 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-darkBlue uppercase tracking-wide">About Great King Academy</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            A Faith-Based Technical and Academic Institution dedicated to excellence, character formation, and service.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-bold text-brand-darkBlue">Our School Identity</h2>
          <p>
            Great King Academy operates as a faith-based educational beacon located in Peter's Farm, Unity Town Community, Johnsonville, Montserrado County, Monrovia, Liberia. Guided by the spiritual foundation of <strong>Luke 10:43-46</strong> and our motto <strong>"TO BE GREAT... SERVE"</strong>, we provide both rigorous academic instruction and practical vocational training.
          </p>
          <p>
            We focus on creating holistic educational opportunities for all learners, with a special mission toward underprivileged, orphaned, and abandoned children who require accessible, quality, Christ-centered education.
          </p>
        </div>

      </div>

      <MissionVision />
      <FounderSection />
    </div>
  );
}
