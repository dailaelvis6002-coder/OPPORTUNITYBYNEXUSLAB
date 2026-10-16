import React from 'react';
import { ScholarshipRecord } from '../types';
import { Bookmark, X, ArrowRight, Trash2, Calendar, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookmarksModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedScholarships: ScholarshipRecord[];
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  isOpen,
  onClose,
  savedScholarships,
  onSelectScholarship,
  onRemoveBookmark,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative w-full max-w-md bg-[#FAF8F5] border-l border-[#E5DFD5] h-full shadow-2xl flex flex-col text-left"
        >
          {/* Header */}
          <div className="p-5 border-b border-[#E5DFD5] bg-[#F3EFEA] text-[#0E0D11] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xs bg-amber-50 text-[#D97706] flex items-center justify-center border border-amber-200">
                <Bookmark className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-base font-editorial">Saved Opportunities</h3>
                <span className="text-xs text-[#5E5953] font-code">
                  {savedScholarships.length} {savedScholarships.length === 1 ? 'scholarship' : 'scholarships'} tracked
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#5E5953] hover:text-[#0E0D11] hover:bg-white rounded-xs transition-colors cursor-pointer"
              aria-label="Close bookmarks"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FAF8F5]">
            {savedScholarships.length === 0 ? (
              <div className="text-center py-20 px-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EBE5DB] text-[#716D66] flex items-center justify-center mx-auto">
                  <Bookmark className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#0E0D11]">No bookmarked opportunities yet</h4>
                <p className="text-xs text-[#5E5953] max-w-xs mx-auto leading-relaxed font-sans">
                  Click the bookmark icon on any scholarship card to save records for comparison and application tracking.
                </p>
              </div>
            ) : (
              savedScholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="p-4 bg-white border border-[#E5DFD5] space-y-2.5 shadow-xs hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-code text-[10px] text-[#D97706] font-bold bg-amber-50 px-2 py-0.5 border border-amber-200">
                      #{String(scholarship.itemNumber).padStart(2, '0')} · {scholarship.fundingClassification}
                    </span>
                    <button
                      onClick={() => onRemoveBookmark(scholarship.id)}
                      className="text-[#8A847C] hover:text-[#D97706] p-1 transition-colors cursor-pointer"
                      title="Remove bookmark"
                      aria-label="Remove bookmark"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4
                    onClick={() => {
                      onSelectScholarship(scholarship);
                      onClose();
                    }}
                    className="font-editorial text-lg font-bold text-[#0E0D11] hover:text-[#D97706] transition-colors cursor-pointer line-clamp-2 leading-snug"
                  >
                    {scholarship.name}
                  </h4>

                  <div className="flex items-center justify-between text-[11px] text-[#5E5953] pt-2 border-t border-[#E5DFD5] font-code">
                    <span className="truncate max-w-[180px]">{scholarship.country}</span>
                    <button
                      onClick={() => {
                        onSelectScholarship(scholarship);
                        onClose();
                      }}
                      className="text-[#D97706] hover:text-[#B45309] font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Audit</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {savedScholarships.length > 0 && (
            <div className="p-4 border-t border-[#E5DFD5] bg-[#F3EFEA] flex items-center justify-between font-code text-xs">
              <button
                onClick={onClearAll}
                className="text-[#5E5953] hover:text-[#0E0D11] transition-colors cursor-pointer"
              >
                Clear all bookmarks
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#0E0D11] hover:bg-[#25232B] text-white font-bold transition-colors cursor-pointer shadow-xs rounded-xs"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
