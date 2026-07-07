import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Calendar, Sparkles } from 'lucide-react';
import { PageId, TranslationSchema } from '../types';

interface PricingProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
  setActivePage: (page: PageId) => void;
}

export default function Pricing({ t, currentLang, setActivePage }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true);

  const starterFeatures = currentLang === 'en'
    ? ['Premium Bespoke Design', '5 Content Pages Included', 'Standard Motion & Scrolling', '100% Responsive Layout', 'Basic SEO Configuration', '1 Month Tech Support']
    : ['تصميم مخصص وفخم للغاية', 'يتضمن ٥ صفحات محتوى فريدة', 'حركات تمرير تفاعلية أساسية', 'ملاءمة تامة لجميع الهواتف والشاشات', 'إعداد أساسي لمحركات البحث SEO', 'دعم فني وضمان لمدة شهر'];

  const professionalFeatures = currentLang === 'en'
    ? ['Ultra-Premium Custom Layout', 'Up to 12 Responsive Pages', 'Advanced Framer-style Motion', 'High-end Booking/Lead Portals', 'Deep Technical SEO Tuning', '3 Months Dedicated Support', 'Sub-second Core Web Vitals']
    : ['تصميمات مخصصة فائقة الفخامة', 'حتى ١٢ صفحة تفاعلية متكاملة', 'حركات حركية متقدمة بأسلوب عالمي', 'بوابات حجز وجذب عملاء مخصصة', 'تهيئة فنية متقدمة جداً لمحركات البحث', 'دعم فني وضمان لمدة ٣ أشهر كاملة', 'سرعة تحميل فائقة تقل عن الثانية'];

  const premiumFeatures = currentLang === 'en'
    ? ['Luxury Brand Editorial Art', 'Unlimited Scalable Pages', 'Interactive 3D or WebGL Elements', 'Bespoke Custom E-commerce Core', 'Advanced Multilingual Integration', '6 Months Principal Architect Care', 'Continuous Speed Optimizations']
    : ['إخراج فني تحريري للعلامات الفاخرة', 'عدد غير محدود من الصفحات القابلة للتوسع', 'عناصر ثلاثية أبعاد تفاعلية', 'نواة تجارة إلكترونية بالغة التطور', 'تهيئة متكاملة ومتقدمة للغات متعددة', 'رعاية كبار مهندسي الويب لمدة ٦ أشهر', 'تسريع وضبط دوري ومستمر للأداء'];

  const enterpriseFeatures = currentLang === 'en'
    ? ['Full-scale Brand Architecture', 'Custom Web Applications & Portals', 'Comprehensive Penetration Testing', 'Database & API Core Integration', 'Dedicated Principal Account Manager', '24/7 Priority SLA SLA Monitoring', 'Unlimited Creative Revisions']
    : ['هندسة معمارية متكاملة لعلامتكم', 'تطبيقات وبوابات ويب مخصصة بالكامل', 'اختبارات اختراق وأمان شاملة', 'دمج كامل لقواعد البيانات والأنظمة', 'مدير حسابات تنفيذي مخصص ومتاح دائماً', 'مراقبة فورية ذات أولوية قصوى على مدار الساعة', 'مراجعات وتعديلات إبداعية غير محدودة'];

  const pricingTiers = [
    {
      id: 'starter',
      name: currentLang === 'en' ? 'Starter' : 'الباقة الأساسية',
      description: currentLang === 'en' ? 'Perfect for luxury launches & startups.' : 'مثالية للشركات الناشئة والمشاريع الطموحة.',
      priceMonthly: 4900,
      priceAnnually: 3900,
      features: starterFeatures,
      cta: currentLang === 'en' ? 'Initiate Starter' : 'ابدأ الباقة الأساسية',
      isPopular: false,
      color: 'hover:border-white/10',
    },
    {
      id: 'professional',
      name: currentLang === 'en' ? 'Professional' : 'الباقة الاحترافية',
      description: currentLang === 'en' ? 'Our most highly requested solution.' : 'الحل الأكثر طلباً وإقبالاً من قِبل عملائنا.',
      priceMonthly: 8900,
      priceAnnually: 7100,
      features: professionalFeatures,
      cta: currentLang === 'en' ? 'Secure Professional' : 'احجز الباقة الاحترافية',
      isPopular: true,
      color: 'border-brand-primary/30 shadow-[0_4px_30px_rgba(79,70,229,0.15)] hover:border-brand-primary/50',
    },
    {
      id: 'premium',
      name: currentLang === 'en' ? 'Premium' : 'الباقة الفاخرة',
      description: currentLang === 'en' ? 'Bespoke art direction & 3D experiences.' : 'توجيه فني فاخر وتجارب تفاعلية فريدة.',
      priceMonthly: 14900,
      priceAnnually: 11900,
      features: premiumFeatures,
      cta: currentLang === 'en' ? 'Acquire Premium' : 'امتلك الباقة الفاخرة',
      isPopular: false,
      color: 'hover:border-white/10',
    },
    {
      id: 'enterprise',
      name: currentLang === 'en' ? 'Enterprise' : 'باقة الشركات الكبرى',
      description: currentLang === 'en' ? 'Bespoke corporate scale-ups & portals.' : 'للبوابات والحلول المؤسسية بالغة التعقيد والطلب.',
      priceMonthly: 24900,
      priceAnnually: 19900,
      features: enterpriseFeatures,
      cta: currentLang === 'en' ? 'Connect with Principals' : 'تواصل مع الإدارة',
      isPopular: false,
      color: 'hover:border-white/10',
    },
  ];

  const handleCtaClick = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="pricing">
      {/* Dynamic light effects */}
      <div className="absolute top-0 right-10 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-brand-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="pricing-title">
            {t.pricing.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="pricing-subtitle">
            {t.pricing.subtitle}
          </p>

          {/* Toggle Button for Annual / Monthly */}
          <div className="mt-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md" id="pricing-toggle">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-full px-5 py-2 font-sans text-xs font-bold transition-all duration-300 ${
                !isAnnual ? 'bg-[#09090B] text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative flex items-center space-x-1.5 rounded-full px-5 py-2 font-sans text-xs font-bold transition-all duration-300 rtl:space-x-reverse ${
                isAnnual ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow' : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>{t.pricing.yearly}</span>
              <span className="rounded-full bg-brand-accent/20 px-1.5 py-0.5 text-[9px] font-black text-brand-accent uppercase">
                {t.pricing.saveBtn}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="pricing-grid">
          {pricingTiers.map((tier, index) => {
            const currentPrice = isAnnual ? tier.priceAnnually : tier.priceMonthly;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111827]/35 p-6 backdrop-blur-md transition-all duration-300 ${tier.color}`}
                id={`pricing-card-${tier.id}`}
              >
                {/* Most popular ribbon */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-1.5 text-[10px] font-black text-white uppercase tracking-widest flex items-center space-x-1 shadow-lg rtl:space-x-reverse">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    <span>{t.pricing.mostPopular}</span>
                  </div>
                )}

                <div>
                  {/* Name and description */}
                  <h3 className="font-display text-lg font-bold text-white tracking-wide" id={`pricing-name-${tier.id}`}>
                    {tier.name}
                  </h3>
                  <p className="mt-2 font-sans text-xs leading-relaxed text-zinc-400 font-medium">
                    {tier.description}
                  </p>

                  {/* Pricing displays */}
                  <div className="mt-6 flex items-baseline text-white">
                    <span className="font-sans text-xl font-bold">$</span>
                    <span className="font-display text-4xl font-extrabold tracking-tight">
                      {currentPrice.toLocaleString()}
                    </span>
                    <span className="ml-1 rtl:mr-1 font-sans text-xs text-zinc-500 font-bold">
                      /{currentLang === 'en' ? 'project' : 'مشروع'}
                    </span>
                  </div>

                  {/* Save note */}
                  {isAnnual && (
                    <p className="mt-1.5 text-[10px] text-brand-success font-bold font-sans">
                      {currentLang === 'en' ? `Saves $${(tier.priceMonthly - tier.priceAnnually).toLocaleString()} upfront` : `توفير ${(tier.priceMonthly - tier.priceAnnually).toLocaleString()} دولار مقدمًا`}
                    </p>
                  )}

                  {/* CTA button */}
                  <button
                    onClick={handleCtaClick}
                    className={`mt-6 w-full rounded-xl py-3.5 font-sans text-xs font-bold transition-all duration-300 active:scale-[0.98] ${
                      tier.isPopular
                        ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-[0_4px_20px_rgba(79,70,229,0.35)]'
                        : 'border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white'
                    }`}
                    id={`pricing-cta-${tier.id}`}
                  >
                    {tier.cta}
                  </button>

                  {/* Features Label */}
                  <p className="mt-8 font-sans text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                    {t.pricing.featuresLabel}
                  </p>

                  {/* Feature Lists */}
                  <ul className="mt-4 space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 rtl:space-x-reverse" id={`pricing-feature-${tier.id}-${fIdx}`}>
                        <Check className="h-4 w-4 shrink-0 text-brand-success mt-0.5" />
                        <span className="font-sans text-[12px] leading-relaxed text-zinc-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audit footnote info */}
                <div className="mt-10 border-t border-white/5 pt-4 flex items-center space-x-1.5 text-[9.5px] text-zinc-500 font-medium font-sans rtl:space-x-reverse">
                  <Info className="h-3.5 w-3.5 shrink-0" />
                  <span>{currentLang === 'en' ? 'Includes comprehensive source files & licenses' : 'شاملة بالكامل لملفات الأصول والتراخيص الفنية'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
