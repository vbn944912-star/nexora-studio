import { PageId } from '../types';
import { Menu, X, Sun, Moon, CalendarDays, PhoneCall, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface DentalNavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function DentalNavbar({ activePage, setActivePage, theme, toggleTheme }: DentalNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Doctors' },
    { id: 'before-after', label: 'Before & After' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          
          {/* Logo Brand Block */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex cursor-pointer items-center space-x-2 font-serif text-xl font-extrabold tracking-tight dark:text-white text-zinc-900 group select-none"
            id="navbar-logo-dental"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 p-[1px] shadow-sm">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-white dark:bg-zinc-950">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-sm font-black text-transparent">
                  E
                </span>
              </div>
            </div>
            <span className="font-serif tracking-tight text-lg md:text-xl font-bold dark:text-zinc-100 text-zinc-900 group-hover:text-emerald-500 duration-200">
              Elite
              <span className="font-sans font-light text-emerald-500">Dental</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-3.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-full font-sans text-xs font-semibold transition-all duration-300 ${
                  activePage === link.id
                    ? 'bg-emerald-500/10 dark:bg-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action Operations (Theme Toggle, Schedule button, emergency call) */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300"
              aria-label="Toggle theme mode"
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Quick Consultation Call */}
            <a
              href="tel:+15553548300"
              className="flex items-center space-x-1 px-3 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 rounded-xl transition-all"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>(555) ELITE-300</span>
            </a>

            {/* Book Appointment Button */}
            <button
              onClick={() => handleNavClick('book')}
              className="flex items-center space-x-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95 hover:brightness-105"
              id="nav-cta-book"
            >
              <CalendarDays className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Bar Actions (Theme, Menu triggers) */}
          <div className="flex lg:hidden items-center space-x-3">
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-zinc-250 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-6 space-y-3 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-start px-3 py-2 rounded-xl font-sans text-xs font-semibold ${
                  activePage === link.id
                    ? 'bg-emerald-500/10 text-emerald-500'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
            <a
              href="tel:+15553548300"
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <PhoneCall className="h-4 w-4 text-emerald-500" />
              <span>Call: (555) ELITE-300</span>
            </a>

            <button
              onClick={() => handleNavClick('book')}
              className="flex items-center justify-center space-x-2 w-full rounded-xl bg-emerald-500 dark:bg-emerald-600 py-3 font-sans text-xs font-bold text-white shadow-lg"
            >
              <CalendarDays className="h-4 w-4" />
              <span>Schedule Appointment</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
