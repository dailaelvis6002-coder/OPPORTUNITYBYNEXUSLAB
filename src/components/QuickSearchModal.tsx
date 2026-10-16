import React, { useState, useEffect, useRef } from 'react';
import { ScholarshipRecord } from '../types';
import { SCHOLARSHIPS_CATALOGUE } from '../data/scholarshipsCatalogue';
import { Search, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectScholarship
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? SCHOLARSHIPS_CATALOGUE.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.provider.toLowerCase().includes(q) ||
          (item.institution && item.institution.toLowerCase().includes(q)) ||
          item.country.toLowerCase().includes(q) ||
          item.region.toLowerCase().includes(q) ||
          item.fundingClassification.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : SCHOLARSHIPS_CATALOGUE.slice(0, 5);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-start justify-center p-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          className="relative w-full max-w-2xl bg-white border border-[#E5DFD5] shadow-2xl overflow-hidden text-left"
        >
          {/* Search Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-[#E5DFD5] bg-[#FAF8F5]">
            <Search className="w-5 h-5 text-[#8A847C] mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by scholarship, provider, country, or funding type..."
              className="w-full text-sm font-medium text-[#0E0D11] placeholder-[#8A847C] bg-transparent outline-hidden font-sans"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-[#8A847C] hover:text-[#0E0D11] rounded-xs mr-2 cursor-pointer"
                aria-label="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-[#5E5953] bg-white border border-[#E5DFD5] rounded-xs">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1 bg-white">
            <div className="px-3 py-1.5 text-[10px] font-bold text-[#716D66] uppercase tracking-wider font-code">
              {query.trim() ? `Search Results (${results.length})` : 'Featured Verified Opportunities'}
            </div>

            {results.length === 0 ? (
              <div className="py-12 text-center text-sm text-[#5E5953] font-sans">
                No verified opportunity matched "{query}".
              </div>
            ) : (
              results.map((opp) => (
                <button
                  key={opp.id}
                  onClick={() => {
                    onSelectScholarship(opp);
                    onClose();
                  }}
                  className="w-full text-left p-3 hover:bg-[#FAF8F5] border border-transparent hover:border-[#E5DFD5] flex items-center justify-between gap-3 group transition-colors cursor-pointer rounded-xs"
                >
                  <div className="flex items-start gap-3 truncate">
                    <span className="font-mono text-xs text-[#D97706] font-bold pt-0.5 tabular-nums">#{String(opp.itemNumber).padStart(2, '0')}</span>
                    <div className="truncate">
                      <div className="font-bold text-sm text-[#0E0D11] group-hover:text-[#D97706] truncate font-editorial">
                        {opp.name}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#5E5953] mt-0.5 truncate font-sans">
                        <span>{opp.provider}</span>
                        <span>·</span>
                        <span>{opp.country}</span>
                        <span>·</span>
                        <span className="font-semibold text-emerald-800">{opp.fundingClassification}</span>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-[#8A847C] group-hover:text-[#D97706] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 bg-[#FAF8F5] border-t border-[#E5DFD5] flex items-center justify-between text-[11px] text-[#5E5953] font-code">
            <span>65 Audited Records • Strict Source Control</span>
            <span>Use ↑↓ to navigate, Enter to select</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
