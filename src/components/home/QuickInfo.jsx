import React from 'react';
import { BookOpen, Wrench, HeartHandshake, DollarSign } from 'lucide-react';

export default function QuickInfo() {
  const cards = [
    {
      title: 'ACADEMIC EDUCATION',
      description: 'Quality academic education designed to develop learners.',
      icon: BookOpen,
      color: 'bg-blue-50 text-brand-blue',
    },
    {
      title: 'TECHNICAL & VOCATIONAL',
      description: 'Hands-on training that develops practical and career-ready skills.',
      icon: Wrench,
      color: 'bg-red-50 text-brand-red',
    },
    {
      title: 'CHRIST-CENTERED',
      description: 'Education that emphasizes Christian values, character and service.',
      icon: HeartHandshake,
      color: 'bg-amber-50 text-amber-700',
    },
    {
      title: 'AFFORDABLE EDUCATION',
      description: 'Quality learning designed to remain accessible to families.',
      icon: DollarSign,
      color: 'bg-emerald-50 text-emerald-700',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-shadow flex flex-col items-start"
              >
                <div className={`p-3 rounded-lg ${card.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-brand-darkBlue text-sm tracking-wide uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
                     }
