import React, { useState } from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { SCHOLARSHIPS_CATALOGUE } from '../data/scholarshipsCatalogue';
import { siteConfig } from '../data/config';
import { CURATED_IMAGES } from '../data/images';
import { OpportunityCard } from '../components/OpportunityCard';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  GraduationCap, 
  Heart, 
  BookOpen, 
  MessageCircle, 
  ArrowUpRight,
  Sparkles,
  Award,
  CheckCircle2,
  HelpCircle,
  FileText,
  Compass
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onHoverScholarship?: (scholarship: ScholarshipRecord) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSearchQuery: (query: string) => void;
  onOpenMemberCard?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectScholarship,
  onHoverScholarship,
  savedIds,
  onToggleSave,
  onSearchQuery,
  onOpenMemberCard
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

  // 1. Pan-African Flagships (ALU, Ashesi, Mastercard Foundation) - Exclusively African Scholars
  const panAfricanPriority = SCHOLARSHIPS_CATALOGUE.filter((s) => 
    [1, 2, 4, 28].includes(s.itemNumber)
  );

  return (
    <div className="space-y-16 pb-16 text-left">
      
      {/* 1. HERO AREA: Cormorant Garamond italic serif and Plus Jakarta Sans */}
      <section className="space-y-6 pt-2">
        
        {/* Top Kicker matching beige theme */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="font-code text-xs uppercase tracking-widest text-[#D92626] flex items-center gap-2 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#D92626] animate-pulse" />
            <span>65 Audited Records · HALI African Students</span>
          </div>
          <span className="text-[#D8CFBF]">·</span>
          <span className="font-code text-xs text-[#7A7167]">Burkina Faso & Pan-African Focus</span>
        </div>

        {/* Hero Title in Cormorant Garamond */}
        <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal italic leading-[0.92] text-[#161412] max-w-4xl tracking-tight">
          “{siteConfig.headline}”
        </h1>

        {/* Subtitle in Plus Jakarta Sans */}
        <p className="text-base sm:text-lg text-[#524B43] max-w-2xl leading-relaxed pt-1 font-sans">
          {siteConfig.brandName} is a verified, open-access educational catalogue built for High-Achieving, Low-Income African students. No application fees, zero commercial intermediation, direct institutional links only.
        </p>

        {/* Search Bar matching beige theme */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex flex-col sm:flex-row items-center gap-2 p-1.5 bg-white border border-[#E6DFD3] focus-within:border-[#D92626] focus-within:ring-2 focus-within:ring-red-100 transition-all max-w-2xl shadow-sm mt-4"
        >
          <div className="flex items-center gap-2.5 flex-1 px-3 w-full">
            <Search className="w-4 h-4 text-[#9E9589]" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search by scholarship, institution, or country (e.g. Ashesi, ALU, Oxford, Edinburgh)..."
              className="w-full text-sm text-[#161412] placeholder-[#9E9589] bg-transparent outline-hidden py-2 font-sans"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-[#D92626] hover:bg-[#B91C1C] text-white font-code text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Fast Route Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2 font-code text-xs text-[#6A635B]">
          <span className="text-[#9E9589]">Jump to:</span>
          <button
            onClick={() => onNavigate('scholarships')}
            className="hover:text-[#161412] transition-colors cursor-pointer underline underline-offset-4 decoration-[#D8CFBF]"
          >
            All 65 Scholarships →
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('for-girls')}
            className="hover:text-[#D92626] transition-colors cursor-pointer underline underline-offset-4 decoration-rose-300 font-medium"
          >
            For Young Women Pathways →
          </button>
          <span>·</span>
          <button
            onClick={() => onNavigate('resources')}
            className="hover:text-[#161412] transition-colors cursor-pointer underline underline-offset-4 decoration-[#D8CFBF]"
          >
            Fee Waiver Playbook →
          </button>
        </div>
      </section>

      {/* 2. DEDICATED SPOTLIGHT: MASTERCARD FOUNDATION & AFRICAN SCHOLARS */}
      <section className="relative overflow-hidden border border-[#E6DFD3] bg-gradient-to-br from-[#FFF9F5] via-white to-[#F7F3EB] p-6 sm:p-10 space-y-6 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3.5 max-w-xl">
            <div className="font-code text-xs uppercase tracking-wider text-[#D92626] flex items-center gap-2 font-bold">
              <Award className="w-4 h-4 text-[#D92626]" />
              <span>Pan-African Flagship Spotlight</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-bold text-[#161412] leading-tight">
              Mastercard Foundation Scholars Program
            </h2>
            <p className="text-sm text-[#524B43] leading-relaxed font-sans">
              The world’s most comprehensive higher education initiative dedicated exclusively to African youth. Covers 100% of tuition, accommodation, living stipends, laptops, flights, and leadership development across top African and global institutions (ALU Rwanda, Ashesi Ghana, UCT, Edinburgh, Berkeley, and Oxford).
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2 font-code text-xs">
              <span className="px-2.5 py-1 bg-red-50 text-red-700 border border-red-200 font-bold">
                100% Fully Funded
              </span>
              <span className="px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1 font-semibold">
                <Heart className="w-3 h-3 fill-rose-600" />
                Young Women Priority
              </span>
              <span className="px-2.5 py-1 bg-[#FAF7F2] text-[#453F38] border border-[#E6DFD3] font-medium">
                Pan-African Citizens
              </span>
            </div>
          </div>

          {/* Authentic African Scholars Imagery - Generated specifically for this brief */}
          <div className="w-full lg:w-88 flex-shrink-0 space-y-2.5">
            <div className="relative overflow-hidden border border-[#E6DFD3] aspect-4/3 group shadow-xs">
              <img
                src={CURATED_IMAGES.panAfricanCampus.url}
                alt={CURATED_IMAGES.panAfricanCampus.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                <div className="font-code text-[10px] uppercase tracking-wider text-red-300 font-bold">
                  African Academic Leadership
                </div>
                <div className="font-editorial text-lg text-white font-semibold drop-shadow-xs">
                  ALU, Ashesi & Partner Universities
                </div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('scholarships')}
              className="w-full py-2.5 bg-[#D92626] hover:bg-[#B91C1C] text-white font-code text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore All Mastercard Foundation Cohorts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2B. CARTE DE MEMBRE & PROGRAMME INGÉNIERIE ALBI & ALÈS (Authentic African Scholars Only) */}
      <section className="relative overflow-hidden border-2 border-[#D8CFBF] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EE] to-[#F3EFE6] p-6 sm:p-10 space-y-6 shadow-xs text-left">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3.5 max-w-xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-code text-xs uppercase tracking-wider px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Accréditation Officielle · 2026–2027
              </span>
              <span className="font-code text-xs uppercase tracking-wider text-[#D92626] font-bold">
                Programme Albi & Alès
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161412] leading-tight">
              Carte de Membre Étudiant · Mobilité & Bourses d'Ingénierie
            </h2>

            <p className="text-sm text-[#524B43] leading-relaxed font-sans">
              Plateforme d'accès direct pour les étudiants africains (Burkina Faso et continent) candidats aux programmes d'ingénieurs et échanges académiques avec les prestigieuses Écoles des Mines (IMT Mines Albi, IMT Mines Alès) et instituts polytechniques partenaires (2iE, INP-HB).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-code text-xs">
              <span className="px-2.5 py-1 bg-white border border-[#E6DFD3] text-[#161412] font-semibold">
                ✓ 100% Étudiants Africains
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#E6DFD3] text-[#161412] font-semibold">
                ✓ IMT Mines Albi & Alès
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#E6DFD3] text-[#161412] font-semibold">
                ✓ Procédure Directe Sans Frais
              </span>
            </div>

            {onOpenMemberCard && (
              <div className="pt-2">
                <button
                  onClick={onOpenMemberCard}
                  className="px-6 py-3 bg-[#D92626] hover:bg-[#B91C1C] text-white font-code text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <Award className="w-4 h-4" />
                  <span>Consulter la Carte de Membre Officielle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Genuine African Engineering Student Photo - Zero white people */}
          <div className="w-full lg:w-88 flex-shrink-0 space-y-2.5">
            <div className="relative overflow-hidden border border-[#D8CFBF] aspect-4/3 group shadow-xs">
              <img
                src={CURATED_IMAGES.africanStemEngineer.url}
                alt={CURATED_IMAGES.africanStemEngineer.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 text-left">
                <div className="font-code text-[10px] uppercase tracking-wider text-amber-300 font-bold">
                  Filière Ingénierie & Sciences
                </div>
                <div className="font-editorial text-lg text-white font-semibold drop-shadow-xs">
                  Élève Ingénieur Africain en Laboratoire
                </div>
              </div>
            </div>
            
            <div className="font-code text-[10px] text-center text-[#7A7167]">
              Carte d'identité académique officielle OpportunitybyNexusLab
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIORITY AFRICAN UNDERGRADUATE PATHWAYS (Curated Grid with Hover Inspector) */}
      <section className="space-y-6 pt-4 border-t border-[#E6DFD3]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <div className="font-code text-[11px] uppercase tracking-wider text-[#D92626] mb-1 font-bold">
              Top Pan-African Curated Records
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#161412]">
              Undergraduate Degree Pathways
            </h2>
          </div>

          <button
            onClick={() => onNavigate('scholarships')}
            className="font-code text-xs text-[#D92626] hover:text-[#B91C1C] flex items-center gap-1 cursor-pointer font-bold"
          >
            <span>View All 65 Records in Registry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-column Grid with Hover Inspector */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {panAfricanPriority.map((scholarship) => (
            <OpportunityCard
              key={scholarship.id}
              scholarship={scholarship}
              onSelect={onSelectScholarship}
              onHover={onHoverScholarship}
              isSaved={savedIds.includes(scholarship.id)}
              onToggleSave={onToggleSave}
              showThumbnail={true}
              featured={scholarship.itemNumber === 1}
            />
          ))}
        </div>
      </section>

      {/* 4. APPLICANT ADVISORY PLAYBOOK (Clean Beige & White Cards) */}
      <section className="p-8 sm:p-10 bg-white border border-[#E6DFD3] text-left space-y-6 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-code text-xs uppercase tracking-widest text-amber-700 flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4" />
              <span>HALI ADMISSIONS INTELLIGENCE</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#161412]">
              Direct Guidance for High-Achieving Applicants
            </h3>
          </div>

          <button
            onClick={() => onNavigate('resources')}
            className="px-4 py-2 bg-[#FAF7F2] border border-[#E6DFD3] hover:border-[#161412] text-[#161412] font-code text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 font-bold"
          >
            <span>Read All Guides</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D92626]" />
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#E6DFD3] font-sans text-xs text-[#524B43]">
          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-2">
            <span className="font-code text-[11px] font-bold text-amber-800 block flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              01. CSS PROFILE WAIVERS
            </span>
            <p className="leading-relaxed">
              Never pay $25 per submission. Learn how partner universities grant direct CSS waiver codes to international African applicants.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-2">
            <span className="font-code text-[11px] font-bold text-rose-800 block flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              02. WOMEN IN LEADERSHIP
            </span>
            <p className="leading-relaxed">
              Targeted pathways and dedicated selection criteria for young women across STEM, healthcare, and civic governance.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-2">
            <span className="font-code text-[11px] font-bold text-emerald-800 block flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              03. ZERO ADMISSIONS FEES
            </span>
            <p className="leading-relaxed">
              Every profile links directly to the official university registrar or foundation. Zero agents, zero intermediary kickbacks.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHATSAPP BROADCAST BANNER (Beige & Fresh Emerald Accent) */}
      <section className="p-8 bg-[#F0FDF4] border border-emerald-200 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 max-w-xl">
          <div className="font-code text-xs uppercase tracking-wider text-emerald-800 flex items-center gap-2 font-bold">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Official Broadcast Channel</span>
          </div>
          <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#161412]">
            Get Verified Deadline Alerts on WhatsApp
          </h4>
          <p className="text-xs sm:text-sm text-[#453F38] leading-relaxed font-sans">
            Direct notifications for newly opened intake dates, eligibility checklists, and CSS Profile fee waiver codes from Nexus Lab.
          </p>
        </div>

        <a
          href={siteConfig.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 bg-emerald-700 hover:bg-emerald-800 text-white font-code text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0 shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{siteConfig.whatsappButtonLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </section>

    </div>
  );
};
