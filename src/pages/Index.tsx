
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExpressHelpSection from '@/components/ExpressHelpSection';
import TechniquesSection from '@/components/TechniquesSection';
import AssistantSection from '@/components/AssistantSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F1F0FB]">
      <Navigation />
      <HeroSection />
      <ExpressHelpSection />
      <TechniquesSection />
      <AssistantSection />
      <Footer />
    </div>
  );
};

export default Index;
