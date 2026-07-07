import { useState } from 'react';
import { PageId, Service } from '../types';
import { servicesData } from '../data/dentalData';
import { Sparkles, Shield, Activity, Heart, Layers, Smile, Zap, Grid, X, CheckCircle2, CalendarDays, DollarSign, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesPageProps {
  setActivePage: (page: PageId) => void;
  setSelectedServiceId?: (id: string) => void;
}

export default function ServicesPage({ setActivePage, setSelectedServiceId }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cosmetic' | 'restorative' | 'preventive' | 'specialist'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'restorative', label: 'Restorative' },
    { id: 'preventive', label: 'Preventive & Family' },
    { id: 'specialist', label: 'Specialized Care' }
  ];

  const filteredServices = servicesData.filter(s => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  // Dynamic Lucide icon lookup map
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Shield': return Shield;
      case 'Activity': return Activity;
      case 'Heart': return Heart;
      case 'Layers': return Layers;
      case 'Smile': return Smile;
      case 'Zap': return Zap;
      case 'Grid': return Grid;
      default: return Sparkles;
    }
  };

  const handleBookNow = (serviceId: string) => {
    if (setSelectedServiceId) {
      setSelectedServiceId(serviceId);
    }
    setSelectedService(null);
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="services-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Our Capabilities</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Advanced Clinical Solutions.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Explore our curated menu of elite dental procedures, ranging from premium dental implants and master ceramic veneers to ultra-gentle family cleanings.
          </p>
        </div>

        {/* Category Toggles Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4.5 py-2 rounded-full font-sans text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-3xl p-6.5 hover:border-emerald-500/20 dark:hover:border-emerald-500/10 transition-all duration-300 shadow-sm flex flex-col justify-between hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-500 flex items-center justify-center transition-colors group-hover:bg-emerald-500 group-hover:text-white duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 duration-200">
                        {service.title}
                      </h4>
                      <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-2 line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-900/40 flex items-center justify-between text-xs font-bold text-emerald-500">
                    <span>{service.priceEstimate.split('/')[0]}</span>
                    <span className="text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-1 duration-200">View details →</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Interactive Detailed Capability Slide Sheet Modal */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto space-y-6 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-800 dark:hover:text-white bg-zinc-50 dark:bg-zinc-900"
                  aria-label="Close details"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Service Header */}
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    {(() => {
                      const Icon = getIcon(selectedService.icon);
                      return <Icon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">
                      {selectedService.category} Care
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-black text-zinc-900 dark:text-white mt-0.5">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Deep description */}
                <p className="font-sans text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {selectedService.longDescription}
                </p>

                {/* Core Benefits */}
                <div className="space-y-2.5">
                  <h4 className="font-serif text-xs font-bold text-zinc-800 dark:text-white uppercase tracking-wider">
                    Key Clinical Benefits
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {selectedService.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start space-x-2.5 rtl:space-x-reverse text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                        <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimate details (Duration & Price) */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-zinc-200 dark:border-zinc-900 py-4 text-xs font-medium">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Clock className="h-4 w-4 text-emerald-500" />
                    <div>
                      <span className="block text-[9px] text-zinc-400 uppercase font-bold">Treatment Time</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{selectedService.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <DollarSign className="h-4 w-4 text-emerald-500" />
                    <div>
                      <span className="block text-[9px] text-zinc-400 uppercase font-bold">Investment Guide</span>
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{selectedService.priceEstimate}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => handleBookNow(selectedService.id)}
                  className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 font-sans text-xs font-bold text-white shadow-xl flex items-center justify-center space-x-2"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>Book {selectedService.title} Consultation</span>
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
