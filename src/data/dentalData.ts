import { Service, Doctor, BeforeAfterItem, Testimonial, FAQItem } from '../types';

export const servicesData: Service[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Restore complete bite function and facial aesthetics with medical-grade, lifetime titanium implants.',
    category: 'restorative',
    icon: 'Shield',
    longDescription: 'Our dental implants offer a permanent, natural-feeling solution for missing teeth. Utilizing state-of-the-art 3D guided surgery and bio-compatible titanium posts, we restore structural support to your jaw and pristine aesthetic balance to your smile.',
    benefits: [
      'Prevents bone loss and preserves natural facial contours',
      'Provides structural stability comparable to natural roots',
      'Engineered to last a lifetime with proper care',
      'Restores 100% chewing capability and vocal articulation'
    ],
    duration: '2 - 3 visits over 3-6 months',
    priceEstimate: 'From $2,800 / tooth'
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Banish years of deep enamel staining in a single luxury 60-minute session with advanced laser systems.',
    category: 'cosmetic',
    icon: 'Sparkles',
    longDescription: 'Experience our signature medical whitening protocol. We combine proprietary high-intensity laser activation with premium, enamel-safe hydrogen peroxide formulations to lift up to 8 shades in a single luxurious, sensitivity-minimized appointment.',
    benefits: [
      'Immediate, clinically validated results in under an hour',
      'Advanced sensitivity-shielding custom protocols',
      'Removes deep intrinsic stains from coffee, tea, and age',
      'Includes custom-tailored take-home preservation kit'
    ],
    duration: '60 - 90 minutes',
    priceEstimate: 'From $450 / session'
  },
  {
    id: 'braces',
    title: 'Advanced Braces',
    description: 'Modern cosmetic alignment utilizing high-precision ceramic braces or invisible aligner systems.',
    category: 'specialist',
    icon: 'Grid',
    longDescription: 'We craft bespoke smile correction frameworks using advanced orthodontic planning software. Choose between premium low-profile clear ceramic braces or luxury invisible aligners designed to safely and comfortably shift your smile into perfect geometric harmony.',
    benefits: [
      '3D digital mapping eliminates physical, uncomfortable molds',
      'Highly discreet, modern clear or low-profile designs',
      'Engineered to optimize long-term facial symmetry',
      'Accelerated alignment plans for busy professionals'
    ],
    duration: '6 - 18 months',
    priceEstimate: 'From $3,500'
  },
  {
    id: 'root-canal',
    title: 'Precision Root Canal',
    description: 'Painless microscopic therapy to salvage damaged teeth and restore absolute internal health.',
    category: 'restorative',
    icon: 'Activity',
    longDescription: 'Forget outdated root canal myths. Our microscopic endodontic therapy combines powerful local anesthesia, computer-assisted rotary files, and high-magnification optics to clean and seal infected root systems in a whisper-quiet, pain-free environment.',
    benefits: [
      '100% painless therapy via localized anesthesia shields',
      'Saves your natural tooth structure from extraction',
      'Eliminated dental infections and acute jaw aches',
      'Precision microscopic sealing prevents reinfection'
    ],
    duration: '1 - 2 visits (60-90 min each)',
    priceEstimate: 'From $950'
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    description: 'A comprehensive, multi-modality cosmetic redesign to achieve your dream red-carpet smile.',
    category: 'cosmetic',
    icon: 'Heart',
    longDescription: 'The pinnacle of aesthetic dentistry. Our Smile Makeovers are co-designed with you using digital smile software. We assess your facial proportions, skin tone, and lip line to design a personalized combination of veneers, contouring, and alignment that maximizes facial harmony.',
    benefits: [
      'Comprehensive, customized digital design preview',
      'Corrects multiple structural and shade imperfections at once',
      'Instantly boosts personal and professional confidence',
      'Utilizes elite, natural-looking porcelain and zirconia'
    ],
    duration: '2 - 3 weeks',
    priceEstimate: 'Custom design upon request'
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    description: 'Ultra-thin, custom-crafted porcelain shells providing a permanent upgrade to color and form.',
    category: 'cosmetic',
    icon: 'Layers',
    longDescription: 'Crafted by master dental ceramists, our bespoke ultra-thin porcelain veneers are permanently bonded to the front of your teeth. They mimic the light-reflecting qualities of natural enamel to deliver unmatched uniformity, luster, and resistance to staining.',
    benefits: [
      'Flawless correction for chipped, spaced, or worn teeth',
      'Permanently stain-resistant surface chemistry',
      'Minimal-prep protocols preserve maximum healthy tooth enamel',
      'Exquisite lifelike translucency and light refraction'
    ],
    duration: '2 visits (1-2 weeks apart)',
    priceEstimate: 'From $1,500 / tooth'
  },
  {
    id: 'children',
    title: 'Children Dentistry',
    description: 'Gentle, educational, and fun dental care creating positive foundations for young smiles.',
    category: 'preventive',
    icon: 'Smile',
    longDescription: 'We believe childhood visits shape future health. Our specialized pediatric program delivers gentle, ultra-caring dental checkups, sealants, and early guidance in an warm, friendly environment designed to excite kids about oral hygiene and banish dental anxiety.',
    benefits: [
      'Zero-fear, play-infused checkups and cleaning',
      'Protective fluoride and sealant cavity prevention',
      'Gentle growth tracking for jaw and teeth alignment',
      'Interactive, fun brushing and flossing workshops'
    ],
    duration: '30 - 45 minutes',
    priceEstimate: 'From $120 / visit'
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Rapid, immediate dental intervention for pain, trauma, or broken teeth within 2 hours.',
    category: 'preventive',
    icon: 'Zap',
    longDescription: 'Dental emergencies demand swift action. Whether you have an acute, throbbing toothache, a broken crown, or a dislodged tooth, our dedicated emergency triage protocol guarantees you a same-day appointment with immediate pain management and expert care.',
    benefits: [
      'Guaranteed same-day priority appointments',
      'Immediate localized pain relief therapy',
      'On-site digital diagnostic x-rays and repairs',
      'Reconstruction of lost, chipped, or knocked-out teeth'
    ],
    duration: 'Immediate priority triage',
    priceEstimate: 'Triage fee: $150 (applied to treatment)'
  }
];

