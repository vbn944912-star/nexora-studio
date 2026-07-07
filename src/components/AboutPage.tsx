import { Shield, Award, Eye, Sparkles, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Artistic Artistry',
      desc: 'We treat cosmetic dentistry as high fine-arts, drafting bespoke shapes and translucency profiles to fit your unique facial musculature.',
      icon: Sparkles,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      title: 'Microscopic Precision',
      desc: 'Using ultra-modern dental microscopes and low-radiation 3D guided sensors, we perform procedures with sub-millimeter precision.',
      icon: Award,
      color: 'text-teal-500 bg-teal-500/10'
    },
    {
      title: 'Total Discretion',
      desc: 'Catering to high-profile executives and personalities, we offer a dedicated private triage lounge, secure entry, and absolute data compliance.',
      icon: Shield,
      color: 'text-cyan-500 bg-cyan-500/10'
    },
    {
      title: 'Deep Empathy',
      desc: 'Dental anxiety is actively met with custom aromatherapy, noise-canceling headsets, comfortable warm blankets, and painless injection systems.',
      icon: HeartHandshake,
      color: 'text-rose-500 bg-rose-500/10'
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="about-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Upper Header block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Our Heritage</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Pioneering the Future of Luxury Dental Care.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
            Elite Dental Clinic was founded over two decades ago with a singular, unyielding vision: to purge fear from clinical oral healthcare and elevate dentistry to a premium craft.
          </p>
        </div>

        {/* Narrative & Image (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative description (6 columns) */}
          <div className="lg:col-span-6 space-y-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white leading-snug">
              A Symphony of Scientific Innovations & Fine Artistry.
            </h3>
            <p>
              At Elite Dental, we believe that a healthy, sparkling smile is your ultimate calling card—a direct expression of wellness, vitality, and absolute confidence. We reject the "one-size-fits-all" model of clinical chains. Instead, we design bespoke oral pathways that optimize biological health alongside breathtaking external aesthetics.
            </p>
            <p>
              Our flagship clinic on Fifth Avenue incorporates leading-edge technological breakthroughs. From non-invasive lasers that cure decay without drill vibration to high-resolution 3D intraoral printers, we streamline procedures to ensure appointments are remarkably fast, completely comfortable, and built to last.
            </p>
            <p className="font-semibold text-zinc-800 dark:text-zinc-300 flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>We welcome you to experience dentistry, completely reimagined.</span>
            </p>
          </div>

          {/* Visual Showcase (6 columns) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 bg-emerald-500/5 blur-3xl rounded-full" />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                alt="Elite Clinic Lab"
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 object-cover h-48 w-full shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=600&q=80"
                alt="3D Scanning Technology"
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 object-cover h-48 w-full mt-6 shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="pt-10">
          <div className="text-center mb-10">
            <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Our Guiding Pillars</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              Uncompromising Standards in Every Detail
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i}
                  className="p-6 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-2xl hover:border-emerald-500/20 duration-300 shadow-sm"
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-zinc-900 dark:text-white mb-2">{v.title}</h4>
                  <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
