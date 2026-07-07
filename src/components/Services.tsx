import { motion } from 'motion/react';
import { 
  Building, Target, Utensils, Heart, Home, Scale, Cpu, 
  RotateCw, Search, Gauge, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { PageId, TranslationSchema } from '../types';

interface ServicesProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
  setActivePage: (page: PageId) => void;
}

export default function Services({ t, currentLang, setActivePage }: ServicesProps) {
  const serviceList = [
    {
      id: 'business',
      icon: Building,
      title: t.services.businessWebsites,
      desc: t.services.businessWebsitesDesc,
      color: 'hover:border-blue-500/30 group-hover:text-blue-400',
      iconBg: 'bg-blue-500/10 text-blue-400',
      features: currentLang === 'en' 
        ? ['Corporate identity matching', 'Lead-generation funnels', 'Executive team directory', 'Multi-region scaling']
        : ['هوية مؤسسية متطابقة', 'قنوات جذب العملاء المحتملين', 'دليل الفريق التنفيذي', 'دعم التوسع متعدد المناطق'],
    },
    {
      id: 'landing',
      icon: Target,
      title: t.services.landingPages,
      desc: t.services.landingPagesDesc,
      color: 'hover:border-emerald-500/30 group-hover:text-emerald-400',
      iconBg: 'bg-emerald-500/10 text-emerald-400',
      features: currentLang === 'en'
        ? ['Psychology-driven design', 'A/B testing configurations', 'Lightning checkout options', 'Analytics & heatmaps']
        : ['تصميم يعتمد على السيكولوجيا', 'إعداد اختبارات المقارنة (A/B)', 'خيارات دفع فائقة السرعة', 'التحليلات والمخططات الحرارية'],
    },
    {
      id: 'restaurant',
      icon: Utensils,
      title: t.services.restaurantWebsites,
      desc: t.services.restaurantWebsitesDesc,
      color: 'hover:border-amber-500/30 group-hover:text-amber-400',
      iconBg: 'bg-amber-500/10 text-amber-400',
      features: currentLang === 'en'
        ? ['Interactive visual menus', 'Direct reservation tools', 'Private event inquiries', 'Premium catering setups']
        : ['قوائم مرئية وتفاعلية', 'أدوات الحجز المباشر للطاولات', 'طلب المناسبات الخاصة', 'خيارات تجهيز الحفلات الراقية'],
    },
    {
      id: 'medical',
      icon: Heart,
      title: t.services.medicalWebsites,
      desc: t.services.medicalWebsitesDesc,
      color: 'hover:border-rose-500/30 group-hover:text-rose-400',
      iconBg: 'bg-rose-500/10 text-rose-400',
      features: currentLang === 'en'
        ? ['HIPAA & GDPR complaint code', 'Secure patient portals', 'Online doctor appointments', 'Specialty treatments catalog']
        : ['أكواد متوافقة مع معايير الأمان', 'بوابات آمنة للمرضى', 'حجز المواعيد مع الأطباء', 'كتالوج العلاجات التخصصية'],
    },
    {
      id: 'realestate',
      icon: Home,
      title: t.services.realEstateWebsites,
      desc: t.services.realEstateWebsitesDesc,
      color: 'hover:border-cyan-500/30 group-hover:text-cyan-400',
      iconBg: 'bg-cyan-500/10 text-cyan-400',
      features: currentLang === 'en'
        ? ['3D VR tour integrations', 'Interactive floor plans', 'UHNW buyer pre-vetting', 'High-end geo-mapping']
        : ['دمج جولات افتراضية ثلاثية الأبعاد', 'مخططات طوابق تفاعلية', 'تصفية المشترين ذوي الملائة العالية', 'خرائط تفاعلية متطورة'],
    },
    {
      id: 'lawfirm',
      icon: Scale,
      title: t.services.lawFirmWebsites,
      desc: t.services.lawFirmWebsitesDesc,
      color: 'hover:border-indigo-500/30 group-hover:text-indigo-400',
      iconBg: 'bg-indigo-500/10 text-indigo-400',
      features: currentLang === 'en'
        ? ['Prestigious layout themes', 'Attorney profile showcases', 'Secure legal deposit vaults', 'Case history indexes']
        : ['تصاميم راقية ومهيبة', 'استعراض مميز لسير المحامين', 'إرسال آمن للطلبات القانونية', 'فهارس قضايا تاريخية مكتملة'],
    },
    {
      id: 'ai-startup',
      icon: Cpu,
      title: t.services.aiStartupWebsites,
      desc: t.services.aiStartupWebsitesDesc,
      color: 'hover:border-purple-500/30 group-hover:text-purple-400',
      iconBg: 'bg-purple-500/10 text-purple-400',
      features: currentLang === 'en'
        ? ['Interactive code playgrounds', 'Live latency dashboards', 'VC-investor pitch assets', 'API doc style libraries']
        : ['بيئات برمجية تفاعلية', 'مؤشرات سرعة حية وفورية', 'أصول عرض المستثمرين المغامرين', 'مكتبات توثيق برمجية فائقة'],
    },
    {
      id: 'redesign',
      icon: RotateCw,
      title: t.services.websiteRedesign,
      desc: t.services.websiteRedesignDesc,
      color: 'hover:border-violet-500/30 group-hover:text-violet-400',
      iconBg: 'bg-violet-500/10 text-violet-400',
      features: currentLang === 'en'
        ? ['Brand-perception overhaul', 'Complete traffic-safe redirecting', 'Database migration safety', 'Conversion optimization boost']
        : ['إعادة هيكلة الإدراك العام للعلامة', 'توجيه حركة المرور بأمان كامل', 'ترحيل قواعد البيانات بشكل آمن', 'مضاعفة معدلات التحويل والمبيعات'],
    },
    {
      id: 'seo',
      icon: Search,
      title: t.services.seoOptimization,
      desc: t.services.seoOptimizationDesc,
      color: 'hover:border-pink-500/30 group-hover:text-pink-400',
      iconBg: 'bg-pink-500/10 text-pink-400',
      features: currentLang === 'en'
        ? ['In-depth keyword analysis', 'Semantic JSON-LD schemas', 'Optimized content layout', 'Authoritative site mapping']
        : ['تحليل متعمق للكلمات المفتاحية', 'خرائط سكيما الدلالية المتطورة', 'هيكلية محتوى متوافقة مع غوغل', 'بناء خارطة الموقع لرفع الموثوقية'],
    },
    {
      id: 'speed',
      icon: Gauge,
      title: t.services.speedOptimization,
      desc: t.services.speedOptimizationDesc,
      color: 'hover:border-teal-500/30 group-hover:text-teal-400',
      iconBg: 'bg-teal-500/10 text-teal-400',
      features: currentLang === 'en'
        ? ['Core Web Vitals maxing', 'Next-gen asset compression', 'Custom bundler logic', 'Dynamic edge serving']
        : ['رفع مؤشرات الويب الأساسية للقمة', 'ضغط أصول الجيل القادم فائق الذكاء', 'برمجة مخصصة للملفات', 'توصيل محتوى عبر خوادم الحافة حركياً'],
    },
    {
      id: 'maintenance',
      icon: ShieldCheck,
      title: t.services.maintenance,
      desc: t.services.maintenanceDesc,
      color: 'hover:border-amber-500/30 group-hover:text-amber-400',
      iconBg: 'bg-amber-500/10 text-amber-400',
      features: currentLang === 'en'
        ? ['24/7 Server monitoring', 'Weekly backups to cloud', 'Real-time security patches', 'Priority support SLAs']
        : ['مراقبة مستمرة للخوادم على مدار الساعة', 'نسخ احتياطي أسبوعي سحابي وآمن', 'تحديثات أمنية فورية لسد الثغرات', 'اتفاقيات مستوى الخدمة للدعم الفوري'],
    },
  ];

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="services">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[200px] -translate-y-1/2 bg-brand-primary/5 blur-[100px] rounded-r-full" />
      <div className="absolute top-1/2 right-0 h-[400px] w-[200px] -translate-y-1/2 bg-brand-secondary/5 blur-[100px] rounded-l-full" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Title */}
        <div className="text-center md:text-start flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="services-title">
              {t.services.title}
            </h2>
            <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="services-subtitle">
              {t.services.subtitle}
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:bg-white/10 active:scale-95 rtl:space-x-reverse"
            id="services-cta"
          >
            <span>{currentLang === 'en' ? 'Start Project' : 'ابدأ مشروعك'}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" id="services-grid">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111827]/30 p-8 backdrop-blur-md transition-all duration-300 ${service.color}`}
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon */}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${service.iconBg}`} id={`service-icon-${service.id}`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-white" id={`service-title-${service.id}`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 font-sans text-[13.5px] leading-relaxed text-zinc-400" id={`service-desc-${service.id}`}>
                    {service.desc}
                  </p>
                </div>

                {/* Features list */}
                <div className="mt-8 border-t border-white/5 pt-6">
                  <ul className="space-y-2.5 text-xs text-zinc-300 font-medium font-sans">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
