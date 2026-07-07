import { testimonialsData } from '../data/dentalData';
import { Star, CheckCircle2, Quote, Sparkles } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="testimonials-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Patient Stories</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Loved by Elite Clients.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Hear from our prestigious community of gallery owners, venture capital partners, startup directors, and families who entrust their smiles to us.
          </p>
        </div>

        {/* Testimonials Masonry/Grid (8 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-3xl p-6 relative flex flex-col justify-between hover:border-emerald-500/10 duration-350 shadow-sm hover:shadow-md"
            >
              {/* Quote Mark Decoration */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-emerald-500/5 dark:text-emerald-500/5 rotate-180 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars Counter */}
                <div className="flex space-x-0.5 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Narrative */}
                <p className="font-sans text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                  "{test.text}"
                </p>
              </div>

              {/* Author details block */}
              <div className="mt-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-900/40 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="font-serif text-xs font-bold text-zinc-950 dark:text-white">
                      {test.name}
                    </span>
                    {test.verified && (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" title="Verified Treatment Account" />
                    )}
                  </div>
                  <span className="block text-[10px] text-zinc-400 font-semibold uppercase tracking-wide mt-0.5">
                    {test.role}
                  </span>
                </div>

                <div className="text-end">
                  <span className="inline-block bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-500 rounded-full px-2.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest leading-normal">
                    {test.treatment}
                  </span>
                  <span className="block text-[9px] text-zinc-400 mt-1">
                    {test.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
