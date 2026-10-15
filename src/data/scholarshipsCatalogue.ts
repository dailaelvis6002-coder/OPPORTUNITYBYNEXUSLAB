import { ScholarshipRecord } from '../types';

export const SCHOLARSHIPS_CATALOGUE: ScholarshipRecord[] = [
  // --- PART 1: PRIORITY AFRICAN SCHOLARSHIPS (01 - 27) ---
  {
    id: 'alu-mastercard-foundation',
    itemNumber: 1,
    name: 'Mastercard Foundation Scholars Program — African Leadership University (ALU)',
    provider: 'Mastercard Foundation',
    institution: 'African Leadership University (ALU Rwanda & Mauritius)',
    country: 'Rwanda / Mauritius',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African citizens (Pan-African)',
    targetAudience: 'High-achieving African youth demonstrating socioeconomic disadvantage, financial barriers, and leadership potential.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and institutional fees',
      'On-campus accommodation or residential support',
      'Living stipend and books allowance',
      'Laptop and technical connectivity support',
      'Comprehensive health coverage',
      'Leadership training and career placement'
    ],
    eligibilityCriteria: [
      'Citizen of an African country',
      'Demonstrated academic excellence and intellectual curiosity',
      'Proven financial need and socioeconomic disadvantage',
      'Leadership track record and commitment to community giveback',
      'Priority consideration for young women, refugees, and displaced youth'
    ],
    requiredDocuments: [
      'ALU undergraduate admission application',
      'High school national exam certificates and transcripts',
      'Household income / financial need evidence',
      'Essays on leadership and community impact',
      'Identity document (National ID or Passport)'
    ],
    applicationProcedure: [
      'Complete the ALU undergraduate admission application first.',
      'Eligible applicants receive access to the Mastercard Foundation Scholarship supplementary form.',
      'Submit financial proof and leadership essays.',
      'Selected candidates are invited for virtual interviews.'
    ],
    deadline: 'Intake-specific (multiple annual cohorts — verify active cycle)',
    status: 'Verified',
    officialUrl: 'https://www.alueducation.com/mastercard-foundation-scholars-program-at-alu/',
    editorialAssessment: 'High-priority pan-African undergraduate opportunity with explicit financial-need targeting and strong leadership infrastructure.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'The Mastercard Foundation officially prioritizes young women across scholar cohorts to advance gender equity and academic leadership.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'ashesi-mastercard-foundation',
    itemNumber: 2,
    name: 'Mastercard Foundation Scholars Program — Ashesi University',
    provider: 'Mastercard Foundation',
    institution: 'Ashesi University',
    country: 'Ghana',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African citizens (Sub-Saharan Africa)',
    targetAudience: 'Academically talented African students facing severe economic barriers to university education.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and university registration fees',
      'Campus housing and meal allowance',
      'Books, stationery, and learning supplies',
      'Transportation / international travel assistance where applicable',
      'Health insurance coverage',
      'Leadership development, career coaching, and internship placement'
    ],
    eligibilityCriteria: [
      'African nationality and secondary school graduation with high honors',
      'Demonstrated socioeconomic disadvantage and financial need',
      'Proven ethical leadership and community service commitment',
      'Meet Ashesi University undergraduate admission criteria'
    ],
    requiredDocuments: [
      'Ashesi University admission application',
      'Mastercard Foundation Scholars application supplement',
      'WASSCE, Baccalauréat, or equivalent secondary school certificates',
      'Household financial documentation and referee verification',
      'Personal statements on ethics and societal impact'
    ],
    applicationProcedure: [
      'Submit Ashesi University online application.',
      'Complete concurrent scholarship application before designated deadline.',
      'Financial assessment and background verification.',
      'Interviews conducted with shortlisted candidates.'
    ],
    deadline: 'Next undergraduate call pending confirmation (Verify current portal dates)',
    status: 'Verified',
    officialUrl: 'https://ashesi.edu.gh/the-mastercard-foundation-scholars-program/',
    editorialAssessment: 'High-quality African undergraduate option. Distinct from Ashesi institutional aid; offers comprehensive full-cost coverage.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Maintains strong focus on young women pursuing Engineering, Computer Science, and Business Administration.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'uac-benin-mastercard-foundation',
    itemNumber: 3,
    name: 'Mastercard Foundation Scholars Program — University of Abomey-Calavi (UAC)',
    provider: 'Mastercard Foundation',
    institution: 'Université d\'Abomey-Calavi (UAC)',
    country: 'Benin',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Beninese and African citizens (Francophone priority)',
    targetAudience: 'Baccalauréat holders from economically modest backgrounds committed to community development.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition fees for selected Bachelor’s and professional engineering/agronomy tracks',
      'Monthly living stipend',
      'Housing assistance or dormitory accommodation',
      'Health insurance',
      'Laptop and digital learning materials',
      'Mentorship and entrepreneurship incubation'
    ],
    eligibilityCriteria: [
      'Hold an accredited Baccalauréat (Series C, D, E, F or equivalent with honors)',
      'Demonstrated financial hardship preventing university enrollment',
      'Maximum age of 23–24 at date of application',
      'Commitment to return and contribute to national or regional development'
    ],
    requiredDocuments: [
      'Official Baccalauréat certificate and transcripts',
      'Proof of household income / certificate of indigence from local municipality',
      'Birth certificate and national identity card',
      'Motivation letter describing community leadership vision',
      'Recommendation letters'
    ],
    applicationProcedure: [
      'Review official call on UAC Mastercard Foundation portal.',
      'Submit application file to the programme coordination unit.',
      'Shortlisting and home socio-economic verification visit.',
      'Final jury selection announcement.'
    ],
    deadline: 'Next call to confirm (Annual Francophone cohort)',
    status: 'Priority lead',
    officialUrl: 'https://www.fondationmastercard-uac.org/en/a-propos',
    editorialAssessment: 'Vital Francophone West African route for students seeking world-class training in an accessible French-language academic environment.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Actively recruits female baccalaureate holders in STEM and Agronomy disciplines.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'makerere-mastercard-foundation',
    itemNumber: 4,
    name: 'Mastercard Foundation Scholars Program — Makerere University',
    provider: 'Mastercard Foundation',
    institution: 'Makerere University',
    country: 'Uganda',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of Sub-Saharan African countries',
    targetAudience: 'Academically gifted youth constrained by socioeconomic, geographic, or conflict-related barriers.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and institutional functional fees',
      'Hostel accommodation on or near campus',
      'Monthly meal and personal upkeep allowance',
      'Books, stationery, and laptop support',
      'Comprehensive medical insurance',
      'Psychosocial support, mentorship, and career transition'
    ],
    eligibilityCriteria: [
      'Qualified for Makerere University direct undergraduate entry',
      'Severe socioeconomic disadvantage documented through community verification',
      'Age limits as defined in active call (typically under 25 for bachelor’s)',
      'Special priority given to female candidates, refugees, and students with disabilities'
    ],
    requiredDocuments: [
      'Secondary school completion certificates (UCE, UACE, or international equivalent)',
      'Detailed household asset and income disclosure form',
      'Proof of refugee status where applicable',
      'Birth certificate / National ID / Passport',
      'Academic reference letters'
    ],
    applicationProcedure: [
      'Register on the official Makerere Mastercard Foundation application portal.',
      'Fill in biographical, academic, and financial background sections.',
      'Attach certified academic and vulnerability evidence.',
      'Undergo panel interviews and physical background verification checks.'
    ],
    deadline: 'Cycle-specific (Verify current 2027 intake call on application portal)',
    status: 'Verified',
    officialUrl: 'https://apply.mastercardfoundation.mak.ac.ug/scholarships',
    editorialAssessment: 'High-priority pan-African route with a dedicated official application portal and an explicit focus on overcoming financial barriers.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Targeted institutional priority, leadership coaching, and support network for young women entering higher education.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'usiu-africa-mastercard-foundation',
    itemNumber: 5,
    name: 'Mastercard Foundation Scholars Program — USIU-Africa',
    provider: 'Mastercard Foundation',
    institution: 'United States International University Africa (USIU-Africa)',
    country: 'Kenya',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African citizens (Pan-African)',
    targetAudience: 'African youth facing severe financial and socioeconomic hurdles.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition fees and mandatory university levies',
      'Accommodation and structured meal plan',
      'Textbooks, laptop, and learning materials',
      'Medical insurance coverage',
      'Monthly stipend and local transport',
      'Leadership training and entrepreneurship incubation'
    ],
    eligibilityCriteria: [
      'Qualified for USIU-Africa undergraduate admission',
      'Documented financial need and lack of alternative means to attend university',
      'Strong academic potential and commitment to give back to African communities',
      'Special focus on women, refugees, displaced youth, and persons with disabilities'
    ],
    requiredDocuments: [
      'USIU-Africa admission and scholarship application forms',
      'High school completion certificates and national examination results',
      'Financial aid questionnaire with parent/guardian verification',
      'Identity documents'
    ],
    applicationProcedure: [
      'Download or complete the official scholarship application on the USIU-Africa website.',
      'Submit certified copies of academic results and financial statements.',
      'Shortlisted applicants undergo committee review and background checks.'
    ],
    deadline: 'Next undergraduate cycle pending confirmation (Consult active call)',
    status: 'Priority lead',
    officialUrl: 'https://www.usiu.ac.ke/',
    editorialAssessment: 'Priority lead. Funding package is comprehensive once the new call is officially verified.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Actively recruits young women and marginalized female applicants.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'uct-mastercard-foundation',
    itemNumber: 6,
    name: 'Mastercard Foundation Scholars Program — University of Cape Town (UCT)',
    provider: 'Mastercard Foundation',
    institution: 'University of Cape Town',
    country: 'South Africa',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of African countries',
    targetAudience: 'Academically talented African school-leavers facing significant social or economic barriers.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full cost of tuition and UCT fees',
      'University residence accommodation and meal allowance',
      'Living stipend and book allowance',
      'Return economy airfare from home country to Cape Town',
      'Medical aid coverage and South African study visa cost reimbursement',
      'Holistic academic, psychosocial, and career development support'
    ],
    eligibilityCriteria: [
      'Citizen of an African country applying for first undergraduate degree',
      'Must have applied for academic admission to UCT for the relevant cycle',
      'Demonstrated high academic achievement and severe financial disadvantage',
      'Clear commitment to return and advance development on the African continent'
    ],
    requiredDocuments: [
      'UCT online academic admission application',
      'Mastercard Foundation scholarship supplementary form',
      'Secondary school senior examination transcripts (e.g. WASSCE, Baccalauréat, KCSE, A-Levels)',
      'Verified household income statements and affidavits'
    ],
    applicationProcedure: [
      'Apply for academic admission to UCT first.',
      'Submit the UCT Mastercard Foundation Scholars application before the closing date.',
      'Applications evaluated jointly by admissions and scholarship panels.'
    ],
    deadline: '2027 cycle closed on 30 Sept 2026; next cycle opens mid-2027 for 2028 intake',
    status: 'Watchlist',
    officialUrl: 'https://uct.ac.za/mastercardfdn/apply-mastercard-foundation-scholars-program',
    editorialAssessment: 'Prestigious African institution. Profile maintained for upcoming intake planning; clearly flagged as cycle-closed for current term.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Priority consideration for female scholars across STEM and Humanities faculties.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'uwc-mastercard-foundation',
    itemNumber: 7,
    name: 'Mastercard Foundation Scholars Program — University of the Western Cape (UWC)',
    provider: 'Mastercard Foundation',
    institution: 'University of the Western Cape',
    country: 'South Africa',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'South African and Pan-African students',
    targetAudience: 'Youth with leadership promise who lack financial means to fund university studies.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and study fees',
      'On-campus accommodation and meal allowance',
      'Monthly living stipend and book allowance',
      'Medical aid cover',
      'Leadership seminars and academic mentoring'
    ],
    eligibilityCriteria: [
      'Academic admission to an eligible full-time UWC degree programme',
      'Financial disadvantage and community leadership orientation',
      'Meet course-specific prerequisites'
    ],
    requiredDocuments: [
      'UWC admission and scholarship application forms',
      'School leaving transcripts and certified diploma copies',
      'Household income evidence and certified affidavit',
      'Personal essays'
    ],
    applicationProcedure: [
      'Apply to UWC undergraduate faculty.',
      'Complete partner scholarship application according to the active call instructions.',
      'Committee review and award notification.'
    ],
    deadline: 'Next call to confirm (Annual call cycle)',
    status: 'Priority lead',
    officialUrl: 'https://www.uwc.ac.za/study/partnerships/mastercard-foundation-scholars-program',
    editorialAssessment: 'Useful southern African pathway. Requires matching against eligible degrees listed in the active call.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Prioritizes young women and first-generation university students.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'ruforum-tagdev-mastercard',
    itemNumber: 8,
    name: 'TAGDev 2.0 — RUFORUM & Mastercard Foundation Partner Universities',
    provider: 'RUFORUM & Mastercard Foundation',
    institution: 'Participating African Universities (e.g. Egerton, Gulu, Mohammed VI Polytechnic, etc.)',
    country: 'Multiple African Countries',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African citizens',
    targetAudience: 'Students passionate about agriculture, agribusiness, climate-smart food systems, and rural transformation.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition and research fees at participating university',
      'Accommodation and living stipend',
      'Practical field internship and agribusiness incubation funding',
      'Medical insurance',
      'Regional travel allowance where applicable'
    ],
    eligibilityCriteria: [
      'Young Africans meeting admission criteria of participating agricultural faculties',
      'Demonstrated commitment to agriculture, food security, and community innovation',
      'Priority for applicants facing financial disadvantage, women, and displaced youth'
    ],
    requiredDocuments: [
      'RUFORUM TAGDev application form',
      'Academic transcripts and certificates',
      'Motivation essay detailing agricultural enterprise or food systems vision',
      'Recommendation letters'
    ],
    applicationProcedure: [
      'Check active call on RUFORUM portal for participating universities.',
      'Submit application through designated university or RUFORUM scholarship portal.',
      'Review by regional academic committee.'
    ],
    deadline: 'Call-specific across participating institutions',
    status: 'Priority lead',
    officialUrl: 'https://ruforum.org/',
    editorialAssessment: 'High-priority pathway for agriculture, agri-tech, and food security. Must verify participating institutions per cycle.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Dedicated priority fellowship support for female agricultural scientists and rural entrepreneurs.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'dafi-unhcr-scholarship',
    itemNumber: 9,
    name: 'DAFI Tertiary Scholarship Programme — UNHCR',
    provider: 'UNHCR & German Government (Albert Einstein German Academic Refugee Initiative)',
    institution: 'Recognized tertiary institutions in asylum host countries',
    country: 'Participating Host Countries across Africa',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Refugee and asylum-seeking students in eligible host countries',
    targetAudience: 'High-achieving refugee youth living in host nations.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition and university examination fees',
      'Monthly subsistence allowance for food and accommodation',
      'Study materials, textbooks, and local transport',
      'Language classes and preparatory support where necessary',
      'Psychosocial support and student community networks'
    ],
    eligibilityCriteria: [
      'Official refugee status or asylum seeker recognized by UNHCR and host government',
      'Strong academic performance in secondary school',
      'Enrolled or accepted in an accredited undergraduate degree program in country of asylum',
      'Typically under 28 years of age at commencement of study'
    ],
    requiredDocuments: [
      'Proof of official refugee status (UNHCR certificate or refugee identity card)',
      'Certified secondary school certificates and transcripts',
      'Letter of admission or enrollment from accredited host institution',
      'DAFI application form completed through local UNHCR education partner'
    ],
    applicationProcedure: [
      'Obtain call information from local UNHCR country office or implementing NGO partner.',
      'Submit complete dossier to local DAFI selection committee.',
      'Shortlisted applicants undergo academic and vulnerability panel interviews.'
    ],
    deadline: 'Locally determined by UNHCR country delegations (Country-specific calls)',
    status: 'Verified',
    officialUrl: 'https://www.unhcr.org/what-we-do/build-better-futures/education/tertiary-education',
    editorialAssessment: 'Vital lifeline strictly for refugee and displaced students. Must not be advertised as a general scholarship for all applicants.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'UNHCR explicitly targets 50%+ female representation among DAFI recipients.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'feht-fawe-undergraduate-africa',
    itemNumber: 10,
    name: 'FEHT / FAWE Higher Education Support Lead',
    provider: 'Forum for African Women Educationalists (FAWE)',
    institution: 'Partner African Universities',
    country: 'Participating African Countries',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African young women (Country-specific chapters)',
    targetAudience: 'Young women from underprivileged backgrounds seeking higher education.',
    fundingClassification: 'Funding status unverified',
    fundingCoverageItemized: [
      'Tuition support (award details subject to active call confirmation)',
      'Mentorship and leadership development through FAWE chapters'
    ],
    eligibilityCriteria: [
      'Female secondary school leavers from participating African countries',
      'Documented academic merit and financial need',
      'Verification with local FAWE national chapter required'
    ],
    requiredDocuments: [
      'Secondary school transcripts and certificates',
      'Identity documentation',
      'Local chapter application form'
    ],
    applicationProcedure: [
      'Consult official FAWE regional notices or national chapter office.',
      'Check active call details before submitting files.'
    ],
    deadline: 'Not verified (Under active research)',
    status: 'To be confirmed',
    officialUrl: 'https://fawe.org/',
    editorialAssessment: 'Retained on internal verification register. Public claims about full funding withheld pending official scheme documentation.',
    girlsWomenRelevance: {
      isReserved: true,
      isPriority: false,
      description: 'Exclusively focused on girls and young women education.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'alu-institutional-grants',
    itemNumber: 11,
    name: 'African Leadership University — Institutional Grants',
    provider: 'African Leadership University (ALU)',
    institution: 'ALU Rwanda & Mauritius',
    country: 'Rwanda / Mauritius',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Pan-African & International',
    targetAudience: 'Admitted ALU students needing financial assistance for tuition fees.',
    fundingClassification: 'Tuition fully funded',
    fundingCoverageItemized: [
      'Tuition fee coverage (full or partial waiver)',
      'Does NOT cover living expenses, housing, flights, or meals'
    ],
    eligibilityCriteria: [
      'Admitted to an undergraduate program at ALU',
      'Demonstrated financial need assessed by ALU financial aid office',
      'Must have alternative personal or family funding to cover living expenses'
    ],
    requiredDocuments: [
      'ALU admission letter',
      'Financial aid declaration and proof of household income',
      'Plan for covering personal living expenses'
    ],
    applicationProcedure: [
      'Receive admission offer from ALU.',
      'Apply through the ALU financial aid portal during admission enrollment.',
      'Financial aid committee reviews grant tier.'
    ],
    deadline: 'Intake-aligned with ALU admission cycles',
    status: 'Verified',
    officialUrl: 'https://www.alueducation.com/financial-aid-at-alu/',
    editorialAssessment: 'Distinct from Mastercard Foundation; covers tuition only. Living costs remain student responsibility.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open equally to all admitted students with demonstrated financial need.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'ashesi-institutional-aid',
    itemNumber: 12,
    name: 'Ashesi University — Institutional Financial Aid',
    provider: 'Ashesi University Foundation',
    institution: 'Ashesi University',
    country: 'Ghana',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Ghanaian & International African students',
    targetAudience: 'Admitted students evaluated on financial need and academic merit.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      'Grants vary from partial tuition to comprehensive aid based on individual assessment',
      'May include accommodation or meal assistance depending on donor funding availability'
    ],
    eligibilityCriteria: [
      'Admitted to Ashesi University',
      'Comprehensive financial need documentation submitted during admission',
      'Demonstrated commitment to Ashesi honor code and community service'
    ],
    requiredDocuments: [
      'Ashesi financial aid application form',
      'Household bank statements, payslips, or agricultural income affidavits',
      'Tax receipts or local chief/pastor/imam verification letters',
      'Proof of siblings schooling and expenses'
    ],
    applicationProcedure: [
      'Submit financial aid form concurrently with admission application.',
      'Financial aid committee evaluates need index.',
      'Aid award included with admission decision.'
    ],
    deadline: 'Linked to Ashesi admission rounds (Round 1 & Round 2)',
    status: 'Verified',
    officialUrl: 'https://ashesi.edu.gh/scholarships/',
    editorialAssessment: 'Separate from Mastercard Foundation. Package size varies individually; not guaranteed to be fully funded for every recipient.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-based evaluation open to all eligible students.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'academic-city-merit-need-aid',
    itemNumber: 13,
    name: 'Academic City University — Merit & Need-Based Scholarships',
    provider: 'Academic City University College',
    institution: 'Academic City University College',
    country: 'Ghana',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Ghanaian and International African students',
    targetAudience: 'Students pursuing Technology, Engineering, Business, and Communication Arts.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Tuition fee reductions ranging from 20% to 50% (selected awards up to full tuition)',
      'Accommodation and meals generally remain the responsibility of the student'
    ],
    eligibilityCriteria: [
      'High academic standing (WASSCE, Baccalauréat, or A-Levels)',
      'Leadership potential and innovation mindset',
      'Satisfy English language proficiency requirements'
    ],
    requiredDocuments: [
      'Academic City admission file',
      'Scholarship application form',
      'Secondary school transcripts and certificates',
      'Personal essay on community innovation'
    ],
    applicationProcedure: [
      'Apply online for undergraduate admission.',
      'Check scholarship interest on application.',
      'Shortlisted applicants may be invited for an aptitude interview.'
    ],
    deadline: 'Aligned with semester admissions intakes',
    status: 'Priority lead',
    officialUrl: 'https://acity.edu.gh/',
    editorialAssessment: 'Useful regional option, but primarily tuition relief; students must plan for accommodation and upkeep.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Offers specialized Women in Tech bursaries.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'knust-mastercard-foundation',
    itemNumber: 14,
    name: 'Mastercard Foundation Scholars Program — KNUST',
    provider: 'Mastercard Foundation',
    institution: 'Kwame Nkrumah University of Science and Technology (KNUST)',
    country: 'Ghana',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Ghanaian and International African students',
    targetAudience: 'High-achieving school leavers from financially constrained backgrounds.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Comprehensive tuition and academic fees',
      'On-campus accommodation and food allowance',
      'Books, stationery, and laptop support',
      'Health insurance',
      'Career mentoring and leadership development'
    ],
    eligibilityCriteria: [
      'WASSCE, Baccalauréat, or equivalent qualification meeting KNUST admission benchmarks',
      'Documented financial disadvantage and barrier to tertiary study',
      'Leadership history and community service orientation'
    ],
    requiredDocuments: [
      'KNUST admissions form and Mastercard Foundation application',
      'High school examination results slips',
      'Indigence certificate or parents\' income proof',
      'Testimonial letter from headteacher'
    ],
    applicationProcedure: [
      'Download and complete official application form from KNUST Mastercard Foundation office.',
      'Submit file by post or designated portal before deadline.',
      'Interviews and home verification.'
    ],
    deadline: 'Next undergraduate call pending confirmation (Check official university portal)',
    status: 'Priority lead',
    officialUrl: 'https://www.knust.edu.gh/',
    editorialAssessment: 'Strong West African option. Keep on priority watchlist until next undergraduate cycle is confirmed.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Strategic priority given to female applicants in engineering and scientific disciplines.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'up-mastercard-foundation',
    itemNumber: 15,
    name: 'Mastercard Foundation Scholars Program — University of Pretoria',
    provider: 'Mastercard Foundation',
    institution: 'University of Pretoria',
    country: 'South Africa',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of African countries',
    targetAudience: 'Academically qualified youth from low-income households across Africa.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition fees and residence accommodation',
      'Meals and living stipend',
      'Medical aid cover and study visa assistance',
      'Books, learning materials, and laptop',
      'Return economy flight to South Africa'
    ],
    eligibilityCriteria: [
      'Admitted or provisionally admitted to full-time study at University of Pretoria',
      'Demonstrated socioeconomic need and community service history',
      'Meet course specific faculty requirements'
    ],
    requiredDocuments: [
      'UP student number / admission confirmation',
      'Mastercard Foundation application form',
      'Certified school transcripts and national exam results',
      'Financial declarations'
    ],
    applicationProcedure: [
      'Apply to University of Pretoria first.',
      'Apply for scholarship via UP international scholarship portal.',
      'Shortlisting and final selection.'
    ],
    deadline: 'Next cycle dates pending official release (Watchlist)',
    status: 'Watchlist',
    officialUrl: 'https://www.up.ac.za/',
    editorialAssessment: 'Retain as a priority lead. Historical dates must not be presented as open deadlines.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Encourages female scholars in agricultural, engineering, and data science faculties.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'pau-mastercard-foundation',
    itemNumber: 16,
    name: 'Mastercard Foundation Scholars Program — Pan-Atlantic University',
    provider: 'Mastercard Foundation',
    institution: 'Pan-Atlantic University (PAU)',
    country: 'Nigeria',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African citizens (Nigeria & regional applicants)',
    targetAudience: 'Academically strong youth facing financial constraints.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and institutional fees',
      'Campus residence and meal stipend',
      'Learning supplies and laptop',
      'Career coaching and leadership mentorship'
    ],
    eligibilityCriteria: [
      'Meet PAU admission standards (JAMB / international equivalents)',
      'Documented financial need and lack of alternative means',
      'Demonstrated ethical leadership character'
    ],
    requiredDocuments: [
      'PAU admission application and scholarship supplement',
      'High school certificates and transcripts',
      'Evidence of socioeconomic status',
      'Reference letters'
    ],
    applicationProcedure: [
      'Apply through PAU admissions portal.',
      'Complete scholarship section and attach evidence.',
      'Committee review and interviews.'
    ],
    deadline: 'Active call verification required (Consult PAU admissions)',
    status: 'Priority lead',
    officialUrl: 'https://pau.edu.ng/',
    editorialAssessment: 'West African option. Verify pan-African nationality scope on current call before applying.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Focuses on increasing female enrollment in business and media technology.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'um6p-mastercard-foundation',
    itemNumber: 17,
    name: 'Mastercard Foundation Scholars Program — Mohammed VI Polytechnic University (UM6P)',
    provider: 'Mastercard Foundation',
    institution: 'Mohammed VI Polytechnic University (UM6P)',
    country: 'Morocco',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of African countries',
    targetAudience: 'High-potential African students interested in STEM, agricultural innovation, and green tech.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition waiver',
      'Campus housing and dining package',
      'Living stipend and health insurance',
      'Laptop and laboratory access',
      'International mobility assistance'
    ],
    eligibilityCriteria: [
      'Outstanding academic records in sciences or mathematics',
      'Demonstrated financial barriers to tertiary education',
      'Commitment to African industrial and technological development'
    ],
    requiredDocuments: [
      'UM6P application file',
      'Certified Baccalauréat transcripts and honors',
      'Motivation letter and recommendation letters',
      'Financial declaration'
    ],
    applicationProcedure: [
      'Register on UM6P application portal.',
      'Select eligible undergraduate engineering or sciences track.',
      'Submit scholarship dossier.'
    ],
    deadline: 'Next call to confirm (Annual cycle)',
    status: 'To be confirmed',
    officialUrl: 'https://www.um6p.ma/',
    editorialAssessment: 'Valuable North African STEM pathway. Publish verified details once the exact current undergraduate route is confirmed.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Encourages female engineers and research scientists.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'iccr-india-africa-maitri',
    itemNumber: 18,
    name: 'India–Africa Maitri Scholarship — ICCR',
    provider: 'Indian Council for Cultural Relations (Government of India)',
    institution: 'Accredited Indian Universities and Institutes',
    country: 'India',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of eligible African countries',
    targetAudience: 'African school leavers seeking undergraduate studies in India.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fee exemption',
      'Monthly living stipend',
      'Hostel accommodation contribution',
      'Contingent grant for study materials',
      'Return economy airfare (scheme-dependent — verify on portal)'
    ],
    eligibilityCriteria: [
      'Citizen of an eligible African nation with valid passport',
      'Age between 18 and 30 years for undergraduate courses',
      'Good academic record and English language proficiency',
      'Medical fitness certificate'
    ],
    requiredDocuments: [
      'Online ICCR A2A portal application',
      'Certified high school certificates and marksheets with English translation',
      'Passport copy with minimum 1-year validity',
      'Medical fitness certificate from authorized doctor',
      '500-word essay in English'
    ],
    applicationProcedure: [
      'Apply online on ICCR’s A2A portal.',
      'Select up to five universities and preferred courses.',
      'Indian diplomatic mission verifies and nominates candidate.',
      'University conducts admission check and issues offer.'
    ],
    deadline: 'Annual window usually Jan – April (Verify active portal cycle)',
    status: 'Priority lead',
    officialUrl: 'https://a2ascholarships.iccr.gov.in/',
    editorialAssessment: 'Government bilateral scholarship. Must confirm participating courses and national partner allocations with local Indian Embassy.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Equal opportunity merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'csc-china-undergraduate',
    itemNumber: 19,
    name: 'Chinese Government Scholarship (CSC) — Undergraduate Pathways',
    provider: 'China Scholarship Council (Ministry of Education of China)',
    institution: 'Designated Chinese Universities',
    country: 'China',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Non-Chinese citizens from partner countries (including African nations)',
    targetAudience: 'International students applying via bilateral programs or university routes.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition waiver',
      'Free university dormitory or accommodation subsidy',
      'Monthly living stipend (approx. 2,500 RMB/month for bachelor’s)',
      'Comprehensive medical insurance'
    ],
    eligibilityCriteria: [
      'Non-Chinese citizen in good physical and mental health',
      'High school graduate under the age of 25',
      'HSK Level 3 or higher for Chinese-taught programs (or English proof if taught in English)',
      'Nomination through national dispatching authority (Type A) or university (Type B)'
    ],
    requiredDocuments: [
      'CSC online application form',
      'Notarized copy of high school diploma and transcripts',
      'Foreigner Physical Examination Form',
      'Certificate of No Criminal Conviction',
      'Two recommendation letters and study plan'
    ],
    applicationProcedure: [
      'Apply via national nominating agency (Ministry of Higher Education) or university portal.',
      'Register on Campus China portal and submit documents.',
      'Receiving university issues pre-admission letter.'
    ],
    deadline: 'Varies by route (typically January – April annually)',
    status: 'Priority lead',
    officialUrl: 'https://www.campuschina.org/',
    editorialAssessment: 'Do not publish as a single uniform award. Must distinguish Type A (bilateral embassy) from Type B (direct university).',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'General merit-based government bilateral award.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'gks-u-south-korea',
    itemNumber: 20,
    name: 'Global Korea Scholarship for Undergraduate Degrees (GKS-U)',
    provider: 'National Institute for International Education (NIIED), South Korea',
    institution: 'Designated Korean Universities',
    country: 'South Korea',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of designated partner countries (including African countries)',
    targetAudience: 'Academically excellent international secondary school graduates.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition for 1-year Korean language training + 4-year Bachelor’s degree',
      'Round-trip economy airfare',
      'Monthly living allowance (900,000 KRW/month)',
      'Settlement allowance (200,000 KRW)',
      'Medical insurance and Korean proficiency incentive grants'
    ],
    eligibilityCriteria: [
      'Must hold citizenship of an eligible GKS country (neither applicant nor parents may hold Korean citizenship)',
      'High school graduate or expected graduate under 25 years old',
      'Cumulative GPA above 80% on 100-point scale or rank in top 20% of class',
      'Good health both physically and mentally'
    ],
    requiredDocuments: [
      'GKS application form, Personal Statement, and Study Plan',
      'Two letters of recommendation from teachers',
      'Apostilled or consular-authenticated high school graduation certificate and transcripts',
      'Proof of applicant and parents\' citizenship'
    ],
    applicationProcedure: [
      'Choose between Embassy Track or University Track (cannot apply to both concurrently).',
      'Submit paper application dossier to Korean Embassy in home country.',
      'First round selection by Embassy, second round by NIIED, third round by university.'
    ],
    deadline: 'Embassy-specific (typically September – October annually for subsequent year)',
    status: 'Verified',
    officialUrl: 'https://www.studyinkorea.go.kr/en/plan/gksNoticeRead.do?bbsId=BBSMSTR_000000000461&nttId=4522',
    editorialAssessment: 'High-value government scholarship. Each applicant must be directed to their country-specific embassy deadline.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-based open competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'mext-japan-undergraduate',
    itemNumber: 21,
    name: 'MEXT Japanese Government Undergraduate Scholarship',
    provider: 'Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan',
    institution: 'National and Public Universities in Japan',
    country: 'Japan',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of countries with diplomatic relations with Japan',
    targetAudience: 'Secondary school graduates with outstanding mathematics, science, or humanities results.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition exemption (preparatory year + 4-year degree)',
      'Monthly stipend (approx. 117,000 JPY/month)',
      'Round-trip international airfare',
      'One year intensive Japanese language and preparatory education included'
    ],
    eligibilityCriteria: [
      'Nationality of eligible country',
      'Between 17 and 25 years of age at enrollment',
      'Completed 12 years of formal schooling with superior academic marks',
      'Willingness to learn Japanese and study in Japan'
    ],
    requiredDocuments: [
      'MEXT application form and field of study questionnaire',
      'Certified high school academic records and graduation certificate',
      'Recommendation letter from high school principal or teacher',
      'Medical certificate by licensed physician'
    ],
    applicationProcedure: [
      'Apply through Embassy of Japan in home country (recruitment starts April/May).',
      'Written examinations in English, Mathematics, and Sciences/Japanese at Embassy.',
      'Embassy interview and Tokyo MEXT final screening.'
    ],
    deadline: 'Country-specific embassy recruitment (Usually April – June annually)',
    status: 'Verified',
    officialUrl: 'https://www.studyinjapan.go.jp/en/planning/scholarship/',
    editorialAssessment: 'Highly competitive and fully funded. Embassy examination and nomination are mandatory preliminary steps.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open examination merit process.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'turkiye-burslari-bachelors',
    itemNumber: 22,
    name: 'Türkiye Scholarships (Türkiye Bursları) — Bachelor’s Program',
    provider: 'Presidency for Turks Abroad and Related Communities (YTB), Türkiye',
    institution: 'Turkish Public & Foundation Universities',
    country: 'Türkiye',
    region: 'Europe',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of all countries (except Turkish citizens)',
    targetAudience: 'Secondary school graduates seeking degree studies in Türkiye.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full university tuition fees',
      'University placement into chosen degree program',
      'One-year Turkish language preparatory course (C1)',
      'Free student dormitory accommodation',
      'Monthly allowance for bachelor’s students',
      'One-time return flight ticket and general health insurance'
    ],
    eligibilityCriteria: [
      'Under 21 years of age for undergraduate programs',
      'Strong academic distinction in secondary school examination results (Grade A / superior average for bachelor’s, top-tier excellence for Medicine/Dentistry)',
      'Not currently enrolled in a Turkish university at the same level'
    ],
    requiredDocuments: [
      'Valid national identity document or passport',
      'Recent passport photograph',
      'High school diploma and transcripts (national exam results)',
      'Letter of intent explaining career and study vision',
      'Certificates of extracurricular leadership and volunteering'
    ],
    applicationProcedure: [
      'Apply online on Türkiye Bursları portal (single global window).',
      'Select up to 12 universities and departments.',
      'Shortlisted candidates invited for in-person or online interview at Turkish Embassy.',
      'Awardees receive placement and visa support.'
    ],
    deadline: 'Historical annual window 10 Jan – 20 Feb (Wait for official 2027 cycle call)',
    status: 'Watchlist',
    officialUrl: 'https://www.turkiyeburslari.gov.tr/calendar',
    editorialAssessment: 'Major opportunity for African school-leavers. Clearly separate historical annual window from active call confirmation.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open competitive merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'brunei-government-scholarship',
    itemNumber: 23,
    name: 'Brunei Darussalam Government Scholarship for Foreign Students',
    provider: 'Ministry of Foreign Affairs, Brunei Darussalam',
    institution: 'Universiti Brunei Darussalam (UBD), UNISSA, UTB, and Politeknik Brunei',
    country: 'Brunei Darussalam',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of ASEAN, Commonwealth, and OIC member countries (including African OIC nations)',
    targetAudience: 'International students meeting Brunei Ministry of Foreign Affairs criteria.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and examination fee exemption',
      'Economy class return airfare',
      'Monthly personal allowance of BND 500',
      'Monthly meal allowance of BND 150',
      'Annual book allowance of BND 600',
      'Residential college accommodation and baggage allowance'
    ],
    eligibilityCriteria: [
      'Applicants must be between 18 and 25 years old for undergraduate programs',
      'Must be nominated by their government / Ministry of Foreign Affairs',
      'Meet institution specific admission requirements and English language standards'
    ],
    requiredDocuments: [
      'Government nomination endorsement on application form',
      'Certified high school certificates and transcripts',
      'Security clearance / Police certificate of good conduct',
      'Medical examination report'
    ],
    applicationProcedure: [
      'Download form from Brunei MFA portal.',
      'Obtain official nomination from home country National Scholarship Secretariat.',
      'Submit endorsed application before closing date.'
    ],
    deadline: 'Annual deadline typically mid-February (Next cycle to confirm)',
    status: 'Watchlist',
    officialUrl: 'https://www.mfa.gov.bn/Pages/online-bdgs.aspx',
    editorialAssessment: 'Broad package covering tuition and accommodation, but requires formal national government nomination.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open to qualifying nominated candidates.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'stipendium-hungaricum-bachelors',
    itemNumber: 24,
    name: 'Stipendium Hungaricum Scholarship — Bachelor’s Level',
    provider: 'Tempus Public Foundation & Hungarian Government',
    institution: 'Accredited Hungarian Higher Education Institutions',
    country: 'Hungary',
    region: 'Europe',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of participating sending partner countries in Africa and worldwide',
    targetAudience: 'Secondary school graduates from countries with bilateral education agreements with Hungary.',
    fundingClassification: 'Tuition fully funded',
    fundingCoverageItemized: [
      'Full exemption from payment of tuition fees',
      'Monthly contribution to living costs (approx. 43,700 HUF/month)',
      'Free dormitory place or accommodation contribution (40,000 HUF/month)',
      'Health insurance services under Hungarian law',
      'NOTE: Monthly stipend does NOT cover all living costs; family support required'
    ],
    eligibilityCriteria: [
      'Applications must be officially nominated by the Sending Partner in home country',
      'Secondary education graduation certificate with good grades',
      'Minimum age of 18 at start of studies'
    ],
    requiredDocuments: [
      'Online application form via DreamApply system',
      'Motivation letter in English',
      'Proof of language proficiency',
      'School certificates and certified English translations',
      'Medical certificate'
    ],
    applicationProcedure: [
      'Submit application on Stipendium Hungaricum portal by mid-January.',
      'Simultaneously submit application to home country National Sending Partner.',
      'Sending partner nominates candidates; Hungarian universities administer entry exams.'
    ],
    deadline: 'Annual deadline mid-January (Check national partner cycle)',
    status: 'Verified',
    officialUrl: 'https://stipendiumhungaricum.hu/',
    editorialAssessment: 'Full tuition coverage, but monthly living stipend is modest. Must openly disclose uncovered living costs to low-income students.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-based bilateral nomination.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'taiwan-moe-scholarship',
    itemNumber: 25,
    name: 'Taiwan Scholarship — Ministry of Education',
    provider: 'Ministry of Education (Taiwan)',
    institution: 'Accredited Taiwanese Universities',
    country: 'Taiwan',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students from designated countries with diplomatic/cultural ties',
    targetAudience: 'Secondary school graduates pursuing undergraduate degrees in Taiwan.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Tuition and academic fees up to NTD 40,000 per semester (amounts exceeding cap must be paid by student)',
      'Monthly living allowance of NTD 15,000 for undergraduate students',
      'Does NOT cover airfare, accommodation, or incidental campus fees'
    ],
    eligibilityCriteria: [
      'High school graduate with outstanding academic record',
      'Not a citizen of Taiwan or overseas Chinese compatriot',
      'Apply to Taiwanese university independently'
    ],
    requiredDocuments: [
      'Taiwan Scholarship application form',
      'Copy of passport and high school graduation certificates',
      'Two letters of recommendation',
      'Copy of university application receipt'
    ],
    applicationProcedure: [
      'Submit application through designated Taiwan Representative Office in region.',
      'Concurrently apply directly to target university in Taiwan.',
      'Representative office evaluates candidates and issues award letters.'
    ],
    deadline: 'Usually February – March annually (Check regional office call)',
    status: 'Priority lead',
    officialUrl: 'https://taiwanscholarship.moe.gov.tw/',
    editorialAssessment: 'Substantial grant, but with a fixed tuition ceiling. Residual costs must be disclosed to HALI students.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open international merit competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'isdb-scholarship-undergraduate',
    itemNumber: 26,
    name: 'Islamic Development Bank (IsDB) Scholarship Programmes',
    provider: 'Islamic Development Bank',
    institution: 'Top public universities in IsDB member countries & partner institutions worldwide',
    country: 'Multiple Countries',
    region: 'Global',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of IsDB member countries and Muslim communities in non-member countries',
    targetAudience: 'Academically promising youth pursuing development-focused disciplines.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fees paid directly to university',
      'Monthly living allowance commensurate with single student cost of living',
      'Books and clothing allowance',
      'Medical insurance coverage',
      'Economy round-trip airfare upon initial entry and graduation'
    ],
    eligibilityCriteria: [
      'Citizen of an IsDB member country or recognized minority Muslim community in non-member country',
      'Completed 12 years of education with high grades in major subjects',
      'Committed to developmental return to home community upon graduation',
      'Fields restricted to Medicine, Engineering, Agriculture, and Natural Sciences'
    ],
    requiredDocuments: [
      'Online application via IsDB scholarship portal',
      'Certified high school certificates and transcripts',
      'English/French language proficiency certificates where applicable',
      'Medical fitness report and citizenship proof'
    ],
    applicationProcedure: [
      'Apply exclusively through IsDB online portal.',
      'National Governor’s office or local screening committee validates candidacies.',
      'IsDB Selection Committee issues final awards.'
    ],
    deadline: 'Annual portal window typically January – March (Check active cycle)',
    status: 'Verified',
    officialUrl: 'https://www.isdb.org/scholarships/scholarship-programs',
    editorialAssessment: 'Comprehensive package with clear focus on science, technology, and medicine in developing nations.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Encourages female students in medicine and engineering.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'mauritius-africa-scholarship',
    itemNumber: 27,
    name: 'Mauritius-Africa Scholarship Scheme',
    provider: 'Government of the Republic of Mauritius',
    institution: 'Accredited Higher Education Institutions in Mauritius',
    country: 'Mauritius',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Resident citizens of member states of the African Union',
    targetAudience: 'African youth seeking undergraduate and diploma degrees in Mauritius.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fees waiver',
      'Monthly living allowance of approx. MUR 14,500 – 16,000 for duration of course',
      'Return economy class airfare by most direct route',
      'Medical care in public hospitals'
    ],
    eligibilityCriteria: [
      'Must be a resident citizen of an African Union member state',
      'Undergraduate applicants must not have reached 26 years of age by closing date',
      'Meet minimum requirements of 60% or equivalent in secondary school qualification',
      'Application must be endorsed by the national nominating agency (Ministry of Education) of home country'
    ],
    requiredDocuments: [
      'Completed application form endorsed by National Nominating Agency',
      'Certified birth certificate and passport bio-page',
      'Certified copies of educational certificates and transcripts',
      'Medical certificate of fitness'
    ],
    applicationProcedure: [
      'Submit dossier to home country Ministry of Higher Education / Nominating Agency.',
      'Nominating Agency endorses and forwards shortlisted files to Mauritius Ministry of Education.',
      'Final selection communicated via official diplomatic channels.'
    ],
    deadline: 'Next call to confirm (Annual cycles in April and August)',
    status: 'Priority lead',
    officialUrl: 'https://education.govmu.org/',
    editorialAssessment: 'Valuable pan-African government scholarship with return airfare and living allowance; requires national ministry nomination.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Pan-African government merit selection.'
    },
    verifiedReviewDate: '2026-10-14'
  },

  // --- PART 2: INTERNATIONAL UNIVERSITY SCHOLARSHIPS & FINANCIAL AID (28 - 65) ---
  {
    id: 'ubc-international-scholars',
    itemNumber: 28,
    name: 'University of British Columbia (UBC) — International Scholars Program',
    provider: 'University of British Columbia',
    institution: 'University of British Columbia (Vancouver & Okanagan Campuses)',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students (Global / African applicants eligible)',
    targetAudience: 'Academically outstanding international students demonstrating significant financial need and community leadership.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      'Full-cost of attendance coverage (Karen McKellin International Leader of Tomorrow Award & Donald A. Wehrung International Student Award)',
      'Tuition, living costs, and health fees calibrated to assessed individual financial need',
      'Renewable for up to four years of undergraduate study'
    ],
    eligibilityCriteria: [
      'International citizen requiring a Canadian study permit',
      'Direct entry from secondary school with exceptional academic record',
      'Must be nominated by high school counselor or principal',
      'Significant financial need that would otherwise prevent study at UBC'
    ],
    requiredDocuments: [
      'Official institutional nomination form by high school counselor',
      'UBC admission application submitted concurrently',
      'Comprehensive household financial disclosure and income statements',
      'Referees and essays on community leadership'
    ],
    applicationProcedure: [
      'School counselor completes official nomination by November 15.',
      'Student completes online UBC admission application by December 1.',
      'Finalist reviews and interviews conducted virtually in Spring.'
    ],
    deadline: 'November 15, 2026 (Live 2027 application cycle)',
    deadlineDate: '2026-11-15',
    status: 'Verified',
    officialUrl: 'https://undergraduatescholarships.ubc.ca/prog/2027_international_scholars_program_application/',
    editorialAssessment: 'High-priority, time-sensitive opportunity. Offers transformative full-ride funding for students from low-income backgrounds.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Equal opportunity need-and-merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'reach-oxford-scholarship',
    itemNumber: 29,
    name: 'Reach Oxford Scholarship',
    provider: 'University of Oxford',
    institution: 'University of Oxford',
    country: 'United Kingdom',
    region: 'United Kingdom',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Nationals of DAC-listed developing countries (including Burkina Faso and African nations)',
    targetAudience: 'Academically stellar students from low-income countries who cannot study for a degree locally.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      '100% of university course fees and college fees',
      'A generous annual grant for living expenses',
      'One return economy airfare per year for duration of course (3–4 years)'
    ],
    eligibilityCriteria: [
      'Citizen of eligible low-income country (e.g. Burkina Faso, Mali, Niger, Ghana, Kenya, etc.)',
      'Offered undergraduate admission to Oxford University (except Medicine)',
      'Exceptional academic achievement and proven social commitment',
      'Demonstrated financial need and limited local access to comparable education'
    ],
    requiredDocuments: [
      'UCAS undergraduate admission application to Oxford (deadline 15 Oct/26 Jan)',
      'Separate Reach Oxford scholarship application form',
      'Financial supporting documentation and personal statements',
      'Academic references'
    ],
    applicationProcedure: [
      'Apply to Oxford via UCAS.',
      'Receive conditional or unconditional admission offer.',
      'Submit Reach Oxford scholarship application by early February.',
      'College committee selects scholars in March/April.'
    ],
    deadline: '26 January 2027 (UCAS course deadline) / Scholarship form in Feb 2027',
    deadlineDate: '2027-01-26',
    status: 'Verified',
    officialUrl: 'https://www.ox.ac.uk/admissions/undergraduate/fees-and-funding/oxford-bursaries-and-scholarships/reach-oxford',
    editorialAssessment: 'Exceptionally high value but extremely competitive (2–3 awards per year). Explicitly includes Burkina Faso and other low-income African countries.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-and-need selection.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'ucl-global-undergraduate',
    itemNumber: 30,
    name: 'UCL Global Undergraduate Scholarship',
    provider: 'University College London',
    institution: 'University College London (UCL)',
    country: 'United Kingdom',
    region: 'United Kingdom',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students liable for overseas fee rates',
    targetAudience: 'High-achieving students from low-income backgrounds.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fees coverage',
      'Annual maintenance allowance for living expenses (approx. £15,000/year for selected recipients)',
      'Selected tier offers full tuition only'
    ],
    eligibilityCriteria: [
      'Liable to pay international fee rate at UCL',
      'Household income verified within low-income threshold',
      'Hold an admission offer to a full-time undergraduate degree program at UCL'
    ],
    requiredDocuments: [
      'UCAS application to UCL',
      'UCL Global Undergraduate Scholarship online application',
      'Proof of household income and bank statements'
    ],
    applicationProcedure: [
      'Submit UCAS application to UCL.',
      'Once offer is received, access UCL financial aid portal.',
      'Submit scholarship form before annual April deadline.'
    ],
    deadline: 'Next cycle (2027) opens Jan 2027, deadline late April 2027',
    status: 'Watchlist',
    officialUrl: 'https://www.ucl.ac.uk/scholarships/ucl-global-undergraduate-scholarship',
    editorialAssessment: 'High relevance for low-income international applicants. Must distinguish tuition-only awards from full maintenance awards.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-based international assessment.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'utoronto-lester-pearson',
    itemNumber: 31,
    name: 'University of Toronto — Lester B. Pearson International Scholarship',
    provider: 'University of Toronto',
    institution: 'University of Toronto',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students requiring study permit',
    targetAudience: 'Exceptional students demonstrating academic achievement, creative leadership, and community impact.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fees for four years',
      'Books and incidental mandatory campus fees',
      'Full residence support and meal plan coverage for four years'
    ],
    eligibilityCriteria: [
      'International student nominated by high school',
      'Currently in final year of secondary school or graduated no earlier than June',
      'Enthusiasm for learning, intellectual curiosity, and strong leadership character'
    ],
    requiredDocuments: [
      'School nomination submitted by high school principal/counselor',
      'OUAC / University of Toronto admission application',
      'Pearson online scholarship application essays and resume'
    ],
    applicationProcedure: [
      'High school counselor submits nomination by late November.',
      'Student applies for admission to U of T by mid-December.',
      'Student completes personalized Pearson scholarship application by January.'
    ],
    deadline: 'Nomination: late Nov 2026; Student application: mid-Jan 2027',
    status: 'Verified',
    officialUrl: 'https://future.utoronto.ca/pearson/about/',
    editorialAssessment: 'One of Canada’s most prestigious awards. Early school nomination is mandatory.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'International merit leadership competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'york-presidents-international',
    itemNumber: 32,
    name: 'York University — President’s International Scholarship of Excellence',
    provider: 'York University',
    institution: 'York University',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students requiring study permit',
    targetAudience: 'Top academic achievers with documented extracurricular leadership.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'CAD 180,000 total award (CAD 45,000 per year renewable for 4 years)',
      'Substantially covers tuition, but living expenses and health insurance may require supplementary funds'
    ],
    eligibilityCriteria: [
      'Direct-entry high school international applicant with minimum A / 85%+ equivalent',
      'Demonstrated leadership in community or school',
      'Nomination letter from high school authority'
    ],
    requiredDocuments: [
      'York University admission application',
      'International Student Scholarship application form',
      'Two letters of reference / nomination',
      'Personal essay on leadership accomplishments'
    ],
    applicationProcedure: [
      'Apply to York University and obtain student reference number.',
      'Complete online International Scholarship application before deadline.',
      'Adjudication by university awards committee.'
    ],
    deadline: 'Student deadline: 27 January 2027; Nominee letter: 4 February 2027',
    deadlineDate: '2027-01-27',
    status: 'Verified',
    officialUrl: 'https://futurestudents.yorku.ca/financing-your-degree/international-scholarships',
    editorialAssessment: 'Significant fixed-amount award (CAD 45,000/yr). Students must calculate total cost of attendance against remaining living expenses.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open international merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'sciences-po-emile-boutmy',
    itemNumber: 33,
    name: 'Sciences Po — Émile Boutmy Scholarship (Undergraduate)',
    provider: 'Sciences Po Paris',
    institution: 'Sciences Po (Undergraduate Campuses across France)',
    country: 'France',
    region: 'Europe',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Non-European Union citizens (African applicants eligible)',
    targetAudience: 'Top international applicants admitted to Sciences Po’s Bachelor program.',
    fundingClassification: 'Tuition fully funded',
    fundingCoverageItemized: [
      'Tuition grant tiers: €14,720/year, €9,500/year, or €6,500/year for 3 years of Bachelor studies',
      'In exceptional circumstances, a complementary living allowance grant may be awarded',
      'Living and housing costs largely remain student responsibility'
    ],
    eligibilityCriteria: [
      'First-time applicant from non-EU state whose household does not file taxes within the EU',
      'Admitted to Sciences Po undergraduate bachelor’s program',
      'Selected on combined basis of academic excellence and social profile'
    ],
    requiredDocuments: [
      'Sciences Po undergraduate application dossier',
      'Proof of household income (tax assessment, payslips, or local attestations)',
      'Curriculum Vitae and academic transcripts'
    ],
    applicationProcedure: [
      'Indicate request for Émile Boutmy scholarship in "Financial Information" section of Sciences Po application.',
      'Attach official household income proof before application deadline.',
      'Admissions jury decides award concurrently with admission.'
    ],
    deadline: '13 January 2027 (Undergraduate international pathway)',
    deadlineDate: '2027-01-13',
    status: 'Verified',
    officialUrl: 'https://www.sciencespo.fr/students/en/financing-your-studies/financial-aid/scholarships/emile-boutmy-scholarship/',
    editorialAssessment: 'Top European social science institution. Tuition waiver is significant, but students must secure living stipends.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit and social profile selection.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'nyu-abu-dhabi-financial-aid',
    itemNumber: 34,
    name: 'New York University Abu Dhabi (NYUAD) — Need-Based Financial Aid',
    provider: 'New York University Abu Dhabi',
    institution: 'NYU Abu Dhabi Campus',
    country: 'United Arab Emirates',
    region: 'Middle East',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide (African students eligible)',
    targetAudience: 'High-achieving students from all socioeconomic strata.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      'Up to 100% of demonstrated financial need met through institutional grants',
      'Can cover tuition, room, board, campus health insurance, books, and international flights',
      'Package calibrated strictly according to family financial assessment (CSS Profile)'
    ],
    eligibilityCriteria: [
      'Competitive undergraduate admission to NYU Abu Dhabi via Common Application',
      'Demonstrated financial need assessed through verified family income documents',
      'Must submit CSS Profile by designated admission plan deadline'
    ],
    requiredDocuments: [
      'Common Application with NYU member screen',
      'CSS Profile completed for parents/guardians',
      'Tax returns, employer statements, or local municipal income verifications',
      'Official secondary school transcripts and counselor report'
    ],
    applicationProcedure: [
      'Submit Common Application selecting NYU Abu Dhabi campus.',
      'Submit CSS Profile with institutional code 5294.',
      'Aid package delivered with admission decision.'
    ],
    deadline: 'EDI: 10 Nov 2026; EDII: 10 Jan 2027; Regular Decision: 1 Feb 2027',
    deadlineDate: '2027-02-01',
    status: 'Verified',
    officialUrl: 'https://nyuad.nyu.edu/en/apply/undergraduate/scholarships-and-financial-aid/apply-for-financial-aid.html',
    editorialAssessment: 'Exceptional need-based funding potential for African students. Every applicant undergoes individual financial evaluation.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Universal need-blind/need-aware institutional aid policy.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'qatar-university-international',
    itemNumber: 35,
    name: 'Qatar University — International Students Scholarship',
    provider: 'Qatar University',
    institution: 'Qatar University (Doha)',
    country: 'Qatar',
    region: 'Middle East',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students applying from outside Qatar',
    targetAudience: 'Top secondary school graduates pursuing undergraduate degrees in Qatar.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full exemption from tuition fees and textbook costs',
      'Free university accommodation (double room) and campus transport',
      'Annual return economy airfare ticket to home country',
      'Student residence visa sponsorship by Qatar University'
    ],
    eligibilityCriteria: [
      'High school certificate with minimum 95% average or equivalent top honors',
      'Final admission into an undergraduate faculty at Qatar University',
      'Must not hold another scholarship or grant'
    ],
    requiredDocuments: [
      'High school graduation certificate and transcripts authenticated by Ministry and Qatar Embassy',
      'Passport copy with minimum 1-year validity',
      'Official standardized test scores (IELTS/TOEFL and SAT/ACT where required)',
      'Medical examination report'
    ],
    applicationProcedure: [
      'Apply online for undergraduate admission to Qatar University.',
      'Submit scholarship application via online admission system during designated scholarship window.',
      'University scholarship committee ranks applicants by high school GPA.'
    ],
    deadline: 'Annual window usually March – April (Verify official calendar for 2027)',
    status: 'Priority lead',
    officialUrl: 'https://www.qu.edu.qa/en-us/students/admission/scholarships',
    editorialAssessment: 'Comprehensive package in the Gulf region with tuition, room, and return flights covered.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Competitive merit ranking based on secondary school averages.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'kaist-undergraduate-scholarship',
    itemNumber: 36,
    name: 'KAIST International Undergraduate Scholarship',
    provider: 'Korea Advanced Institute of Science and Technology (KAIST)',
    institution: 'KAIST (Daejeon, South Korea)',
    country: 'South Korea',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Non-Korean citizens (All nationalities eligible)',
    targetAudience: 'Top mathematics, science, and computing secondary school graduates.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fee waiver for 8 semesters (maintaining 2.7+ GPA)',
      'Monthly living stipend of 350,000 KRW/month',
      'National health insurance coverage fee subsidy'
    ],
    eligibilityCriteria: [
      'Applicant must not hold Korean citizenship',
      'Outstanding achievement in high school STEM subjects (math, physics, chemistry, biology)',
      'Demonstrated English proficiency (courses taught 100% in English)'
    ],
    requiredDocuments: [
      'KAIST online application form and statement of purpose',
      'One recommendation letter from STEM teacher or counselor',
      'High school academic transcripts and graduation certificate',
      'Standardized test reports (SAT, AP, IB, or national exam results)'
    ],
    applicationProcedure: [
      'Apply during Early, Regular, or Late admission cycle on KAIST portal.',
      'Scholarship consideration is automatic upon checking box in admission application.',
      'Admission offer includes scholarship grant automatically if selected.'
    ],
    deadline: 'Early: October 2026; Regular: January 2027; Late: May 2027',
    deadlineDate: '2027-01-15',
    status: 'Verified',
    officialUrl: 'https://admission.kaist.ac.kr/intl-undergraduate/',
    editorialAssessment: 'Elite Asian STEM institution with full tuition and monthly allowance. Academic renewal requirement (2.7+ GPA) must be kept in mind.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Proactively encourages young women to pursue engineering and computer science.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'nus-undergraduate-scholarships',
    itemNumber: 37,
    name: 'National University of Singapore (NUS) — Science & Technology Undergraduate Scholarship',
    provider: 'National University of Singapore (NUS)',
    institution: 'National University of Singapore',
    country: 'Singapore',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of Asian countries (Other international awards available for African applicants)',
    targetAudience: 'Outstanding students pursuing Computing, Engineering, or Science degrees.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Tuition fees (after MOE Tuition Grant subsidy)',
      'Annual living allowance of SGD 6,000',
      'Annual accommodation allowance',
      'Settlement allowance upon arrival'
    ],
    eligibilityCriteria: [
      'High academic achievement in secondary school mathematics and sciences',
      'Strong leadership qualities and extracurricular involvement',
      'Applies for full-time undergraduate Computing or Engineering course at NUS'
    ],
    requiredDocuments: [
      'NUS undergraduate application file',
      'High school academic records and standardized test scores',
      'Co-curricular activities record and scholarship essays'
    ],
    applicationProcedure: [
      'Submit admission application to NUS.',
      'Eligible applicants receive invitation to apply for scholarship.',
      'Virtual selection interview.'
    ],
    deadline: 'Aligned with NUS international qualifications timeline (February annually)',
    status: 'Priority lead',
    officialUrl: 'https://www.nus.edu.sg/oam/scholarships',
    editorialAssessment: 'Prestigious Asian university. Certain awards require checking nationality eligibility and service bonds.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-based science and technology competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'berea-college-international',
    itemNumber: 38,
    name: 'Berea College — No-Tuition Promise & International Student Funding',
    provider: 'Berea College',
    institution: 'Berea College (Kentucky, USA)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All international applicants (African students actively recruited)',
    targetAudience: 'Academically promising students with great financial need and no alternative means to afford college.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      '100% Tuition Promise Scholarship for all 4 years ($44,000+/year value)',
      'First-year international financial aid package covering housing, meals, and campus fees',
      'On-campus work-study labor program (10–15 hours/week) providing funds for personal expenses'
    ],
    eligibilityCriteria: [
      'Demonstrated high financial need (family cannot afford traditional college tuition)',
      'Strong secondary school academic record and personal character',
      'Commitment to participate in Berea\'s student labor program',
      'English proficiency'
    ],
    requiredDocuments: [
      'Berea College International Application for Admission and Financial Aid',
      'High school transcripts and national examination results',
      'International Financial Questionnaire with official verification',
      'Two letters of recommendation and personal essay'
    ],
    applicationProcedure: [
      'Submit application materials before November 30 (Early) or January 15 (Regular).',
      'Financial aid evaluation.',
      'Selected candidates receive admission decision in March.'
    ],
    deadline: 'Early: 30 November 2026; Regular: 15 January 2027',
    deadlineDate: '2027-01-15',
    status: 'Verified',
    officialUrl: 'https://www.berea.edu/admissions',
    editorialAssessment: 'One of the most authentic HALI options in the United States. Every admitted student receives 100% tuition coverage via the No-Tuition Promise.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Equal opportunity need-based focus.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'american-university-egls',
    itemNumber: 39,
    name: 'American University — Emerging Global Leader Scholarship (AU EGLS)',
    provider: 'American University (Washington, D.C.)',
    institution: 'American University',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students requiring F-1 visa',
    targetAudience: 'International students dedicated to positive civic and social change in their home countries.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition, room, and board at American University in Washington, D.C.',
      'Renewable for up to four years of undergraduate study',
      'NOTE: Does not cover non-billable expenses such as health insurance, books, and flights (approx. $4,000/year)'
    ],
    eligibilityCriteria: [
      'International secondary school applicant with 3.8+ GPA equivalent or top 10% class rank',
      'Demonstrated commitment to leadership, volunteering, and civic engagement',
      'Must return to home country to apply leadership knowledge after graduation'
    ],
    requiredDocuments: [
      'AU EGLS application form and Common Application',
      'Bank letter and AU International Financial form confirming student can meet remaining non-billable costs',
      'Counselor letter and two teacher recommendations',
      'Essays detailing social impact initiative'
    ],
    applicationProcedure: [
      'Submit Common Application and AU EGLS application by December 15.',
      'Submit financial documents verifying ability to cover health insurance and personal flights.',
      'Finalist virtual interviews in March.'
    ],
    deadline: '15 December 2026',
    deadlineDate: '2026-12-15',
    status: 'Verified',
    officialUrl: 'https://www.american.edu/admissions/international/egls.cfm',
    editorialAssessment: 'Covers all billable expenses (tuition, room, board). Applicants must note that non-billable costs (insurance, flights) are not included.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Civic leadership merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'harvard-college-financial-aid',
    itemNumber: 40,
    name: 'Harvard College — Need-Based Financial Aid for International Students',
    provider: 'Harvard University',
    institution: 'Harvard College (Cambridge, MA)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'Academically stellar applicants from any financial background.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met without loans',
      'Families with household income below $85,000 pay zero ($0) toward tuition, room, board, and fees',
      'Includes travel stipends, startup allowance, and health insurance for high-need students'
    ],
    eligibilityCriteria: [
      'Admitted to Harvard College through standard holistic undergraduate admissions',
      'Financial aid is 100% need-based (no merit scholarships awarded)',
      'Same need-based assessment for international students as for US citizens'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application with Harvard supplement',
      'CSS Profile completed online',
      'Parent income tax returns, salary certificates, or documented financial affidavits'
    ],
    applicationProcedure: [
      'Apply by November 1 (Restrictive Early Action) or January 1 (Regular Decision).',
      'Submit CSS Profile and IDOC supporting financial records by February 1.',
      'Admissions decisions and aid packages released simultaneously.'
    ],
    deadline: 'Early Action: 1 Nov 2026; Regular Decision: 1 Jan 2027',
    deadlineDate: '2027-01-01',
    status: 'Verified',
    officialUrl: 'https://college.harvard.edu/financial-aid',
    editorialAssessment: 'Exceptionally selective, but provides unbeatable financial aid for low-income admitted students ($0 cost for incomes under $85k).',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Universal need-blind admissions and need-based financial aid.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'mit-undergraduate-financial-aid',
    itemNumber: 41,
    name: 'Massachusetts Institute of Technology (MIT) — Need-Based Financial Aid',
    provider: 'MIT Student Financial Services',
    institution: 'MIT (Cambridge, MA)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'Top mathematical, scientific, and computing talents from all backgrounds.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met for every admitted international student',
      'MIT Scholarship covers tuition, fees, room, and board for families with income under $140,000',
      'Zero debt / loan-free policy'
    ],
    eligibilityCriteria: [
      'Admitted to MIT undergraduate program',
      'Demonstrated financial need assessed through CSS Profile and tax/income verifications',
      'Need-blind admissions policy for all students regardless of nationality'
    ],
    requiredDocuments: [
      'MIT application submitted through MIT admissions portal',
      'CSS Profile with MIT code 3514',
      'Parent income documentation and tax returns submitted to IDOC'
    ],
    applicationProcedure: [
      'Submit MIT application by November 1 (Early Action) or January 4 (Regular Action).',
      'Submit financial aid documents by mid-February.',
      'Decisions announced on Pi Day (March 14).'
    ],
    deadline: 'Early Action: 1 Nov 2026; Regular Action: 4 Jan 2027',
    deadlineDate: '2027-01-04',
    status: 'Verified',
    officialUrl: 'https://sfs.mit.edu/undergraduate-students/',
    editorialAssessment: 'Need-blind admissions for international applicants with 100% demonstrated need met. Very high selectivity.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Equal opportunity need-blind STEM evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'amherst-college-financial-aid',
    itemNumber: 42,
    name: 'Amherst College — Need-Blind International Financial Aid',
    provider: 'Amherst College',
    institution: 'Amherst College (Amherst, MA)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'Academically driven high school students seeking liberal arts education.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of calculated financial need met for every admitted international student',
      'Comprehensive grants cover tuition, room, board, and health insurance',
      'No-loan policy — all financial aid is provided as grants'
    ],
    eligibilityCriteria: [
      'Need-blind admissions for all international students (financial need does not impact admission chances)',
      'Admitted to Amherst undergraduate program',
      'Submit CSS Profile and household income verification'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application with Amherst Writing Supplement',
      'CSS Profile and Amherst Financial Aid form',
      'Parent tax documents and certified income statements'
    ],
    applicationProcedure: [
      'Submit application by November 1 (Early Decision) or January 6 (Regular Decision).',
      'Submit financial aid dossier concurrently.',
      'Aid package included in admission notification.'
    ],
    deadline: 'Early Decision: 1 Nov 2026; Regular Decision: 6 Jan 2027',
    deadlineDate: '2027-01-06',
    status: 'Verified',
    officialUrl: 'https://www.amherst.edu/admission/financial_aid',
    editorialAssessment: 'One of the few US liberal arts colleges that is completely need-blind for international applicants, meeting 100% of demonstrated need with no loans.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-blind holistic admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'princeton-university-financial-aid',
    itemNumber: 43,
    name: 'Princeton University — Need-Based Financial Aid',
    provider: 'Princeton University',
    institution: 'Princeton University (Princeton, NJ)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'Top academic achievers from every socioeconomic background.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met without student loans',
      'Families earning up to $100,000 typically pay zero ($0) for tuition, room, and board',
      'Personal expense allowance and travel grants included for high-need scholars'
    ],
    eligibilityCriteria: [
      'Need-blind admission for international students',
      'Demonstrated financial need calculated individually',
      'Strong secondary school academic foundation'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application with Princeton questions',
      'Princeton Financial Aid Application (PFAA) or CSS Profile',
      'Tax forms and income verifications'
    ],
    applicationProcedure: [
      'Apply by November 1 (Single-Choice Early Action) or January 1 (Regular Decision).',
      'Complete PFAA online.',
      'Financial aid package issued upon admission.'
    ],
    deadline: 'Single-Choice Early: 1 Nov 2026; Regular: 1 Jan 2027',
    deadlineDate: '2027-01-01',
    status: 'Verified',
    officialUrl: 'https://admission.princeton.edu/cost-aid',
    editorialAssessment: 'World-renowned financial aid program with need-blind international admissions and zero loans.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Holistic need-blind admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'yale-university-financial-aid',
    itemNumber: 44,
    name: 'Yale University — Need-Based Financial Aid',
    provider: 'Yale University',
    institution: 'Yale University (New Haven, CT)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'Talented international applicants across all disciplines.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met for all admitted students',
      'Zero parent contribution for families earning below $75,000/year',
      'Covers tuition, housing, dining, hospitalization insurance, and $2,000 startup grant'
    ],
    eligibilityCriteria: [
      'Need-blind admissions policy for international students',
      'Admitted to Yale College undergraduate degree',
      'Financial need verified via CSS Profile'
    ],
    requiredDocuments: [
      'Common Application, Coalition, or QuestBridge Application',
      'CSS Profile and tax/income documentation via IDOC',
      'High school transcripts and teacher recommendations'
    ],
    applicationProcedure: [
      'Submit application by November 1 (Single-Choice Early Action) or January 2 (Regular Decision).',
      'Submit CSS Profile.',
      'Receive aid decision with admission letter.'
    ],
    deadline: 'Early: 1 Nov 2026; Regular: 2 Jan 2027',
    deadlineDate: '2027-01-02',
    status: 'Verified',
    officialUrl: 'https://admissions.yale.edu/financial-aid',
    editorialAssessment: 'Top-tier need-blind institution providing comprehensive full-need grants without debt.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-blind admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'duke-karsh-international-scholars',
    itemNumber: 45,
    name: 'Duke University — Karsh International Scholars Program',
    provider: 'Duke University',
    institution: 'Duke University (Durham, NC)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students requiring student visa',
    targetAudience: 'High-achieving international students with significant financial need.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition, room, board, and mandatory institutional fees for 4 years',
      'Funding for three summers of research, unpaid internships, or international projects',
      'Mentorship and scholarly network'
    ],
    eligibilityCriteria: [
      'Apply to Duke University undergraduate program',
      'Demonstrated high academic excellence and significant financial need',
      'No separate scholarship application — all international students applying for need-based aid are considered'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application with Duke supplement',
      'CSS Profile and supporting financial documentation',
      'High school transcripts and teacher evaluations'
    ],
    applicationProcedure: [
      'Apply for undergraduate admission to Duke and request financial aid.',
      'Admissions and merit committees identify eligible candidates.',
      'Selected Karsh Scholars notified upon admission.'
    ],
    deadline: 'Early Decision: 1 Nov 2026; Regular Decision: 2 Jan 2027',
    deadlineDate: '2027-01-02',
    status: 'Priority lead',
    officialUrl: 'https://ousf.duke.edu/merit-scholarships/karsh-international-scholars-program/',
    editorialAssessment: 'Duke’s premier international scholarship combining full tuition, housing, dining, and summer research grants.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need and merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'columbia-university-financial-aid',
    itemNumber: 46,
    name: 'Columbia University — Undergraduate Need-Based Financial Aid',
    provider: 'Columbia University',
    institution: 'Columbia College & Columbia Engineering (New York, NY)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All international applicants',
    targetAudience: 'International students seeking rigorous liberal arts or engineering education.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met for admitted students who applied for aid',
      'Zero parent contribution for families earning under $66,000/year',
      'Need-based grants cover tuition, room, and board without loans'
    ],
    eligibilityCriteria: [
      'Must apply for financial aid at the time of initial admission application (cannot apply later)',
      'Need-aware admissions for international applicants',
      'Financial need documented via CSS Profile'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application',
      'CSS Profile and parent income/tax verifications',
      'School reports and academic teacher recommendations'
    ],
    applicationProcedure: [
      'Indicate financial aid intent on Common App.',
      'Submit CSS Profile by November 15 (Early Decision) or February 15 (Regular Decision).'
    ],
    deadline: 'Early Decision: 1 Nov 2026; Regular Decision: 1 Jan 2027',
    deadlineDate: '2027-01-01',
    status: 'Verified',
    officialUrl: 'https://undergrad.admissions.columbia.edu/affordability',
    editorialAssessment: '100% demonstrated need met. Crucial: international students MUST request aid at time of admission application.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Holistic admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'dartmouth-college-financial-aid',
    itemNumber: 47,
    name: 'Dartmouth College — Need-Blind International Financial Aid',
    provider: 'Dartmouth College',
    institution: 'Dartmouth College (Hanover, NH)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All nationalities worldwide',
    targetAudience: 'High-achieving international students from all socioeconomic strata.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated need met without loans',
      'Tuition, housing, food, and health insurance covered for low-income scholars',
      'Need-blind policy for all international applicants'
    ],
    eligibilityCriteria: [
      'Admitted to Dartmouth undergraduate degree',
      'Financial aid based strictly on demonstrated family need',
      'Equal consideration regardless of citizenship or ability to pay'
    ],
    requiredDocuments: [
      'Common Application with Dartmouth Writing Supplement',
      'CSS Profile and income tax forms',
      'School reports and letters of recommendation'
    ],
    applicationProcedure: [
      'Submit application by November 1 (Early Decision) or January 2 (Regular Decision).',
      'Submit CSS Profile and IDOC tax forms.',
      'Financial aid decision released with admission decision.'
    ],
    deadline: 'Early Decision: 1 Nov 2026; Regular Decision: 2 Jan 2027',
    deadlineDate: '2027-01-02',
    status: 'Verified',
    officialUrl: 'https://financialaid.dartmouth.edu/',
    editorialAssessment: 'Dartmouth adopted a fully need-blind policy for all international applicants, meeting 100% of demonstrated need with zero loans.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-blind admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'bowdoin-college-financial-aid',
    itemNumber: 48,
    name: 'Bowdoin College — Need-Blind International Financial Aid',
    provider: 'Bowdoin College',
    institution: 'Bowdoin College (Brunswick, Maine)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All international applicants',
    targetAudience: 'Students dedicated to the Common Good seeking premier liberal arts education.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met with grants (no loans)',
      'Free iPad and Apple Pencil provided to all entering students for coursework',
      'Covers tuition, room, board, and course supplies for high-need students'
    ],
    eligibilityCriteria: [
      'Need-blind admissions for all international students regardless of financial circumstances',
      'Admitted to Bowdoin College',
      'Financial need documented via CSS Profile'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application with Bowdoin questions',
      'CSS Profile and family income documentation',
      'Secondary school transcripts and recommendation letters'
    ],
    applicationProcedure: [
      'Submit admissions application by November 15 (ED I), January 5 (ED II or Regular).',
      'Submit CSS Profile before financial aid deadline.'
    ],
    deadline: 'Early Decision I: 15 Nov 2026; Regular: 5 Jan 2027',
    deadlineDate: '2027-01-05',
    status: 'Verified',
    officialUrl: 'https://www.bowdoin.edu/admissions/tuition-aid/',
    editorialAssessment: 'Need-blind international admissions with comprehensive no-loan financial aid awards.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-blind admissions.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'colby-college-financial-aid',
    itemNumber: 49,
    name: 'Colby College — International Need-Based Financial Aid',
    provider: 'Colby College',
    institution: 'Colby College (Waterville, Maine)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All international applicants',
    targetAudience: 'High-achieving students seeking liberal arts education with guaranteed funding.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      '100% of demonstrated financial need met without student loans',
      'Families earning up to $75,000 with typical assets have zero parent contribution',
      'Funding for research, internships, and global experiences via Colby Commitment'
    ],
    eligibilityCriteria: [
      'Admitted to Colby College',
      'Must apply for financial aid concurrently with application',
      'Verified family financial need'
    ],
    requiredDocuments: [
      'Common Application or Coalition Application',
      'CSS Profile and verified parent income documentation',
      'Counselor and teacher recommendations'
    ],
    applicationProcedure: [
      'Apply by November 15 (ED I) or January 2 (ED II / Regular Decision).',
      'Submit CSS Profile and IDOC documents.'
    ],
    deadline: 'Early Decision: 15 Nov 2026; Regular Decision: 2 Jan 2027',
    deadlineDate: '2027-01-02',
    status: 'Priority lead',
    officialUrl: 'https://afa.colby.edu/',
    editorialAssessment: 'Robust financial aid commitment meeting 100% demonstrated need with zero loans.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-based evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'vanderbilt-merit-scholarships',
    itemNumber: 50,
    name: 'Vanderbilt University — Cornelius Vanderbilt & Chancellor’s Scholarships',
    provider: 'Vanderbilt University',
    institution: 'Vanderbilt University (Nashville, TN)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International and US students',
    targetAudience: 'Students with intellectual curiosity and dedication to community diversity.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition plus a one-time summer stipend for study abroad, research, or service project',
      'Renewable for four years of undergraduate study',
      'NOTE: Room and board are not included in tuition-only merit awards; supplementary need aid available'
    ],
    eligibilityCriteria: [
      'Outstanding academic achievement, test scores, and intellectual leadership',
      'Separate merit scholarship application required via MyAppVU portal',
      'Apply by December 1'
    ],
    requiredDocuments: [
      'Common Application to Vanderbilt University',
      'Vanderbilt Merit Scholarship online application',
      'Short essay on community leadership'
    ],
    applicationProcedure: [
      'Submit Common App to Vanderbilt.',
      'Access MyAppVU portal and complete scholarship application by December 1.',
      'Awards announced in mid-February.'
    ],
    deadline: '1 December 2026',
    deadlineDate: '2026-12-01',
    status: 'Verified',
    officialUrl: 'https://www.vanderbilt.edu/scholarships/',
    editorialAssessment: 'Full tuition merit award. Additional need-based aid can be requested to cover housing and dining.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-based competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'emory-scholars-program',
    itemNumber: 51,
    name: 'Emory University — Emory College Scholars Program',
    provider: 'Emory University',
    institution: 'Emory University (Atlanta, GA)',
    country: 'United States',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'All international applicants',
    targetAudience: 'Exceptionally creative thinkers and academic leaders.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition, room, and board (Robert W. Woodruff Scholarship)',
      'Or full tuition coverage (Dean’s Scholarship)',
      'Enrichment stipend for research, study abroad, and professional projects'
    ],
    eligibilityCriteria: [
      'Must apply for undergraduate admission by November 15',
      'Check "Emory University Scholar Programs" on Common Application',
      'Exceptional high school academic record, character, and leadership'
    ],
    requiredDocuments: [
      'Common Application selecting Scholar Program interest',
      'High school transcripts and teacher recommendations',
      'Scholarship essay prompts'
    ],
    applicationProcedure: [
      'Submit Common Application by November 15.',
      'Shortlisted semifinalists invited for virtual interviews in January/February.',
      'Finalist Scholars notified in March.'
    ],
    deadline: '15 November 2026',
    deadlineDate: '2026-11-15',
    status: 'Verified',
    officialUrl: 'https://apply.emory.edu/financial-aid/types-of-aid/scholarships.html',
    editorialAssessment: 'Top US university merit program with awards ranging from full tuition to comprehensive full-ride (Woodruff). Early deadline (Nov 15).',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit scholarship selection.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'qatar-university-talent',
    itemNumber: 52,
    name: 'Qatar University — Talent Scholarship',
    provider: 'Qatar University',
    institution: 'Qatar University',
    country: 'Qatar',
    region: 'Middle East',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students applying from abroad',
    targetAudience: 'Students with documented exceptional talents in innovation, arts, sports, or scientific competition.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition fee exemption',
      'University housing and campus transportation',
      'Monthly stipend and annual return flight tickets',
      'Residence permit sponsorship'
    ],
    eligibilityCriteria: [
      'Minimum high school average of 80% (or equivalent)',
      'Verifiable portfolio or awards in science innovation, athletics, or media arts',
      'Recommendation letters from recognized international or national bodies'
    ],
    requiredDocuments: [
      'Talent portfolio and awards verification certificates',
      'High school transcripts and diploma authenticated',
      'Passport copy and medical certificate'
    ],
    applicationProcedure: [
      'Apply online on Qatar University scholarship portal.',
      'Upload portfolio documents to the Talent Scholarship committee.',
      'Panel interview and evaluation.'
    ],
    deadline: 'Aligned with QU annual spring window (March – April)',
    status: 'Priority lead',
    officialUrl: 'https://www.qu.edu.qa/en-us/students/admission/scholarships',
    editorialAssessment: 'Separate from general academic scholarship; evaluated on verified creative, athletic, or innovation portfolios.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Talent portfolio evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'bristol-think-big-undergraduate',
    itemNumber: 53,
    name: 'University of Bristol — Think Big Undergraduate Scholarships',
    provider: 'University of Bristol',
    institution: 'University of Bristol',
    country: 'United Kingdom',
    region: 'United Kingdom',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International fee-paying students (All nationalities eligible)',
    targetAudience: 'International students committed to creating global change.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Tuition fee reductions of £6,500 and £13,000 per year',
      'Applied directly against university tuition fees',
      'Does NOT cover accommodation, food, visa, or flight costs'
    ],
    eligibilityCriteria: [
      'Applied for full-time undergraduate course at Bristol via UCAS (excluding Medicine, Dentistry, Vet)',
      'Classified as an overseas student for fee purposes',
      'Demonstrated academic merit and vision for community contribution'
    ],
    requiredDocuments: [
      'UCAS application to University of Bristol',
      'Think Big online scholarship application',
      'Three 200-word essays detailing motivation, global vision, and community impact'
    ],
    applicationProcedure: [
      'Submit UCAS application to Bristol.',
      'Complete online Think Big scholarship application form.',
      'Awards announced in May.'
    ],
    deadline: 'Next cycle opens Jan 2027; deadline late April 2027',
    status: 'Priority lead',
    officialUrl: 'https://www.bristol.ac.uk/students/support/finances/scholarships/',
    editorialAssessment: 'Significant partial tuition reduction, but does not cover living expenses. Students must prove remaining financing.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open competitive merit essays.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'westminster-undergraduate-excellence',
    itemNumber: 54,
    name: 'University of Westminster — International Undergraduate Excellence Scholarship',
    provider: 'University of Westminster',
    institution: 'University of Westminster (London)',
    country: 'United Kingdom',
    region: 'United Kingdom',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students from developing and emerging countries',
    targetAudience: 'High-achieving students from low/middle income countries.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Partial tuition fee award (historically £5,000 per year towards tuition)',
      'Remaining tuition and London living costs are student responsibility'
    ],
    eligibilityCriteria: [
      'Hold an unconditional or conditional offer for a full-time bachelor’s course at Westminster',
      'Equivalent of minimum UK 2:1 / First Class secondary school leaving honors',
      'Financial need and clear career objectives'
    ],
    requiredDocuments: [
      'Westminster admission offer letter',
      'Scholarship application form with personal statement',
      'Certified academic transcripts and reference letter'
    ],
    applicationProcedure: [
      'Apply to Westminster via UCAS or direct portal.',
      'Download and submit scholarship form to university scholarship office before deadline.'
    ],
    deadline: 'Next cycle opens early 2027 (Check official scholarships page)',
    status: 'Priority lead',
    officialUrl: 'https://www.westminster.ac.uk/study/fees-and-funding/scholarships',
    editorialAssessment: 'Partial award. Must explicitly disclose London living expenses to low-income African candidates.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need and merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'auckland-international-undergraduate',
    itemNumber: 55,
    name: 'University of Auckland — International Student Excellence Scholarship',
    provider: 'University of Auckland',
    institution: 'University of Auckland',
    country: 'New Zealand',
    region: 'Oceania',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students',
    targetAudience: 'Top international secondary school graduates.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Up to NZD 10,000 paid as a tuition fee credit in the first year of study',
      'Subsequent years and living expenses must be self-funded'
    ],
    eligibilityCriteria: [
      'New international student enrolling in an eligible full-time bachelor\'s degree',
      'Excellent academic results in secondary school leaving qualification'
    ],
    requiredDocuments: [
      'University of Auckland admission application',
      'Scholarship application form and certified transcripts',
      'Recommendation letter and personal statement'
    ],
    applicationProcedure: [
      'Apply for undergraduate admission to Auckland.',
      'Submit scholarship application on Auckland portal before semi-annual closing date.'
    ],
    deadline: 'Semi-annual windows (typically November for Semester 1, April for Semester 2)',
    status: 'Priority lead',
    officialUrl: 'https://www.auckland.ac.nz/en/study/scholarships-and-awards.html',
    editorialAssessment: 'Partial first-year award (NZD 10,000). Remaining multi-year tuition and New Zealand living costs require personal funds.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Academic merit ranking.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'massey-undergraduate-study-grant',
    itemNumber: 56,
    name: 'Massey University — Undergraduate International Study Grant',
    provider: 'Massey University',
    institution: 'Massey University',
    country: 'New Zealand',
    region: 'Oceania',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students',
    targetAudience: 'New full-fee-paying international undergraduate students.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'NZD 15,000 applied to tuition fees in the first year of study',
      'Remaining tuition and all living/accommodation costs are student responsibility'
    ],
    eligibilityCriteria: [
      'Full-time new international undergraduate student on campus in New Zealand',
      'Satisfies Massey University academic and English requirements'
    ],
    requiredDocuments: [
      'Massey admission application and academic transcripts',
      'Study grant request section'
    ],
    applicationProcedure: [
      'Apply online for eligible bachelor’s program.',
      'Grant applied upon confirmation of enrollment and fee invoice.'
    ],
    deadline: 'Semester-dependent (Confirm current intake dates)',
    status: 'Priority lead',
    officialUrl: 'https://www.massey.ac.nz/study/scholarships-and-awards/',
    editorialAssessment: 'First-year partial grant. Not a complete funding solution for low-income students without additional sponsor.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'General international enrolment incentive.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'melbourne-international-undergraduate',
    itemNumber: 57,
    name: 'University of Melbourne — Melbourne International Undergraduate Scholarship',
    provider: 'University of Melbourne',
    institution: 'University of Melbourne',
    country: 'Australia',
    region: 'Oceania',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students (All non-Australian nationalities)',
    targetAudience: 'Academically stellar international students with top high school rank.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Tiers include: $10,000 tuition fee remission in the first year; 50% tuition remission for 3 years; or 100% full tuition remission for 3 years',
      'Does NOT cover living expenses, housing, airfare, or health cover (OSHC)'
    ],
    eligibilityCriteria: [
      'Citizen of a country other than Australia and New Zealand',
      'Completed secondary school with results in the top 1% to 3%',
      'Received unconditional admission offer to an undergraduate degree at Melbourne'
    ],
    requiredDocuments: [
      'No separate scholarship application required — all admitted students evaluated automatically',
      'Official secondary school transcripts and national exam results'
    ],
    applicationProcedure: [
      'Apply for undergraduate admission to University of Melbourne.',
      'Eligible admitted candidates automatically ranked by academic performance.'
    ],
    deadline: 'Aligned with Melbourne semester admissions (Semester 1: Nov / Semester 2: May)',
    status: 'Verified',
    officialUrl: 'https://scholarships.unimelb.edu.au/',
    editorialAssessment: 'Prestigious award. Automatic consideration; full tuition tier is extremely rare. Living costs in Melbourne remain unfunded.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Automatic GPA ranking.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'calgary-international-entrance',
    itemNumber: 58,
    name: 'University of Calgary — International Entrance Scholarship',
    provider: 'University of Calgary',
    institution: 'University of Calgary',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students requiring Canadian study permit',
    targetAudience: 'Top entering international students.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'CAD 20,000 in first year (renewable at CAD 20,000 in subsequent years with 3.2+ GPA)',
      'Substantially covers part of tuition, but remaining international fees and living costs apply'
    ],
    eligibilityCriteria: [
      'New international student entering first year of bachelor’s degree',
      'Minimum admission average of 95% or equivalent top honors',
      'Fulfill English language proficiency'
    ],
    requiredDocuments: [
      'University of Calgary admission application',
      'Awards application completed in student portal (my.ucalgary.ca)',
      'High school transcripts'
    ],
    applicationProcedure: [
      'Apply for undergraduate admission to Calgary.',
      'Access awards portal and submit high school awards application by December 1.',
      'Adjudication by university awards committee.'
    ],
    deadline: '1 December 2026',
    deadlineDate: '2026-12-01',
    status: 'Priority lead',
    officialUrl: 'https://www.ucalgary.ca/registrar/awards',
    editorialAssessment: 'CAD 20,000/year renewable entrance grant. Students must budget for remaining living expenses and tuition balance.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Merit-based entrance award.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'auc-egypt-mastercard-foundation',
    itemNumber: 59,
    name: 'American University in Cairo (AUC) — Mastercard Foundation Scholars Program',
    provider: 'Mastercard Foundation',
    institution: 'American University in Cairo (AUC)',
    country: 'Egypt',
    region: 'Africa',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Citizens of African countries who reside on the African continent',
    targetAudience: 'Academically qualified youth from low-income and conflict-affected backgrounds across Africa.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full tuition and institutional fees',
      'On-campus dormitory housing at AUC New Cairo',
      'Monthly living stipend and food allowance',
      'Health insurance and medical care',
      'Laptop, books, and educational supplies',
      'Round-trip international flights to Cairo'
    ],
    eligibilityCriteria: [
      'Citizen and current resident of an African country',
      'High school graduate with outstanding academic marks and community leadership',
      'Severe socioeconomic barrier preventing access to university',
      'English proficiency'
    ],
    requiredDocuments: [
      'AUC undergraduate admission application',
      'Mastercard Foundation application form',
      'Authenticated high school transcripts and certificates',
      'Financial statements / proof of socioeconomic status'
    ],
    applicationProcedure: [
      'Submit online application via AUC scholarship portal.',
      'Attach academic credentials and financial declarations.',
      'Interviews and background verification conducted virtually.'
    ],
    deadline: 'Cycle-specific (Check AUC donor-funded scholarships page for 2027 entry)',
    status: 'Verified',
    officialUrl: 'https://www.aucegypt.edu/admissions/scholarships/donor-funded/mastercard-foundation-scholars-program',
    editorialAssessment: 'Top North African institution with liberal arts curriculum. Comprehensive full-cost coverage for African scholars.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: true,
      description: 'Maintains strategic commitment to young women from marginalized communities.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'romania-government-scholarship',
    itemNumber: 60,
    name: 'Romanian Government Scholarship — Ministry of Foreign Affairs',
    provider: 'Ministry of Foreign Affairs (MAE), Romania',
    institution: 'Accredited Romanian Public Universities',
    country: 'Romania',
    region: 'Europe',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'Non-EU foreign citizens (African students eligible)',
    targetAudience: 'Secondary school graduates from non-EU nations seeking degree study in Europe.',
    fundingClassification: 'Tuition fully funded',
    fundingCoverageItemized: [
      'Full tuition fee exemption',
      'Free 1-year Romanian language preparatory course (bachelor’s taught in Romanian)',
      'Free student dormitory accommodation (subject to university capacity)',
      'Monthly pocket money allowance',
      'NOTE: International flights, food, and daily personal expenses are NOT covered'
    ],
    eligibilityCriteria: [
      'Non-EU citizen with valid passport',
      'Completed secondary education with good overall grade average (minimum 7/10 or equivalent)',
      'Medicine, Dentistry, and Pharmacy are excluded from this scholarship'
    ],
    requiredDocuments: [
      'Application submitted via official Study in Romania platform',
      'Certified copy of birth certificate and passport bio-page',
      'High school diploma and transcripts with certified Romanian/English translation',
      'Medical certificate'
    ],
    applicationProcedure: [
      'Apply online on scholarships.studyinromania.gov.ro.',
      'Select up to two universities and fields.',
      'MAE and Ministry of Education evaluate candidacies; letters of acceptance issued in July.'
    ],
    deadline: 'Annual window typically closes mid-March (Next cycle early 2027)',
    status: 'Priority lead',
    officialUrl: 'https://scholarships.studyinromania.gov.ro/',
    editorialAssessment: 'Government scholarship covering tuition and dorms, with 1-year language prep. Food and travel expenses must be met by applicant.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Bilateral government competition.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'aub-undergraduate-aid',
    itemNumber: 61,
    name: 'American University of Beirut (AUB) — Undergraduate Need-Based Financial Aid',
    provider: 'American University of Beirut',
    institution: 'American University of Beirut (AUB)',
    country: 'Lebanon',
    region: 'Middle East',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International and regional students',
    targetAudience: 'Admitted students with documented financial need.',
    fundingClassification: 'Need-based financial aid',
    fundingCoverageItemized: [
      'Tuition grants calculated on assessed financial need',
      'Work-study opportunities on campus'
    ],
    eligibilityCriteria: [
      'Admitted to full-time undergraduate program at AUB',
      'Submission of comprehensive financial aid form and supporting family assets'
    ],
    requiredDocuments: [
      'AUB admission and financial aid application',
      'Household tax returns, bank statements, and salary certificates'
    ],
    applicationProcedure: [
      'Submit admission and financial aid applications concurrently.',
      'Financial aid committee evaluates need index.'
    ],
    deadline: 'Aligned with AUB undergraduate admission deadlines',
    status: 'Priority lead',
    officialUrl: 'https://www.aub.edu.lb/admissions/Pages/financial-aid.aspx',
    editorialAssessment: 'Need-based assistance. Must check specific partner scholarships (such as Mastercard Foundation) for full funding.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Need-based evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'mcgill-entrance-aid',
    itemNumber: 62,
    name: 'McGill University — International Entrance Scholarships & Need-Based Aid',
    provider: 'McGill University',
    institution: 'McGill University (Montreal, Canada)',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students',
    targetAudience: 'Entering first-year undergraduate students.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Major Entrance Scholarships: CAD 3,000 to CAD 12,000/year (renewable)',
      'Need-based fee bursaries available upon separate financial application',
      'Does not automatically guarantee full-cost coverage for international students'
    ],
    eligibilityCriteria: [
      'Rank in top 1%–2% of secondary school class',
      'Direct admission to McGill undergraduate faculty'
    ],
    requiredDocuments: [
      'McGill online application',
      'Major Entrance Scholarship application and academic documents'
    ],
    applicationProcedure: [
      'Submit admission application on Minerva portal.',
      'Complete Major Entrance Scholarship application by mid-January.'
    ],
    deadline: 'Mid-January annually (Check Minerva portal dates)',
    status: 'Priority lead',
    officialUrl: 'https://www.mcgill.ca/',
    editorialAssessment: 'Partial merit entrance scholarships. Separate from postgraduate Mastercard Foundation schemes.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Academic merit ranking.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'ntu-undergraduate-scholarships',
    itemNumber: 63,
    name: 'Nanyang Technological University (NTU) — Nanyang Scholarship',
    provider: 'Nanyang Technological University',
    institution: 'NTU Singapore',
    country: 'Singapore',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students (All nationalities)',
    targetAudience: 'Top academic performers with strong co-curricular achievements.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      'Full subsidized tuition fees (after MOE Tuition Grant)',
      'Living allowance of SGD 6,500 per academic year',
      'Accommodation allowance of up to SGD 2,000 per academic year',
      'Travel grant of up to SGD 5,000 for overseas study program'
    ],
    eligibilityCriteria: [
      'Outstanding academic records in high school leaving examinations',
      'Strong leadership qualities and extracurricular record',
      'Admission to a full-time undergraduate degree at NTU'
    ],
    requiredDocuments: [
      'NTU admission application and scholarship section',
      'Referee assessment letter',
      'Personal essay'
    ],
    applicationProcedure: [
      'Submit undergraduate admission application.',
      'Complete scholarship application and submit referee link before deadline.'
    ],
    deadline: 'Aligned with NTU international qualifications (mid-January to mid-March)',
    status: 'Priority lead',
    officialUrl: 'https://www.ntu.edu.sg/admissions/undergraduate/scholarships',
    editorialAssessment: 'Top Asian technological university. Full tuition and living stipend, subject to MOE tuition grant conditions.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Open competitive merit evaluation.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'utoronto-international-entrance',
    itemNumber: 64,
    name: 'University of Toronto — International Scholar Awards (Non-Pearson)',
    provider: 'University of Toronto',
    institution: 'University of Toronto',
    country: 'Canada',
    region: 'North America',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'International students',
    targetAudience: 'Admitted international secondary school applicants.',
    fundingClassification: 'Partially funded',
    fundingCoverageItemized: [
      'Faculty-level merit awards ranging from CAD 10,000 in Year 1 to CAD 25,000/year (renewable)',
      'Substantially offsets international tuition, but living expenses must be covered by student'
    ],
    eligibilityCriteria: [
      'Exceptional high school academic standing',
      'Automatic consideration upon submitting U of T admission application (no separate application needed for these faculty awards)'
    ],
    requiredDocuments: [
      'U of T admission file and official transcripts'
    ],
    applicationProcedure: [
      'Apply to U of T through OUAC by early January.',
      'Faculties select recipients based on academic transcripts.'
    ],
    deadline: 'Early January annually',
    status: 'Verified',
    officialUrl: 'https://future.utoronto.ca/finances/awards/',
    editorialAssessment: 'Distinct from Lester B. Pearson. These are faculty-level tuition reduction awards and do not provide full ride funding.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'Automatic academic ranking.'
    },
    verifiedReviewDate: '2026-10-14'
  },
  {
    id: 'mext-embassy-track-routing',
    itemNumber: 65,
    name: 'MEXT Japan — Embassy Recommendation Track Coordination Note',
    provider: 'MEXT & Japanese Diplomatic Missions',
    institution: 'Japanese Universities (Designated by MEXT)',
    country: 'Japan',
    region: 'Asia',
    studyLevel: 'Undergraduate',
    eligibleNationalities: 'African and international citizens with diplomatic representation',
    targetAudience: 'Direct applicants via local Embassy of Japan.',
    fundingClassification: 'Fully funded',
    fundingCoverageItemized: [
      '100% tuition, preparatory school fees, monthly stipend, and airfare',
      'Administered through bilateral diplomatic channels'
    ],
    eligibilityCriteria: [
      'National written exams in Math, English, Chemistry/Physics administered at Japanese Embassy',
      'Interview by Embassy diplomatic cultural attaché'
    ],
    requiredDocuments: [
      'Official MEXT Embassy Application Package',
      'Certified academic certificates'
    ],
    applicationProcedure: [
      'Contact local Embassy of Japan in April/May.',
      'Sit for competitive written examination and interview.'
    ],
    deadline: 'Nationally defined by each Japanese Embassy (Typically May – June)',
    status: 'Verified',
    officialUrl: 'https://www.studyinjapan.go.jp/en/planning/scholarship/',
    editorialAssessment: 'Operational routing note connecting applicants directly to national Japanese Embassy calls.',
    girlsWomenRelevance: {
      isReserved: false,
      isPriority: false,
      description: 'National competitive examination.'
    },
    verifiedReviewDate: '2026-10-14'
  }
];

export const REGIONS_LIST: string[] = [
  'All Regions',
  'Africa',
  'North America',
  'United Kingdom',
  'Europe',
  'Asia',
  'Middle East',
  'Oceania'
];

export const FUNDING_CLASSIFICATIONS_LIST: string[] = [
  'All Funding Types',
  'Fully funded',
  'Tuition fully funded',
  'Need-based financial aid',
  'Partially funded'
];

export const AUDIT_STATUSES_LIST: string[] = [
  'All Statuses',
  'Verified',
  'Priority lead',
  'Watchlist',
  'To be confirmed'
];
