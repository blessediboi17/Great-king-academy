import React from 'react';
import ProgramsPreview from '../components/home/ProgramsPreview';

export default function Programs() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-darkBlue uppercase tracking-wide">Academic & Technical Programs</h1>
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive curriculum spanning Early Child Education through Senior High, alongside hands-on technical trades.
          </p>
        </div>
      </div>
      <ProgramsPreview />
    </div>
  );
}
