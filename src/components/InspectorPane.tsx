import React, { useState } from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { siteConfig } from '../data/config';
import { getOpportunityImage } from '../data/images';
import { 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Bookmark, 
  Heart, 
  Sparkles, 
  Clock, 
  Building2, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  MessageCircle,
  Eye,
  SlidersHorizontal,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InspectorPaneProps {
  activeScholarship: ScholarshipRecord | null;
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onNavigate: (page: PageId) => void;
  onOpenQuickSearch: () => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export const InspectorPane: React.FC<InspectorPaneProps> = ({
  activeScholarship,
  onSelectScholarship,
  onNavigate,
  onOpenQuickSearch,
  isSaved = false,
  onToggleSave
}) => {
  const [viewMode, setViewMode] = useState<'record' | 'audit'>('record');

  const photo = activeScholarship 
    ? getOpportunityImage(activeScholarship.itemNumber, activeScholarship.provider)
    : null;

  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px] bg-[#F7F3EB] border-l border-[#E6DFD3] p-6 flex flex-col justify-between gap-6 text-left text-[#161412] flex-shrink-0 min-h-full">
      
      {/* 1. Header with Mode Toggle */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E6DFD3]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D92626] animate-pulse" />
            <span className="font-code text-[11px] uppercase tracking-wider text-[#D92626] font-bold">
              Editorial Inspector
            </span>
          </div>

          <div className="flex items-center bg-[#EAE3D5] p-0.5 rounded-xs font-code text-[10px]">
            <button
              onClick={() => setViewMode('record')}
              className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'record' ? 'bg-[#D92626] text-white font-bold' : 'text-[#6A635B] hover:text-[#161412]'
              }`}
            >
              Active Record
            </button>
            <button
              onClick={() => setViewMode('audit')}
              className={`px-2 py-0.5 transition-colors cursor-pointer rounded-xs ${
                viewMode === 'audit' ? 'bg-[#D92626] text-white font-bold' : 'text-[#6A635B] hover:text-[#161412]'
              }`}
            >
              Registry Audit
            </button>
          </div>
        </div>

        {/* 2. Main Content: Active Record or Global Audit */}
        <AnimatePresence mode="wait">
          {viewMode === 'record' && activeScholarship ? (
            <motion.div
              key={activeScholarship.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              {/* Record Number, Region & Save Button */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap font-code text-[11px]">
                  <span className="text-[#D92626] font-bold bg-red-50 px-2 py-0.5 border border-red-200">
                    RECORD #{String(activeScholarship.itemNumber).padStart(2, '0')}
                  </span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {activeScholarship.status}
                  </span>
                </div>

                {onToggleSave && (
                  <button
                    onClick={() => onToggleSave(activeScholarship.id)}
                    className={`p-1.5 transition-colors cursor-pointer rounded-xs ${
                      isSaved ? 'text-red-600 bg-red-100 border border-red-300' : 'text-[#9E9589] hover:text-[#161412] hover:bg-white'
                    }`}
                    title={isSaved ? 'Saved to bookmarks' : 'Bookmark record'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                )}
              </div>

              {/* Title in Cormorant Garamond */}
              <div>
                <h3 
                  onClick={() => onSelectScholarship(activeScholarship)}
                  className="font-editorial text-2xl font-bold text-[#161412] leading-tight hover:text-[#D92626] transition-colors cursor-pointer"
                >
                  {activeScholarship.name}
                </h3>
                <div className="font-code text-[11px] text-[#6A635B] pt-1 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[#161412] font-semibold">{activeScholarship.provider}</span>
                  <span className="text-[#9E9589]">·</span>
                  <span className="text-red-700 font-medium">{activeScholarship.country}</span>
                </div>
              </div>

              {/* Curated Photographic Snippet with Authentic African Scholars */}
              {photo && (
                <div className="relative group overflow-hidden border border-[#E6DFD3] rounded-none h-36 w-full shadow-xs">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-code text-[9px] uppercase tracking-wider text-white">
                    <span className="px-1.5 py-0.5 bg-[#D92626] font-bold">{photo.tag}</span>
                    <span className="text-white truncate max-w-[200px] drop-shadow-xs">{activeScholarship.institution || activeScholarship.provider}</span>
                  </div>
                </div>
              )}

              {/* Itemized Coverage Checklist */}
              <div className="p-3.5 bg-white border border-[#E6DFD3] space-y-2 shadow-xs">
                <div className="font-code text-[10px] uppercase tracking-wider text-[#6A635B] flex items-center justify-between">
                  <span>Coverage Scope</span>
                  <span className="text-[#D92626] font-bold">{activeScholarship.fundingClassification}</span>
                </div>
                <div className="space-y-1.5 font-sans text-xs text-[#453F38]">
                  {activeScholarship.fundingCoverageItemized.slice(0, 3).map((cov, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{cov}</span>
                    </div>
                  ))}
                  {activeScholarship.fundingCoverageItemized.length > 3 && (
                    <div className="font-code text-[10px] text-[#9E9589] pt-0.5">
                      + {activeScholarship.fundingCoverageItemized.length - 3} additional covered items
                    </div>
                  )}
                </div>
              </div>

              {/* Women in Leadership Initiative Indicator */}
              {activeScholarship.girlsWomenRelevance?.isPriority && (
                <div className="p-3 bg-rose-50 border border-rose-200 flex items-start gap-2.5">
                  <Heart className="w-4 h-4 fill-rose-600 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-left">
                    <div className="font-code text-[10px] uppercase tracking-wider text-rose-800 font-bold">
                      Women Leadership Priority
                    </div>
                    <p className="font-sans text-[11px] text-rose-900 leading-relaxed line-clamp-2">
                      {activeScholarship.girlsWomenRelevance.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Editorial Assessment */}
              <div className="space-y-1 text-left">
                <span className="font-code text-[10px] uppercase tracking-wider text-[#6A635B]">
                  Nexus Lab Audit Takeaway
                </span>
                <p className="font-sans text-xs text-[#453F38] leading-relaxed italic border-l-2 border-[#D92626] pl-3">
                  “{activeScholarship.editorialAssessment}”
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-code text-xs">
                <button
                  onClick={() => onSelectScholarship(activeScholarship)}
                  className="py-2.5 px-3 bg-[#D92626] hover:bg-[#B91C1C] text-white font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Audit</span>
                </button>

                <a
                  href={activeScholarship.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-white border border-[#E6DFD3] hover:border-[#161412] text-[#161412] transition-colors flex items-center justify-center gap-1.5 font-medium shadow-xs"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#6A635B]" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="audit"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-5"
            >
              {/* Stat Block 1: Verified Principles */}
              <div className="border-l-2 border-[#D92626] pl-4 space-y-1 bg-white p-3 border border-[#E6DFD3] shadow-xs">
                <div className="font-editorial text-4xl sm:text-5xl font-bold leading-none text-[#161412]">
                  01.
                </div>
                <div className="font-code text-[11px] uppercase tracking-wider text-[#161412] font-bold pt-1">
                  Verified Principles
                </div>
                <p className="text-xs text-[#524B43] leading-relaxed font-sans pt-1">
                  Dignity over pity. Academic excellence is distributed equally; access is not. We exist to close this gap for African students.
                </p>
              </div>

              {/* Stat Block 2: Women In Leadership Initiative */}
              <div className="border-l-2 border-rose-500 pl-4 space-y-1 bg-white p-3 border border-[#E6DFD3] shadow-xs">
                <div className="font-editorial text-4xl sm:text-5xl font-bold leading-none text-rose-600">
                  02.
                </div>
                <div className="font-code text-[11px] uppercase tracking-wider text-[#161412] font-bold pt-1">
                  Women In Leadership
                </div>
                <p className="text-xs text-[#524B43] leading-relaxed font-sans pt-1">
                  Dedicated pathways to ensure equitable access and targeted scholarships for ambitious young women across the continent.
                </p>
              </div>

              {/* Stat Block 3: Strict Source Control */}
              <div className="border-l-2 border-emerald-600 pl-4 space-y-1 bg-white p-3 border border-[#E6DFD3] shadow-xs">
                <div className="font-editorial text-4xl sm:text-5xl font-bold leading-none text-emerald-700">
                  65
                </div>
                <div className="font-code text-[11px] uppercase tracking-wider text-[#161412] font-bold pt-1">
                  Audited Opportunities
                </div>
                <p className="text-xs text-[#524B43] leading-relaxed font-sans pt-1">
                  Zero invented scholarships, zero clickbait fees, direct institutional links only.
                </p>
              </div>

              {/* HALI Guides Fast Link */}
              <div className="p-3 bg-white border border-[#E6DFD3] space-y-1.5 shadow-xs">
                <div className="font-code text-[10px] uppercase tracking-wider text-amber-700 font-bold">
                  CSS Profile & Fee Waivers
                </div>
                <p className="text-xs text-[#524B43] font-sans">
                  Never pay $50–$90 application fees. Learn how African counselors can sign official hardship waivers.
                </p>
                <button
                  onClick={() => onNavigate('resources')}
                  className="font-code text-[11px] text-[#D92626] hover:text-[#B91C1C] font-semibold flex items-center gap-1 pt-1 cursor-pointer"
                >
                  <span>Read Waiver Playbook</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Bottom Actions & WhatsApp Community */}
      <div className="space-y-3 pt-4 border-t border-[#E6DFD3]">
        <div className="font-code text-[10px] uppercase tracking-wider text-[#6A635B] mb-1">
          Direct Guidance & Channels
        </div>

        {/* WhatsApp Channel CTA Button */}
        <a
          href={siteConfig.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-code text-xs font-semibold uppercase tracking-wider rounded-none flex items-center justify-center gap-2 transition-colors cursor-pointer text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{siteConfig.whatsappButtonLabel}</span>
        </a>

        {/* Browse Records Button */}
        <button
          onClick={() => onNavigate('scholarships')}
          className="w-full py-2.5 px-4 bg-white border border-[#E6DFD3] hover:border-[#161412] text-[#161412] font-code text-xs uppercase tracking-wider rounded-none flex items-center justify-center gap-2 transition-all cursor-pointer text-center font-medium shadow-xs"
        >
          <span>Explore All 65 Records</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D92626]" />
        </button>

        {/* Quick Search trigger */}
        <button
          onClick={onOpenQuickSearch}
          className="w-full py-1 text-center font-code text-[10px] text-[#6A635B] hover:text-[#161412] transition-colors cursor-pointer"
        >
          Press <kbd className="px-1.5 py-0.5 bg-[#EAE3D5] text-[#161412] rounded-xs font-bold">Ctrl + K</kbd> to search catalogue
        </button>
      </div>

    </aside>
  );
};