export const doctorsData: Doctor[] = [
  {
    id: 'dr-sarah',
    name: 'Dr. Sarah Sterling',
    role: 'Clinical Director & Chief Cosmetic Dentist',
    specialization: 'Cosmetic Dentistry & Full Smile Design',
    experience: '18 Years',
    bio: 'Dr. Sarah Sterling is a world-renowned authority in aesthetic dentistry, specialized in minimal-prep porcelain veneers and comprehensive smile makeovers. She combines fine-arts principles with computer-aided digital design to construct uniquely balanced, breathtaking smiles that appear effortlessly natural.',
    image: '/src/assets/images/doctor_sarah_1783418411175.jpg',
    education: [
      'Doctor of Dental Surgery (DDS) - Columbia University School of Dental Medicine',
      'Mastership in Aesthetic Dentistry - American Academy of Cosmetic Dentistry (AACD)',
      'Fellowship in Advanced Laser Dentistry - King’s College London'
    ],
    credentials: [
      'Accredited Member, AACD',
      'Executive Board Member, Global Aesthetic Dentistry Society',
      'Voted "New York Best Cosmetic Dentist" (2022, 2024)'
    ],
    rating: 4.95
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Vance',
    role: 'Chief Implant Surgeon',
    specialization: 'Implantology & Reconstructive Surgery',
    experience: '22 Years',
    bio: 'Dr. Marcus Vance is a pioneer in guided implant surgery, having successfully placed over 6,000 implants. He specializes in full-mouth reconstructions, sinus lifts, and bone grafting, using ultra-low radiation 3D cone-beam scanners to achieve sub-millimeter placement accuracy with minimal discomfort.',
    image: '/src/assets/images/doctor_marcus_1783418425530.jpg',
    education: [
      'Doctor of Dental Medicine (DMD) - Harvard School of Dental Medicine',
      'Residency in Oral and Maxillofacial Surgery - Mayo Clinic',
      'Diplomate - International Congress of Oral Implantologists (ICOI)'
    ],
    credentials: [
      'Fellow, American College of Oral and Maxillofacial Surgeons',
      'Lead Researcher, Guided Tissue Regeneration Consortium',
      'Lifetime Achievement Award, International Implant Academy'
    ],
    rating: 4.98
  },
  {
    id: 'dr-alexander',
    name: 'Dr. Alexander Thorne',
    role: 'Lead Orthodontic Specialist',
    specialization: 'Discreet Orthodontics & Clear Aligner Systems',
    experience: '14 Years',
    bio: 'Dr. Alexander Thorne focuses on biomechanically optimized orthodontic alignment. A Diamond Elite Invisalign provider, he designs customized tooth movement sequences that align teeth comfortably while actively sculpting beautiful facial profiles and supporting correct airway health.',
    image: '/src/assets/images/doctor_alexander_1783418455166.jpg',
    education: [
      'Doctor of Dental Medicine (DMD) - University of Pennsylvania',
      'Master of Science in Orthodontics - Marquette University',
      'Certified Clinical Aligner Specialist - European Orthodontic Alliance'
    ],
    credentials: [
      'Diamond Elite Invisalign Provider',
      'Member, World Federation of Orthodontists',
      'Inventor of the Thorne Alignment Spacer System'
    ],
    rating: 4.92
  },
  {
    id: 'dr-emily',
    name: 'Dr. Emily Chen',
    role: 'Senior Pediatric Dentist',
    specialization: 'Pediatric Dentistry & Preventive Oral Health',
    experience: '11 Years',
    bio: 'Dr. Emily Chen dedicates her practice to making dentistry a joyful, comforting adventure for children. She is an expert in non-pharmacological behavioral management, preventative sealants, and developmental orthodontics, ensuring your children grow up with cavity-free teeth and absolute trust in dental professionals.',
    image: '/src/assets/images/doctor_emily_1783418441341.jpg',
    education: [
      'Doctor of Dental Surgery (DDS) - UCLA School of Dentistry',
      'Residency in Pediatric Dentistry - Seattle Children’s Hospital',
      'Board Certified - American Board of Pediatric Dentistry (ABPD)'
    ],
    credentials: [
      'Active Member, American Academy of Pediatric Dentistry',
      'Outstanding Service Award, Children’s Oral Health Foundation',
      'Advisory Specialist, National Pediatric Nutrition Council'
    ],
    rating: 4.97
  }
];

