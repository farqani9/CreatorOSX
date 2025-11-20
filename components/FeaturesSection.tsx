import React from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Smartphone, LayoutTemplate, Zap } from 'lucide-react';

const FeatureCard = ({ title, description, icon: Icon, children }: { title: string, description: string, icon: any, children?: React.ReactNode }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-colors shadow-sm group">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
        <Icon size={20} />
      </div>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 mb-6 min-h-[40px]">{description}</p>
    {children && <div className="mt-auto pt-4 border-t border-slate-50">{children}</div>}
  </div>
);

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Functionalities</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for modern <span className="font-serif italic text-slate-900">creators</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From lead capture to content planning, Creator OSX gives your creator business a calm operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Smart Lead Inbox" 
            description="Collect leads from forms, email, and social DMs—without losing track in screenshots."
            icon={MessageSquare}
          >
            <div className="bg-slate-50 rounded p-3 flex flex-col gap-2 opacity-80">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>New Inquiry</span>
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              </div>
              <div className="h-2 bg-slate-200 rounded w-3/4"></div>
              <div className="h-2 bg-slate-200 rounded w-1/2"></div>
            </div>
          </FeatureCard>

          <FeatureCard 
            title="DM → Deal Workflows" 
            description="Turn promising conversations into structured deals with one click."
            icon={ArrowRight}
          >
             <div className="flex items-center gap-2 justify-center opacity-80 py-2">
                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center"><MessageSquare size={14} /></div>
                <ArrowRight size={14} className="text-slate-400" />
                <div className="h-8 flex-1 bg-blue-50 border border-blue-100 rounded flex items-center px-2 text-[10px] text-blue-700 font-medium">New Deal</div>
             </div>
          </FeatureCard>

          <FeatureCard 
            title="Follow-Up Task Automation" 
            description="Auto-create follow-up tasks when a lead hits a key stage."
            icon={Zap}
          >
            <div className="space-y-2 opacity-80">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-slate-300 rounded-full"></div>
                    <div className="h-2 bg-slate-200 w-full rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <div className="h-2 bg-slate-200 w-2/3 rounded"></div>
                </div>
            </div>
          </FeatureCard>

          <FeatureCard 
            title="Collaboration Notes" 
            description="Keep scripts, talking points, and negotiation notes right next to each brand."
            icon={LayoutTemplate}
          >
            <div className="bg-yellow-50/50 border border-yellow-100 p-3 rounded text-[10px] text-slate-600 font-mono leading-relaxed opacity-90">
               "Rates: $3k for 2 Reels. Need to mention Q4 campaign..."
            </div>
          </FeatureCard>

          <FeatureCard 
            title="Creator Pipeline Overview" 
            description="View all your open deals, upcoming content, and expected payouts together."
            icon={LayoutTemplate}
          >
            <div className="flex h-2 rounded-full overflow-hidden opacity-80">
                <div className="w-1/3 bg-blue-400"></div>
                <div className="w-1/4 bg-purple-400"></div>
                <div className="w-1/4 bg-orange-400"></div>
                <div className="w-1/6 bg-green-400"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-slate-400">
                <span>New</span>
                <span>In Progress</span>
                <span>Won</span>
            </div>
          </FeatureCard>

           <FeatureCard 
            title="Mobile Creator CRM" 
            description="Check leads, mark tasks done, or update deal stages on the go."
            icon={Smartphone}
          >
            <div className="flex items-center gap-3">
                <div className="w-1/2 text-xs text-slate-500 space-y-1">
                    <li>Fast loads</li>
                    <li>Offline mode</li>
                    <li>Push notifs</li>
                </div>
                <div className="w-12 h-20 bg-slate-900 rounded-[6px] border-2 border-slate-300 ml-auto relative overflow-hidden">
                    <div className="absolute top-1 left-1 right-1 h-full bg-white rounded-[2px] p-1">
                        <div className="w-full h-1 bg-slate-200 rounded mb-1"></div>
                        <div className="w-full h-1 bg-slate-200 rounded mb-1"></div>
                    </div>
                </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};