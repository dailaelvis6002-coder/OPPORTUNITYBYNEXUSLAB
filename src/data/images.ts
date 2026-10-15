/**
 * Curated Photographic Assets for OpportunitybyNexusLab
 * Strictly controlled placement:
 * 1. Home Page — Academic Leadership Spotlight
 * 2. For Girls Page — Young Women in Higher Education & Leadership
 * 3. Guides & Toolkits Page — Application & Financial Aid Preparation
 * 
 * ZERO repetitive images on individual scholarship cards or candidate profiles.
 */

import africanCampusImg from '../assets/images/african_scholars_campus_1792026742129.jpg';
import africanFemaleScholarImg from '../assets/images/african_female_scholar_1792026757538.jpg';
import africanGraduatesImg from '../assets/images/african_graduates_celebration_1792026772601.jpg';
import africanStemEngineerImg from '../assets/images/african_stem_engineer_1792057432707.jpg';

export interface SectionImage {
  url: string;
  alt: string;
  caption: string;
  tag: string;
}

export const SECTION_IMAGES = {
  // 1. Home Page Hero / Spotlight: Pan-African Campus & Academic Leadership
  homeSpotlight: {
    url: africanCampusImg,
    alt: 'African university students collaborating outside university faculty on modern campus',
    caption: 'Pan-African Academic Leadership — Mastercard Foundation Scholars & Partner Universities',
    tag: 'Academic Leadership'
  },

  // 2. For Girls Page: Young African Women in Higher Education & STEM
  womenInStem: {
    url: africanFemaleScholarImg,
    alt: 'Young African woman university scholar studying in modern academic library',
    caption: 'Dedicated Pathways for Young African Women in Higher Education & Leadership',
    tag: 'Young Women Priority'
  },

  // 3. Guides Page: Preparation, Application Dossier & Peer Guidance
  guidesToolkit: {
    url: africanStemEngineerImg,
    alt: 'Young African scholar focused on advanced technical preparation and laboratory work',
    caption: 'HALI Application Toolkit — Fee Waivers, Recommendation Letters & Admissions Strategy',
    tag: 'Admissions Preparation'
  }
};
