import React from 'react';
import { PageTab } from '../types';
import { IMAGES } from '../assets/images';
import { ArrowRight } from 'lucide-react';

interface NotFoundPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onSelectTab }) => {
  return (
    <div className="relative min-h-[70vh] bg-[#0c0c0e] text-white flex items-center overflow-hidden border-b border-stone-800">
      {/* Background Law Books and Scales */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 bg-cover bg-right opacity-30 lg:opacity-75 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url(${IMAGES.heroLawScalesBooks})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/95 lg:via-[#0c0c0e]/75 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
        <div className="max-w-xl space-y-6">
          
          <div className="inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#c01224]" />
            <span className="text-xs font-sans font-semibold tracking-widest uppercase text-stone-300">
              PAGE NOT FOUND
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight">
            404
          </h1>

          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-200">
            Looks like you’ve reached the wrong page.
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-400 leading-relaxed">
            The page you are looking for doesn’t exist or may have been moved.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                onSelectTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white bg-[#c01224] hover:bg-[#a50f1f] rounded transition-all cursor-pointer shadow-sm"
            >
              <span>GO BACK HOME</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                onSelectTab('practice-areas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-sans font-semibold tracking-wider uppercase text-white border border-stone-600 hover:border-white rounded transition-colors cursor-pointer"
            >
              <span>EXPLORE OUR PRACTICE AREAS</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
