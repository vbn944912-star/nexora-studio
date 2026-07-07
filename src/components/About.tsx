import { motion } from 'motion/react';
import { Target, Eye, Sparkles, CheckCircle2, Shield, HeartHandshake, Award } from 'lucide-react';
import { TranslationSchema } from '../types';

interface AboutProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
}

export default function About({ t, currentLang }: AboutProps) {
  const whyChooseUs = [
    {
      id: 'craftsmanship',
      icon: Award,
      title: currentLang === 'en' ? 'Absolute Craftsmanship' : 'الحرفية المطلقة والإتقان',
      desc: currentLang === 'en' 
        ? 'We refuse template-driven averages. Every line of code and pixel of design is meticulously hand-coded from scratch.' 
        : 'نرفض تماماً النماذج والقوالب الجاهزة والمكررة. كل سطر برمجي وكل بكسل تصميمي يُصنع يدوياً وبدقة متناهية من الصفر.',
    },
    {
      id: 'performance',
      icon: Sparkles,
      title: currentLang === 'en' ? 'Extreme Performance' : 'الأداء الفني الخارق',
      desc: currentLang === 'en' 
        ? 'Speed is the ultimate luxury. Our custom build pipelines produce lightweight, sub-second interactive speeds.' 
        : 'السرعة الفائقة هي أساس الرقي الرقمي. أنظمة الإنتاج المخصصة لدينا تضمن سرعات تفاعل تقل عن الثانية الواحدة.',
    },
    {
      id: 'attention',
      icon: Shield,
      title: currentLang === 'en' ? 'Obsessive Attention' : 'الاهتمام الوسواسي بالتفاصيل',
      desc: currentLang === 'en' 
        ? 'Micro-interactions, dynamic transitions, and typography pairings designed to build absolute trust.' 
        : 'نهتم بأدق التفاعلات الدقيقة، والانتقالات الانسيابية، وتنسيقات الخطوط الراقية المصممة لبناء الثقة المطلقة.',
    },
    {
      id: 'partnership',
      icon: HeartHandshake,
      title: currentLang === 'en' ? 'Transparent Partnership' : 'الشراكة الشفافة والأمان',
      desc: currentLang === 'en' 
        ? 'We deliver premium weekly reporting, live development staging access, and guaranteed direct partner updates.' 
        : 'نقدم لعملائنا تقارير أسبوعية تفصيلية، وإمكانية الوصول المباشر لبيئة التطوير، ومتابعة فورية مع الإدارة مباشرة.',
    },
  ];

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="about">
      {/* Visual lighting backgrounds */}
      <div className="absolute top-1/2 left-1/3 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="about-title">
            {t.about.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="about-subtitle">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Story Split section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Creative Story text (Left 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-2xl border border-white/5 bg-[#111827]/20 p-8 sm:p-10 backdrop-blur-md">
            <h3 className="font-display text-2xl font-bold text-white tracking-wide" id="about-story-title">
              {t.about.storyTitle}
            </h3>
            <p className="mt-6 font-sans text-sm sm:text-base leading-relaxed text-zinc-400 font-normal" id="about-story-content">
              {t.about.storyContent}
            </p>
          </div>

          {/* Mission and Vision cards (Right 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mission Card */}
            <div className="flex-1 rounded-2xl border border-white/5 bg-[#111827]/30 p-8 backdrop-blur-md hover:border-brand-primary/20 duration-300">
              <div className="flex items-center space-x-3 text-brand-primary mb-4 rtl:space-x-reverse">
                <Target className="h-5 w-5" />
                <h4 className="font-display text-lg font-bold text-white tracking-wide">{t.about.missionTitle}</h4>
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-zinc-400 font-medium">
                {t.about.missionContent}
              </p>
            </div>

            {/* Vision Card */}
            <div className="flex-1 rounded-2xl border border-white/5 bg-[#111827]/30 p-8 backdrop-blur-md hover:border-brand-secondary/20 duration-300">
              <div className="flex items-center space-x-3 text-brand-secondary mb-4 rtl:space-x-reverse">
                <Eye className="h-5 w-5" />
                <h4 className="font-display text-lg font-bold text-white tracking-wide">{t.about.visionTitle}</h4>
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-zinc-400 font-medium">
                {t.about.visionContent}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 border-t border-white/5 pt-20" id="why-choose-us">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl tracking-wide" id="choose-title">
              {t.about.chooseUsTitle}
            </h3>
            <p className="mt-3.5 font-sans text-sm text-zinc-400" id="choose-subtitle">
              {t.about.chooseUsSubtitle}
            </p>
          </div>

          {/* Pillars grid (4 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="choose-pillars">
            {whyChooseUs.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-xl border border-white/5 bg-[#111827]/25 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/10"
                  id={`pillar-card-${pillar.id}`}
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-brand-accent mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-base font-bold text-white tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="mt-3 font-sans text-[12.5px] leading-relaxed text-zinc-400">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
