export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'doctors'
  | 'before-after'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'book';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'cosmetic' | 'restorative' | 'preventive' | 'specialist';
  icon: string; // Name of Lucide icon
  longDescription: string;
  benefits: string[];
  duration: string;
  priceEstimate: string;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  education: string[];
  credentials: string[];
  rating: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  treatment: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'treatments' | 'pricing' | 'insurance' | 'booking';
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  doctorId: string;
  serviceId: string;
  notes?: string;
  status: 'pending' | 'confirmed';
  createdAt: string;
}
