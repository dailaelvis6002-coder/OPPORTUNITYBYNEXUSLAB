import React, { useState } from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { SCHOLARSHIPS_CATALOGUE } from '../data/scholarshipsCatalogue';
import { siteConfig } from '../data/config';
import { SECTION_IMAGES } from '../data/images';
import { OpportunityCard } from '../components/OpportunityCard';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  MessageCircle, 
  ArrowUpRight,
  Award,
  FileText,
  Compass,
  GraduationCap
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onHoverScholarship?: (scholarship: ScholarshipRecord) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSearchQuery: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectScholarship,
  onHoverScholarship,
  savedIds,
  onToggleSave,
  onSearchQuery
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchQuery(searchInput.trim());
      onNavigate('scholarships');
    } else {
      onNavigate('scholarships');
    }
  };

  // Pan-African Flagships (ALU, Ashesi, Mastercard Foundation)
  const panAfricanPriority = SCHOLARSHIPS_CATALOGUE.filter((s) => 
    [1, 2, 4, 28].includes(s.itemNumber)
  );

  return (
    <div className="space-y-20 pb-20 text-left">
      
      {/* 1. HERO SECTION: Elegant Cormorant Garamond Display Serif & Clean Search */}
      <section className="pt-4 pb-2 space-y-8">
        
        {/* Top Kicker in clean unboxed typography */}
        <div className="flex items-center gap-2 flex-wrap text-xs font-code text-[#716D66]">
          <span className="text-[#D97706] font-bold tracking-wider uppercase">
            65 Audited Records
          </span>
          <span aria-hidden="true" className="text-[#D5CDC0]">·</span>
          <span>HALI African Students</span>
          <span aria-hidden="true" className="text-[#D5CDC0]">·</span>
          <span>Burkina Faso & Pan-African Focus</span>
        </div>

        {/* Hero Title in Cormorant Garamond */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal italic leading-[0.94] text-[#0E0D11] tracking-tight">
            “{siteConfig.headline}”
          </h1>

          <p className="text-base sm:text-lg text-[#4A4643] max-w-2xl leading-relaxed font-sans pt-1">
            {siteConfig.brandName} is a verified, open-access educational catalogue built for High-Achieving, Low-Income African students. No application fees, zero commercial intermediation, direct institutional links only.
          </p>
        </div>

        {/* Prominent Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white border border-[#E5DFD5] focus-within:border-[#D97706] focus-within:ring-2 focus-within:ring-amber-500/20 transition-all max-w-2xl shadow-sm"
        >
          <div className="flex items-center gap-3 flex-1 px-3 w-full">
            <Search className="w-4 h-4 text-[#8A847C] shrink-0" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by scholarship, institution, or country (e.g. Ashesi, ALU, Oxford, Edinburgh)..."
              className="w-full text-sm text-[#0E0D11] placeholder-[#8A847C] bg-transparent outline-hidden py-2.5 font-sans"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#0E0D11] hover:bg-[#25232B] text-white font-sans text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs shrink-0"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </form>

        {/* Fast Route Jump Links */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#5E5953]">
          <span className="text-[#8A847C]">Explore:</span>
          <button
            onClick={() => onNavigate('scholarships')}
            className="hover:text-[#0E0D11] transition-colors cursor-pointer font-medium underline underline-offset-4 decoration-[#D5CDC0]"
          >
            All 65 Scholarships →
          </button>
          <span aria-hidden="true" className="text-[#D5CDC0]">·</span>
          <button
            onClick={() => onNavigate('for-girls')}
            className="hover:text-[#D97706] transition-colors cursor-pointer font-medium underline underline-offset-4 decoration-amber-300"
          >
            For Young Women Pathways →
          </button>
          <span aria-hidden="true" className="text-[#D5CDC0]">·</span>
          <button
            onClick={() => onNavigate('resources')}
            className="hover:text-[#0E0D11] transition-colors cursor-pointer font-medium underline underline-offset-4 decoration-[#D5CDC0]"
          >
            Fee Waiver Playbook →
          </button>
        </div>
      </section>

      {/* 2. DEDICATED SPOTLIGHT: MASTERCARD FOUNDATION & AFRICAN SCHOLARS */}
      <section className="relative overflow-hidden border border-[#E5DFD5] bg-gradient-to-br from-[#FFFDF9] via-white to-[#F5F2EC] p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <div className="font-code text-xs uppercase tracking-wider text-[#D97706] flex items-center gap-2 font-bold">
              <Award className="w-4 h-4 text-[#D97706]" />
              <span>Pan-African Flagship Spotlight</span>
            </div>
            
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#0E0D11] leading-tight">
              Mastercard Foundation Scholars Program
            </h2>
            
            <p className="text-sm text-[#4A4643] leading-relaxed font-sans">
              The world’s most comprehensive higher education initiative dedicated exclusively to African youth. Covers 100% of tuition, accommodation, living stipends, laptops, flights, and leadership development across top African and global institutions (ALU Rwanda, Ashesi Ghana, UCT, Edinburgh, Berkeley, and Oxford).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs">
              <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 font-bold rounded-xs">
                100% Fully Funded
              </span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#0E0D11] border border-[#E5DFD5] flex items-center gap-1 font-medium rounded-xs">
                <Heart className="w-3 h-3 fill-amber-500 text-amber-500" />
                Young Women Priority
              </span>
              <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#4A4643] border border-[#E5DFD5] font-medium rounded-xs">
                Pan-African Citizens
              </span>
            </div>
          </div>

          {/* 1 High-Quality Prime Editorial Image for Home */}
          <div className="w-full lg:w-96 shrink-0 space-y-2.5">
            <div className="relative overflow-hidden border border-[#E5DFD5] aspect-4/3 group shadow-xs bg-[#EBE5DB]">
              <img
                src={SECTION_IMAGES.homeSpotlight.url}
                alt={SECTION_IMAGES.homeSpotlight.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <div className="font-code text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                  {SECTION_IMAGES.homeSpotlight.tag}
                </div>
                <div className="font-editorial text-lg text-white font-semibold drop-shadow-xs leading-snug">
                  {SECTION_IMAGES.homeSpotlight.caption}
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('scholarships')}
              className="w-full py-2.5 bg-[#0E0D11] hover:bg-[#25232B] text-white font-sans text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore All Mastercard Foundation Cohorts</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. PRIORITY AFRICAN UNDERGRADUATE PATHWAYS */}
      <section className="space-y-6 pt-4 border-t border-[#E5DFD5]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <div className="font-code text-xs uppercase tracking-wider text-[#D97706] mb-1 font-bold">
              Top Pan-African Curated Records
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#0E0D11]">
              Undergraduate Degree Pathways
            </h2>
          </div>

          <button
            onClick={() => onNavigate('scholarships')}
            className="font-sans text-xs text-[#D97706] hover:text-[#B45309] flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <span>View All 65 Records in Registry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-column Grid of Clean OpportunityCards */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {panAfricanPriority.map((scholarship) => (
            <OpportunityCard
              key={scholarship.id}
              scholarship={scholarship}
              onSelect={onSelectScholarship}
              onHover={onHoverScholarship}
              isSaved={savedIds.includes(scholarship.id)}
              onToggleSave={onToggleSave}
              featured={scholarship.itemNumber === 1}
            />
          ))}
        </div>
      </section>

      {/* 4. APPLICANT ADVISORY PLAYBOOK (Clean Editorial Cards) */}
      <section className="p-8 sm:p-10 bg-white border border-[#E5DFD5] text-left space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-code text-xs uppercase tracking-widest text-[#D97706] flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4" />
              <span>HALI ADMISSIONS INTELLIGENCE</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#0E0D11]">
              Direct Guidance for High-Achieving Applicants
            </h3>
          </div>

          <button
            onClick={() => onNavigate('resources')}
            className="px-4 py-2 bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#0E0D11] text-[#0E0D11] font-sans text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 font-bold rounded-xs shrink-0"
          >
            <span>Read All Guides</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#E5DFD5] font-sans text-xs text-[#4A4643]">
          <div className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] space-y-2 rounded-xs">
            <span className="font-code text-xs font-bold text-[#0E0D11] flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#D97706]" />
              01. CSS PROFILE WAIVERS
            </span>
            <p className="leading-relaxed text-[#5E5953]">
              Never pay $25 per submission. Learn how partner universities grant direct CSS waiver codes to international African applicants.
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] space-y-2 rounded-xs">
            <span className="font-code text-xs font-bold text-[#0E0D11] flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              02. WOMEN IN LEADERSHIP
            </span>
            <p className="leading-relaxed text-[#5E5953]">
              Targeted pathways and dedicated selection criteria for young women across STEM, healthcare, and civic governance.
            </p>
          </div>

          <div className="p-5 bg-[#FAF8F5] border border-[#E5DFD5] space-y-2 rounded-xs">
            <span className="font-code text-xs font-bold text-[#0E0D11] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              03. ZERO ADMISSIONS FEES
            </span>
            <p className="leading-relaxed text-[#5E5953]">
              Every profile links directly to the official university registrar or foundation. Zero agents, zero intermediary kickbacks.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VERIFIED BROADCAST BANNER (Obsidian & Gold) */}
      <section className="p-8 sm:p-10 bg-[#0A0A0C] border border-[#222126] text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md text-white rounded-xs">
        <div className="space-y-2 max-w-xl">
          <div className="font-code text-xs uppercase tracking-wider text-amber-400 flex items-center gap-2 font-bold">
            <MessageCircle className="w-4 h-4 fill-current text-amber-400" />
            <span>Official Broadcast Channel</span>
          </div>
          <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-white">
            Get Verified Deadline Alerts on WhatsApp
          </h4>
          <p className="text-xs sm:text-sm text-[#A19C93] leading-relaxed font-sans">
            Direct notifications for newly opened intake dates, eligibility checklists, and CSS Profile fee waiver codes from Nexus Lab.
          </p>
        </div>

        <a
          href={siteConfig.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0A0A0C] font-sans text-xs uppercase tracking-wider font-extrabold transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-sm rounded-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current text-[#0A0A0C]" />
          <span>{siteConfig.whatsappButtonLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </section>

    </div>
  );
};
