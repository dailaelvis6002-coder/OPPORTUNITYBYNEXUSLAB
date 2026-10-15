import React from 'react';
import { ScholarshipRecord, PageId } from '../types';
import { SCHOLARSHIPS_CATALOGUE } from '../data/scholarshipsCatalogue';
import { CURATED_IMAGES } from '../data/images';
import { OpportunityCard } from '../components/OpportunityCard';
import { 
  Heart, 
  ArrowRight, 
  Sparkles, 
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
        <div className="font-code text-xs uppercase tracking-widest text-rose-700 flex items-center gap-2 font-bold">
          <Heart className="w-3.5 h-3.5 fill-rose-600 text-rose-600" />
          <span>GIRLS & YOUNG WOMEN EDUCATIONAL ACCESS</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl font-normal italic leading-[0.95] text-[#161412] tracking-tight">
          Targeted Pathways for Female Scholars
        </h1>
        <p className="text-sm text-[#524B43] max-w-2xl leading-relaxed pt-1 font-sans">
          Educating girls and young women is the single highest-leverage investment for Africa’s development. This hub gathers verified programs that provide dedicated support, institutional priority, or specialized funding for female applicants from low-income backgrounds.
        </p>
      </div>

      {/* 2. Inspiring African Women in STEM Hero Banner with Generated Photo */}
      <div className="relative overflow-hidden border border-rose-200 bg-gradient-to-r from-rose-50 via-white to-[#FAF7F2] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-3 max-w-xl">
          <div className="font-code text-[11px] uppercase tracking-wider text-rose-700 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
            <span>Institutional Commitment</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#161412]">
            Advancing Young Women in Higher Education & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-[#524B43] leading-relaxed font-sans">
            Pan-African institutions (ALU Rwanda, Ashesi Ghana, Makerere Uganda, and UCT) and philanthropic foundations prioritize ambitious young women with demonstrated leadership potential, community commitment, and academic drive.
          </p>
        </div>

        <div className="w-full md:w-72 h-44 overflow-hidden border border-[#E6DFD3] flex-shrink-0 group shadow-xs">
          <img
            src={CURATED_IMAGES.africanWomenScholar.url}
            alt={CURATED_IMAGES.africanWomenScholar.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* 3. Categorization Explainer */}
      <div className="p-6 sm:p-8 bg-white border border-[#E6DFD3] space-y-4 shadow-xs">
        <h2 className="font-editorial text-2xl font-bold text-[#161412]">
          Factual Categorization of Opportunities for Young Women
        </h2>
        
        <p className="text-xs sm:text-sm text-[#524B43] leading-relaxed font-sans">
          In keeping with our strict reliability charter, we clearly distinguish opportunities with formal female priority from open access competitions.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-2 font-sans">
          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-1.5">
            <div className="font-code text-xs text-rose-800 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Institutional Priority & Targeted Selection</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed">
              Open to all applicants, with explicit institutional mandates (such as the Mastercard Foundation's dedicated female scholar initiative at ALU, Ashesi, UAC Benin, Makerere, and UCT) to eliminate gender disparity.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-1.5">
            <div className="font-code text-xs text-[#161412] font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#7A7167]" />
              <span>Specialized Access Initiatives</span>
            </div>
            <p className="text-xs text-[#524B43] leading-relaxed">
              Regional ecosystems (such as FAWE and CAMFED national network chapters) providing scholarship leads, secondary school completion advocacy, and local mentorship cohorts.
            </p>
          </div>
        </div>
      </div>

      {/* 4. 2-column Grid of Opportunities with Girls Priority */}
      <section className="space-y-6 pt-2">
        <div className="flex items-center justify-between border-b border-[#E6DFD3] pb-3 font-code text-xs text-[#6A635B]">
          <span className="text-[#161412] font-bold">{femaleFocusRecords.length} Opportunities with Verified Female Commitments</span>
          <span>Hover to inspect in right pane</span>
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
              showThumbnail={scholarship.itemNumber <= 4}
            />
          ))}
        </div>
      </section>

      {/* 5. Practical Advice Section */}
      <section className="p-8 bg-white border border-[#E6DFD3] space-y-6 shadow-xs">
        <div>
          <span className="font-code text-xs font-bold uppercase tracking-widest text-rose-700">
            Practical Strategy
          </span>
          <h3 className="font-editorial text-3xl font-semibold text-[#161412] mt-1">
            Advice for Female Applicants from Disadvantaged Backgrounds
          </h3>
          <p className="text-xs sm:text-sm text-[#524B43] mt-1 max-w-2xl leading-relaxed font-sans">
            Major scholarship selection committees look for young women who demonstrate leadership in their families, secondary schools, and local communities:
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 text-xs text-[#524B43] font-sans">
          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-1.5">
            <h4 className="font-bold text-[#161412] font-code text-xs">1. Highlight Informal Leadership</h4>
            <p className="leading-relaxed">
              Family responsibilities, peer tutoring, and youth club initiatives count as legitimate leadership. Articulate how managing household adversity built resilience.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-1.5">
            <h4 className="font-bold text-[#161412] font-code text-xs">2. Connect to Community Giveback</h4>
            <p className="leading-relaxed">
              Pan-African committees prioritize candidates who show an enduring commitment to returning value to their home communities upon graduation.
            </p>
          </div>

          <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD3] space-y-1.5">
            <h4 className="font-bold text-[#161412] font-code text-xs">3. Use Free Test & Fee Waivers</h4>
            <p className="leading-relaxed">
              Never pay out-of-pocket for application fees. Check our <button onClick={() => onNavigate('resources')} className="text-[#D92626] underline font-bold cursor-pointer">HALI Resources</button> section for step-by-step guidance.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
