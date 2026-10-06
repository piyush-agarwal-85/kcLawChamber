/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageTab, PracticeArea } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PracticeAreaModal } from './components/PracticeAreaModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { LegalResearchPage } from './pages/LegalResearchPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationArea, setConsultationArea] = useState<string | undefined>(undefined);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);

  // Check if user previously agreed to the Bar Council of India disclaimer
  useEffect(() => {
    const hasAgreed = localStorage.getItem('kc_legal_disclaimer_agreed');
    if (!hasAgreed) {
      // Delay slightly for smooth page entrance
      const timer = setTimeout(() => {
        setIsDisclaimerOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgreeDisclaimer = () => {
    localStorage.setItem('kc_legal_disclaimer_agreed', 'true');
    setIsDisclaimerOpen(false);
    // Open Book Consultation popup seamlessly after disclaimer
    setTimeout(() => {
      setIsConsultationOpen(true);
    }, 350);
  };

  const handleCloseDisclaimer = () => {
    setIsDisclaimerOpen(false);
    // Also trigger consultation popup after disclaimer dismissal
    setTimeout(() => {
      setIsConsultationOpen(true);
    }, 350);
  };

  const openConsultation = (areaName?: string) => {
    setConsultationArea(areaName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0e] font-sans antialiased text-stone-900 selection:bg-[#c01224] selection:text-white">
      
      {/* Top Header Contract */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConsultation={() => openConsultation()}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onSelectTab={setCurrentTab}
            onOpenConsultation={openConsultation}
            onSelectPracticeAreaModal={setSelectedPracticeArea}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onSelectTab={setCurrentTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'practice-areas' && (
          <PracticeAreasPage
            onSelectTab={setCurrentTab}
            onOpenConsultation={openConsultation}
            onSelectPracticeAreaModal={setSelectedPracticeArea}
          />
        )}

        {currentTab === 'legal-research' && (
          <LegalResearchPage
            onSelectTab={setCurrentTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'insights' && (
          <InsightsPage
            onSelectTab={setCurrentTab}
            onOpenConsultation={() => openConsultation()}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage onSelectTab={setCurrentTab} />
        )}

        {currentTab === 'privacy-policy' && (
          <PrivacyPolicyPage onSelectTab={setCurrentTab} />
        )}

        {currentTab === 'terms' && (
          <TermsPage onSelectTab={setCurrentTab} />
        )}

        {currentTab === 'disclaimer' && (
          <div className="bg-[#faf9f6] py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <h1 className="font-serif text-3xl font-bold mb-4">Legal Disclaimer</h1>
              <p className="text-sm text-stone-600 mb-6">
                Under the rules of the Bar Council of India, Indian advocates are prohibited from soliciting work or advertising.
              </p>
              <button
                onClick={() => setIsDisclaimerOpen(true)}
                className="px-6 py-2.5 bg-[#c01224] text-white text-xs font-semibold uppercase tracking-wider rounded"
              >
                Open Bar Council Disclaimer
              </button>
            </div>
          </div>
        )}

        {currentTab === '404' && (
          <NotFoundPage onSelectTab={setCurrentTab} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
      />

      {/* Multi-Step Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preSelectedArea={consultationArea}
      />

      {/* Bar Council of India Compliance Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onAgree={handleAgreeDisclaimer}
        onClose={handleCloseDisclaimer}
      />

      {/* Practice Area Detail Modal */}
      <PracticeAreaModal
        area={selectedPracticeArea}
        onClose={() => setSelectedPracticeArea(null)}
        onConsult={(area) => openConsultation(area)}
      />

    </div>
  );
}
