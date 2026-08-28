import React from 'react';
import { Megaphone } from 'lucide-react';

export default function AnnouncementBar({ announcement }) {
  if (!announcement) {
    return (
      <div className="bg-brand-darkBlue text-white text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
        <Megaphone className="w-4 h-4 text-brand-gold shrink-0" />
        <span>Admissions for the Academic & Technical Session are now open. Apply Today!</span>
      </div>
    );
  }

  return (
    <div className="bg-brand-darkBlue text-white text-xs sm:text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
      <Megaphone className="w-4 h-4 text-brand-gold shrink-0" />
      <span>{announcement.message}</span>
    </div>
  );
}
