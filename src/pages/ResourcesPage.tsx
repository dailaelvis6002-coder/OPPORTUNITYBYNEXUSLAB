import React, { useState } from 'react';
import { SECTION_IMAGES } from '../data/images';
import { 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ResourcesPage: React.FC = () => {
  const [openGuide, setOpenGuide] = useState<number | null>(0);

  const guides = [
    {
      title: 'CSS Profile International Fee Waiver Codes',
      category: 'Financial Aid Documentation',
      summary: 'The College Board charges $25 for the initial CSS Profile application and $16 per university. For low-income international students, this is often prohibitive. Learn how to secure fee waiver codes directly from universities.',
      content: [
        'Many partner institutions (such as NYU Abu Dhabi, Amherst, Dartmouth, Bowdoin, and Colby) provide institutional CSS Profile waiver codes to prospective applicants upon email request.',
        'Always check the university financial aid office page for an "International Student Financial Aid Form" (ISFAF) or direct waiver request form before paying any fees.',
        'When emailing admissions offices, write clearly: state your application ID, explain your family household income context, and request an international CSS Profile payment waiver code.',
        'Alternatively, several institutions accept an official International Student Financial Aid PDF document uploaded directly through the applicant status portal, bypassing College Board charges completely.'
      ]
    },
    {
      title: 'Common Application Counselor Fee Waiver',
      category: 'Application Submissions',
      summary: 'You do not have to pay $50–$90 per university application fee. The Common App allows high school counselors to verify financial hardship.',
      content: [
        'In the Common App Profile section, check "Yes" under the Common App Fee Waiver request question.',
        'Select the criteria that best reflects your circumstances (e.g., family income qualifies for local poverty assistance, student is an orphan, or counselor can attest to severe financial hardship).',
        'Your high school principal, headteacher, or counselor must complete the counselor section on their school portal confirming that paying application fees would present a significant hardship for your household.',
        'Once approved by your counselor, the waiver applies to all participating colleges on your application list automatically.'
      ]
    },
    {
      title: 'Writing Personal Statements with Dignity (Moving Beyond Pity)',
      category: 'Essays & Narrative',
      summary: 'Admissions committees at top global universities look for intellectual vitality, resilience, and personal agency, not tragic trauma narratives.',
      content: [
        'Focus on Growth and Action: While it is important to explain your context (e.g. lack of electricity, attending resource-limited rural schools, or supporting younger siblings), dedicate at least 60% of your essay to how you responded and what intellectual passions emerged.',
        'Highlight Curiosity: Discuss what books you read, questions you investigated, science experiments you improvised, or community peer study groups you organized.',
        'Demonstrate Agency: Emphasize your initiative. You are the protagonist of your life story, not a passive recipient of circumstance.',
        'Avoid Exaggerations: Admissions officers have reviewed thousands of essays; authenticity, concrete details, and honesty resonate far more than overly dramatic prose.'
      ]
    },
    {
      title: 'Guide for African Teachers Writing Recommendation Letters',
      category: 'Academic Credentials',
      summary: 'Many secondary school teachers in Francophone and Anglophone Africa are not accustomed to US/UK style recommendation letters. Here is how to guide them.',
      content: [
        'Letters should be typed on official school letterhead, signed with an official ink stamp, and include the teacher\'s official contact information.',
        'Provide your teacher with a "Brag Sheet": a bulleted summary of your academic achievements, science lab projects, class rankings, and specific moments when you asked insightful questions or helped classmates.',
        'Ask teachers to focus on specific anecdotes: a moment when you tackled a difficult math theorem or led a student debate is much more powerful than generic adjectives like "very hardworking".',
        'If the teacher writes in French, obtain an accurate, certified English translation alongside the original signed French document.'
      ]
    },
    {
      title: 'English Proficiency Testing & Institutional Waivers',
      category: 'Language Requirements',
      summary: 'Standard IELTS/TOEFL exams can cost $200–$250. Explore test waivers and low-cost digital alternatives.',
      content: [
        'Medium of Instruction Letters: If your secondary education was conducted in English (e.g., in Ghana, Nigeria, Kenya, Uganda, Rwanda, etc.), many institutions waive standardized English exams upon receiving an official school letter confirming English as the language of instruction.',
        'Duolingo English Test (DET): Accepted by over 4,000 universities worldwide; costs $59 and offers institutional fee waivers distributed via high schools and educational access organizations.',
        'Test-Optional Policies: Most US liberal arts colleges do not require the SAT or ACT for international admission, allowing you to focus your financial resources on academic credentials.'
      ]
    }
  ];

  return (
    <div className="space-y-10 pb-16 text-left">
      
      {/* Header */}
      <div className="space-y-3 pt-2">
        <div className="font-code text-xs uppercase tracking-widest text-[#D97706] flex items-center gap-2 font-bold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>HALI PRACTICAL APPLICATION TOOLKITS</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-6xl font-normal italic leading-[0.95] text-[#0E0D11] tracking-tight">
          Financial Aid & Application Guides
        </h1>
        <p className="text-sm text-[#4A4643] max-w-2xl leading-relaxed font-sans">
          Zero-cost administrative guides to help African applicants secure fee waivers, write essays with dignity, and request teacher recommendations without paying commercial agencies.
        </p>
      </div>

      {/* 1 Dedicated Editorial Visual for Guides & Application Preparation */}
      <div className="relative overflow-hidden border border-[#E5DFD5] bg-gradient-to-r from-[#FFFDF9] via-white to-[#F5F2EC] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="space-y-3 max-w-xl font-sans">
          <div className="font-code text-xs uppercase tracking-wider text-[#D97706] font-bold flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#D97706]" />
            <span>Rigorous Admissions Preparation</span>
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#0E0D11]">
            Demystifying Global Admissions & Fee Waivers
          </h2>
          <p className="text-xs sm:text-sm text-[#4A4643] leading-relaxed">
            Navigating international application systems does not require paying millions of CFA francs to exploitative consultancies. Everything you need to craft an outstanding application is documented here step-by-step.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 font-sans text-xs">
            <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 font-semibold rounded-xs">
              ✓ Free CSS Waiver Paths
            </span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#0E0D11] border border-[#E5DFD5] font-semibold rounded-xs">
              ✓ Authentic Essay Strategy
            </span>
            <span className="px-2.5 py-1 bg-[#FAF8F5] text-[#0E0D11] border border-[#E5DFD5] font-semibold rounded-xs">
              ✓ Counselor Letters
            </span>
          </div>
        </div>

        <div className="w-full md:w-80 h-48 overflow-hidden border border-[#E5DFD5] shrink-0 group shadow-xs bg-[#EBE5DB]">
          <img
            src={SECTION_IMAGES.guidesToolkit.url}
            alt={SECTION_IMAGES.guidesToolkit.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3 font-sans">
        {guides.map((guide, idx) => {
          const isOpen = openGuide === idx;
          return (
            <div
              key={idx}
              className="border border-[#E5DFD5] bg-white transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenGuide(isOpen ? null : idx)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
              >
                <div className="space-y-1.5 pr-2">
                  <div className="font-code text-xs font-bold uppercase tracking-wider text-[#D97706]">
                    {guide.category}
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#0E0D11]">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#4A4643] leading-relaxed pt-0.5">
                    {guide.summary}
                  </p>
                </div>

                <div className="p-1.5 rounded-xs bg-[#FAF8F5] border border-[#E5DFD5] text-[#0E0D11] shrink-0 mt-2">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="px-6 pb-6 pt-2 border-t border-[#E5DFD5] bg-[#FAF8F5]"
                  >
                    <div className="space-y-3 pt-2">
                      {guide.content.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4643]">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Anti-fraud advisory */}
      <div className="p-6 bg-[#0E0D11] border border-[#2B2833] text-white flex items-start gap-4 text-xs font-sans shadow-xs rounded-xs">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block font-code uppercase tracking-wider text-amber-400 text-xs font-bold">
            Anti-Fraud Advisory
          </strong>
          <p className="leading-relaxed text-[#D4D0C8]">
            Nexus Lab does not charge students. Legitimate universities and programs never demand fees for application forms or promise admissions guarantees. All resources here are 100% free.
          </p>
        </div>
      </div>

    </div>
  );
};
