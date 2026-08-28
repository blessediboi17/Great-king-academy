import React from 'react';
import Hero from '../components/home/Hero';
import QuickInfo from '../components/home/QuickInfo';
import AboutPreview from '../components/home/AboutPreview';
import ProgramsPreview from '../components/home/ProgramsPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import MissionVision from '../components/home/MissionVision';
import FounderSection from '../components/home/FounderSection';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickInfo />
      <AboutPreview />
      <ProgramsPreview />
      <WhyChooseUs />
      <MissionVision />
      <FounderSection />
      
      {/* Admissions Callout Banner */}
      <section className="py-12 bg-brand-blue text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">Ready to Join Great King Academy?</h2>
          <p className="text-sm text-blue-100">Enroll your child today in our academic or technical education programs.</p>
          <div className="pt-2">
            <Link
              to="/admissions"
              className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-md shadow"
            >
              APPLY FOR ADMISSION NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
