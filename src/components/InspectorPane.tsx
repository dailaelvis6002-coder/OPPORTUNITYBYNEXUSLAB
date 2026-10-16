import React, { useState } from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { siteConfig } from '../data/config';
import { 
  ShieldCheck, 
  ExternalLink, 
  ArrowRight, 
  Bookmark, 
  Heart, 
  MapPin, 
  GraduationCap, 
  CheckCircle2, 
  MessageCircle,
  Eye,
  Calendar,
  Sparkles
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

  return (
    <aside className="w-full lg:w-[380px] xl:w-[420px] bg-[#F7F4EE] border-l border-[#E5DFD5] p-6 flex flex-col justify-between gap-6 text-left text-[#0E0D11] shrink-0 min-h-full">
      
      {/* 1. Header with Mode Toggle */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E5DFD5]">
          <div className="flex items-center gap-2">
            <span className="font-code text-[11px] uppercase tracking-wider text-[#0E0D11] font-bold">
              Live Record Inspector
            </span>
          </div>

          <div className="flex items-center bg-[#EBE5DB] p-0.5 rounded-xs font-code text-[10px]">
            <button
              onClick={() => setViewMode('record')}
              className={`px-2.5 py-1 transition-colors cursor-pointer rounded-xs font-semibold ${
                viewMode === 'record' ? 'bg-[#0E0D11] text-white' : 'text-[#5E5953] hover:text-[#0E0D11]'
              }`}
            >
              Selected
            </button>
            <button
              onClick={() => setViewMode('audit')}
              className={`px-2.5 py-1 transition-colors cursor-pointer rounded-xs font-semibold ${
                viewMode === 'audit' ? 'bg-[#0E0D11] text-white' : 'text-[#5E5953] hover:text-[#0E0D11]'
              }`}
            >
              Audit Stats
            </button>
          </div>
        </div>

        {/* 2. Main Content: Active Record or Global Audit */}
        <AnimatePresence mode="wait">
          {viewMode === 'record' && activeScholarship ? (
            <motion.div
              key={activeScholarship.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="space-y-4"
            >
              {/* Record Number & Status */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap font-code text-xs">
                  <span className="text-[#D97706] font-bold bg-amber-50 px-2 py-0.5 border border-amber-200">
                    RECORD #{String(activeScholarship.itemNumber).padStart(2, '0')}
                  </span>
                  <span className="text-emerald-800 font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 border border-emerald-200 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    {activeScholarship.status}
                  </span>
                </div>

                {onToggleSave && (
                  <button
                    onClick={() => onToggleSave(activeScholarship.id)}
                    className={`p-1.5 transition-colors cursor-pointer rounded-xs ${
                      isSaved ? 'text-amber-800 bg-amber-100 border border-amber-300' : 'text-[#8A847C] hover:text-[#0E0D11] hover:bg-white'
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
                  className="font-editorial text-2xl font-bold text-[#0E0D11] leading-tight hover:text-[#D97706] transition-colors cursor-pointer"
                >
                  {activeScholarship.name}
                </h3>
                <div className="font-sans text-xs text-[#5E5953] pt-1 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[#0E0D11] font-semibold">{activeScholarship.provider}</span>
                  <span className="text-[#C2BCB2]">·</span>
                  <span className="text-[#8C5A0C] font-medium">{activeScholarship.country}</span>
                </div>
              </div>

              {/* Institutional Overview Card */}
              <div className="p-4 bg-white border border-[#E5DFD5] space-y-2.5 shadow-xs">
                <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                  <div className="space-y-0.5">
                    <span className="font-code text-[10px] uppercase text-[#716D66] block">Study Level</span>
                    <span className="font-semibold text-[#0E0D11] flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#D97706]" />
                      {activeScholarship.studyLevel}
                    </span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-code text-[10px] uppercase text-[#716D66] block">Location</span>
                    <span className="font-semibold text-[#0E0D11] flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
                      {activeScholarship.country} ({activeScholarship.region})
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E5DFD5] flex items-center justify-between font-code text-xs">
                  <span className="text-[#5E5953] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#8A847C]" />
                    Cycle Deadline:
                  </span>
                  <span className="font-bold text-[#0E0D11] tabular-nums">{activeScholarship.deadline}</span>
                </div>
              </div>

              {/* Itemized Coverage Checklist */}
              <div className="p-4 bg-white border border-[#E5DFD5] space-y-2 shadow-xs">
                <div className="font-code text-[10px] uppercase tracking-wider text-[#5E5953] flex items-center justify-between">
                  <span>Coverage Scope</span>
                  <span className="text-[#D97706] font-bold">{activeScholarship.fundingClassification}</span>
                </div>
                <div className="space-y-1.5 font-sans text-xs text-[#4A4643]">
                  {activeScholarship.fundingCoverageItemized.slice(0, 4).map((cov, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{cov}</span>
                    </div>
                  ))}
                  {activeScholarship.fundingCoverageItemized.length > 4 && (
                    <div className="font-code text-[10px] text-[#8A847C] pt-0.5">
                      + {activeScholarship.fundingCoverageItemized.length - 4} additional covered items
                    </div>
                  )}
                </div>
              </div>

              {/* Women in Leadership Indicator */}
              {activeScholarship.girlsWomenRelevance?.isPriority && (
                <div className="p-3 bg-amber-50/70 border border-amber-200 flex items-start gap-2.5">
                  <Heart className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-left font-sans">
                    <div className="font-code text-[10px] uppercase tracking-wider text-amber-900 font-bold">
                      Women Leadership Priority
                    </div>
                    <p className="text-xs text-amber-900 leading-relaxed line-clamp-2">
                      {activeScholarship.girlsWomenRelevance.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Editorial Assessment */}
              <div className="p-3.5 bg-white border border-[#E5DFD5] space-y-1 text-left font-sans shadow-xs">
                <span className="font-code text-[10px] uppercase tracking-wider text-[#D97706] font-bold block">
                  Nexus Lab Audit Takeaway
                </span>
                <p className="text-xs text-[#4A4643] leading-relaxed italic">
                  “{activeScholarship.editorialAssessment}”
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-sans text-xs">
                <button
                  onClick={() => onSelectScholarship(activeScholarship)}
                  className="py-2.5 px-3 bg-[#0E0D11] hover:bg-[#26242E] text-white font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Full Audit</span>
                </button>

                <a
                  href={activeScholarship.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-white border border-[#E5DFD5] hover:border-[#0E0D11] text-[#0E0D11] transition-colors flex items-center justify-center gap-1.5 font-semibold shadow-xs"
                >
                  <span>Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-[#5E5953]" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="audit"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16 }}
              className="space-y-4"
            >
              {/* Stat Block 1 */}
              <div className="border border-[#E5DFD5] bg-white p-4 space-y-1 shadow-xs">
                <div className="font-editorial text-4xl font-bold leading-none text-[#0E0D11]">
                  01.
                </div>
                <div className="font-code text-xs uppercase tracking-wider text-[#D97706] font-bold pt-1">
                  Direct Source Control
                </div>
                <p className="text-xs text-[#5E5953] leading-relaxed font-sans pt-1">
                  Every published claim about eligibility, funding, and deadlines is supported by accredited institutional primary sources.
                </p>
              </div>

              {/* Stat Block 2 */}
              <div className="border border-[#E5DFD5] bg-white p-4 space-y-1 shadow-xs">
                <div className="font-editorial text-4xl font-bold leading-none text-[#0E0D11]">
                  02.
                </div>
                <div className="font-code text-xs uppercase tracking-wider text-amber-800 font-bold pt-1">
                  Women in Higher Education
                </div>
                <p className="text-xs text-[#5E5953] leading-relaxed font-sans pt-1">
                  Dedicated pathways to ensure equitable access and targeted scholarships for ambitious young women across the continent.
                </p>
              </div>

              {/* Stat Block 3 */}
              <div className="border border-[#E5DFD5] bg-white p-4 space-y-1 shadow-xs">
                <div className="font-editorial text-4xl font-bold leading-none text-[#D97706]">
                  65
                </div>
                <div className="font-code text-xs uppercase tracking-wider text-[#0E0D11] font-bold pt-1">
                  Audited Opportunities
                </div>
                <p className="text-xs text-[#5E5953] leading-relaxed font-sans pt-1">
                  Zero invented scholarships, zero clickbait fees, direct institutional links only.
                </p>
              </div>

              {/* HALI Guides Link */}
              <div className="p-4 bg-white border border-[#E5DFD5] space-y-1.5 shadow-xs">
                <div className="font-code text-xs uppercase tracking-wider text-[#0E0D11] font-bold">
                  Fee Waiver Playbook
                </div>
                <p className="text-xs text-[#5E5953] font-sans">
                  Never pay $50–$90 application fees. Learn how African counselors can sign official hardship waivers.
                </p>
                <button
                  onClick={() => onNavigate('resources')}
                  className="font-code text-xs text-[#D97706] hover:text-[#B45309] font-bold flex items-center gap-1 pt-1 cursor-pointer"
                >
                  <span>Read Playbook</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Bottom Actions */}
      <div className="space-y-3 pt-4 border-t border-[#E5DFD5]">
        <div className="font-code text-[10px] uppercase tracking-wider text-[#716D66] mb-1">
          Direct Guidance & Channels
        </div>

        {/* WhatsApp Channel CTA Button */}
        <a
          href={siteConfig.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 bg-[#0E0D11] hover:bg-[#25232B] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-amber-400 fill-current" />
          <span>{siteConfig.whatsappButtonLabel}</span>
        </a>

        {/* Quick Search trigger */}
        <button
          onClick={onOpenQuickSearch}
          className="w-full py-1 text-center font-code text-xs text-[#716D66] hover:text-[#0E0D11] transition-colors cursor-pointer"
        >
          Press <kbd className="px-1.5 py-0.5 bg-[#EBE5DB] text-[#0E0D11] rounded-xs font-bold">Ctrl + K</kbd> to search
        </button>
      </div>

    </aside>
  );
};
