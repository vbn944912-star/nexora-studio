import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { PageId, TranslationSchema } from '../types';

interface NavbarProps {
  currentLang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  t: TranslationSchema;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
}

export default function Navbar({ currentLang, setLang, t, activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'case-studies', label: t.nav.caseStudies },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'about', label: t.nav.about },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => {
    setLang(currentLang === 'en' ? 'ar' : 'en');
  };

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsOpen(false);
    // Smooth scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="group flex cursor-pointer items-center space-x-2 font-display text-xl font-bold tracking-tight text-white select-none rtl:space-x-reverse"
          id="nav-logo"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary p-[1px] transition-transform duration-500 group-hover:rotate-12">
            <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#09090B]">
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-base font-extrabold text-transparent">
                N
              </span>
            </div>
          </div>
          <span className="font-semibold tracking-wide transition-colors duration-300 group-hover:text-brand-accent">
            Nexora
            <span className="font-light text-brand-secondary">Studio</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 font-sans text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
                id={`nav-item-${item.id}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-white/5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1.5 rounded-full border border-white/10 px-3.5 py-1.5 font-sans text-xs font-semibold text-zinc-300 hover:bg-white/5 hover:text-white transition-all duration-300 rtl:space-x-reverse"
            id="lang-switcher-desktop"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{currentLang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Book Consultation */}
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative flex items-center space-x-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-5 py-2.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95 rtl:space-x-reverse"
            id="nav-cta-desktop"
          >
            <Calendar className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
            <span>{t.nav.cta}</span>
          </button>
        </div>

        {/* Mobile Menu Trigger & Language Button */}
        <div className="flex lg:hidden items-center space-x-3 rtl:space-x-reverse">
          {/* Mobile Language Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle language"
            id="lang-switcher-mobile"
          >
            <Globe className="h-4 w-4" />
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden border-t border-white/5 bg-[#09090B]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col space-y-1.5 px-6 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center rounded-lg px-4 py-3 font-sans text-[14px] font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'bg-white/5 text-white font-semibold' 
                        : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                    }`}
                    id={`mobile-nav-item-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 pb-2 border-t border-white/5">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary py-3.5 font-sans text-[13px] font-bold text-white transition-all duration-300 active:scale-95 rtl:space-x-reverse"
                  id="mobile-nav-cta"
                >
                  <Calendar className="h-4 w-4" />
                  <span>{t.nav.cta}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
