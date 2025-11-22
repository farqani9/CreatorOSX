import React from 'react';

const MiniInbox = () => (
  <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-3 w-full max-w-[260px]">
    <div className="space-y-2">
      {[
        { tag: 'IG', bg: 'bg-pink-100 text-pink-700', text: 'Collab request...' },
        { tag: 'Mail', bg: 'bg-blue-100 text-blue-700', text: 'Re: Proposal...', badge: true },
        { tag: 'TT', bg: 'bg-slate-100 text-slate-700', text: 'Sent rates' },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 p-2 rounded hover:bg-slate-50 transition-colors cursor-default">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.bg}`}>{item.tag}</span>
          <span className="text-xs text-slate-600 truncate flex-1">{item.text}</span>
          {item.badge && <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>}
        </div>
      ))}
    </div>
  </div>
);

const MiniPipeline = () => (
  <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-3 w-full max-w-[260px] flex gap-2 h-32">
    {[
      { label: 'New', color: 'bg-slate-100', count: 2 },
      { label: 'Neg.', color: 'bg-blue-50', count: 1 },
      { label: 'Won', color: 'bg-green-50', count: 3 },
    ].map((col) => (
      <div key={col.label} className={`flex-1 rounded-md ${col.color} p-1 flex flex-col gap-1`}>
        <div className="text-[9px] font-bold text-slate-500 text-center mb-1">{col.label}</div>
        {Array.from({ length: col.count }).map((_, i) => (
          <div key={i} className="bg-white h-6 rounded shadow-sm border border-slate-100/50 w-full"></div>
        ))}
      </div>
    ))}
  </div>
);

const MiniCalendar = () => (
  <div className="bg-white rounded-lg border border-slate-100 shadow-sm p-3 w-full max-w-[260px]">
    <div className="flex justify-between items-end mb-3">
      <div>
        <div className="text-[10px] text-slate-400 uppercase">Exp. Revenue</div>
        <div className="text-lg font-bold text-slate-800">$3.2k</div>
      </div>
      <div className="flex gap-0.5 items-end h-8">
        {[20, 40, 30, 50, 45, 60, 55].map((h, i) => (
            <div key={i} style={{ height: `${h}%` }} className="w-1.5 bg-blue-200 rounded-t-sm"></div>
        ))}
      </div>
    </div>
    <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-slate-600">
            <div className="w-1 h-full bg-purple-400 rounded-full h-3"></div>
            <span>IG Reel - Brand A</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600">
            <div className="w-1 h-full bg-blue-400 rounded-full h-3"></div>
            <span>YT Video - Brand B</span>
        </div>
    </div>
  </div>
);

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-blue-50/50 rounded-3xl p-8 md:p-16 border border-blue-100/50 relative overflow-hidden">
        {/* Decor bg */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
            Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            You need to grow your creator <span className="font-serif italic text-blue-600">business</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Creator OSX gives you just enough structure to follow up, close deals, and ship content consistently.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center bg-slate-50 py-6 rounded-xl border border-slate-50">
              <MiniInbox />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Lead Capture</h3>
            <p className="text-sm text-slate-600">Turn DMs, inquiry forms, and email replies into organized, trackable leads.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center bg-slate-50 py-6 rounded-xl border border-slate-50">
               <MiniPipeline />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Pipeline Management</h3>
            <p className="text-sm text-slate-600">Drag deals through stages, from first message to signed contract and paid.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center bg-slate-50 py-6 rounded-xl border border-slate-50">
                <MiniCalendar />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Content Visibility</h3>
            <p className="text-sm text-slate-600">See your upcoming content and expected revenue in one glance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};