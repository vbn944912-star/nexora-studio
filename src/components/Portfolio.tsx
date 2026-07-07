import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioProjects, BilingualProject } from '../data';
import { PageId, TranslationSchema } from '../types';
import { ArrowUpRight, CheckCircle, Code, Shield, Sparkles, TrendingUp, X } from 'lucide-react';

interface PortfolioProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
  setActivePage: (page: PageId) => void;
}

export default function Portfolio({ t, currentLang, setActivePage }: PortfolioProps) {
  const [selectedProject, setSelectedProject] = useState<BilingualProject | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'corporate' | 'culinary' | 'real-estate' | 'tech' | 'health-luxury'>('all');

  const filterTags = [
    { id: 'all', label: t.portfolio.filterAll },
    { id: 'corporate', label: currentLang === 'en' ? 'Corporate & Legal' : 'الشركات والقانون' },
    { id: 'culinary', label: currentLang === 'en' ? 'Hospitality & Food' : 'الضيافة والأطعمة' },
    { id: 'real-estate', label: currentLang === 'en' ? 'Property & Builders' : 'العقارات والمقاولات' },
    { id: 'tech', label: currentLang === 'en' ? 'AI & Technology' : 'الذكاء الاصطناعي والتقنية' },
    { id: 'health-luxury', label: currentLang === 'en' ? 'Health & Fashion' : 'الصحة والموضة' },
  ];

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'corporate') {
      return project.id === 'law-firm' || project.id === 'construction';
    }
    if (activeFilter === 'culinary') {
      return project.id === 'modern-restaurant' || project.id === 'coffee-shop';
    }
    if (activeFilter === 'real-estate') {
      return project.id === 'real-estate' || project.id === 'hotel';
    }
    if (activeFilter === 'tech') {
      return project.id === 'ai-startup';
    }
    if (activeFilter === 'health-luxury') {
      return project.id === 'luxury-dental' || project.id === 'gym' || project.id === 'luxury-fashion';
    }
    return true;
  });

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="portfolio">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="portfolio-title">
            {t.portfolio.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="portfolio-subtitle">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12" id="portfolio-filters">
          {filterTags.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`rounded-full px-5 py-2.5 font-sans text-xs font-bold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)]'
                  : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
              id={`filter-btn-${filter.id}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (10 custom designed items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
          {filteredProjects.map((project, index) => {
            const data = currentLang === 'en' ? project.en : project.ar;
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111827]/40 backdrop-blur-md hover:border-white/10 transition-all duration-500"
                id={`portfolio-card-${project.id}`}
              >
                {/* Visual Image Placeholder Mockup with Custom Ambient Gradient */}
                <div className={`relative aspect-video w-full overflow-hidden bg-gradient-to-br ${project.imageColor} p-6 sm:p-8 flex items-center justify-center`}>
                  {/* Glass Card Floating overlay */}
                  <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex space-x-1.5 rtl:space-x-reverse">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="font-mono text-[9px] text-zinc-400">nexora.sandbox.dev</span>
                    </div>
                    <p className="mt-4 font-display text-base font-bold text-white tracking-wide">
                      {data.title}
                    </p>
                    <p className="mt-2.5 font-sans text-[11px] text-zinc-300 leading-relaxed font-normal line-clamp-2">
                      {data.description}
                    </p>
                  </div>

                  {/* High Value Metric Ribbon */}
                  <div className="absolute top-4 right-4 z-20 flex items-center space-x-1.5 rounded-full bg-brand-success/90 px-3 py-1 font-sans text-[10px] font-bold text-white tracking-wide shadow-lg rtl:space-x-reverse">
                    <TrendingUp className="h-3 w-3" />
                    <span>{project.metric}</span>
                  </div>

                  {/* Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 sm:p-8 flex-grow">
                  <div>
                    {/* Industry */}
                    <p className="font-sans text-xs font-semibold text-brand-accent uppercase tracking-wider">
                      {data.industry}
                    </p>

                    {/* Title */}
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                      {data.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 font-sans text-[13.5px] leading-relaxed text-zinc-400">
                      {data.description}
                    </p>

                    {/* Key Results */}
                    <div className="mt-5 rounded-lg border border-white/5 bg-white/5 p-3.5">
                      <p className="font-sans text-[11px] font-bold text-brand-success uppercase tracking-wider">
                        {t.portfolio.resultsLabel}
                      </p>
                      <p className="mt-1 font-sans text-[13px] font-medium text-white">
                        {data.results}
                      </p>
                    </div>
                  </div>

                  {/* Footer tags and Actions */}
                  <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.map((tech) => (
                        <span key={tech} className="rounded-md bg-white/5 px-2.5 py-1 font-sans text-[10px] font-bold text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center space-x-1 font-sans text-xs font-bold text-white transition-colors hover:text-brand-accent rtl:space-x-reverse"
                    >
                      <span>{t.portfolio.viewCaseStudy}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Studies Detailed Dialog Popup (Stripe/Apple-level Slide modal) */}
      <AnimatePresence>
        {selectedProject && (() => {
          const detail = currentLang === 'en' ? selectedProject.en : selectedProject.ar;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl overflow-y-auto">
              {/* Outer clicking listener close */}
              <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full max-w-4xl rounded-2xl border border-white/10 bg-[#09090B] p-6 sm:p-8 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
                id="case-study-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white transition-all duration-200 hover:scale-105"
                  id="close-modal-btn"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Badge Category */}
                <div className="flex items-center space-x-2 text-brand-accent mb-4 rtl:space-x-reverse">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-sans text-xs font-bold uppercase tracking-widest">{detail.industry}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl" id="modal-title">
                  {detail.title}
                </h3>

                {/* Bold Overview Key Metric grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/5 py-6">
                  <div>
                    <span className="font-sans text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{t.portfolio.resultsLabel}</span>
                    <p className="mt-1 font-sans text-sm font-semibold text-brand-success">{detail.results}</p>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{detail.metricLabel}</span>
                    <p className="mt-1 font-display text-2xl font-black text-white">{selectedProject.metric}</p>
                  </div>
                  <div>
                    <span className="font-sans text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{t.portfolio.techLabel}</span>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {selectedProject.technology.map((tech) => (
                        <span key={tech} className="rounded bg-white/5 px-2 py-0.5 font-sans text-[10px] font-bold text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study Problem, Strategy, Outcome Content */}
                <div className="mt-8 space-y-8 font-sans">
                  {/* Problem */}
                  <div className="flex flex-col md:flex-row md:space-x-8 gap-3.5 rtl:space-x-reverse">
                    <div className="md:w-1/4 flex items-center space-x-2 text-rose-400 font-bold rtl:space-x-reverse">
                      <Shield className="h-5 w-5 shrink-0" />
                      <span className="text-xs uppercase tracking-wider">{t.caseStudies.problemLabel}</span>
                    </div>
                    <p className="md:w-3/4 text-sm leading-relaxed text-zinc-400">
                      {detail.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="flex flex-col md:flex-row md:space-x-8 gap-3.5 rtl:space-x-reverse">
                    <div className="md:w-1/4 flex items-center space-x-2 text-brand-primary font-bold rtl:space-x-reverse">
                      <Code className="h-5 w-5 shrink-0" />
                      <span className="text-xs uppercase tracking-wider">{t.caseStudies.solutionLabel}</span>
                    </div>
                    <p className="md:w-3/4 text-sm leading-relaxed text-zinc-400">
                      {detail.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="flex flex-col md:flex-row md:space-x-8 gap-3.5 rtl:space-x-reverse">
                    <div className="md:w-1/4 flex items-center space-x-2 text-brand-success font-bold rtl:space-x-reverse">
                      <CheckCircle className="h-5 w-5 shrink-0" />
                      <span className="text-xs uppercase tracking-wider">{t.caseStudies.outcomeLabel}</span>
                    </div>
                    <p className="md:w-3/4 text-sm leading-relaxed text-zinc-300 font-medium">
                      {detail.outcome}
                    </p>
                  </div>
                </div>

                {/* Bottom Dismiss */}
                <div className="mt-10 pt-6 border-t border-white/5 text-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                  >
                    {t.caseStudies.closeBtn}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
