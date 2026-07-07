export interface BilingualProject {
  id: string;
  imageColor: string; // Gradient color CSS classes
  technology: string[];
  metric: string;
  en: {
    title: string;
    industry: string;
    description: string;
    results: string;
    problem: string;
    solution: string;
    outcome: string;
    metricLabel: string;
  };
  ar: {
    title: string;
    industry: string;
    description: string;
    results: string;
    problem: string;
    solution: string;
    outcome: string;
    metricLabel: string;
  };
}

export interface BilingualBlogPost {
  id: string;
  date: string;
  readTime: string;
  category: 'design' | 'development' | 'marketing' | 'business';
  en: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorRole: string;
  };
  ar: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorRole: string;
  };
}

export const portfolioProjects: BilingualProject[] = [
  {
    id: 'luxury-dental',
    imageColor: 'from-cyan-950 via-teal-900 to-emerald-950',
    technology: ['React', 'Tailwind CSS', 'Motion', 'Three.js'],
    metric: '+310%',
    en: {
      title: 'Aurelia Dental',
      industry: 'Luxury Dental Clinic',
      description: 'An immersive digital portal for Beverly Hills\' most prestigious cosmetic dental group.',
      results: '310% increase in high-value cosmetic appointment bookings in 90 days.',
      problem: 'Aurelia Dental had an outdated website that failed to attract elite, high-net-worth clients for premium cosmetic veneers, resulting in low conversion rates despite high ad spend.',
      solution: 'We engineered a high-end cinematic portal featuring interactive smile visualizers, interactive before/after sliders, and a ultra-sleek custom booking system optimized for private clients.',
      outcome: 'A complete brand repositioning that secured 310% more premium veneer consultations, driving over $450k in new patient revenue in less than 3 months.',
      metricLabel: 'Booking Growth',
    },
    ar: {
      title: 'عيادة أوريليا لطب الأسنان الفاخر',
      industry: 'طب الأسنان الفاخر والجميلي',
      description: 'بوابة رقمية غامرة لأكثر مجموعات طب الأسنان التجميلي شهرة وجاذبية في بيفرلي هيلز.',
      results: 'زيادة بنسبة ٣١٠٪ في حجوزات المواعيد التجميلية الفاخرة خلال ٩٠ يوماً.',
      problem: 'كان لدى عيادة أوريليا موقع ويب قديم لم ينجح في جذب نخبة العملاء ذوي الملاءة المالية العالية لعمليات الفينير التجميلية الفاخرة، مما أدى لانخفاض معدل التحويلات على الرغم من الإنفاق الإعلاني الضخم.',
      solution: 'قمنا بتصميم وهندسة بوابة سينمائية راقية تتميز بأدوات تفاعلية لمعاينة الابتسامة قبل وبعد العملية، وجدولة حجز فائقة السلاسة والسرية ومحسنة خصيصاً للعملاء المتميزين.',
      outcome: 'إعادة تموضع شاملة للعلامة التجارية ضمنت زيادة بنسبة ٣١٠٪ في حجز استشارات الفينير والزرع الراقية، مما حقق مبيعات جديدة بأكثر من ٤٥٠ ألف دولار في أقل من ٣ أشهر.',
      metricLabel: 'نمو الحجوزات',
    },
  },
  {
    id: 'modern-restaurant',
    imageColor: 'from-amber-950 via-red-950 to-stone-950',
    technology: ['React', 'Vite', 'Tailwind', 'Motion'],
    metric: '+180%',
    en: {
      title: 'Nami Sushi',
      industry: 'Modern Restaurant',
      description: 'A dark, dramatic visual journey for an award-winning contemporary Japanese dining hall.',
      results: '180% growth in online table reservations and premium omakase experiences booked.',
      problem: 'Nami Sushi relied entirely on third-party aggregators (like OpenTable) which charged hefty commission fees and diluted their brand aesthetic and table-booking conversion loop.',
      solution: 'We built a bespoke, dark-themed immersive interactive site with micro-interaction menus, seamless custom booking engines, and stunning full-bleed culinary videography integration.',
      outcome: 'Completely eliminated reliance on third-party reservation commissions, saving $4,200/month, while driving an immediate 180% surge in direct premium reservations.',
      metricLabel: 'Direct Bookings',
    },
    ar: {
      title: 'نامي سوشي المعاصر',
      industry: 'المطاعم الراقية',
      description: 'رحلة بصرية دراماتيكية ومظلمة لصالة طعام يابانية معاصرة حائزة على جوائز عالمية.',
      results: 'نمو بنسبة ١٨٠٪ في حجوزات الطاولات المباشرة وتجارب الأوماكاسي الفاخرة عبر موقع المطعم.',
      problem: 'كان مطعم نامي سوشي يعتمد بالكامل على منصات الوساطة الخارجية للحجز (مثل أوبن تيبل) والتي كانت تقتطع عمولات باهظة وتضعف من هوية المطعم الرقمية الجذابة.',
      solution: 'قمنا ببناء موقع ويب غامر ومظلم يتميز بقوائم تفاعلية وحركية دقيقة، ونظام حجز داخلي مخصص وفائق المرونة مع دمج مقاطع فيديو طهي سينمائية عالية الدقة.',
      outcome: 'التخلص التام من الاعتماد على عمولات الحجز للشركات الوسيطة، مما وفر ٤٢٠٠ دولار شهرياً، مع دفع زيادة فورية بنسبة ١٨٠٪ في الحجوزات المباشرة الفاخرة.',
      metricLabel: 'الحجوزات المباشرة',
    },
  },
  {
    id: 'law-firm',
    imageColor: 'from-blue-950 via-slate-900 to-indigo-950',
    technology: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    metric: '$3.2M',
    en: {
      title: 'Apex Legal Partners',
      industry: 'Law Firm',
      description: 'An authoritative and prestigious digital presence for a premier corporate M&A firm.',
      results: 'Generated $3.2M in qualified corporate retainer leads in the first 6 months.',
      problem: 'Apex Legal was competing with giant international firms but had a basic, template-looking website that didn\'t communicate their elite litigation pedigree.',
      solution: 'We crafted an architectural masterpiece using prestigious editorial typography, high-contrast dark-luxury layouts, robust attorney profiles, and secure, friction-free litigation request portals.',
      outcome: 'Dramatically enhanced their market authority, leading directly to a partnership with three Fortune 500 corporations, yielding over $3.2M in new retainer contracts.',
      metricLabel: 'Retainer Pipeline',
    },
    ar: {
      title: 'أبيكس للشركاء القانونيين',
      industry: 'المحاماة والاستشارات القانونية',
      description: 'حضور رقمي مهيب ومرموق لشركة محاماة واستشارات قانونية رائدة في عمليات الدمج والاستحواذ.',
      results: 'جذب عقود واستشارات قانونية مؤهلة بقيمة ٣.٢ مليون دولار في أول ٦ أشهر.',
      problem: 'كانت شركة أبيكس تنافس شركات محاماة دولية كبرى ولكن موقعها السابق كان يبدو عادياً وبسيطاً لا يعبر عن تاريخها النخبوي الطويل ومصداقيتها الشديدة.',
      solution: 'قمنا بصياغة تحفة تصميمية باستخدام خطوط تحريرية راقية، وهيكلية داكنة وعالية التباين، مع صفحات سيرة ذاتية تفاعلية للمستشارين وبوابات آمنة لطلب الاستشارات الاستراتيجية.',
      outcome: 'تعزيز مكانة وموثوقية الشركة في السوق بشكل دراماتيكي، مما أدى مباشرة إلى التوقيع مع ثلاث شركات ضخمة مدرجة في قائمة فورتشن ٥٠٠ وتحقيق عوائد بقيمة ٣.٢ مليون دولار.',
      metricLabel: 'قيمة العقود الجديدة',
    },
  },
  {
    id: 'real-estate',
    imageColor: 'from-emerald-950 via-teal-950 to-stone-900',
    technology: ['React', 'Mapbox', 'Tailwind', 'Motion'],
    metric: '+400%',
    en: {
      title: 'Vanguard Estates',
      industry: 'Real Estate Agency',
      description: 'A cinematic listing platform for ultra-high-net-worth real estate developments.',
      results: '400% surge in qualified international investor inquiries for penthouses.',
      problem: 'Vanguard Estates struggled to attract ultra-wealthy Middle Eastern and US buyers to their premium off-plan penthouses because standard property listings looked generic and flat.',
      solution: 'We engineered a cinematic real-estate platform with full-bleed 3D tour overlays, interactive floorplan customizers, and deep geolocation-based neighborhood analysis tools.',
      outcome: 'Positioned their developments as rare luxury collectibles, converting cold international traffic into qualified buyers and growing high-end leads by 400%.',
      metricLabel: 'Lead Volume',
    },
    ar: {
      title: 'مجموعة فانغارد العقارية',
      industry: 'العقارات والوساطة الفاخرة',
      description: 'منصة عقارية سينمائية مخصصة للمشاريع العقارية الفاخرة الموجهة لأثرى المستثمرين حول العالم.',
      results: 'طفرة بنسبة ٤٠٠٪ في استفسارات المستثمرين الدوليين المؤهلين لشراء شقق البنتهاوس الفاخرة.',
      problem: 'كانت مجموعة فانغارد العقارية تواجه صعوبة في جذب المشترين فاحشي الثراء من الشرق الأوسط والولايات المتحدة لمشاريعها الفاخرة قيد الإنشاء لأن قوائم العقارات التقليدية كانت تبدو مسطحة وباهتة.',
      solution: 'قمنا ببناء وتطوير منصة عقارية سينمائية راقية تدمج جولات افتراضية ثلاثية الأبعاد، وأدوات تفاعلية لتخصيص مخططات الطوابق، وتحليلات خرائط تفاعلية متطورة للمناطق السكنية.',
      outcome: 'ترسيخ مشاريعهم كتحف عقارية نادرة وقابلة للاقتناء الفاخر، مما حول الزوار الدوليين إلى مشترين جادين ورفع حجم الاستفسارات المؤهلة بنسبة ٤٠٠٪.',
      metricLabel: 'حجم الطلبات المؤهلة',
    },
  },
  {
    id: 'gym',
    imageColor: 'from-orange-950 via-zinc-900 to-red-950',
    technology: ['React', 'Tailwind CSS', 'Motion'],
    metric: '2.4x',
    en: {
      title: 'Pinnacle Club',
      industry: 'Luxury Wellness & Fitness Club',
      description: 'A highly striking, motivational digital experience for an elite, invitation-only wellness club.',
      results: '2.4x increase in elite membership applications and corporate wellness inquiries.',
      problem: 'Pinnacle Club wanted to raise their monthly membership fee by 150% to reflect their ultra-premium facilities but their current website looked like a budget local gym.',
      solution: 'We built a high-contrast, brutalist-meets-luxury web app with high-performance video backgrounds, personalized workout trial booking pipelines, and interactive trainer profiles.',
      outcome: 'Successfully launched their premium invitation-only model, enrolling 350 elite members within 60 days at the new higher price point.',
      metricLabel: 'Membership Growth',
    },
    ar: {
      title: 'نادي بيناكل الصحي الفاخر',
      industry: 'اللياقة والصحة الفاخرة',
      description: 'تجربة رقمية ملهمة ومذهلة للغاية لنادٍ صحي ورياضي مخصص للنخبة وبدعوات خاصة فقط.',
      results: 'مضاعفة طلبات العضوية الفاخرة واستفسارات الصحة للشركات بواقع ٢.٤ ضعفاً.',
      problem: 'أراد نادي بيناكل الصحي زيادة رسوم العضوية الشهرية بنسبة ١٥٠٪ لتعكس مرافقهم وتجهيزاتهم الفائقة، لكن موقعهم القديم كان يظهر كصالة ألعاب رياضية محلية رخيصة.',
      solution: 'صممنا موقع ويب عالي التباين يدمج الفخامة والعملية معاً، بخلفيات فيديو عالية الأداء، ومسارات حجز تفاعلية، واستعراض فاخر لطاقم المدربين العالميين.',
      outcome: 'أطلقنا بنجاح نموذج العضوية الخاص القائم على الدعوات فقط، وسجلنا ٣٥٠ عضواً نخبوياً جديداً خلال أول ٦٠ يوماً بالتعرفة الفاخرة الجديدة.',
      metricLabel: 'معدل نمو العضوية',
    },
  },
  {
    id: 'coffee-shop',
    imageColor: 'from-amber-950 via-stone-900 to-neutral-950',
    technology: ['React', 'Tailwind', 'Motion', 'Stripe'],
    metric: '+250%',
    en: {
      title: 'Onyx Brew Lab',
      industry: 'Premium Specialty Coffee',
      description: 'A deeply aromatic visual design and direct e-commerce ecosystem for global single-origin beans.',
      results: '250% increase in high-margin specialty coffee bean subscriptions and online store checkout.',
      problem: 'Onyx Brew possessed world-class specialty coffee beans but their online store was clunky, hard to navigate, and suffered from high cart abandonment at checkout.',
      solution: 'We engineered a seamless, sensory-rich e-commerce experience with dynamic grind selector tools, a highly custom subscription wizard, and a lightning-fast Stripe single-click checkout.',
      outcome: 'Boosted coffee subscription memberships by 250% and dramatically decreased cart abandonment rates from 68% to 22% within weeks.',
      metricLabel: 'Online Revenue',
    },
    ar: {
      title: 'أونيكس مختبر القهوة المختصة',
      industry: 'القهوة المختصة الفاخرة',
      description: 'هوية بصرية غنية ونظام تجارة إلكترونية مباشر لبيع أجود حبوب القهوة الفاخرة أحادية المصدر.',
      results: 'زيادة بنسبة ٢٥٠٪ في اشتراكات حبوب البن المختصة ومبيعات المتجر الإلكتروني المباشرة.',
      problem: 'تمتلك شركة أونيكس أجود حبوب القهوة في العالم ولكن متجرها القديم كان معقداً ويفتقر للمظهر الجذاب ويعاني من نسبة هجر سلة التسوق المرتفعة عند الدفع.',
      solution: 'صممنا تجربة تسوق سلسة وجذابة للغاية تثير الحواس، مع أداة تفاعلية لاختيار درجة الطحن المناسبة، ومسار اشتراك مخصص، وبوابة دفع فائقة السرعة بلمسة واحدة.',
      outcome: 'رفع عدد المشتركين في خدمة اشتراك القهوة الدورية بنسبة ٢٥٠٪، وخفض نسبة هجر سلة الشراء فورياً من ٦٨٪ إلى ٢٢٪ فقط خلال أسابيع معدودة.',
      metricLabel: 'عائدات المتجر الإلكتروني',
    },
  },
  {
    id: 'hotel',
    imageColor: 'from-sky-950 via-blue-900 to-neutral-900',
    technology: ['React', 'Motion', 'Tailwind', 'i18n'],
    metric: '4.2x',
    en: {
      title: 'Luminary Luxury Resort',
      industry: 'Hotel',
      description: 'An ethereal and prestigious booking experience for a private island resort off the coast of Amalfi.',
      results: '4.2x increase in direct suite bookings and premium private yacht charters.',
      problem: 'Luminary Resort had 85% of bookings coming from Booking.com, losing millions in commissions and getting no access to build loyalty with their high-end guests.',
      solution: 'We structured an breathtaking virtual concierge experience with dynamic 3D room viewers, multi-language luxury storytelling, and high-performance room selectors.',
      outcome: 'Redirected direct suite sales to 64% of total booking volume, driving 4.2x growth in high-value VIP package bookings and completely eliminating high commission margins.',
      metricLabel: 'Direct Suite ROI',
    },
    ar: {
      title: 'منتجع لوميناري الفاخر',
      industry: 'الفنادق والمنتجعات الفاخرة',
      description: 'تجربة حجز راقية لمنتجع جزيرة خاصة قبالة سواحل أمالفي الساحرة.',
      results: 'زيادة بواقع ٤.٢ ضعفاً في حجوزات الأجنحة المباشرة ورحلات اليخوت الفاخرة الخاصة.',
      problem: 'كان منتجع لوميناري يعتمد بنسبة ٨٥٪ على موقع بوكينج دوت كوم لحجوزاته، مما أفقده ملايين الدولارات كعمولات وحرمه من فرصة بناء ولاء حقيقي مع ضيوفه الأثرياء.',
      solution: 'صممنا تجربة كونسيرج افتراضية مذهلة تدمج عرض الغرف ثلاثية الأبعاد، واستعراض قصصي راقٍ لجمال الجزيرة، ونظام حجز داخلي مخصص ومترجم لعدة لغات.',
      outcome: 'توجيه ٦٤٪ من إجمالي حجوزات الأجنحة لتكون مباشرة عبر موقع المنتج، مما قاد لنمو حجوزات باقات كبار الشخصيات بمعدل ٤.٢ ضعفاً وإلغاء العمولات للوسطاء تماماً.',
      metricLabel: 'عائد الحجوزات المباشرة',
    },
  },
  {
    id: 'construction',
    imageColor: 'from-yellow-950 via-zinc-900 to-amber-950',
    technology: ['React', 'Tailwind CSS', 'Motion'],
    metric: '$18M',
    en: {
      title: 'Apex Structures',
      industry: 'Construction Company',
      description: 'An industrial, heavyweight engineering showcase for high-end skyscraper developments.',
      results: 'Sealed an $18M tender direct via high-end presentation-level digital bidding.',
      problem: 'Apex Structures was bidding on major government and commercial architectural projects, but their outdated corporate site looked incapable of handling modern mega-infrastructure projects.',
      solution: 'We designed a heavy, bold, high-contrast engineering portfolio featuring dynamic project stage trackers, robust team credentials, and high-end interactive blueprint displays.',
      outcome: 'A stunning corporate showcase that gave government and commercial evaluators absolute confidence, leading directly to the awarding of an $18M tower project.',
      metricLabel: 'Tender Win Value',
    },
    ar: {
      title: 'أبيكس للمشاريع والإنشاءات الكبرى',
      industry: 'المقاولات والإنشاءات الهندسية',
      description: 'واجهة عرض هندسية وصناعية قوية للمشاريع المعمارية الضخمة والأبراج الفاخرة.',
      results: 'الفوز بمناقصة حصرية بقيمة ١٨ مليون دولار بشكل مباشر بفضل العرض الرقمي المتكامل والراقي للموقع.',
      problem: 'كانت شركة أبيكس تدخل مناقصات حكومية وتجارية ضخمة، لكن موقعها السابق كان يبدو قديماً ومتهالكاً لا يعبر عن قدرتها على إدارة المشاريع المعمارية العملاقة والمستدامة.',
      solution: 'قمنا ببناء معرض أعمال هندسي ثقيل وجريء وعالي التباين، مع متتبعات تفاعلية لمراحل تقدم المشاريع، واستعراض مميز لتأهيل الفرق الهندسية وتصاميم ثلاثية الأبعاد تفاعلية.',
      outcome: 'واجهة عرض أبهرت لجان التقييم والمستثمرين، مما قاد مباشرة إلى منحهم عقد مشروع تشييد برج بقيمة ١٨ مليون دولار.',
      metricLabel: 'قيمة المناقصة الفائزة',
    },
  },
  {
    id: 'ai-startup',
    imageColor: 'from-purple-950 via-indigo-950 to-cyan-950',
    technology: ['React', 'Vite', 'Tailwind', 'Motion'],
    metric: '$12M',
    en: {
      title: 'Synapse AI',
      industry: 'AI Startup',
      description: 'An interactive product demo playground and landing platform for a futuristic neural search agent.',
      results: 'Helped secure $12M Series A funding by blowing away VC investors during demos.',
      problem: 'Synapse AI had highly complex, abstract technology that VC investors and target enterprises struggled to understand, slowing down both their sales and funding rounds.',
      solution: 'We engineered an ultra-slick digital command center featuring interactive generative playground nodes, dynamic latency benchmark trackers, and stunning WebGL animations.',
      outcome: 'Translated abstract complexity into clear visual ROI. Venture capitalists were so impressed by the digital presentation that they fast-tracked a $12M Series A funding round.',
      metricLabel: 'Funding Secured',
    },
    ar: {
      title: 'سينابس للذكاء الاصطناعي',
      industry: 'شركات الذكاء الاصطناعي الناشئة',
      description: 'منصة تفاعلية تتيح تجربة منتجات وتطبيقات عملاء البحث العصبي والذكاء الاصطناعي المستقبلي.',
      results: 'المساهمة في تأمين تمويل بقيمة ١٢ مليون دولار (جولة أ) من خلال إبهار المستثمرين أثناء العروض.',
      problem: 'تمتلك شركة سينابس تقنية ذكاء اصطناعي معقدة للغاية ومجردة يجد المستثمرون والشركات صعوبة في فهمها، مما عطل المبيعات والتمويل لم أشهر.',
      solution: 'قمنا بتطوير مركز تحكم رقمي مستقبلي يتميز ببيئات تجريبية تفاعلية لتجربة نماذج الذكاء الاصطناعي، ومؤشرات سرعة تفاعلية، ورسوم متحركة فنية.',
      outcome: 'تبسيط التعقيد التقني وتحويله إلى قيمة تجارية واضحة ومبهرة، مما دفع صناديق الاستثمار الجريء لتسريع جولة التمويل بقيمة ١٢ مليون دولار.',
      metricLabel: 'تمويل الجولة (أ)',
    },
  },
  {
    id: 'luxury-fashion',
    imageColor: 'from-pink-950 via-rose-950 to-zinc-950',
    technology: ['React', 'Tailwind', 'Motion', 'Stripe'],
    metric: '+350%',
    en: {
      title: 'Maison de L\'Élite',
      industry: 'Luxury Fashion Store',
      description: 'A high-contrast editorial e-commerce catalog showcasing high-fashion bespoke garments.',
      results: '350% increase in luxury clothing order value and premium club signups.',
      problem: 'Maison de L\'Élite wanted to capture luxury shoppers online but their standard Shopify theme felt cheap and failed to deliver the exclusive boutique in-store luxury feeling.',
      solution: 'We designed a minimal, high-contrast, editorial fashion catalog utilizing fluid, slow-motion scroll animations, gorgeous high-resolution layout grids, and seamless premium cart drawers.',
      outcome: 'Elevated online brand perception, leading to a 350% surge in average order value and a highly successful launch of their private seasonal subscription club.',
      metricLabel: 'Order Value Boost',
    },
    ar: {
      title: 'ميزون دو ليت الفاخر',
      industry: 'الأزياء والموضة الفاخرة',
      description: 'كتالوج تجارة إلكترونية تحريري مذهل وعالي التباين لعرض وتفصيل الأزياء الراقية والفاخرة.',
      results: 'زيادة بنسبة ٣٥٠٪ في متوسط قيمة طلبات الشراء وانضمام المشتركين للنادي الحصري للموضة.',
      problem: 'أراد بيت أزياء ميزون دو ليت جذب المتسوقين الفاخرين عبر الإنترنت ولكن المتجر التقليدي كان يفتقر للمظهر الحصري الذي تقدمه البوتيكات المادية الراقية.',
      solution: 'صممنا كتالوجاً تحريرياً بسيطاً وعالي الفخامة يعتمد على حركات انسيابية بطيئة في التمرير، وشبكات عرض صور عالية الدقة، مع مسار سلة دفع مريح وفاخر.',
      outcome: 'الارتقاء بالانطباع العام للعلامة التجارية الفاخرة، مما أدى لقفزة بنسبة ٣٥٠٪ في متوسط قيمة مشتريات السلة الواحدة، وإطلاق ناجح للغاية لناديهم الحصري.',
      metricLabel: 'نمو متوسط الطلب',
    },
  },
];

