import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';
import { PageId, TranslationSchema } from '../types';

interface HeroProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
  setActivePage: (page: PageId) => void;
}

function AnimatedCounter({ target, suffix = '', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero({ t, currentLang, setActivePage }: HeroProps) {
  // Mock premium global client logos
  const enterpriseClients = [
    { name: 'Linear', class: 'font-mono tracking-widest text-zinc-500 hover:text-white transition-colors' },
    { name: 'STRIPE', class: 'font-sans font-extrabold tracking-wide text-zinc-500 hover:text-white transition-colors' },
    { name: 'Vercel', class: 'font-sans font-medium tracking-tight text-zinc-500 hover:text-white transition-colors' },
    { name: 'Framer', class: 'font-serif italic text-zinc-500 hover:text-white transition-colors' },
    { name: 'KSA Vision', class: 'font-sans text-xs tracking-wider uppercase text-zinc-500 hover:text-white transition-colors' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#09090B] pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-brand-primary/10 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-brand-secondary/10 blur-[100px]" />
      <div className="absolute -bottom-10 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-accent/5 blur-[80px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Badge & Introduction */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4.5 py-1.5 text-xs font-semibold text-brand-accent backdrop-blur-md rtl:space-x-reverse"
            id="hero-badge"
          >
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
            id="hero-headline"
          >
            <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {t.hero.headline.split(' ').slice(0, -3).join(' ')}
            </span>{' '}
            <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
              {t.hero.headline.split(' ').slice(-3).join(' ')}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl font-sans text-base text-zinc-400 sm:text-lg md:text-xl leading-relaxed"
            id="hero-subheadline"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* Action Call buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
            id="hero-ctas"
          >
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative flex w-full sm:w-auto items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-sans text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-95 rtl:space-x-reverse"
              id="hero-cta-book"
            >
              <span>{t.hero.ctaBook}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
            </button>

            <button
              onClick={() => {
                setActivePage('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex w-full sm:w-auto items-center justify-center space-x-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-sans text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 active:scale-95 rtl:space-x-reverse"
              id="hero-cta-work"
            >
              <span>{t.hero.ctaWork}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          id="hero-stats-grid"
        >
          {/* Completed */}
          <div className="relative rounded-2xl border border-white/5 bg-[#111827]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-primary/20">
            <div className="flex items-center space-x-3 text-brand-primary rtl:space-x-reverse">
              <Trophy className="h-5 w-5" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-primary/80">NEXORA PERFORMANCE</span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter target={120} suffix="+" />
            </p>
            <p className="mt-2 text-xs text-zinc-400 font-sans font-medium">{t.stats.completedSub}</p>
          </div>

          {/* Satisfaction */}
          <div className="relative rounded-2xl border border-white/5 bg-[#111827]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-secondary/20">
            <div className="flex items-center space-x-3 text-brand-secondary rtl:space-x-reverse">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary/80">GUARANTEE</span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              <span>99.4%</span>
            </p>
            <p className="mt-2 text-xs text-zinc-400 font-sans font-medium">{t.stats.satisfactionSub}</p>
          </div>

          {/* Countries */}
          <div className="relative rounded-2xl border border-white/5 bg-[#111827]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-accent/20">
            <div className="flex items-center space-x-3 text-brand-accent rtl:space-x-reverse">
              <Users className="h-5 w-5" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-accent/80">GLOBAL CLIENTS</span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter target={14} suffix="+" />
            </p>
            <p className="mt-2 text-xs text-zinc-400 font-sans font-medium">{t.stats.countriesSub}</p>
          </div>

          {/* Experience */}
          <div className="relative rounded-2xl border border-white/5 bg-[#111827]/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-brand-success/20">
            <div className="flex items-center space-x-3 text-brand-success rtl:space-x-reverse">
              <Sparkles className="h-5 w-5" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-brand-success/80">STABILITY</span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              <AnimatedCounter target={8} suffix="+" />
            </p>
            <p className="mt-2 text-xs text-zinc-400 font-sans font-medium">{t.stats.experienceSub}</p>
          </div>
        </motion.div>

        {/* Enterprise Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 border-t border-white/5 pt-10 text-center"
          id="hero-logos-section"
        >
          <p className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            {t.hero.clientsTitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {enterpriseClients.map((client, index) => (
              <span
                key={index}
                className={`text-lg md:text-xl font-bold ${client.class} opacity-40 hover:opacity-100 duration-300 cursor-default select-none`}
              >
                {client.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
