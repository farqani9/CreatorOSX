'use client';

import React from 'react';
import { ArrowRight, Search, Bell, LayoutDashboard, Users, Briefcase, Calendar, CheckSquare, Settings, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 500 },
  { name: 'Thu', value: 380 },
  { name: 'Fri', value: 550 },
  { name: 'Sat', value: 450 },
  { name: 'Sun', value: 600 },
];

const DashboardMockup = () => {
  return (
    <div className="relative mx-auto max-w-5xl mt-12 transform transition-transform hover:scale-[1.01] duration-500">
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        {/* Mockup Header */}
        <div className="border-b border-slate-100 px-6 py-4 flex justify-between items-center bg-white">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-slate-800">Good morning, Alex</h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="pl-9 pr-4 py-2 bg-slate-50 rounded-full text-sm border-none focus:ring-2 focus:ring-slate-200 w-64 outline-none"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-50">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 ring-2 ring-white" />
          </div>
        </div>

        <div className="flex h-[500px] bg-slate-50/50">
          {/* Sidebar */}
          <div className="w-60 border-r border-slate-100 bg-white p-4 flex-shrink-0 hidden md:flex flex-col gap-1">
            {[
              { icon: LayoutDashboard, label: 'Overview', active: true },
              { icon: Users, label: 'Leads', active: false },
              { icon: Briefcase, label: 'Brands & Collabs', active: false },
              { icon: Calendar, label: 'Content Calendar', active: false },
              { icon: CheckSquare, label: 'Tasks', active: false },
              { icon: Settings, label: 'Settings', active: false },
            ].map((item) => (
              <button 
                key={item.label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-slate-50 text-slate-900' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">New Leads (Week)</div>
                <div className="text-2xl font-bold text-slate-800">24</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="text-xs text-slate-500 mb-1">Pipeline Value</div>
                <div className="text-2xl font-bold text-slate-800">$12,450</div>
                 <div className="absolute bottom-0 right-0 w-24 h-12 opacity-20">
                    <ResponsiveContainer width="100%" height="100%" minHeight={48}>
                      <AreaChart data={data}>
                        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Content Due</div>
                <div className="text-2xl font-bold text-slate-800">5 <span className="text-xs font-normal text-slate-400 ml-1">Items</span></div>
              </div>
            </div>

            {/* Main Grid Split */}
            <div className="flex gap-6 h-full">
              {/* Left: Lead List */}
              <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-800">Recent Inquiries</span>
                  <span className="text-xs text-blue-600 font-medium cursor-pointer">View All</span>
                </div>
                <div className="flex-1 overflow-y-auto mockup-scroll">
                  {[
                    { name: 'Sarah BrandMgr', brand: 'TechFlow', platform: 'LinkedIn', status: 'New DM', val: '$2k' },
                    { name: 'Mike Studio', brand: 'AudioGear', platform: 'Email', status: 'Negotiation', val: '$5k' },
                    { name: 'BeautyCo Official', brand: 'BeautyCo', platform: 'Instagram', status: 'Contract', val: '$1.5k' },
                    { name: 'DevTools Inc', brand: 'DevTools', platform: 'Twitter', status: 'New DM', val: 'TBD' },
                    { name: 'Fitness Pro', brand: 'FitLife', platform: 'TikTok', status: 'Won', val: '$3.2k' },
                  ].map((lead, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                          {lead.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-800">{lead.brand}</div>
                          <div className="text-xs text-slate-500 flex items-center gap-1">
                            {lead.platform} • {lead.name}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          lead.status === 'New DM' ? 'bg-blue-50 text-blue-600' :
                          lead.status === 'Negotiation' ? 'bg-orange-50 text-orange-600' :
                          lead.status === 'Won' ? 'bg-green-50 text-green-600' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {lead.status}
                        </span>
                        <span className="text-sm font-semibold text-slate-700 w-12 text-right">{lead.val}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Pipeline Preview */}
              <div className="w-1/3 hidden lg:flex flex-col gap-3">
                 <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Pipeline Quick View</div>
                 {[
                   { stage: 'New Inquiry', count: 4 },
                   { stage: 'Response Sent', count: 1 },
                   { stage: 'Negotiating', count: 2 },
                   { stage: 'Closed Won', count: 3 }
                 ].map(({ stage, count }, i) => (
                   <div key={stage} className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-purple-400' : i === 2 ? 'bg-orange-400' : 'bg-green-400'
                        }`} />
                        <span className="text-xs font-medium text-slate-700">{stage}</span>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">{count}</span>
                   </div>
                 ))}
                 <div className="mt-auto bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="text-xs font-medium text-blue-800 mb-1">Tip of the day</div>
                    <p className="text-xs text-blue-600 leading-relaxed">Follow up with TechFlow today to increase close rate by 20%.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          For creators, coaches & personal brands
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
          Your all-in-one Creator CRM & Ops <br className="hidden md:block" />
          System built to <span className="font-serif italic text-blue-600">convert more</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Capture DMs, track brand deals, and manage your content pipeline in a single, creator-friendly dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="w-full sm:w-auto group">
            See Creator OSX in Action
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Start Free Trial
          </Button>
        </div>

        <DashboardMockup />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 inset-x-0 h-48 bg-white blur-3xl opacity-80 pointer-events-none" />
    </section>
  );
};