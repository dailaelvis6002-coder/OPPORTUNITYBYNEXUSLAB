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
    <footer className="bg-[#0A0A0C] text-[#D4D0C8] pt-16 pb-12 border-t border-[#222126] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222126]">
          
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 space-y-4">
            <NexusLabLogo variant="dark" size="lg" />
            
            <p className="text-sm text-[#E7E3DC] font-medium leading-relaxed max-w-md pt-2 font-serif italic">
              "{siteConfig.headline}"
            </p>

            <p className="text-xs text-[#9E988F] leading-relaxed max-w-md font-sans">
              {siteConfig.subheadline}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#C2BCB2]">
              <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Strict source control. Hand-audited admissions & scholarship links for African youth.</span>
            </div>
          </div>

          {/* Quick Navigation — 5 Pages */}
          <div className="space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A19C93]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#D4D0C8]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('scholarships')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Scholarships Catalogue (65 Audited)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('for-girls')}
                  className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>For Young Women</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Fee Waiver Guides & Toolkits
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Nexus Lab
                </button>
              </li>
            </ul>
          </div>

          {/* Official Contact & Channels */}
          <div className="space-y-3 font-sans">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A19C93]">
              Official Channels
            </h4>
            
            <div className="space-y-3 text-xs text-[#D4D0C8]">
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#8A847C]">
                  Direct Verification & Inquiries
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-white hover:text-amber-400 font-medium transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="block text-[10px] uppercase font-bold text-[#8A847C] mb-1.5">
                  Official WhatsApp Broadcast
                </span>
                <a
                  href={siteConfig.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xs bg-[#1A1920] border border-[#33313D] hover:border-amber-400 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-amber-400 fill-current" />
                  <span>{siteConfig.whatsappButtonLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A847C]" />
                </a>
              </div>

              <p className="text-[11px] text-[#78726A] pt-1 leading-relaxed">
                In strict accordance with our anti-fraud policy, Nexus Lab never charges fees and does not publish unverified intermediary links.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A847C] font-code">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Anti-Fraud Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('about')}
              className="hover:text-amber-400 transition-colors cursor-pointer"
            >
              Reliability Principles
            </button>
            <span>·</span>
            <span className="text-[#C2BCB2]">Hand-Audited Admissions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
