/**
 * Curated African Scholars Photographic Assets for OpportunitybyNexusLab
 * Strict Source Control & Cultural Alignment:
 * - Exclusively authentic African students and scholars.
 * - Strict verification and institutional transparency.
 */

import africanCampusImg from '../assets/images/african_scholars_campus_1792026742129.jpg';
import africanFemaleScholarImg from '../assets/images/african_female_scholar_1792026757538.jpg';
import africanGraduatesImg from '../assets/images/african_graduates_celebration_1792026772601.jpg';
import africanStemEngineerImg from '../assets/images/african_stem_engineer_1792057432707.jpg';
import africanWomanScholarImg from '../assets/images/african_woman_scholar_1792057449432.jpg';

export interface OpportunityImage {
  url: string;
  alt: string;
  caption: string;
  tag: string;
}

export const CURATED_IMAGES = {
  // 1. Pan-African Campus & Academic Leadership (ALU, Ashesi, Mastercard Foundation)
  panAfricanCampus: {
    url: africanCampusImg,
    alt: 'African university students collaborating outside university faculty on campus',
    caption: 'Mastercard Foundation Scholars — Pan-African Academic Leadership',
    tag: 'Pan-African Flagship'
  },
  
  // 2. African Graduation & Academic Triumph
  africanGraduation: {
    url: africanGraduatesImg,
    alt: 'African university graduates celebrating degree completion in academic regalia',
    caption: 'Transformative Degree Pathways for High-Achieving African Scholars',
    tag: 'Undergraduate Full-Ride'
  },

  // 3. For Girls & Young Women in Higher Education
  africanWomenScholar: {
    url: africanFemaleScholarImg,
    alt: 'Young African woman university scholar studying with books and laptop in modern library',
    caption: 'Dedicated Pathways for Young Women in Higher Education & Leadership',
    tag: 'For Young Women'
  },

  // 4. African STEM & Engineering Innovation (IMT Mines Albi & Alès, 2iE, Polytechnique)
  africanStemEngineer: {
    url: africanStemEngineerImg,
    alt: 'Young West African engineering scholar working in technical laboratory with instruments and circuit boards',
    caption: 'African Engineering & Technological Leadership (Albi, Alès, 2iE & Global Fellowships)',
    tag: 'Engineering & STEM'
  },

  // 5. African Women in Science, Architecture & Academic Excellence
  africanWomanArchitecture: {
    url: africanWomanScholarImg,
    alt: 'African woman university scholar holding architectural blueprints and academic research books on university campus',
    caption: 'Empowering African Women in Applied Sciences, Engineering & Architecture',
    tag: 'Applied Sciences'
  }
};

/**
 * Returns strictly authentic African students imagery for any scholarship item.
 * Guaranteed 0% non-African/white imagery across all opportunity and member cards.
 */
export function getOpportunityImage(itemNumber: number, provider: string): OpportunityImage {
  const p = provider.toLowerCase();
  
  if (p.includes('women') || p.includes('girls') || [7, 30, 48].includes(itemNumber)) {
    return CURATED_IMAGES.africanWomanArchitecture;
  }

  if (p.includes('engineer') || p.includes('technology') || p.includes('mines') || p.includes('polytech') || [1, 20, 21, 36, 37, 41].includes(itemNumber)) {
    return CURATED_IMAGES.africanStemEngineer;
  }

  if (itemNumber % 3 === 0) {
    return CURATED_IMAGES.africanWomenScholar;
  }

  if (itemNumber % 2 === 0) {
    return CURATED_IMAGES.africanGraduation;
  }

  return CURATED_IMAGES.panAfricanCampus;
}

