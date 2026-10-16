import React from 'react';
import { ScholarshipRecord } from '../types';
import { 
  Bookmark, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  MapPin,
  Calendar
} from 'lucide-react';
import { motion } from 'motion/react';

interface OpportunityCardProps {
  scholarship: ScholarshipRecord;
  onSelect: (scholarship: ScholarshipRecord) => void;
  onHover?: (scholarship: ScholarshipRecord) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  featured?: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  scholarship,
  onSelect,
  onHover,
  isSaved = false,
  onToggleSave,
  featured = false
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      whileHover={{ y: -2 }}
      onMouseEnter={() => onHover && onHover(scholarship)}
      onClick={() => onSelect(scholarship)}
      className={`group relative p-6 bg-white hover:bg-[#FFFDF9] border transition-all duration-200 flex flex-col justify-between text-left gap-5 cursor-pointer shadow-xs hover:shadow-md ${
        featured 
          ? 'border-amber-400 ring-1 ring-amber-400/25' 
          : 'border-[#E5DFD5] hover:border-amber-500'
      }`}
    >
      {/* 1. Header Metadata (Clean unboxed text, no pill-boxes) */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap text-xs text-[#5E5953] font-code">
            <span className="font-bold text-[#D97706] tracking-wider">
              #{String(scholarship.itemNumber).padStart(2, '0')}
            </span>
            <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
            <span className="font-semibold text-[#0E0D11] uppercase tracking-wider text-[11px]">
              {scholarship.fundingClassification}
            </span>
            
            {scholarship.girlsWomenRelevance?.isPriority && (
              <>
                <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
                <span className="text-amber-800 font-semibold flex items-center gap-1 text-[11px]">
                  <Heart className="w-3 h-3 fill-amber-500 text-amber-500 inline" />
                  Young Women
                </span>
              </>
            )}

            <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
            <span className="text-emerald-700 font-medium flex items-center gap-1 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {scholarship.status}
            </span>
          </div>

          {onToggleSave && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(scholarship.id);
              }}
              className={`p-1.5 transition-colors cursor-pointer rounded-xs shrink-0 ${
                isSaved 
                  ? 'text-amber-700 bg-amber-50 border border-amber-300' 
                  : 'text-[#8A847C] hover:text-[#0E0D11] hover:bg-[#F3EFEA]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save opportunity'}
              aria-label={isSaved ? 'Remove from saved' : 'Save opportunity'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* 2. Scholarship Name in Cormorant Garamond */}
        <h3 className="font-editorial text-2xl sm:text-[26px] font-semibold text-[#0E0D11] group-hover:text-[#D97706] transition-colors leading-[1.2]">
          {scholarship.name}
        </h3>

        {/* 3. Provider, Host Institution & Country */}
        <div className="font-sans text-xs text-[#5E5953] flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-[#0E0D11] font-semibold">{scholarship.provider}</span>
          {scholarship.institution && scholarship.institution !== scholarship.provider && (
            <>
              <span className="text-[#C2BCB2]">/</span>
              <span className="text-[#5E5953]">{scholarship.institution}</span>
            </>
          )}
          <span className="text-[#C2BCB2]">·</span>
          <span className="text-[#8C5A0C] font-medium flex items-center gap-0.5">
            <MapPin className="w-3 h-3 text-[#D97706]" />
            {scholarship.country}
          </span>
        </div>

        {/* 4. Brief Editorial Assessment */}
        <p className="text-xs sm:text-[13px] text-[#4A4643] leading-relaxed line-clamp-2 pt-1 font-sans">
          {scholarship.editorialAssessment}
        </p>

        {/* 5. Itemized Coverage List */}
        <div className="flex flex-wrap gap-1.5 pt-1.5 font-sans">
          {scholarship.fundingCoverageItemized.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2 py-0.5 bg-[#FAF8F5] border border-[#E5DFD5] text-[#4A4643] rounded-xs"
            >
              ✓ {item}
            </span>
          ))}
          {scholarship.fundingCoverageItemized.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-[#8A847C] font-code">
              +{scholarship.fundingCoverageItemized.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* 6. Footer: Deadline & Action */}
      <div className="pt-4 border-t border-[#E5DFD5] flex items-center justify-between gap-3 font-code text-xs">
        <span className="text-[#5E5953] flex items-center gap-1.5 truncate">
          <Calendar className="w-3.5 h-3.5 text-[#8A847C]" />
          <span>Deadline: <strong className="text-[#0E0D11] font-semibold tabular-nums">{scholarship.deadline}</strong></span>
        </span>

        <span className="text-[#D97706] group-hover:text-[#B45309] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform shrink-0">
          <span>Audit Record</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.article>
  );
};
