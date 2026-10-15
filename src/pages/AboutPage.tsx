import React from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/config';
import { NexusLabLogo } from '../components/NexusLabLogo';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  MessageCircle, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16 text-left max-w-4xl">
      
      {/* 1. Header & Identity */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-3">
          <NexusLabLogo variant="light" size="lg" />
        </div>
        
        <div className="font-code text-xs uppercase tracking-widest text-[#D92626] pt-2 font-bold">
          ABOUT OPPORTUNITYBYNEXUSLAB
        </div>

        <h1 className="font-editorial text-5xl sm:text-7xl font-normal italic leading-[0.92] text-[#161412] tracking-tight">
          “{siteConfig.headline}”
        </h1>

        <p className="text-base text-[#524B43] leading-relaxed font-sans max-w-2xl pt-2">
          {siteConfig.audiencePhilosophy}
        </p>
      </div>

      {/* 2. Genesis & Problem Statement */}
      <section className="p-8 bg-white border border-[#E6DFD3] space-y-4 shadow-xs">
        <div className="font-code text-xs uppercase tracking-widest text-[#D92626] font-bold">
          GENESIS & AUDIT FINDINGS
        </div>
        <h2 className="font-editorial text-3xl font-semibold text-[#161412]">
          Why OpportunitybyNexusLab Exists
        </h2>
        <div className="text-[#524B43] text-xs sm:text-sm leading-relaxed space-y-3 font-sans">
          <p>
            Millions of ambitious young individuals across Burkina Faso and the African continent demonstrate extraordinary intellectual grit, community service, and academic excellence. However, they frequently encounter severe information barriers when searching for pathways to higher education.
          </p>
          <p>
            The scholarship search landscape is saturated with generic aggregator websites that copy unverified listings, roll forward historical deadlines from past years, promote commercial fee-charging agencies, or conflate small partial discounts with full scholarships.
          </p>
          <p className="text-[#161412] font-semibold">
            Nexus Lab initiated OpportunitybyNexusLab to establish a single, trustworthy, zero-fee catalogue where every single record is hand-audited against primary university portals, national ministries, and official philanthropic foundation charters.
          </p>
        </div>
      </section>

      {/* 3. The 4 Non-Negotiable Reliability Principles */}
      <section className="space-y-6">
        <div>
          <div className="font-code text-xs uppercase tracking-widest text-[#D92626] font-bold">
            EDITORIAL PROTOCOL
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#161412] mt-1">
            The Nexus Lab Four Pillars of Information Reliability
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 bg-white border border-[#E6DFD3] space-y-2 shadow-xs">
            <div className="font-code text-xs text-[#161412] font-bold flex items-center gap-2">
              <span className="w-5 h-5 bg-[#FAF7F2] border border-[#E6DFD3] text-[#D92626] flex items-center justify-center text-[10px] font-bold">1</span>
              <span>DIRECT PRIMARY SOURCES ONLY</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed font-sans">
              Every entry links directly to the accredited host institution or foundation portal. We never route traffic through third-party ad networks.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6DFD3] space-y-2 shadow-xs">
            <div className="font-code text-xs text-[#161412] font-bold flex items-center gap-2">
              <span className="w-5 h-5 bg-[#FAF7F2] border border-[#E6DFD3] text-[#D92626] flex items-center justify-center text-[10px] font-bold">2</span>
              <span>FINANCIAL TRANSPARENCY</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed font-sans">
              We rigorously distinguish fully funded scholarships from tuition waivers and partial grants. Uncovered living costs are openly disclosed.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6DFD3] space-y-2 shadow-xs">
            <div className="font-code text-xs text-[#161412] font-bold flex items-center gap-2">
              <span className="w-5 h-5 bg-[#FAF7F2] border border-[#E6DFD3] text-[#D92626] flex items-center justify-center text-[10px] font-bold">3</span>
              <span>ZERO FABRICATED STATISTICS</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed font-sans">
              We never fabricate student testimonials, acceptance percentages, or donor sums. All figures reflect verified research from official documentation.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E6DFD3] space-y-2 shadow-xs">
            <div className="font-code text-xs text-[#161412] font-bold flex items-center gap-2">
              <span className="w-5 h-5 bg-[#FAF7F2] border border-[#E6DFD3] text-[#D92626] flex items-center justify-center text-[10px] font-bold">4</span>
              <span>TRANSPARENT AUDIT DATES</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed font-sans">
              Each opportunity records its audit status (Verified, Priority lead, Watchlist, or To be confirmed) and last review date.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Official Contact Channels */}
      <section className="p-8 bg-[#F3EFE6] border border-[#E6DFD3] space-y-6 shadow-xs">
        <div>
          <div className="font-code text-xs uppercase tracking-widest text-[#D92626] font-bold">
            OFFICIAL CONTACT POINTS
          </div>
          <h3 className="font-editorial text-3xl font-semibold text-[#161412] mt-1">
            Direct Communication Channels
          </h3>
          <p className="text-xs sm:text-sm text-[#524B43] mt-1 max-w-xl leading-relaxed font-sans">
            To report an expired link, submit an institutional call for verification, or inquire:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 pt-1 font-sans">
          {/* Email */}
          <div className="p-4 bg-white border border-[#E6DFD3] space-y-1.5 shadow-xs">
            <span className="font-code text-[10px] text-[#7A7167] uppercase tracking-wider block font-bold">
              Official Email
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#161412] hover:text-[#D92626] font-bold text-sm transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#D92626]" />
              <span>{siteConfig.email}</span>
            </a>
            <p className="text-[11px] text-[#6A635B]">
              Direct desk for student queries and factual correction notices.
            </p>
          </div>

          {/* WhatsApp */}
          <div className="p-4 bg-white border border-[#E6DFD3] space-y-1.5 shadow-xs">
            <span className="font-code text-[10px] text-[#7A7167] uppercase tracking-wider block font-bold">
              WhatsApp Broadcast Channel
            </span>
            <a
              href={siteConfig.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-bold text-sm transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{siteConfig.whatsappButtonLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <p className="text-[11px] text-[#6A635B]">
              Live broadcast of new intakes and deadline alerts.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#E6DFD3] flex items-center justify-between flex-wrap gap-4 font-code text-xs text-[#6A635B]">
          <span>Anti-fraud policy: Nexus Lab operates free of charge.</span>
          <button
            onClick={() => onNavigate('scholarships')}
            className="text-[#161412] hover:text-[#D92626] font-bold flex items-center gap-1 cursor-pointer"
          >
            <span>Explore 65 Scholarships</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D92626]" />
          </button>
        </div>
      </section>

    </div>
  );
};
