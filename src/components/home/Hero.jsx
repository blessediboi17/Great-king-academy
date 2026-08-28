import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-darkBlue via-brand-blue to-blue-900 text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-brand-gold text-xs font-semibold tracking-wide uppercase">
            Faith-Based Technical & Academic Institution
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Become Great. <span className="text-brand-gold">Learn.</span> Serve.
          </h1>
          
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Welcome to Great King Academy — a faith-based technical and academic institution committed to providing quality, affordable, Christ-centered and hands-on education.
          </p>
          
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              to="/admissions"
              className="w-full sm:w-auto text-center bg-brand-red hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-md shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              APPLY NOW
            </Link>
            <Link
              to="/programs"
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-md transition-all flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROGRAMS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hero Visual Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-white text-brand-darkText rounded-2xl shadow-2xl p-6 border-t-4 border-brand-gold space-y-4">
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold text-2xl border-2 border-brand-gold">
                GKA
              </div>
              <div>
                <h2 className="font-extrabold text-lg text-brand-darkBlue">Great King Academy</h2>
                <p className="text-xs text-gray-500 font-medium">Johnsonville, Montserrado County</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <span className="block text-xs font-semibold text-brand-blue uppercase">Motto</span>
                <span className="font-bold text-brand-darkBlue text-base">"TO BE GREAT... SERVE"</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-xs text-gray-600">
                <span className="font-semibold text-gray-800">Scripture Foundation:</span> Luke 10:43-46
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="block text-center text-xs font-bold text-brand-blue hover:underline uppercase tracking-wider"
              >
                Learn More About Our Heritage →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
