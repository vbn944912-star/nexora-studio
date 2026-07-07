import BeforeAfterSlider from './BeforeAfterSlider';
import { beforeAfterData } from '../data/dentalData';
import { Sparkles, Camera, Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface BeforeAfterPageProps {
  setActivePage: (page: PageId) => void;
}

export default function BeforeAfterPage({ setActivePage }: BeforeAfterPageProps) {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="before-after-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Case Gallery</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Before & After Gallery.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Drag the slider handles to interactively compare original dental states with our flawless finished crowns, porcelain veneers, and structural orthodontic alignments.
          </p>
        </div>

        {/* Comparison Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterData.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-3xl p-5.5 space-y-4 shadow-sm"
            >
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
                category={item.category}
              />
              <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic guarantee trust section */}
        <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/40 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-start max-w-xl">
            <div className="inline-flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
              <Camera className="h-3.5 w-3.5" />
              <span>Unretouched Professional Photography</span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
              Is Your Dream Smile Possible?
            </h3>
            <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              All clinical transformations in our cases are genuine, unretouched results from Elite Dental patients. We conduct digital design blueprints prior to treatment so you know exactly what your smile will look like.
            </p>
          </div>

          <button
            onClick={() => { setActivePage('book'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 font-sans text-xs font-bold text-white shadow-xl flex items-center space-x-2 flex-shrink-0"
          >
            <span>Design Your Bespoke Smile</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
