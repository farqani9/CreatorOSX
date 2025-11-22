import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <Quote className="absolute top-10 right-10 text-slate-200 w-32 h-32 opacity-50 rotate-12 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-12">Creator <span className="font-serif italic text-blue-600">feedback</span></h2>
        
        <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug mb-10">
          "Creator OSX helped me stop losing brand deals in my DMs. I respond faster and finally know what my pipeline looks like."
        </blockquote>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <img 
            src="https://picsum.photos/100/100?random=55" 
            alt="Leslie Alexander" 
            className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
          />
          <div className="text-center">
            <div className="font-bold text-slate-900">Leslie Alexander</div>
            <div className="text-sm text-slate-500">YouTube Creator & Coach</div>
          </div>
          
          <div className="flex gap-2 mt-4">
            <button className="w-2.5 h-2.5 rounded-full bg-blue-600 transition-all"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400 transition-all"></button>
          </div>
        </div>
      </div>
    </section>
  );
};