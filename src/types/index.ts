export type FundingClassification = 
  | 'Fully funded'
  | 'Tuition fully funded'
  | 'Partially funded'
  | 'Need-based financial aid'
  | 'Mobility or exchange funding'
  | 'Non-scholarship opportunity'
  | 'Funding status unverified';

export type VerificationStatus = 
  | 'Verified'
  | 'Priority lead'
  | 'Watchlist'
  | 'To be confirmed';

export type StudyLevel = 
  | 'Undergraduate'
  | 'Associate Degree / Diploma'
  | 'Postgraduate'
  | 'Pre-University / High School';

export type Region = 
  | 'Africa'
  | 'United Kingdom'
  | 'North America'
  | 'Europe'
  | 'Asia'
  | 'Middle East'
  | 'Oceania'
  | 'Global';

export interface ScholarshipRecord {
  id: string;
  itemNumber: number; // 1 to 65
  name: string;
  provider: string;
  institution?: string;
  country: string;
  region: Region;
  studyLevel: StudyLevel;
  eligibleNationalities: string;
  targetAudience: string;
  fundingClassification: FundingClassification;
  fundingCoverageItemized: string[];
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  applicationProcedure: string[];
  deadline: string;
  deadlineDate?: string;
  status: VerificationStatus;
  officialUrl: string;
  secondaryUrl?: string;
  editorialAssessment: string;
  girlsWomenRelevance?: {
    isReserved: boolean;
    isPriority: boolean;
    description: string;
  };
  notes?: string;
  verifiedReviewDate: string;
}

export type PageId = 
  | 'home' 
  | 'scholarships' 
  | 'other-opportunities' 
  | 'for-girls' 
  | 'resources' 
  | 'about' 
  | 'contact';
