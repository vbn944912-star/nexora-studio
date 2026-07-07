export type PageId = 'home' | 'services' | 'portfolio' | 'case-studies' | 'pricing' | 'about' | 'blog' | 'contact';

export interface Stat {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  description: string;
  technology: string[];
  results: string;
  imageColor: string; // Dynamic modern placeholder gradient
  problem: string;
  solution: string;
  outcome: string;
  metric: string;
  metricLabel: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
}

export interface TranslationSchema {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    caseStudies: string;
    pricing: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaBook: string;
    ctaWork: string;
    clientsTitle: string;
  };
  stats: {
    completed: string;
    completedSub: string;
    satisfaction: string;
    satisfactionSub: string;
    countries: string;
    countriesSub: string;
    experience: string;
    experienceSub: string;
  };
  services: {
    title: string;
    subtitle: string;
    viewMore: string;
    businessWebsites: string;
    businessWebsitesDesc: string;
    landingPages: string;
    landingPagesDesc: string;
    restaurantWebsites: string;
    restaurantWebsitesDesc: string;
    medicalWebsites: string;
    medicalWebsitesDesc: string;
    realEstateWebsites: string;
    realEstateWebsitesDesc: string;
    lawFirmWebsites: string;
    lawFirmWebsitesDesc: string;
    aiStartupWebsites: string;
    aiStartupWebsitesDesc: string;
    websiteRedesign: string;
    websiteRedesignDesc: string;
    seoOptimization: string;
    seoOptimizationDesc: string;
    speedOptimization: string;
    speedOptimizationDesc: string;
    maintenance: string;
    maintenanceDesc: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    industryLabel: string;
    techLabel: string;
    resultsLabel: string;
    filterAll: string;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    problemLabel: string;
    solutionLabel: string;
    outcomeLabel: string;
    closeBtn: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    saveBtn: string;
    featuresLabel: string;
    mostPopular: string;
  };
  about: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyContent: string;
    missionTitle: string;
    missionContent: string;
    visionTitle: string;
    visionContent: string;
    valuesTitle: string;
    valuesContent: string;
    chooseUsTitle: string;
    chooseUsSubtitle: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    categories: {
      all: string;
      design: string;
      development: string;
      marketing: string;
      business: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formCompany: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
    whatsappBtn: string;
    emailBtn: string;
    bookConsultBtn: string;
    officeTitle: string;
    officeLocation: string;
  };
  seo: {
    metaDesc: string;
    copyright: string;
  };
}
