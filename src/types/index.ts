export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'blockchain' | 'tools' | 'database';
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactSubmission extends ContactForm {
  id?: string;
  created_at?: string;
  status?: 'pending' | 'processed' | 'replied';
}

export type Language = 'fr' | 'en';

export interface Translations {
  // Header
  about: string;
  projects: string;
  skills: string;
  formations: string;
  contact: string;
  toggleDarkMode: string;
  toggleLightMode: string;
  openMenu: string;
  closeMenu: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  contactMe: string;
  viewProjects: string;
  
  // About
  aboutTitle: string;
  aboutSubtitle: string;
  myJourney: string;
  aboutDescription1: string;
  aboutDescription2: string;
  workPhilosophy: string;
  philosophyQuote: string;
  qualityCode: string;
  qualityCodeDesc: string;
  performance: string;
  performanceDesc: string;
  collaboration: string;
  collaborationDesc: string;
  objectives: string;
  objectivesDesc: string;
  
  // Skills
  skillsTitle: string;
  skillsDescription: string;
  frontend: string;
  backend: string;
  blockchain: string;
  database: string;
  toolsDevops: string;
  cloudHosting: string;
  alwaysLearning: string;
  learningDescription: string;
  
  // Projects
  projectsTitle: string;
  projectsDescription: string;
  code: string;
  demo: string;
  
  // Formations
  formationsTitle: string;
  formationsDescription: string;
  downloadCatalog: string;
  duration: string;
  participants: string;
  level: string;
  tjm: string;
  technologiesCovered: string;
  practicalInfo: string;
  personalizedTraining: string;
  personalizedDesc: string;
  groupOrIndividual: string;
  groupDesc: string;
  inPersonOrRemote: string;
  locationDesc: string;
  certification: string;
  certificationDesc: string;
  interestedInTraining: string;
  
  // Contact
  contactTitle: string;
  contactDescription: string;
  letsDiscuss: string;
  contactIntro: string;
  email: string;
  response: string;
  responseTime: string;
  name: string;
  nameRequired: string;
  nameMinLength: string;
  emailRequired: string;
  emailInvalid: string;
  message: string;
  messageRequired: string;
  messageMinLength: string;
  fullName: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  sendMessage: string;
  sending: string;
  messageSuccess: string;
  messageSuccessDesc: string;
  sendAnother: string;
  submitError: string;
  openEmailClient: string;
  privacyNote: string;
  
  // Footer
  footerDescription: string;
  navigation: string;
  freelanceAvailable: string;
  contactDiscuss: string;
  developedWith: string;
  
  // Formations content
  webDevTitle: string;
  webDevDesc: string;
  web3Title: string;
  web3Desc: string;
  aiTitle: string;
  aiDesc: string;
  securityTitle: string;
  securityDesc: string;
  englishTitle: string;
  englishDesc: string;
  projectMgmtTitle: string;
  projectMgmtDesc: string;
  
  // Common
  beginner: string;
  intermediate: string;
  advanced: string;
  beginnerToAdvanced: string;
  beginnerToIntermediate: string;
  custom: string;
  
  // Project titles and descriptions
  project1Title: string;
  project1Description: string;
  project2Title: string;
  project2Description: string;
  project3Title: string;
  project3Description: string;
  project4Title: string;
  project4Description: string;
  project5Title: string;
  project5Description: string;
  project6Title: string;
  project6Description: string;
}