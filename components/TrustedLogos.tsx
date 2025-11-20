import React from 'react';

const LogoPlaceholder = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center px-4 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
    <span className="text-xl font-bold text-slate-400 font-serif italic">{label}</span>
  </div>
);

export const TrustedLogos: React.FC = () => {
  return (
    <section className="py-12 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-slate-400 mb-8">Trusted by creators working with brands like</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          <LogoPlaceholder label="Canva" />
          <LogoPlaceholder label="Spotify" />
          <LogoPlaceholder label="Notion" />
          <LogoPlaceholder label="Webflow" />
          <LogoPlaceholder label="Dropbox" />
        </div>
      </div>
    </section>
  );
};