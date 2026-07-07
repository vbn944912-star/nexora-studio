import { useState } from 'react';
import { faqData } from '../data/dentalData';
import { FAQItem } from '../types';
import { Search, ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'treatments' | 'insurance' | 'booking'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'general', label: 'General Care' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'insurance', label: 'Pricing & Insurance' },
    { id: 'booking', label: 'Scheduling & Diagnostics' }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="faq-page">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Block */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Support FAQ</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Frequently Answered.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
            Find immediate answers regarding insurance support, procedural timelines, veneers maintenance, and our luxury clinic protocols.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search questions (e.g., insurance, veneers)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors shadow-sm"
          />
        </div>

        {/* Category Toggles Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQs Accordion Panel List */}
        <div className="space-y-4 pt-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-2xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="w-full flex items-center justify-between p-5 text-start font-serif font-bold text-xs md:text-sm text-zinc-900 dark:text-white hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
                      <HelpCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-zinc-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 text-emerald-500' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-zinc-150 dark:border-zinc-900 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-zinc-400 dark:text-zinc-500 text-xs">
              No frequently asked questions match your criteria. Try looking for another category.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
