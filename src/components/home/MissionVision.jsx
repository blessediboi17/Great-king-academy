import React from 'react';
import { Target, Compass, Star } from 'lucide-react';

export default function MissionVision() {
  const values = ['Christ Centered', 'Quality', 'Integrity', 'Competence', 'Affordable', 'Service'];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Vision */}
          <div className="bg-blue-50 border-l-4 border-brand-blue p-8 rounded-r-xl space-y-3">
            <div className="flex items-center gap-3 text-brand-blue">
              <Compass className="w-7 h-7" />
              <h3 className="font-extrabold text-xl uppercase tracking-wider text-brand-darkBlue">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-base italic leading-relaxed font-medium">
              "To provide quality, Christ-centered education for all learners in Liberia."
            </p>
          </div>

          {/* Mission */}
          <div className="bg-red-50 border-l-4 border-brand-red p-8 rounded-r-xl space-y-3">
            <div className="flex items-center gap-3 text-brand-red">
              <Target className="w-7 h-7" />
              <h3 className="font-extrabold text-xl uppercase tracking-wider text-brand-darkBlue">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-base italic leading-relaxed font-medium">
              "To provide underprivileged, orphaned and abandoned children access to Christ-centered, Christ-based, quality and affordable education."
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div className="bg-brand-darkBlue text-white p-8 rounded-2xl shadow-lg text-center space-y-6">
          <h3 className="text-xl font-extrabold uppercase tracking-wider text-brand-gold">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {values.map((val, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white"
              >
                {val}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
