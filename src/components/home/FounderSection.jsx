import React from 'react';
import { UserCheck } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-16 bg-brand-lightBg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col sm:flex-row items-center gap-8">
          
          <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-brand-gold flex items-center justify-center shrink-0 text-gray-400">
            <UserCheck className="w-12 h-12" />
          </div>

          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider">Honorary Legacy</span>
            <h2 className="text-2xl font-extrabold text-brand-darkBlue uppercase">OUR FOUNDER</h2>
            <h3 className="text-lg font-bold text-gray-800">The Late Pastor Peter K. Flomo</h3>
            <p className="text-xs font-semibold text-brand-blue uppercase">Founder, Great King Academy</p>
            <p className="text-xs text-gray-600 leading-relaxed pt-2">
              Established with a enduring passion for Christ-centered education, service to orphans and underprivileged children, and practical technical empowerment in Liberia.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
