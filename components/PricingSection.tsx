import React, { useState } from 'react';
import { Check, Info, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

const ToggleItem = ({ label }: { label: string }) => {
    const [enabled, setEnabled] = useState(true);
    return (
        <div className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
            <div className="flex items-center gap-2">
                <span className="text-sm text-slate-700 font-medium">{label}</span>
                <Info size={14} className="text-slate-300 hover:text-slate-500 cursor-help" />
            </div>
            <button 
                onClick={() => setEnabled(!enabled)}
                className={`w-10 h-5 rounded-full relative transition-colors duration-200 ease-in-out focus:outline-none ${enabled ? 'bg-blue-500' : 'bg-slate-200'}`}
            >
                <span 
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ease-in-out transform ${enabled ? 'translate-x-5' : 'translate-x-0'}`} 
                />
            </button>
        </div>
    );
}

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Smart pricing for smart sales <span className="font-serif italic">teams</span>
        </h2>
        <p className="text-slate-600 mb-16">Start simple and scale when your creator business does.</p>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row text-left">
            {/* Left: Feature Configurator */}
            <div className="flex-1 p-8 md:p-10 bg-white">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Everything in Creator OSX</h3>
                <div className="space-y-1">
                    <ToggleItem label="Smart lead capture" />
                    <ToggleItem label="Task automation" />
                    <ToggleItem label="Pipeline management" />
                    <ToggleItem label="Real-time analytics" />
                    <ToggleItem label="Email sync" />
                    <ToggleItem label="Lead import/export" />
                    <ToggleItem label="Role-based access" />
                </div>
            </div>

            {/* Right: Price Block */}
            <div className="w-full md:w-80 bg-blue-600 p-8 md:p-10 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-500 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                    <div className="text-blue-100 text-sm font-medium mb-2">Total Bill <Info size={12} className="inline ml-1 opacity-70" /></div>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-5xl font-bold">$29</span>
                        <span className="text-blue-200 text-sm">/Month</span>
                    </div>

                    <ul className="space-y-3 mb-8 text-sm text-blue-100">
                        <li className="flex items-center gap-2"><Check size={16} /> No hidden fees</li>
                        <li className="flex items-center gap-2"><Check size={16} /> Flexible billing</li>
                        <li className="flex items-center gap-2"><Check size={16} /> Cancel anytime</li>
                    </ul>

                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 shadow-none border-none">
                        Get Started Free
                        <ArrowRight size={16} className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};