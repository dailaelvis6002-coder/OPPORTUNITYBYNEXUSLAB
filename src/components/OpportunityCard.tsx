import React from 'react';
import { ScholarshipRecord } from '../types';
import { getOpportunityImage } from '../data/images';
import { 
  Bookmark, 
  ArrowRight, 
  MapPin, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

interface OpportunityCardProps {
  scholarship: ScholarshipRecord;
  onSelect: (scholarship: ScholarshipRecord) => void;
  onHover?: (scholarship: ScholarshipRecord) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  showThumbnail?: boolean;
  featured?: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  scholarship,
  onSelect,
  onHover,
  isSaved = false,
  onToggleSave,
  showThumbnail = false,
  featured = false
}) => {
  const isFullyFunded = scholarship.fundingClassification === 'Fully funded';
  const photo = showThumbnail || featured 
    ? getOpportunityImage(scholarship.itemNumber, scholarship.provider) 
    : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      onMouseEnter={() => onHover && onHover(scholarship)}
      onClick={() => onSelect(scholarship)}
      className={`group relative p-5 bg-white hover:bg-[#FFFDFB] border transition-all duration-300 flex flex-col justify-between text-left gap-4 cursor-pointer shadow-xs hover:shadow-md ${
        featured 
          ? 'border-red-400/80 ring-1 ring-red-400/30' 
          : 'border-[#E6DFD3] hover:border-red-500'
      }`}
    >
      {/* Top Tag & Actions */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-code text-[10px] uppercase tracking-wider px-2 py-0.5 bg-red-50 text-red-700 font-bold border border-red-200">
              #{String(scholarship.itemNumber).padStart(2, '0')} · {scholarship.fundingClassification.toUpperCase()}
            </span>

            {scholarship.girlsWomenRelevance?.isPriority && (
              <span className="font-code text-[10px] uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 flex items-center gap-1 font-semibold">
                <Heart className="w-2.5 h-2.5 fill-rose-600 text-rose-600 inline" />
                For Young Women
              </span>
            )}

            <span className="font-code text-[10px] text-emerald-700 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {scholarship.status}
            </span>
          </div>

          {onToggleSave && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(scholarship.id);
              }}
              className={`p-1.5 transition-colors cursor-pointer rounded-xs ${
                isSaved 
                  ? 'text-red-600 bg-red-50 border border-red-200' 
                  : 'text-[#9E9589] hover:text-[#161412] hover:bg-[#F3EFE6]'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save opportunity'}
              aria-label={isSaved ? 'Remove from saved' : 'Save opportunity'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Featured Photo Thumbnail for Pan-African / Key Flagships */}
        {photo && (
          <div className="relative w-full h-40 overflow-hidden border border-[#E6DFD3] bg-[#F3EFE6]">
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between font-code text-[9px] uppercase tracking-wider text-white">
              <span className="bg-[#D92626] px-1.5 py-0.5 font-bold shadow-xs">{photo.tag}</span>
              <span className="text-white font-medium drop-shadow-xs">{scholarship.country}</span>
            </div>
          </div>
        )}

        {/* Title in Cormorant Garamond */}
        <h3 className="font-editorial text-2xl sm:text-[26px] font-semibold text-[#161412] group-hover:text-[#D92626] transition-colors leading-[1.15]">
          {scholarship.name}
        </h3>

        {/* Provider, Host & Country */}
        <div className="font-code text-[11px] text-[#6A635B] flex flex-wrap items-center gap-1.5 pt-0.5">
          <span className="text-[#161412] font-semibold">{scholarship.provider}</span>
          {scholarship.institution && scholarship.institution !== scholarship.provider && (
            <>
              <span className="text-[#9E9589]">/</span>
              <span className="text-[#6A635B]">{scholarship.institution}</span>
            </>
          )}
          <span className="text-[#9E9589]">·</span>
          <span className="text-red-700 font-medium">{scholarship.country}</span>
        </div>

        {/* Brief Overview / Assessment */}
        <p className="text-xs text-[#524B43] leading-relaxed line-clamp-2 pt-1 font-sans">
          {scholarship.editorialAssessment}
        </p>

        {/* Itemized Coverage Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {scholarship.fundingCoverageItemized.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="font-code text-[10px] px-1.5 py-0.5 bg-[#FAF7F2] border border-[#E6DFD3] text-[#524B43] truncate max-w-[200px]"
            >
              ✓ {item}
            </span>
          ))}
          {scholarship.fundingCoverageItemized.length > 3 && (
            <span className="font-code text-[10px] px-1.5 py-0.5 text-[#9E9589]">
              +{scholarship.fundingCoverageItemized.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Meta & Action */}
      <div className="pt-3 border-t border-[#E6DFD3] flex items-center justify-between gap-3 font-code text-[11px]">
        <span className="text-[#6A635B] truncate">
          Cycle: <strong className="text-[#161412] font-semibold">{scholarship.deadline}</strong>
        </span>

        <span className="text-[#D92626] group-hover:text-[#B91C1C] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0">
          <span>Audit Sheet</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.article>
  );
};
