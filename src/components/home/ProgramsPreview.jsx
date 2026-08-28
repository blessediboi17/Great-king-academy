import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCap, Wrench, ChevronRight } from 'lucide-react';

export default function ProgramsPreview() {
  const academicPrograms = [
    'Early Child Education',
    'Pre-Primary',
    'Junior High School',
    'Senior High School',
  ];

  const technicalPrograms = [
    'Liberia Reads',
    'Tie & Dye',
    'Cosmetology',
    'Tailoring',
    'Science Lab',
    'Computer Lab',
    'Electricity',
    'Plumbing',
    'Catering',
    'Enrichment Program',
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-darkBlue uppercase tracking-wide">
            Academic & Vocational Programs
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="text-gray-600 text-sm max-w-xl mx-auto">
            Providing comprehensive academic foundations alongside practical, hands-on technical disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Academic Card */}
          <div className="border border-blue-200 rounded-xl p-6 bg-blue-50/40">
            <div className="flex items-center gap-3 mb-4 border-b border-blue-200 pb-3">
              <span className="bg-brand-blue text-white p-2 rounded-lg font-bold text-xs">ACADEMIC</span>
              <h3 className="font-extrabold text-brand-darkBlue text-lg">Academic Education</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {academicPrograms.map((prog, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-800 bg-white p-2.5 rounded border border-blue-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-blue" />
                  {prog}
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Card */}
          <div className="border border-amber-200 rounded-xl p-6 bg-amber-50/30">
            <div className="flex items-center gap-3 mb-4 border-b border-amber-200 pb-3">
              <span className="bg-brand-red text-white p-2 rounded-lg font-bold text-xs">TECHNICAL / VOCATIONAL</span>
              <h3 className="font-extrabold text-brand-darkBlue text-lg">Practical Skills</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {technicalPrograms.map((prog, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-800 bg-white p-2.5 rounded border border-amber-100 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-red" />
                  {prog}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-10 text-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 bg-brand-darkBlue hover:bg-brand-blue text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow"
          >
            <span>VIEW ALL PROGRAMS</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
