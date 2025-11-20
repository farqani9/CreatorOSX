import React from 'react';
import { User, Briefcase, Users, Award } from 'lucide-react';

const AvatarCluster = () => (
  <div className="flex justify-center items-center -space-x-3 mb-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <img 
        key={i}
        src={`https://picsum.photos/60/60?random=${i}`} 
        alt="Creator" 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm object-cover"
      />
    ))}
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500">
      +2k
    </div>
  </div>
);

const RoleCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all hover:-translate-y-1">
    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export const RoleSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">For modern creators</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Designed for every <span className="font-serif italic text-slate-500">creator workflow</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Whether you run a one-person brand or manage a small creator team, Creator OSX adapts to how you work.
        </p>
        
        <AvatarCluster />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <RoleCard 
            icon={User}
            title="Solo Creators"
            description="Turn DMs and comments into a simple list of leads you’ll actually follow up with."
          />
          <RoleCard 
            icon={Award}
            title="Creator-Operators"
            description="Centralize brand deals, pitching, and content in a calm dashboard."
          />
          <RoleCard 
            icon={Briefcase}
            title="Agencies & Managers"
            description="Give your creators one place to see their pipeline, content, and sponsorships."
          />
          <RoleCard 
            icon={Users}
            title="Coaches & Experts"
            description="Track inquiries, discovery calls, and client onboarding without spreadsheets."
          />
        </div>
      </div>
    </section>
  );
};