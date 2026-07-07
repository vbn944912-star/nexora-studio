import { PageId } from '../types';
import { Calendar, Mail, Phone, MapPin, Clock, Sparkles, Facebook, Instagram, Linkedin } from 'lucide-react';

interface DentalFooterProps {
  setActivePage: (page: PageId) => void;
}

export default function DentalFooter({ setActivePage }: DentalFooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 pt-16 pb-12 text-zinc-500 dark:text-zinc-400 font-sans transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-200 dark:border-zinc-900">
          
          {/* Col 1: Brand & Bio (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNavClick('home')}
              className="flex cursor-pointer items-center space-x-2 font-serif text-xl font-extrabold tracking-tight dark:text-white text-zinc-900 select-none"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500 p-[1px] shadow-sm">
                <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-white dark:bg-zinc-950">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-xs font-black text-transparent">
                    E
                  </span>
                </div>
              </div>
              <span className="font-serif tracking-tight text-lg font-bold dark:text-zinc-100 text-zinc-900">
                Elite
                <span className="font-sans font-light text-emerald-500 font-semibold">Dental</span>
              </span>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-zinc-400 dark:text-zinc-500 max-w-xs">
              Elite Dental Clinic is a premier, clinical excellence dental center providing luxury cosmetic, restorative, and surgical treatments under micro-precise digital diagnostics.
            </p>

            <div className="flex space-x-3.5 text-zinc-400 dark:text-zinc-600">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Col 2: Navigation Directory (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Directory
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Our Story' },
                { id: 'services', label: 'Treatments' },
                { id: 'doctors', label: 'Specialists' },
                { id: 'before-after', label: 'Case Gallery' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id as PageId)}
                  className="text-start text-xs hover:text-emerald-500 transition-colors py-0.5 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Support Directory (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Support
            </h4>
            <div className="flex flex-col space-y-2">
              {[
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'faq', label: 'FAQs' },
                { id: 'contact', label: 'Contact Us' },
                { id: 'book', label: 'Reservation' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id as PageId)}
                  className="text-start text-xs hover:text-emerald-500 transition-colors py-0.5 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Contact & Working Hours (4 columns) */}
          <div className="lg:col-span-4 space-y-4 text-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Clinic Contact & Hours
            </h4>
            
            <div className="space-y-3">
              {/* Hours */}
              <div className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <Clock className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-zinc-700 dark:text-zinc-300">Working Hours</span>
                  <span className="block text-zinc-400 dark:text-zinc-500 mt-0.5">
                    Mon - Fri: 08:00 AM - 06:00 PM <br />
                    Sat: 09:00 AM - 04:00 PM <br />
                    Sun: Closed (Emergency Hotline Active)
                  </span>
                </div>
              </div>

              {/* Phone / Email */}
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-emerald-500" />
                <a href="tel:+15553548300" className="font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-500">
                  (555) ELITE-300
                </a>
              </div>

              <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-emerald-500" />
                <a href="mailto:concierge@elitedental.com" className="font-bold text-zinc-700 dark:text-zinc-300 hover:text-emerald-500">
                  concierge@elitedental.com
                </a>
              </div>
            </div>

            {/* Google Maps Coordinates Preview */}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center space-x-2 w-full text-center justify-center rounded-xl bg-zinc-200/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 p-2 text-[11px] font-bold text-zinc-700 dark:text-zinc-300 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-emerald-500" />
                <span>730 Fifth Avenue, New York, NY</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lower Footer copyright */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-zinc-400 dark:text-zinc-600 font-sans">
          <p id="footer-copyright-dental">
            &copy; {currentYear} Elite Dental Clinic LLC. All rights reserved. Made for high-income dental care patients.
          </p>

          {/* Clinically validated standards list */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-bold uppercase tracking-wider text-[10px]">
            <span>ADA ACCREDITED</span>
            <span>HIPAA SECURED</span>
            <span>OSHA COMPLIANT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