export const beforeAfterData: BeforeAfterItem[] = [
  {
    id: 'ba-smile',
    title: 'Complete Veneer Restoration',
    description: 'Correction of color variance, moderate misalignment, and micro-fracturing using 10 custom ultra-thin porcelain veneers.',
    beforeImage: '/src/assets/images/smile_before_1783418486800.jpg',
    afterImage: '/src/assets/images/smile_after_1783418473660.jpg',
    category: 'Cosmetic / Veneers'
  },
  {
    id: 'ba-implant',
    title: 'Single Front Tooth Implant',
    description: 'Restoration of a fractured central incisor following physical trauma. Combines titanium post with zirconium crown.',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    category: 'Restorative / Implants'
  },
  {
    id: 'ba-align',
    title: 'Invisalign Teeth Straightening',
    description: 'Comprehensive 9-month aligner correction targeting complex overcrowding and a moderate open bite.',
    beforeImage: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80',
    category: 'Orthodontics / Aligners'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Helena Rothschild',
    role: 'Art Gallery Owner',
    text: 'Dr. Sarah Sterling did my porcelain veneers, and the results are truly staggering. The craftsmanship is flawless—they look perfectly natural, capture light beautifully, and have totally transformed my posture and presence. Worth every penny.',
    rating: 5,
    date: 'May 14, 2026',
    treatment: 'Porcelain Veneers',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Julian Sterling',
    role: 'Venture Capital Partner',
    text: 'I was extremely apprehensive about receiving a full-arch dental implant. Dr. Marcus Vance put me completely at ease. The guided 3D surgical planning was extremely precise; I felt absolutely zero discomfort and walked out with a functional, handsome smile.',
    rating: 5,
    date: 'June 01, 2026',
    treatment: 'Dental Implants',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Catherine Vance',
    role: 'Classical Concert Violinist',
    text: 'My teeth whitening session exceeded all expectations. Dr. Sterling’s laser setup eliminated tea staining without the shooting pains or lingering sensitivity I had experienced elsewhere. A genuinely elite and luxurious clinical setting.',
    rating: 5,
    date: 'April 20, 2026',
    treatment: 'Laser Teeth Whitening',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Sebastian Cole',
    role: 'Tech Startup Founder',
    text: 'As someone with intense dental anxiety, finding Elite Dental Clinic has been a revelation. The aromatherapy, noise-canceling headphones, and the soothing, expert touch of the staff make appointments feel like a wellness spa rather than a medical procedure.',
    rating: 5,
    date: 'June 25, 2026',
    treatment: 'Microscopic Root Canal',
    verified: true
  },
  {
    id: 'test-5',
    name: 'Diana Prince',
    role: 'Corporate Attorney',
    text: 'The Invisalign treatment designed by Dr. Thorne corrected my bite issues in just 8 months. His digital simulation was perfectly accurate, and the appointment scheduling was extremely flexible. Exceptional service from beginning to end.',
    rating: 5,
    date: 'March 11, 2026',
    treatment: 'Discreet Orthodontics',
    verified: true
  },
  {
    id: 'test-6',
    name: 'Richard Harrington',
    role: 'Executive Director',
    text: 'I brought my 6-year-old daughter to Dr. Emily Chen, and she actually asks when we are going back! The pediatric room is incredibly warm, and Dr. Chen is magic. No tears, no fear—just pure care and delightful education.',
    rating: 5,
    date: 'May 28, 2026',
    treatment: 'Children Dentistry',
    verified: true
  },
  {
    id: 'test-7',
    name: 'Sophia Laurent',
    role: 'High-End Fashion Designer',
    text: 'My smile makeover was an award-winning collaboration. Dr. Sterling spent hours analyzing my facial skeletal structures and lip movements. The result is a bespoke smile that integrates seamlessly with my personal aesthetic.',
    rating: 5,
    date: 'April 05, 2026',
    treatment: 'Full Smile Makeover',
    verified: true
  },
  {
    id: 'test-8',
    name: 'Marcus Brody',
    role: 'Hotelier',
    text: 'An emergency tooth fracture on a Sunday threatened to derail a critical press event. Elite Dental took my call, booked me in under 2 hours, and Dr. Vance reconstructed my molar painlessly. Simply outstanding execution under pressure.',
    rating: 5,
    date: 'June 18, 2026',
    treatment: 'Emergency Reconstruction',
    verified: true
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes Elite Dental Clinic different from standard dental offices?',
    answer: 'We operate as a high-end luxury wellness studio, combining world-class clinical expertise with an unparalleled patient experience. Every procedure utilizes cutting-edge medical technologies (such as 3D digital imaging, digital smile design, and dental microscopes). Furthermore, we cater to patient comfort with noise-canceling headphones, custom aromatherapy, personalized entertainment screens, and strict time discipline to ensure you are seen immediately at your scheduled time.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How long do porcelain veneers last, and do they stain?',
    answer: 'With proper oral hygiene and regular professional checkups, our ultra-thin porcelain veneers can easily last 15 to 25 years. Because dental-grade porcelain is completely non-porous, our veneers are highly resistant to staining from coffee, tea, red wine, or tobacco, keeping your smile permanently bright and lustrous.',
    category: 'treatments'
  },
  {
    id: 'faq-3',
    question: 'Is the dental implant procedure painful?',
    answer: 'No. The procedure is performed under deep local anesthesia (or premium conscious sedation if requested), meaning you will feel absolutely no physical pain. Most patients report only mild pressure. Following the procedure, any minor soreness is easily managed with standard anti-inflammatory medication, and most clients return to work the next morning.',
    category: 'treatments'
  },
  {
    id: 'faq-4',
    question: 'Do you accept dental insurance, and what payment structures are available?',
    answer: 'We accept all major PPO insurance plans and provide complete administrative concierge support to file claims on your behalf. Since many cosmetic and advanced implant treatments are not fully covered by basic insurance, we offer transparent, interest-free luxury financing programs through CareCredit and LendingClub, as well as customized in-house payment structures.',
    category: 'insurance'
  },
  {
    id: 'faq-5',
    question: 'How does the digital smile design consultation work?',
    answer: 'During your initial consultation, we take ultra-high-definition 3D photos and video scans of your face and teeth. Using advanced design software, we simulate your ideal smile, adjusting tooth length, angle, and shade to fit your facial proportions. You will be able to review this 3D simulation on screen and even try on temporary "mock-ups" before any treatment begins, ensuring absolute satisfaction.',
    category: 'booking'
  }
];

export const TIME_SLOTS = [
  '08:00 AM',
  '09:00 AM',
  '10:30 AM',
  '11:30 AM',
  '01:00 PM',
  '02:00 PM',
  '03:30 PM',
  '04:30 PM'
];
