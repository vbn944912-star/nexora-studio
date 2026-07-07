import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';

// Components
import DentalNavbar from './components/DentalNavbar';
import DentalHero from './components/DentalHero';
import DentalFooter from './components/DentalFooter';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import DoctorsPage from './components/DoctorsPage';
import BeforeAfterPage from './components/BeforeAfterPage';
import TestimonialsPage from './components/TestimonialsPage';
import FAQPage from './components/FAQPage';
import ContactPage from './components/ContactPage';
import AppointmentForm from './components/AppointmentForm';
import BeforeAfterSlider from './components/BeforeAfterSlider';

// Data
import { servicesData, doctorsData, beforeAfterData, testimonialsData } from './data/dentalData';

// Icons
import { ArrowRight, Sparkles, Star, ShieldCheck, CheckCircle2, CalendarDays, Award, Users } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Handle HTML dark mode sync and metadata title changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const titleMap: Record<PageId, string> = {
      home: 'Elite Dental Clinic | Flagship Luxury Cosmetic & Implant Center Fifth Ave',
      about: 'Our Story & Heritage | Elite Dental Clinic',
      services: 'Clinical Services & Pricing Guides | Elite Dental Clinic',
      doctors: 'Meet the Board-Certified Medical Specialists | Elite Dental Clinic',
      'before-after': 'Before & After Smile Transformation Gallery | Elite Dental Clinic',
      testimonials: 'Prestigious Client Reviews & Verified Stories | Elite Dental Clinic',
      faq: 'Clinical Support FAQs & Treatment Information | Elite Dental Clinic',
      contact: 'Flagship New York Location & Consultation Inquiries | Elite Dental Clinic',
      book: 'Schedule a Priority Video or Physical Consultation | Elite Dental Clinic'
    };
    document.title = titleMap[activePage] || 'Elite Dental Clinic';
  }, [activePage]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Framer Motion Transition Variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-zinc-900 transition-colors duration-300">
      
      {/* Dynamic Hidden SEO Elements */}
      <span className="sr-only" aria-hidden="true" id="seo-meta">
        <meta name="description" content="Elite Dental Clinic is a premium cosmetic, reconstructive, and orthodontic center of absolute dental excellence on Fifth Avenue, New York." />
        <meta property="og:title" content={document.title} />
      </span>

      {/* Sticky Header */}
      <DentalNavbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Viewport Content Router */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <>
                {/* 1. Immersive Hero Block (contains core stats) */}
                <DentalHero setActivePage={setActivePage} />

                {/* 2. Services Highlights Teaser Section */}
                <div className="border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20 py-16 md:py-24 relative overflow-hidden transition-colors duration-300">
                  <div className="absolute top-1/2 left-10 h-64 w-64 bg-emerald-500/5 blur-3xl rounded-full" />
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                      <div>
                        <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Procedural Menu</span>
                        <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                          Specialized Dental Treatments.
                        </h2>
                      </div>
                      <button
                        onClick={() => handleNavClick('services')}
                        className="group flex items-center space-x-1 font-sans text-xs font-bold text-emerald-500 transition-all"
                        id="home-explore-services-btn"
                      >
                        <span>Explore All 8 Treatments</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Show top 3 curated service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {servicesData.slice(0, 3).map((service, idx) => {
                        return (
                          <div 
                            key={idx} 
                            onClick={() => { setSelectedServiceId(service.id); handleNavClick('services'); }}
                            className="group cursor-pointer rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/25 transition-all duration-300"
                          >
                            <span className="text-[10px] text-emerald-500 uppercase font-extrabold tracking-wide block mb-2">{service.category}</span>
                            <h3 className="font-serif text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 duration-200">{service.title}</h3>
                            <p className="mt-2 font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">{service.description}</p>
                            <span className="inline-block mt-4 text-xs font-bold text-emerald-500">{service.priceEstimate.split('/')[0]}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. Before & After Interactive Spotlight Slider Teaser */}
                <div className="border-t border-zinc-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-16 md:py-24 transition-colors duration-300">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                      
                      {/* Left: Interactive comparison box (6 columns) */}
                      <div className="lg:col-span-6 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-250 dark:border-zinc-850 p-5 rounded-3xl shadow-lg">
                        <BeforeAfterSlider
                          beforeImage={beforeAfterData[0].beforeImage}
                          afterImage={beforeAfterData[0].afterImage}
                          title={beforeAfterData[0].title}
                          category={beforeAfterData[0].category}
                        />
                      </div>

                      {/* Right: Narrative descriptive block (6 columns) */}
                      <div className="lg:col-span-6 space-y-6 text-center lg:text-start">
                        <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Interactive Proof</span>
                        <h2 className="font-serif text-3xl font-extrabold text-zinc-900 dark:text-white leading-tight">
                          Witness Real Clinical Transitions.
                        </h2>
                        <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                          Our master ceramists design veneers that combine high light reflection, personalized anatomy, and structural comfort. Drag the slider to experience Helena’s award-winning cosmetic smile transformation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                          <button
                            onClick={() => handleNavClick('before-after')}
                            className="w-full sm:w-auto rounded-full bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 px-6 py-3 font-sans text-xs font-bold text-white shadow-md transition-all active:scale-95"
                          >
                            Explore Case Gallery
                          </button>
                          <button
                            onClick={() => handleNavClick('book')}
                            className="w-full sm:w-auto font-sans text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 duration-200"
                          >
                            Analyze Your Smile →
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* 4. Doctors Team Highlights Teaser Section */}
                <div className="border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20 py-16 md:py-24 transition-colors duration-300">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                      <div>
                        <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Medical Board</span>
                        <h2 className="mt-2 font-serif text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                          Specialist Physicians.
                        </h2>
                      </div>
                      <button
                        onClick={() => handleNavClick('doctors')}
                        className="group flex items-center space-x-1 font-sans text-xs font-bold text-emerald-500 transition-all"
                        id="home-explore-doctors-btn"
                      >
                        <span>View Board Achievements</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>

                    {/* Show top 2 doctor preview cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {doctorsData.slice(0, 2).map((doc) => {
                        return (
                          <div 
                            key={doc.id}
                            onClick={() => { setSelectedDoctorId(doc.id); handleNavClick('doctors'); }}
                            className="group cursor-pointer rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 p-6 flex items-start space-x-4 shadow-sm hover:shadow-md hover:border-emerald-500/25 transition-all duration-300"
                          >
                            <img
                              src={doc.image}
                              alt={doc.name}
                              className="h-16 w-16 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 flex-shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            <div className="space-y-1.5 flex-grow">
                              <span className="text-[9px] text-emerald-500 uppercase font-extrabold tracking-wide block">{doc.specialization.split('&')[0]}</span>
                              <h3 className="font-serif text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 duration-200">{doc.name}</h3>
                              <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-2">{doc.bio}</p>
                              <span className="inline-block text-[10px] text-zinc-400 font-semibold">{doc.role} ({doc.experience})</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 5. Realistic Testimonial Banner Proof */}
                <div className="border-t border-zinc-150 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-16 md:py-20 transition-colors duration-300">
                  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
                    <div className="flex justify-center space-x-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    
                    <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl font-bold italic text-zinc-900 dark:text-white leading-relaxed">
                      "{testimonialsData[0].text}"
                    </blockquote>

                    <div>
                      <span className="block text-sm font-extrabold text-zinc-950 dark:text-white flex items-center justify-center space-x-1.5">
                        <span>{testimonialsData[0].name}</span>
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      </span>
                      <span className="block text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                        {testimonialsData[0].role} • Verified veneers treatment client
                      </span>
                    </div>

                    <button
                      onClick={() => handleNavClick('testimonials')}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      <span>Read all 8 realistic client stories</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* 6. Dynamic Call to Action Banner */}
                <div className="border-t border-zinc-150 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/10 py-20 relative overflow-hidden transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
                  <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
                    <h2 className="font-serif text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                      Experience Apple-Level Medical Care.
                    </h2>
                    <p className="max-w-xl mx-auto font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                      Schedule a priority consultation session online. Our digital concierge team will immediately coordinate your files, 3D imaging, and comfort requirements.
                    </p>
                    <button
                      onClick={() => handleNavClick('book')}
                      className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-sans text-xs font-bold text-white transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 active:scale-95"
                      id="home-cta-bottom-booking"
                    >
                      Reserve Consultation Now
                    </button>
                  </div>
                </div>
              </>
            )}

            {activePage === 'about' && (
              <AboutPage />
            )}

            {activePage === 'services' && (
              <ServicesPage 
                setActivePage={setActivePage} 
                setSelectedServiceId={setSelectedServiceId} 
              />
            )}

            {activePage === 'doctors' && (
              <DoctorsPage 
                setActivePage={setActivePage} 
                setSelectedDoctorId={setSelectedDoctorId} 
              />
            )}

            {activePage === 'before-after' && (
              <BeforeAfterPage setActivePage={setActivePage} />
            )}

            {activePage === 'testimonials' && (
              <TestimonialsPage />
            )}

            {activePage === 'faq' && (
              <FAQPage />
            )}

            {activePage === 'contact' && (
              <ContactPage />
            )}

            {activePage === 'book' && (
              <div className="py-10 bg-white dark:bg-zinc-950 min-h-[70vh] flex flex-col justify-center transition-colors duration-300">
                <div className="text-center max-w-xl mx-auto space-y-3 mb-4 px-4">
                  <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Digital Concierge</span>
                  <h2 className="font-serif text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    Secure Priority Session.
                  </h2>
                  <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                    Select your preferred treatment, medical specialist, and specific timeline below. Your data is protected by high-standard compliance guidelines.
                  </p>
                </div>

                <AppointmentForm 
                  initialServiceId={selectedServiceId} 
                  initialDoctorId={selectedDoctorId}
                  onSuccess={() => {
                    setSelectedServiceId('');
                    setSelectedDoctorId('');
                  }}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Dynamic Footer */}
      <DentalFooter setActivePage={setActivePage} />
    </div>
  );
}
