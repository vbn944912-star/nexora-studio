import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import { enTranslations } from './translations/en';
import { arTranslations } from './translations/ar';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Icons for home-page previews
import { ArrowRight, Sparkles, Star, TrendingUp, CheckCircle, Code } from 'lucide-react';
import { portfolioProjects } from './data';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activePage, setActivePage] = useState<PageId>('home');

  const t = lang === 'en' ? enTranslations : arTranslations;

  // Dynamically set HTML direction and lang metadata
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Set dynamic SEO page title
    const pageTitleMap: Record<PageId, string> = {
      home: 'Nexora Studio | Premium Global Web Design & Development Agency',
      services: 'Services & Capabilities | Nexora Studio',
      portfolio: 'Selected Work & Digital Masterpieces | Nexora Studio',
      'case-studies': 'Enterprise Case Studies & Digital Transformations | Nexora Studio',
      pricing: 'Transparent Growth Investment Tiers | Nexora Studio',
      about: 'Our Story & Creative Philosophy | Nexora Studio',
      blog: 'Insights, UX Psychology & Web Engineering | Nexora Studio',
      contact: 'Book a Premium Creative Scope Consultation | Nexora Studio',
    };
    document.title = pageTitleMap[activePage] || 'Nexora Studio';
  }, [lang, activePage]);

  // Framer Motion Page Transition Variants
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col font-sans selection:bg-brand-primary/30 selection:text-white antialiased">
      {/* Dynamic SEO Meta Tags Simulation */}
      <span className="sr-only" aria-hidden="true" id="seo-meta">
        <meta name="description" content={t.seo.metaDesc} />
        <meta property="og:title" content={document.title} />
        <meta property="og:description" content={t.seo.metaDesc} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nexorastudio.com" />
      </span>

      {/* Header / Navbar */}
      <Navbar 
        currentLang={lang} 
        setLang={setLang} 
        t={t} 
        activePage={activePage} 
        setActivePage={setActivePage} 
      />

      {/* Main Viewport Content with transition */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {activePage === 'home' && (
              <>
                {/* Immersive Hero & Stats */}
                <Hero t={t} currentLang={lang} setActivePage={setActivePage} />

                {/* Structured Interactive Section previews on Home Page */}
                {/* 1. Services Highlight */}
                <div className="border-t border-white/5 bg-[#09090B] py-20 relative">
                  <div className="absolute top-1/2 left-10 h-64 w-64 bg-brand-primary/5 blur-3xl rounded-full" />
                  <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                      <div className="max-w-xl">
                        <span className="font-sans text-[11px] font-bold text-brand-accent uppercase tracking-widest">{t.nav.services}</span>
                        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {lang === 'en' ? 'Crafting Elite Digital Products' : 'صناعة منتجات رقمية نُخبوية'}
                        </h2>
                      </div>
                      <button
                        onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="group flex items-center space-x-1 font-sans text-xs font-bold text-brand-accent transition-all rtl:space-x-reverse"
                        id="home-services-see-all"
                      >
                        <span>{lang === 'en' ? 'Explore All 11 Capabilities' : 'اكتشف جميع التخصصات الـ ١١'}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                      </button>
                    </div>
                    {/* Compact Services Grid on Home */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { icon: Code, title: t.services.businessWebsites, desc: t.services.businessWebsitesDesc },
                        { icon: Sparkles, title: t.services.aiStartupWebsites, desc: t.services.aiStartupWebsitesDesc },
                        { icon: TrendingUp, title: t.services.seoOptimization, desc: t.services.seoOptimizationDesc },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="rounded-xl border border-white/5 bg-[#111827]/30 p-6 backdrop-blur-md">
                            <div className="h-10 w-10 rounded-lg bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                            <p className="mt-2 font-sans text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 2. Portfolio Highlights */}
                <div className="border-t border-white/5 bg-[#09090B] py-20">
                  <div className="mx-auto max-w-7xl px-6 sm:px-8">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
                      <div className="max-w-xl">
                        <span className="font-sans text-[11px] font-bold text-brand-secondary uppercase tracking-widest">{t.nav.portfolio}</span>
                        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {lang === 'en' ? 'Our Definitive Work' : 'أعمالنا الحائزة على جوائز'}
                        </h2>
                      </div>
                      <button
                        onClick={() => { setActivePage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="group flex items-center space-x-1 font-sans text-xs font-bold text-brand-secondary transition-all rtl:space-x-reverse"
                        id="home-portfolio-see-all"
                      >
                        <span>{lang === 'en' ? 'View All 10 Fictional Projects' : 'استعرض جميع المشاريع الـ ١٠'}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                      </button>
                    </div>

                    {/* Preview of top 2 high-end projects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {portfolioProjects.slice(0, 2).map((project) => {
                        const data = lang === 'en' ? project.en : project.ar;
                        return (
                          <div 
                            key={project.id}
                            onClick={() => { setActivePage('portfolio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="group cursor-pointer rounded-2xl border border-white/5 bg-[#111827]/20 overflow-hidden hover:border-white/10 transition-all duration-300"
                          >
                            <div className={`aspect-video w-full bg-gradient-to-br ${project.imageColor} flex items-center justify-center p-6`}>
                              <div className="rounded-lg bg-white/5 border border-white/10 p-4 backdrop-blur-md text-center max-w-xs">
                                <span className="font-mono text-[9px] text-zinc-400">nexora.preview</span>
                                <h3 className="mt-2 font-display text-sm font-bold text-white">{data.title}</h3>
                              </div>
                            </div>
                            <div className="p-6">
                              <span className="font-sans text-[10px] font-bold text-brand-accent uppercase tracking-wider">{data.industry}</span>
                              <h3 className="mt-1.5 font-display text-xl font-bold text-white group-hover:text-brand-accent duration-200">{data.title}</h3>
                              <p className="mt-2 font-sans text-xs text-zinc-400 line-clamp-2">{data.description}</p>
                              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs">
                                <span className="font-sans font-bold text-brand-success">{lang === 'en' ? 'Result' : 'النتيجة'}: {project.metric}</span>
                                <span className="text-zinc-500 font-semibold">{lang === 'en' ? 'Explore details' : 'استعراض التفاصيل'} →</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3. Luxury Testimonial Trust proof banner */}
                <div className="border-t border-white/5 bg-[#111827]/20 py-16 backdrop-blur-md">
                  <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
                    <div className="flex justify-center space-x-1 mb-6 rtl:space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4.5 w-4.5 fill-brand-accent text-brand-accent" />
                      ))}
                    </div>
                    <blockquote className="font-display text-lg sm:text-xl font-medium text-white italic leading-relaxed">
                      {lang === 'en' 
                        ? '"Nexora Studio built a digital asset that immediately elevated our brand positioning and doubled our enterprise leads. Their attention to design details is comparable only to Apple. Worth every single dollar invested."'
                        : '"قام استوديو نيكسورا ببناء أصل رقمي رفع فوراً من مكانة علامتنا التجارية وضاعف مبيعاتنا للشركات الكبرى. إن اهتمامهم بتفاصيل التصميم لا يضاهيه سوى أبل. يستحق كل دولار استثمرناه."'}
                    </blockquote>
                    <cite className="mt-6 block not-italic font-sans">
                      <span className="block text-sm font-bold text-white">Alexander Sterling</span>
                      <span className="block text-[11px] text-zinc-500 font-semibold uppercase tracking-wider mt-1">Vice President of Growth, Vanguard Group</span>
                    </cite>
                  </div>
                </div>

                {/* 4. Home CTA banner */}
                <div className="border-t border-white/5 bg-[#09090B] py-20 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 via-transparent to-transparent" />
                  <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center relative z-10">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {lang === 'en' ? 'Ready to Scale Your Business Authority?' : 'هل أنت مستعد لمضاعفة هيبة ومبيعات عملك؟'}
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto font-sans text-sm text-zinc-400 leading-relaxed">
                      {lang === 'en'
                        ? 'Schedule a direct video session with our principal design directors to assess your goals and define a bespoke plan.'
                        : 'حدد موعد جلسة فيديو مباشرة مع كبار مدراء التصميم لدينا لتقييم أهدافك ووضع خطة مخصصة.'}
                    </p>
                    <button
                      onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="mt-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.35)] active:scale-95"
                      id="home-cta-bottom"
                    >
                      {t.hero.ctaBook}
                    </button>
                  </div>
                </div>
              </>
            )}

            {activePage === 'services' && (
              <Services t={t} currentLang={lang} setActivePage={setActivePage} />
            )}

            {activePage === 'portfolio' && (
              <Portfolio t={t} currentLang={lang} setActivePage={setActivePage} />
            )}

            {activePage === 'case-studies' && (
              <CaseStudies t={t} currentLang={lang} />
            )}

            {activePage === 'pricing' && (
              <Pricing t={t} currentLang={lang} setActivePage={setActivePage} />
            )}

            {activePage === 'about' && (
              <About t={t} currentLang={lang} />
            )}

            {activePage === 'blog' && (
              <Blog t={t} currentLang={lang} />
            )}

            {activePage === 'contact' && (
              <Contact t={t} currentLang={lang} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        t={t} 
        currentLang={lang} 
        setLang={setLang} 
        setActivePage={setActivePage} 
      />
    </div>
  );
}