export const blogPosts: BilingualBlogPost[] = [
  {
    id: 'conversion-psychology',
    date: 'July 2, 2026',
    readTime: '6 min read',
    category: 'marketing',
    en: {
      title: 'The Psychology of Luxury Web Design: How to Convert Ultra-HNW Clients',
      excerpt: 'Discover the exact visual and cognitive triggers required to command high ticket retainers and sell luxury services online.',
      content: 'Selling premium services or luxury items online requires a completely different psychological playbook compared to mass-market e-commerce. While mass-market sites rely on urgency banners, bright red sales badges, and aggressive popups, luxury web design is defined by restraint, negative space, elegant typography, and absolute performance. In this deep dive, we explore how reducing visual noise creates a sense of scarcity, and how sub-second page performance builds subconscious trust. Learn the 5 design laws that command five-figure deposits.',
      author: 'Marcus Vance',
      authorRole: 'Creative Director',
    },
    ar: {
      title: 'سيكولوجية تصميم المواقع الفاخرة: كيف تجذب وتكسب فئة كبار الأثرياء؟',
      excerpt: 'اكتشف المؤثرات والمحفزات البصرية والإدراكية الدقيقة اللازمة لفرض أسعار باهظة وبيع الخدمات الفاخرة عبر الإنترنت بامتياز.',
      content: 'يتطلب بيع الخدمات والمنتجات الفاخرة والراقية عبر الإنترنت دليلاً نفسياً مختلفاً تماماً عن تجارة التجزئة التقليدية. فبينما تعتمد المواقع العادية على لافتات الاستعجال وشارات الخصم الحمراء المزعجة والنوافذ المنبثقة العدوانية، يتميز تصميم الويب الفاخر بالهدوء والاتزان، والمساحات السلبية الواسعة، والخطوط التحريرية الراقية، والأداء الفني المطلق. في هذه المقالة المتعمقة، نستعرض كيف يخلق تقليل الضوضاء البصرية شعوراً بالندرة والتميز، وكيف يبني تحميل الصفحات فائق السرعة ثقة عميقة في اللاوعي لدى العميل الثري.',
      author: 'ماركوس فانس',
      authorRole: 'المدير الإبداعي',
    },
  },
  {
    id: 'nextjs-performance',
    date: 'June 24, 2026',
    readTime: '8 min read',
    category: 'development',
    en: {
      title: 'Architecting for Speed: How Nexora Achieves Sub-Second Page Speeds',
      excerpt: 'An insider look into our custom rendering pipeline, asset optimization techniques, and lightweight state management.',
      content: 'Speed is the ultimate luxury. A delay of just 100 milliseconds can drop conversions by 7%. At Nexora Studio, we treat website performance as a core design requirement. In this technical piece, we break down our exact optimization stack: why we bundle using custom tools, how we build lightweight component trees without bloat, and the lazy-loading techniques that deliver immediate interactive readiness. We review code structures and build configurations that ensure a 100 Lighthouse performance score on mobile devices.',
      author: 'Alex Mercer',
      authorRole: 'Principal Web Architect',
    },
    ar: {
      title: 'هندسة السرعة الفائقة: كيف يحقق استوديو نيكسورا سرعة تحميل تقل عن ثانية؟',
      excerpt: 'نظرة داخلية على نظام المعالجة المخصص لدينا، وتقنيات تحسين الأصول، وإدارة الحالة خفيفة الوزن التي نتبعها.',
      content: 'السرعة هي قمة الفخامة الرقمية. إن تأخيراً قدره ١٠٠ مللي ثانية فقط يمكن أن يخفض معدل التحويلات بنسبة ٧٪. في استوديو نيكسورا، نتعامل مع سرعة وأداء موقع الويب كشرط أساسي وجوهري للتصميم. في هذه المقالة التقنية، نفكك نظام التحسين الفني لدينا: كيف نبني مكونات برمجية نظيفة خالية من الشوائب والملفات الزائدة، وتقنيات التحميل الكسول التي تقدم تفاعلاً فورياً مذهلاً للزائر، لضمان الحصول على درجة أداء كاملة ١٠٠٪ على الهواتف.',
      author: 'أليكس ميرسر',
      authorRole: 'كبير مهندسي الويب',
    },
  },
  {
    id: 'branding-scaling',
    date: 'May 18, 2026',
    readTime: '5 min read',
    category: 'business',
    en: {
      title: 'Brand Positioning: Why Your Website is the Ultimate Authority Engine',
      excerpt: 'Your website is the global front-door to your business. Is it positioning you as a luxury leader or a discount vendor?',
      content: 'If your business is charging premium prices but your website looks like it was built in 2018, there is a trust gap. Customers are highly visual; they equate the quality of your website with the quality of your services. We examine how elite agencies like Nexora bridge this gap by aligning digital aesthetics with market value, helping businesses transition from low-ticket local vendors into high-paying global authorities.',
      author: 'Sophia Sterling',
      authorRole: 'Brand Strategist',
    },
    ar: {
      title: 'مكانة العلامة التجارية: لماذا يعد موقعك الإلكتروني المحرك الأساسي لفرض هيبتك؟',
      excerpt: 'موقعك الإلكتروني هو الواجهة العالمية لعملك. فهل يضعك في ريادة الفخامة أم كبائع للخصومات البسيطة؟',
      content: 'إذا كانت شركتك تطلب أسعاراً فاخرة ولكن موقعك يبدو وكأنه صُمم في عام ٢٠١٨، فهناك فجوة ثقة كبيرة تخسر فيها عملاءك. إن العملاء يقدرون بمستوى البصر؛ فهم يربطون جودة موقعك الإلكتروني بجودة خدماتك بشكل مباشر. نحن ندرس كيف تساعد الوكالات الراقية مثل نيكسورا في ردم هذه الفجوة من خلال مواءمة الجماليات الرقمية مع قيمتك الحقيقية في السوق، لمساعدتك على التحول من بائع محلي رخيص إلى سلطة عالمية مرموقة.',
      author: 'صوفيا ستيرلينغ',
      authorRole: 'خبير استراتيجية الهوية',
    },
  },
];
