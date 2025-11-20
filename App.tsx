import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustedLogos } from './components/TrustedLogos';
import { RoleSection } from './components/RoleSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialSection } from './components/TestimonialSection';
import { PricingSection } from './components/PricingSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <TrustedLogos />
        <RoleSection />
        <BenefitsSection />
        <FeaturesSection />
        <TestimonialSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;