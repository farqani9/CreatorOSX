import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
          Ready to close more <span className="font-serif italic text-slate-800">leads</span> in less time?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Start your free 14-day trial, no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
            Book a Live Demo
          </Button>
          <Button size="lg" className="w-full sm:w-auto rounded-full">
            Get Started Free
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};