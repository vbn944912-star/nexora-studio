import { PageId, TranslationSchema } from '../types';
import { Calendar, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  setActivePage: (page: PageId) => void;
}

export default function Footer({ t, currentLang, setLang, setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'case-studies', label: t.nav.caseStudies },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'about', label: t.nav.about },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-white/5 bg-[#09090B] py-16 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Main upper footer block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand block (5 columns) */}
          <div className="md:col-span-5 space-y-5">
            <div 
              onClick={() => handleNavClick('home')}
              className="group flex cursor-pointer items-center space-x-2 font-display text-xl font-bold tracking-tight text-white select-none rtl:space-x-reverse"
              id="footer-logo"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#09090B]">
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-xs font-extrabold text-transparent">
                    N
                  </span>
                </div>
              </div>
              <span className="font-semibold tracking-wide transition-colors group-hover:text-brand-accent">
                Nexora
                <span className="font-light text-brand-secondary">Studio</span>
              </span>
            </div>

            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-zinc-500 max-w-sm">
              {currentLang === 'en'
                ? 'Nexora Studio is a premier global digital design agency crafting highly optimized websites that grow businesses and establish absolute authority.'
                : 'استوديو نيكسورا هو وكالة تصميم رقمية عالمية فاخرة، تصمم مواقع إلكترونية فائقة التحويل تنمي أعمالك وتفرض ريادتك في السوق.'}
            </p>

            <div className="flex items-center space-x-2.5 rtl:space-x-reverse text-xs text-brand-accent font-semibold">
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>
          </div>

          {/* Quick links block (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
              {currentLang === 'en' ? 'Sitemap Directory' : 'فهرس الموقع وسكيما'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-start font-sans text-xs hover:text-white transition-colors duration-200 py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct scheduling and quick language (3 columns) */}
          <div className="md:col-span-3 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                {currentLang === 'en' ? 'Quick Operations' : 'عمليات سريعة'}
              </h4>
              
              {/* Language toggler */}
              <button
                onClick={() => setLang(currentLang === 'en' ? 'ar' : 'en')}
                className="flex items-center space-x-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 hover:bg-white/5 hover:text-white transition-all duration-300 w-full rtl:space-x-reverse"
                id="footer-lang-btn"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{currentLang === 'en' ? 'العربية (RTL)' : 'English (LTR)'}</span>
              </button>
            </div>

            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary py-3 text-xs font-bold text-white transition-all duration-300 hover:shadow-lg w-full rtl:space-x-reverse"
              id="footer-cta-btn"
            >
              <Calendar className="h-4 w-4" />
              <span>{t.nav.cta}</span>
            </button>
          </div>
        </div>

        {/* Lower footer copyright details */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-zinc-600 font-sans">
          <p id="footer-copyright">
            {t.seo.copyright.replace('2026', currentYear.toString())}
          </p>

          {/* Fictional credentials list */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>ISO 27001 SECURE</span>
            <span>GDPR COMPLIANT</span>
            <span>CORE WEB VITALS 100%</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
