import React, { useState } from 'react';
import { ScholarshipRecord } from '../types';
import { 
  X, 
  ExternalLink, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  FileText, 
  Check, 
  Printer, 
  AlertCircle,
  Clock,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface OpportunityModalProps {
  scholarship: ScholarshipRecord | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const OpportunityModal: React.FC<OpportunityModalProps> = ({
  scholarship,
  onClose,
  isSaved,
  onToggleSave
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'assessment' | 'coverage' | 'eligibility' | 'procedure'>('assessment');

  if (!scholarship) return null;

  const handleShare = async () => {
    const shareData = {
      title: `${scholarship.name} — OpportunitybyNexusLab`,
      text: `Audit & details for ${scholarship.name} (${scholarship.fundingClassification}) via OpportunitybyNexusLab:`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white text-[#0E0D11]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 14 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-none shadow-2xl border border-[#E5DFD5] overflow-hidden my-auto max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#F3EFEA] px-6 py-4 flex items-center justify-between gap-4 border-b border-[#E5DFD5] font-code text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-[#D97706] font-bold">#{String(scholarship.itemNumber).padStart(2, '0')}</span>
              <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
              <span className="font-semibold text-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {scholarship.status}
              </span>
              <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
              <span className="text-[#5E5953]">Audited {scholarship.verifiedReviewDate}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onToggleSave(scholarship.id)}
                className={`p-1.5 rounded-xs transition-colors cursor-pointer ${
                  isSaved ? 'bg-amber-100 text-[#B45309] border border-amber-300' : 'text-[#5E5953] hover:text-[#0E0D11] hover:bg-white'
                }`}
                title={isSaved ? 'Saved to bookmarks' : 'Bookmark record'}
                aria-label={isSaved ? 'Saved to bookmarks' : 'Bookmark record'}
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-1.5 text-[#5E5953] hover:text-[#0E0D11] hover:bg-white rounded-xs transition-colors cursor-pointer"
                title="Share link"
                aria-label="Share link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => window.print()}
                className="hidden sm:flex p-1.5 text-[#5E5953] hover:text-[#0E0D11] hover:bg-white rounded-xs transition-colors cursor-pointer"
                title="Print checklist"
                aria-label="Print checklist"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-[#5E5953] hover:text-[#0E0D11] hover:bg-white rounded-xs transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Copy Toast */}
          {copied && (
            <div className="bg-emerald-800 text-white font-code text-xs font-bold py-1.5 px-4 text-center">
              Direct opportunity link copied to clipboard.
            </div>
          )}

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-6 text-left bg-[#FAF8F5]">
            
            {/* Title in Cormorant Garamond */}
            <div>
              <div className="font-code text-xs uppercase tracking-wider text-[#D97706] mb-2 flex items-center gap-2 font-bold flex-wrap">
                <span>{scholarship.region}</span>
                <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
                <span className="font-bold text-[#0E0D11]">{scholarship.fundingClassification}</span>
                <span aria-hidden="true" className="text-[#C2BCB2]">·</span>
                <span>{scholarship.studyLevel}</span>
              </div>

              <h1 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#0E0D11] tracking-tight leading-snug">
                {scholarship.name}
              </h1>

              <div className="mt-2 text-sm font-semibold text-[#4A4643] flex items-center gap-2 font-sans flex-wrap">
                <Building2 className="w-4 h-4 text-[#D97706] shrink-0" />
                <span className="text-[#0E0D11] font-bold">{scholarship.provider}</span>
                {scholarship.institution && scholarship.institution !== scholarship.provider && (
                  <>
                    <span className="text-[#C2BCB2]">/</span>
                    <span className="text-[#5E5953] font-normal">{scholarship.institution}</span>
                  </>
                )}
              </div>
            </div>

            {/* Quick Fact Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white border border-[#E5DFD5] font-sans text-xs shadow-xs">
              <div>
                <span className="block text-[10px] uppercase font-code tracking-wider text-[#716D66] mb-1 font-bold">
                  Destination
                </span>
                <div className="flex items-center gap-1 font-semibold text-[#0E0D11]">
                  <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span className="truncate">{scholarship.country}</span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-code tracking-wider text-[#716D66] mb-1 font-bold">
                  Degree Level
                </span>
                <div className="flex items-center gap-1 font-semibold text-[#0E0D11]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                  <span className="truncate">{scholarship.studyLevel}</span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-code tracking-wider text-[#716D66] mb-1 font-bold">
                  Deadline
                </span>
                <div className="flex items-center gap-1 font-bold text-[#D97706] font-code">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate tabular-nums">{scholarship.deadline}</span>
                </div>
              </div>

              <div>
                <span className="block text-[10px] uppercase font-code tracking-wider text-[#716D66] mb-1 font-bold">
                  Status
                </span>
                <div className="flex items-center gap-1 font-semibold text-emerald-800">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{scholarship.status}</span>
                </div>
              </div>
            </div>

            {/* Girls Priority Notice */}
            {scholarship.girlsWomenRelevance?.isPriority && (
              <div className="p-4 bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-xs">
                <Heart className="w-4 h-4 fill-amber-500 text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="block font-code uppercase tracking-wider text-[11px] text-amber-900 font-bold">
                    Female Scholar Priority Commitment:
                  </strong>
                  <span className="font-sans text-[#4A4643] leading-relaxed">{scholarship.girlsWomenRelevance.description}</span>
                </div>
              </div>
            )}

            {/* Tabbed In-Depth Review */}
            <div>
              <div className="flex border-b border-[#E5DFD5] gap-4 sm:gap-6 font-code text-xs overflow-x-auto">
                {[
                  { id: 'assessment', label: 'Editorial Assessment' },
                  { id: 'coverage', label: 'Itemized Funding' },
                  { id: 'eligibility', label: 'Eligibility & Target' },
                  { id: 'procedure', label: 'How to Apply' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-2.5 transition-colors relative cursor-pointer uppercase tracking-wider font-bold whitespace-nowrap shrink-0 ${
                      activeTab === tab.id ? 'text-[#0E0D11] border-b-2 border-[#D97706]' : 'text-[#716D66] hover:text-[#0E0D11]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="pt-5 space-y-4 font-sans">
                {activeTab === 'assessment' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-[#E5DFD5] shadow-xs space-y-1.5">
                      <h4 className="font-code font-bold text-[#D97706] text-xs uppercase tracking-wider">Audit Findings</h4>
                      <p className="text-[#4A4643] leading-relaxed">
                        {scholarship.editorialAssessment}
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#E5DFD5] space-y-1 shadow-xs">
                      <h4 className="font-code text-xs uppercase tracking-wider text-[#716D66] font-bold mb-1">Target Profile</h4>
                      <p className="text-[#4A4643] leading-relaxed">
                        {scholarship.targetAudience}
                      </p>
                    </div>

                    <div className="p-4 bg-white border border-[#E5DFD5] space-y-1 shadow-xs">
                      <h4 className="font-code text-xs uppercase tracking-wider text-[#716D66] font-bold mb-1">Eligible Nationalities</h4>
                      <p className="text-[#4A4643] leading-relaxed">
                        {scholarship.eligibleNationalities}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'coverage' && (
                  <div className="space-y-3 text-xs sm:text-sm">
                    <p className="text-[#5E5953] text-xs font-sans">
                      The catalogue explicitly itemizes benefits to distinguish full scholarships from partial awards:
                    </p>
                    <div className="space-y-2">
                      {scholarship.fundingCoverageItemized.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 bg-white border border-[#E5DFD5] text-[#4A4643] shadow-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'eligibility' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-[#E5DFD5] shadow-xs">
                      <h4 className="font-code text-xs uppercase tracking-wider text-[#716D66] font-bold mb-2">Eligibility Criteria</h4>
                      <ul className="space-y-2">
                        {scholarship.eligibilityCriteria.map((c, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[#4A4643]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] mt-2 shrink-0" />
                            <span className="leading-relaxed">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {scholarship.requiredDocuments && scholarship.requiredDocuments.length > 0 && (
                      <div className="p-4 bg-white border border-[#E5DFD5] shadow-xs">
                        <h4 className="font-code text-xs uppercase tracking-wider text-[#716D66] font-bold mb-2">Required Application Documents</h4>
                        <div className="space-y-1.5">
                          {scholarship.requiredDocuments.map((doc, i) => (
                            <div key={i} className="flex items-center gap-2 text-[#4A4643]">
                              <FileText className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'procedure' && (
                  <div className="space-y-4 text-xs sm:text-sm">
                    <div className="p-4 bg-white border border-[#E5DFD5] shadow-xs">
                      <h4 className="font-code text-xs uppercase tracking-wider text-[#716D66] font-bold mb-2">Step-by-Step Procedure</h4>
                      <ol className="space-y-3">
                        {scholarship.applicationProcedure.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 bg-[#FAF8F5] border border-[#E5DFD5] text-[#D97706] font-code text-xs font-bold flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span className="text-[#4A4643] pt-0.5 leading-relaxed font-medium">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2 shadow-xs">
                      <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                      <div>
                        <strong>Notice:</strong> Always apply through the verified official link below. Never pay application fees to commercial intermediaries.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Sticky Modal Bottom Footer */}
          <div className="sticky bottom-0 z-20 bg-[#F3EFEA] px-6 py-4 border-t border-[#E5DFD5] flex flex-col sm:flex-row items-center justify-between gap-3 font-code text-xs">
            <span className="text-[#5E5953]">
              Official institutional portal opens in new tab.
            </span>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 text-[#0E0D11] hover:bg-white border border-[#E5DFD5] transition-colors cursor-pointer uppercase tracking-wider font-bold rounded-xs"
              >
                Close
              </button>

              <a
                href={scholarship.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#0E0D11] hover:bg-[#25232B] text-white font-bold transition-all cursor-pointer uppercase tracking-wider rounded-xs shadow-xs"
              >
                <span>Visit Official Source</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
