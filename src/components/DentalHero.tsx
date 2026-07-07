import { PageId } from '../types';
import { ShieldCheck, Sparkles, Award, Users, Star, ArrowRight, CalendarDays, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface DentalHeroProps {
  setActivePage: (page: PageId) => void;
}

export default function DentalHero({ setActivePage }: DentalHeroProps) {
  const stats = [
    { value: '20+', label: 'Years Experience', icon: Award, color: 'text-emerald-500' },
    { value: '15,000+', label: 'Happy Patients', icon: Users, color: 'text-teal-500' },
    { value: '4.9★', label: 'Average Rating', icon: Star, color: 'text-amber-500' }
  ];

  const handleNav = (id: PageId) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950 py-12 lg:py-20 transition-colors duration-300">
      
      {/* Dynamic ambient background blur circles */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-emerald-400/5 dark:bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-teal-400/5 dark:bg-teal-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column (7 columns) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-start relative z-10">
            
            {/* Fine Luxury Certification Badge */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-600 dark:text-emerald-400 font-sans text-xs font-bold uppercase tracking-widest leading-none mx-auto lg:mx-0">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Pinnacle of Aesthetic Oral Science</span>
            </div>

            {/* Display Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
              Your Smile <br />
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Deserves Excellence.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience premium dental care with advanced technology and world-class specialists. We construct flawless smiles designed with artistic precision and surgical mastery.
            </p>

            {/* Dual Actions CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleNav('book')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-sans text-xs font-bold text-white shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:brightness-105 active:scale-95"
                id="hero-cta-book-appointment"
              >
                <CalendarDays className="h-4.5 w-4.5" />
                <span>Book Appointment</span>
              </button>

              <a
                href="tel:+15553548300"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full border border-zinc-200 dark:border-zinc-800 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/40 px-8 py-4 font-sans text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 active:scale-95"
                id="hero-cta-call-now"
              >
                <PhoneCall className="h-4.5 w-4.5 text-emerald-500" />
                <span>Call Now: (555) ELITE-300</span>
              </a>
            </div>

            {/* Micro security/quality assurance tag */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-zinc-400 text-xs">
              <ShieldCheck className="h-4.5 w-4.5 text-emerald-500" />
              <span className="font-semibold">ISO 9001 CLINICAL ACCREDITED • 100% PAINLESS PLEDGE</span>
            </div>

            {/* Stats Counter Cards Grid Embedded directly in Hero */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 border-t border-zinc-150 dark:border-zinc-900/80">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center lg:items-start p-3 bg-zinc-50/70 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-2xl shadow-sm hover:border-emerald-500/20 duration-300"
                  >
                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                      <Icon className={`h-4 w-4 ${stat.color}`} />
                      <span className="font-serif text-lg sm:text-xl lg:text-2xl font-black text-zinc-900 dark:text-white">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-1 uppercase tracking-wider text-center lg:text-start leading-tight">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Hero Right Column (5 columns) with beautiful floating photo frame */}
          <div className="lg:col-span-5 relative z-10 flex justify-center">
            
            <div className="relative max-w-md w-full aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-50 dark:bg-zinc-900 group">
              
              {/* Patient Photo (from our high fidelity generated path) */}
              <img
                src="/src/assets/images/hero_patient_1783418392416.jpg"
                alt="Elite Dental Smiling Patient"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Luxury Glassmorphic floating micro widget */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/70 dark:bg-zinc-950/75 backdrop-blur-md p-4 rounded-2xl border border-white/20 dark:border-zinc-800/50 shadow-lg flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Client Spotlight</span>
                  <h4 className="font-serif text-sm font-bold text-zinc-900 dark:text-white mt-0.5">Helena Rothschild</h4>
                  <p className="text-[10px] text-zinc-400">Full Veneers Reconstruction client</p>
                </div>
                <button
                  onClick={() => handleNav('before-after')}
                  className="p-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-colors"
                  aria-label="See client transition slider"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Corner badge indicating technological leadership */}
              <div className="absolute top-4 right-4 bg-zinc-900/85 dark:bg-zinc-950/90 text-white rounded-full px-3 py-1.5 text-[9px] font-sans font-bold uppercase tracking-wider border border-white/10 shadow-lg flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>3D Intraoral Guided</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
