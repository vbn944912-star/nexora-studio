import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSent(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="contact-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Connect with Us</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Consultation Inquiry.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Contact our private clinical concierge desk. We respond to digital inquiries within 60 minutes during business hours.
          </p>
        </div>

        {/* Contact info grid & Map container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT PANEL: Contact Details (5 columns) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-lg md:text-xl font-bold text-zinc-900 dark:text-white pb-3 border-b border-zinc-200 dark:border-zinc-850">
                Clinic Location & Hotlines
              </h3>

              <div className="space-y-4 text-xs">
                {/* Location */}
                <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                  <MapPin className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-zinc-800 dark:text-zinc-200">Flagship Clinic Address</span>
                    <span className="block text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">
                      730 Fifth Avenue, 14th Floor <br />
                      New York, NY 10019 (Crown Building)
                    </span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                  <Clock className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-zinc-800 dark:text-zinc-200">Clinical Hours</span>
                    <span className="block text-zinc-400 dark:text-zinc-500 mt-0.5 font-medium">
                      Monday – Friday: 08:00 AM – 06:00 PM <br />
                      Saturday: 09:00 AM – 04:00 PM <br />
                      Sunday: Closed (Emergency Staff On-Call)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                  <Phone className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-zinc-800 dark:text-zinc-200">Concierge Phone Desk</span>
                    <a href="tel:+15553548300" className="block text-emerald-500 font-bold mt-0.5 hover:underline">
                      (555) ELITE-300 / (555) 354-8300
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5 rtl:space-x-reverse">
                  <Mail className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block font-bold text-zinc-800 dark:text-zinc-200">General Inquiries</span>
                    <a href="mailto:concierge@elitedental.com" className="block text-emerald-500 font-bold mt-0.5 hover:underline">
                      concierge@elitedental.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated GPS Google Map (Visual vector rendering of New York Central Park block) */}
            <div className="relative aspect-video rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-950 shadow-md group">
              {/* Map background graphic */}
              <div className="absolute inset-0 bg-[#e5e9f0] dark:bg-[#1a202c] transition-colors p-4 flex flex-col justify-between overflow-hidden">
                {/* Simulated streets lines using simple background grids */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/3 inset-x-0 h-4 bg-white dark:bg-zinc-900 border-y border-zinc-300 dark:border-zinc-800 rotate-12" />
                <div className="absolute left-1/2 inset-y-0 w-4 bg-white dark:bg-zinc-900 border-x border-zinc-300 dark:border-zinc-800 -rotate-12" />

                {/* Central Park block representation */}
                <div className="absolute top-4 right-4 bottom-12 left-2/3 bg-emerald-500/15 border border-emerald-500/25 rounded-xl flex items-center justify-center">
                  <span className="font-mono text-[9px] text-emerald-500 tracking-wider uppercase font-extrabold">Central Park</span>
                </div>

                {/* Map HUD interface overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="rounded-lg bg-white/95 dark:bg-zinc-900/90 px-2.5 py-1 text-[9px] font-sans font-extrabold uppercase tracking-wide shadow-sm border border-zinc-200 dark:border-zinc-800">
                    730 Fifth Ave, NY
                  </div>
                  <div className="rounded-lg bg-emerald-500 text-white p-1 shadow-sm">
                    <Navigation className="h-3 w-3 animate-pulse" />
                  </div>
                </div>

                {/* Absolute Pin Marker */}
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="h-7 w-7 rounded-full bg-emerald-500/20 flex items-center justify-center animate-ping absolute" />
                  <div className="h-6 w-6 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 flex items-center justify-center shadow-lg relative z-10">
                    <span className="text-[10px] font-black text-white">E</span>
                  </div>
                  <div className="bg-zinc-900/90 text-white rounded px-2 py-0.5 text-[8px] font-bold mt-1 shadow-md">
                    Elite Dental
                  </div>
                </div>

                {/* Satellite Indicator */}
                <div className="relative z-10 text-start">
                  <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">GPS SIGNAL: ACTIVE</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Secure Feedback Inquiries Form (7 columns) */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between">
            {isSent ? (
              <div className="text-center py-16 space-y-5 flex flex-col items-center justify-center h-full">
                <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                  Message Dispatched Securely
                </h3>
                <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting the Clinical Concierge desk. We have received your inquiry. An administrative officer will reply to your registered email address shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="mt-4 rounded-full bg-emerald-500 dark:bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white transition-all shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-5" id="contact-inquiry-form">
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-zinc-900 dark:text-white">
                    Clinical Inquiry Form
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 mt-1">
                    Fill out our brief checklist below. Your patient data is fully encrypted and protected under high compliance standards.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Helena Rothschild"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-850 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="helena@rothschild.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-850 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 345-1212"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-850 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      Inquiry Narrative
                    </label>
                    <textarea
                      required
                      placeholder="Explain your cosmetic goals, tooth concerns, or requested appointment timelines..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-850 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 dark:bg-emerald-600 py-3.5 font-sans text-xs font-bold text-white shadow-xl flex items-center justify-center space-x-2 active:scale-95 transition-all hover:bg-emerald-600"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Secure Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
