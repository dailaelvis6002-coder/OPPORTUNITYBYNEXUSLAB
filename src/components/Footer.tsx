import React from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/config';
import { NexusLabLogo } from './NexusLabLogo';
import { 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUpRight,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090D16] text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <NexusLabLogo variant="dark" size="lg" />
            
            <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-md pt-2">
              "{siteConfig.headline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              {siteConfig.subheadline}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Strict source control. Hand-audited admissions & scholarship links for African youth.</span>
            </div>
          </div>

          {/* Quick Navigation — Approved 5 Items */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('scholarships')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  Scholarships (65 Audited)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('for-girls')}
                  className="hover:text-rose-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>For Girls</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  HALI Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-red-400 transition-colors cursor-pointer"
                >
                  About Nexus Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Strict Official Contact Points */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Official Channels
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="block text-[10px] uppercase font-bold text-slate-500">
                  Direct Inquiries & Corrections
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white hover:text-red-400 font-medium transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-[10px] uppercase font-bold text-slate-500 mb-1.5">
                  Official Broadcast
                </span>
                <a
                  href={siteConfig.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{siteConfig.whatsappButtonLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                In strict accordance with our anti-fraud policy, Nexus Lab never charges fees and does not publish unverified telephone numbers or unofficial group links.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-slate-300 transition-colors"
            >
              Reliability Principles
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('resources')}
              className="hover:text-slate-300 transition-colors"
            >
              Financial Aid Guides
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
