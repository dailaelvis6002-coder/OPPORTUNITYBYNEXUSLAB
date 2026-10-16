import React from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { SCHOLARSHIPS_CATALOGUE } from '../data/scholarshipsCatalogue';
import { SECTION_IMAGES } from '../data/images';
import { OpportunityCard } from '../components/OpportunityCard';
import { 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen,
  ShieldCheck,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

interface ForGirlsPageProps {
  onSelectScholarship: (scholarship: ScholarshipRecord) => void;
  onHoverScholarship?: (scholarship: ScholarshipRecord) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onNavigate: (page: PageId) => void;
}

export const ForGirlsPage: React.FC<ForGirlsPageProps> = ({
  onSelectScholarship,
  onHoverScholarship,
  savedIds,
  onToggleSave,
  onNavigate
}) => {
  const femaleFocusRecords = SCHOLARSHIPS_CATALOGUE.filter(
    (s) => s.girlsWomenRelevance?.isPriority || s.girlsWomenRelevance?.isReserved
  );

  return (
    <div className="space-y-12 pb-16 text-left">
      
      {/* 1. Header with Cormorant Garamond */}
      <div className="space-y-4 pt-2">
        <div className="font-code text-xs uppercase tracking-widest text-[#D97706] flex items-center gap-2 font-bold">
          <Heart className="w-3.5 h-3.5 fill-[#D97706] text-[#D97706]" />
          <span>GIRLS & YOUNG WOMEN EDUCATIONAL ACCESS</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl font-normal italic leading-[0.95] text-[#0E0D11] tracking-tight">
          Targeted Pathways for Female Scholars
        </h1>
        <p className="text-sm text-[#4A4643] max-w-2xl leading-relaxed font-sans">
          Educating girls and young women is the single highest-leverage investment for Africa’s development. This hub gathers verified programs that provide dedicated support, institutional priority, or specialized funding for female applicants from low-income backgrounds.
        </p>
      </div>

      {/* 2. Inspiring African Women in STEM Hero Banner with Dedicated Photo */}
      <div className="relative overflow-hidden border border-[#E5DFD5] bg-gradient-to-r from-[#FFFDF9] via-white to-[#F5F2EC] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="space-y-3 max-w-xl font-sans">
          <div className="font-code text-xs uppercase tracking-wider text-[#D97706] font-bold">
            Institutional Commitment
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0E0D11]">
            Advancing Young Women in Higher Education & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4643] leading-relaxed">
            Pan-African institutions (ALU Rwanda, Ashesi Ghana, Makerere Uganda, and UCT) and philanthropic foundations prioritize ambitious young women with demonstrated leadership potential, community commitment, and academic drive.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs">
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 font-semibold rounded-xs">
              ✓ STEM & Engineering Focus
            </span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#4A4643] border border-[#E5DFD5] rounded-xs">
              ✓ 100% Tuition & Stipends
            </span>
          </div>
        </div>

        <div className="w-full md:w-80 h-48 overflow-hidden border border-[#E5DFD5] shrink-0 group shadow-xs bg-[#EBE5DB]">
          <img
            src={SECTION_IMAGES.womenInStem.url}
            alt={SECTION_IMAGES.womenInStem.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 3. Categorization Explainer */}
      <div className="p-6 sm:p-8 bg-white border border-[#E5DFD5] space-y-4 shadow-xs text-left">
        <h2 className="font-editorial text-2xl font-bold text-[#0E0D11]">
          Factual Categorization of Opportunities for Young Women
        </h2>
        
        <p className="text-xs sm:text-sm text-[#4A4643] leading-relaxed font-sans">
          In keeping with our strict reliability charter, we clearly distinguish opportunities with formal female priority from open access competitions.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2 font-sans">
          <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD5] space-y-1.5 rounded-xs">
            <div className="font-code text-xs text-[#0E0D11] font-bold">
              01. Institutional Priority & Targeted Selection
            </div>
            <p className="text-xs text-[#5E5953] leading-relaxed">
              Open to all applicants, with explicit institutional mandates (such as the Mastercard Foundation's dedicated female scholar initiative at ALU, Ashesi, UAC Benin, Makerere, and UCT) to eliminate gender disparity.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-[#E5DFD5] space-y-1.5 rounded-xs">
            <div className="font-code text-xs text-[#0E0D11] font-bold">
              02. Specialized Access Initiatives
            </div>
            <p className="text-xs text-[#5E5953] leading-relaxed">
              Regional ecosystems (such as FAWE and CAMFED national network chapters) providing scholarship leads, secondary school completion advocacy, and local mentorship cohorts.
            </p>
          </div>
        </div>
      </div>

      {/* 4. 2-column Grid of Opportunities with Girls Priority */}
      <section className="space-y-6 pt-2">
        <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-3 text-xs text-[#5E5953] font-sans">
          <span className="text-[#0E0D11] font-bold">{femaleFocusRecords.length} Opportunities with Verified Female Commitments</span>
          <span className="font-code text-[11px] text-[#716D66]">Hover or click to inspect details</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {femaleFocusRecords.map((scholarship) => (
            <OpportunityCard
              key={scholarship.id}
              scholarship={scholarship}
              onSelect={onSelectScholarship}
              onHover={onHoverScholarship}
              isSaved={savedIds.includes(scholarship.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      </section>

    </div>
  );
};
