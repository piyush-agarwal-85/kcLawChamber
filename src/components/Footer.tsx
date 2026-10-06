import React from 'react';
import { PageTab } from '../types';
import { CHAMBER_INFO } from '../data/legalData';
import { MapPin, Phone, Mail, Clock, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenDisclaimer,
}) => {
  return (
    <footer className="relative bg-[#070709] border-t border-stone-800 text-stone-300 pt-16 pb-8 overflow-hidden">
      {/* Background Watermark KC Monogram */}
      <div className="absolute right-4 bottom-12 pointer-events-none opacity-[0.03] select-none text-[220px] font-serif font-bold text-white leading-none">
        KC
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Blurb */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-baseline tracking-tighter">
                <span className="font-serif text-3xl font-bold text-[#c01224]">K</span>
                <span className="font-serif text-3xl font-light text-stone-100 -ml-1">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display tracking-[0.16em] text-sm font-bold text-white uppercase leading-tight">
                  KC LAW CHAMBERS
                </span>
                <span className="text-[10px] font-sans text-stone-400 tracking-wider">
                  Advocates · Legal Research · Advisory
                </span>
              </div>
            </div>

            <p className="text-xs font-sans text-stone-400 leading-relaxed max-w-sm">
              {CHAMBER_INFO.blurb}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter) Profile"
                className="w-8 h-8 rounded border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-white hover:border-stone-500 transition-colors text-xs font-semibold"
              >
                𝕏
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs font-sans">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('legal-research');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Legal Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('insights');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Constitutional Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Criminal Law & Defense
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Civil Litigation & Disputes
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Commercial Disputes & IBC
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Service Law & CAT Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Corporate & Commercial Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Human Rights & Public Law
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectTab('practice-areas');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Technology, AI & Cyber Law
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest text-white font-semibold mb-5">
              Contact Information
            </h4>
            
            {/* Chamber Address */}
            <div className="flex items-start gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-200">Chamber Address:</p>
                <p className="text-stone-400 mt-0.5 leading-snug">{CHAMBER_INFO.chamberAddress}</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="flex items-start gap-3 text-xs text-stone-400">
              <MapPin className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-stone-200">Office Address:</p>
                <p className="text-stone-400 mt-0.5 leading-snug">{CHAMBER_INFO.officeAddress}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400 pt-1">
              <Phone className="w-4 h-4 text-[#c01224] shrink-0" />
              <a href={`tel:${CHAMBER_INFO.phone}`} className="hover:text-white transition-colors">
                {CHAMBER_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <Mail className="w-4 h-4 text-[#c01224] shrink-0" />
              <a href={`mailto:${CHAMBER_INFO.email}`} className="hover:text-white transition-colors truncate">
                {CHAMBER_INFO.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-stone-400">
              <Clock className="w-4 h-4 text-[#c01224] shrink-0 mt-0.5" />
              <div>
                <p>Monday to Saturday</p>
                <p className="text-stone-300 font-medium">10:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright & Disclaimers */}
        <div className="border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-stone-500">
          <div>
            © 2026 KC Law Chambers. All rights reserved.
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <button
              onClick={() => {
                onSelectTab('privacy-policy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-stone-700">|</span>
            <button
              onClick={() => {
                onSelectTab('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-stone-300 transition-colors"
            >
              Terms of Use
            </button>
            <span className="text-stone-700">|</span>
            <button
              onClick={onOpenDisclaimer}
              className="hover:text-stone-300 transition-colors"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
