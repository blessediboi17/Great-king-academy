import React from 'react';
import { BookOpen, ShieldCheck, Heart, Wrench, DollarSign, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    { title: 'Faith-Based Education', icon: ShieldCheck, desc: 'Rooted in Christian values and Scripture.' },
    { title: 'Quality Education', icon: BookOpen, desc: 'High standards of academic instruction.' },
    { title: 'Christ-Centered Environment', icon: Heart, desc: 'Nurturing sound moral character.' },
    { title: 'Practical Skills', icon: Wrench, desc: 'Hands-on technical and vocational training.' },
    { title: 'Affordable Education', icon: DollarSign, desc: 'Accessible fees for families.' },
    { title: 'Character & Service', icon: Award, desc: 'Empowering students to serve their community.' },
  ];

  return (
    <section className="py-16 bg-brand-lightBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-darkBlue uppercase tracking-wide">
            Why Choose Great King Academy?
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-4 shadow-sm">
                <div className="p-3 rounded-lg bg-blue-50 text-brand-blue shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-darkBlue text-base mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
