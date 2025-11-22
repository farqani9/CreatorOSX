import { Header } from '@/components/marketing/Header';
import { Hero } from '@/components/marketing/Hero';
import { TrustedLogos } from '@/components/marketing/TrustedLogos';
import { RoleSection } from '@/components/marketing/RoleSection';
import { BenefitsSection } from '@/components/marketing/BenefitsSection';
import { FeaturesSection } from '@/components/marketing/FeaturesSection';
import { TestimonialSection } from '@/components/marketing/TestimonialSection';
import { PricingSection } from '@/components/marketing/PricingSection';
import { FinalCTA } from '@/components/marketing/FinalCTA';
import { Footer } from '@/components/marketing/Footer';

export default function Home() {
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
