import { motion } from 'motion/react';
import { portfolioProjects } from '../data';
import { TranslationSchema } from '../types';
import { Brain, Landmark, HeartHandshake, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';

interface CaseStudiesProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
}

export default function CaseStudies({ t, currentLang }: CaseStudiesProps) {
  // Let's showcase the 3 core case studies for a dedicated layout:
  // - Synapse AI (Tech)
  // - Aurelia Dental (Health / Cosmetic)
  // - Apex Legal (Corporate Law)
  const caseStudyIds = ['ai-startup', 'luxury-dental', 'law-firm'];
  const activeCaseStudies = portfolioProjects.filter((p) => caseStudyIds.includes(p.id));

  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-startup': return Cpu;
      case 'luxury-dental': return HeartHandshake;
      case 'law-firm': return Landmark;
      default: return Brain;
    }
  };

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="case-studies">
      {/* Decorative Blur */}
      <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-secondary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t.caseStudies.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Dynamic Editorial Layout */}
        <div className="space-y-16" id="case-studies-list">
          {activeCaseStudies.map((project, index) => {
            const data = currentLang === 'en' ? project.en : project.ar;
            const Icon = getIcon(project.id);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-stretch rounded-2xl border border-white/5 bg-[#111827]/30 p-8 backdrop-blur-md ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                id={`case-study-item-${project.id}`}
              >
                {/* Visual Highlight card left */}
                <div className={`lg:w-2/5 rounded-xl bg-gradient-to-tr ${project.imageColor} p-8 flex flex-col justify-between relative overflow-hidden min-h-[300px]`}>
                  <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full blur-3xl" />
                  
                  {/* Category icon */}
                  <div className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* High Value metric */}
                  <div className="relative z-10">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-accent">{data.industry}</span>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-white leading-tight">
                      {data.title}
                    </h3>
                  </div>

                  {/* Metrics block */}
                  <div className="relative z-10 border-t border-white/10 pt-4 mt-6 flex justify-between items-center">
                    <div>
                      <p className="font-sans text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{data.metricLabel}</p>
                      <p className="mt-0.5 font-display text-3xl font-extrabold text-white">{project.metric}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-brand-success/90 rounded-full px-3.5 py-1.5 text-xs font-bold text-white shadow-lg rtl:space-x-reverse">
                      <TrendingUp className="h-3.5 w-3.5" />
                      <span>{data.results.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative block right */}
                <div className="lg:w-3/5 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Brief Intro */}
                    <p className="font-sans text-base text-white/90 font-medium leading-relaxed">
                      {data.description}
                    </p>

                    {/* Columns grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                      {/* Problem */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5 text-rose-400 font-bold rtl:space-x-reverse">
                          <ShieldAlert className="h-4 w-4 shrink-0" />
                          <span className="font-sans text-[10px] uppercase tracking-widest">{t.caseStudies.problemLabel}</span>
                        </div>
                        <p className="font-sans text-[12.5px] leading-relaxed text-zinc-400">
                          {data.problem}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5 text-brand-primary font-bold rtl:space-x-reverse">
                          <Cpu className="h-4 w-4 shrink-0" />
                          <span className="font-sans text-[10px] uppercase tracking-widest">{t.caseStudies.solutionLabel}</span>
                        </div>
                        <p className="font-sans text-[12.5px] leading-relaxed text-zinc-400">
                          {data.solution}
                        </p>
                      </div>

                      {/* Outcome */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-1.5 text-brand-success font-bold rtl:space-x-reverse">
                          <CheckCircle className="h-4 w-4 shrink-0" />
                          <span className="font-sans text-[10px] uppercase tracking-widest">{t.caseStudies.outcomeLabel}</span>
                        </div>
                        <p className="font-sans text-[12.5px] leading-relaxed text-zinc-300 font-medium">
                          {data.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom review message */}
                  <div className="mt-8 border-t border-white/5 pt-4 text-xs text-zinc-500 font-medium font-sans">
                    {currentLang === 'en' ? 'Audit verified by Nexora engineering governance' : 'تم التحقق من النتيجة واعتمادها من قِبل إدارة حوكمة استوديو نيكسورا'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
