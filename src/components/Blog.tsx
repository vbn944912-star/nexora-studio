import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts, BilingualBlogPost } from '../data';
import { TranslationSchema } from '../types';
import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock, Sparkles, User, X } from 'lucide-react';

interface BlogProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
}

export default function Blog({ t, currentLang }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BilingualBlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'development' | 'marketing' | 'business'>('all');

  const categories = [
    { id: 'all', label: t.blog.categories.all },
    { id: 'design', label: t.blog.categories.design },
    { id: 'development', label: t.blog.categories.development },
    { id: 'marketing', label: t.blog.categories.marketing },
    { id: 'business', label: t.blog.categories.business },
  ];

  const filteredPosts = blogPosts.filter(
    (post) => activeCategory === 'all' || post.category === activeCategory
  );

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="blog">
      {/* Absolute decorative ambient light */}
      <div className="absolute top-1/3 left-10 h-[350px] w-[350px] rounded-full bg-brand-primary/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="blog-title">
            {t.blog.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="blog-subtitle">
            {t.blog.subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12" id="blog-categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`rounded-full px-5 py-2.5 font-sans text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)]'
                  : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
              id={`blog-category-btn-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid">
          {filteredPosts.map((post, index) => {
            const data = currentLang === 'en' ? post.en : post.ar;
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111827]/40 p-6 backdrop-blur-md hover:border-white/10 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedPost(post)}
                id={`blog-card-${post.id}`}
              >
                <div>
                  {/* Article Metadata (Date & Read time) */}
                  <div className="flex items-center space-x-3 text-zinc-500 font-sans text-[11px] font-bold uppercase tracking-wider mb-4 rtl:space-x-reverse">
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300 line-clamp-2">
                    {data.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-3.5 font-sans text-[13px] leading-relaxed text-zinc-400 line-clamp-3">
                    {data.excerpt}
                  </p>
                </div>

                {/* Author and Read article trigger */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="flex items-center space-x-2.5 rtl:space-x-reverse">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-sans text-[11.5px] font-bold text-white leading-none">{data.author}</p>
                      <p className="mt-1 font-sans text-[9.5px] text-zinc-500 font-medium leading-none">{data.authorRole}</p>
                    </div>
                  </div>

                  <span className="group-hover:translate-x-1 duration-300 transition-transform text-brand-accent flex items-center space-x-1 text-xs font-bold rtl:space-x-reverse rtl:group-hover:-translate-x-1">
                    <span>{t.blog.readMore}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Reader Drawer Slide-Over Popup (Stripe style) */}
      <AnimatePresence>
        {selectedPost && (() => {
          const detail = currentLang === 'en' ? selectedPost.en : selectedPost.ar;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-xl">
              {/* Clicking backdrop dismisses */}
              <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />

              <motion.div
                initial={{ x: '100%', opacity: 0.9 }}
                animate={{ x: '0%', opacity: 1 }}
                exit={{ x: '100%', opacity: 0.9 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative z-10 h-full w-full max-w-2xl border-l border-white/10 bg-[#09090B] p-6 sm:p-10 flex flex-col justify-between overflow-y-auto custom-scrollbar shadow-2xl"
                id="blog-reader-drawer"
              >
                <div>
                  {/* Close and Back to List buttons */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="group flex items-center space-x-1.5 font-sans text-xs font-bold text-zinc-400 hover:text-white transition-colors rtl:space-x-reverse"
                    >
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180" />
                      <span>{t.blog.backToBlog}</span>
                    </button>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:scale-105 transition-all"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center space-x-3 text-brand-accent font-sans text-[11px] font-bold uppercase tracking-wider mb-4 rtl:space-x-reverse">
                    <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
                      <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                      <span>{selectedPost.category.toUpperCase()}</span>
                    </span>
                    <span>•</span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl leading-snug">
                    {detail.title}
                  </h3>

                  {/* Author Highlight card */}
                  <div className="mt-6 flex items-center space-x-3 border-y border-white/5 py-4 rtl:space-x-reverse">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-zinc-300">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-bold text-white leading-none">{detail.author}</p>
                      <p className="mt-1.5 font-sans text-[11px] text-zinc-500 font-medium leading-none">{detail.authorRole}</p>
                    </div>
                  </div>

                  {/* Long Article Content Body (Aesthetic layout) */}
                  <div className="mt-8 font-sans text-[14.5px] leading-relaxed text-zinc-300 space-y-6">
                    <p className="font-semibold text-white text-base">
                      {detail.excerpt}
                    </p>
                    <p>
                      {detail.content}
                    </p>
                    {/* Fake rich editorial blocks to make it look highly professional and real */}
                    <blockquote className="border-l-2 border-brand-primary pl-4 font-serif italic text-white my-8 text-base">
                      {currentLang === 'en' 
                        ? '"True luxury in digital design is defined not by how much you can add, but by how much you can cleanly and purposefully strip away."'
                        : '"الفخامة الرقمية الحقيقية في التصميم لا تُقاس بما يمكنك إضافته، بل بما يمكنك التخلص منه بهدوء وهدف واضح."'}
                    </blockquote>
                    <p>
                      {currentLang === 'en'
                        ? 'Through extensive analytical validation, we have consistently observed that high-ticket consumers equate clean interactive whitespace with stability and financial reliability. A clutter-free interface immediately triggers a premium brand associations of exclusivity. Therefore, if your growth goal is to scale your project retainer values from $5,000 to over $20,000, your visual structure must first command absolute premium position authority.'
                        : 'من خلال تحليلات دقيقة ومتكررة، وجدنا بشكل متسق أن النخبة من العملاء يربطون الفراغات البيضاء التفاعلية والنظيفة بالاستقرار والموثوقية المالية للشركة. إن الواجهة الخالية من الفوضى تثير على الفور انطباعات النخبة والخصوصية والتميز. لذلك، إذا كان هدفك التوسعي هو رفع قيمة مشاريعك من ٥,٠٠٠ دولار إلى أكثر من ٢٠,٠٠٠ دولار، فيجب أن تفرض هويتك الرقمية أولاً مكانة ريادية فائقة الموثوقية.'}
                    </p>
                  </div>
                </div>

                {/* Footer sign off */}
                <div className="mt-16 border-t border-white/5 pt-6 flex items-center justify-between text-xs text-zinc-500 font-sans">
                  <span>Nexora Editorial Board</span>
                  <span className="flex items-center space-x-1 rtl:space-x-reverse">
                    <BookOpen className="h-4 w-4" />
                    <span>770 readers</span>
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
