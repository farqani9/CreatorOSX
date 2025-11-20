import React from 'react';
import { Grid3X3, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                  <Grid3X3 size={18} />
                </div>
                <span className="font-bold text-slate-900 text-lg tracking-tight">Creator OSX</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              A powerful, customizable CRM platform designed to help sales teams capture, track, and convert leads with ease. From smart automation to real-time insights.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">For Sales Reps</a></li>
              <li><a href="#" className="hover:text-slate-900">For Sales Managers</a></li>
              <li><a href="#" className="hover:text-slate-900">For Marketing Teams</a></li>
              <li><a href="#" className="hover:text-slate-900">For SMBs</a></li>
              <li><a href="#" className="hover:text-slate-900">Custom Enterprise Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
              <li><a href="#" className="hover:text-slate-900">Case Studies</a></li>
              <li><a href="#" className="hover:text-slate-900">Webinars</a></li>
              <li><a href="#" className="hover:text-slate-900">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
              <li><a href="#" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Partner Program</a></li>
              <li><a href="#" className="hover:text-slate-900">Press & Media</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2025 Onleads. All Rights Reserved.</p>
          <p>Made for creators who want real systems, not chaos.</p>
        </div>
      </div>
    </footer>
  );
};