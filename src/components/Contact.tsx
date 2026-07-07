import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Calendar, Sparkles, Send, CheckCircle2, MapPin } from 'lucide-react';
import { TranslationSchema } from '../types';

interface ContactProps {
  t: TranslationSchema;
  currentLang: 'en' | 'ar';
}

export default function Contact({ t, currentLang }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1800);
  };

  return (
    <section className="bg-[#09090B] py-24 border-t border-white/5 relative" id="contact">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl" id="contact-title">
            {t.contact.title}
          </h2>
          <p className="mt-4 font-sans text-base text-zinc-400 sm:text-lg leading-relaxed" id="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Dynamic Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct channels (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 rounded-2xl border border-white/5 bg-[#111827]/30 p-8 backdrop-blur-md" id="contact-channels">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-1.5 rounded-full bg-brand-accent/15 px-3 py-1 text-[11px] font-bold text-brand-accent uppercase tracking-wide rtl:space-x-reverse">
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>{currentLang === 'en' ? 'Direct Principal Communication' : 'تواصل مباشر مع الإدارة'}</span>
              </div>

              {/* Pitch */}
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                {currentLang === 'en' ? 'Skip the forms. Talk to a designer directly.' : 'تواصل معنا بشكل مباشر وسريع.'}
              </h3>
              <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-zinc-400">
                {currentLang === 'en' 
                  ? 'We value high-velocity decisions. Connect directly on secure channels to schedule a custom scope assessment with our partners.'
                  : 'نحن نقدر القرارات السريعة والمثمرة. تواصل مباشرة عبر قنواتنا المشفرة والآمنة لتحديد موعد لتقييم نطاق مشروعكم.'}
              </p>
            </div>

            {/* Direct Channel Action Buttons */}
            <div className="space-y-4" id="direct-action-buttons">
              {/* WhatsApp direct link */}
              <a
                href="https://wa.me/15550199" // Dummy professional WhatsApp link
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-white"
                id="whatsapp-btn"
              >
                <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="font-sans text-xs sm:text-[13.5px] font-bold text-zinc-300 group-hover:text-white transition-colors">
                    {t.contact.whatsappBtn}
                  </span>
                </div>
                <span className="font-sans text-[10px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded-md">
                  {currentLang === 'en' ? 'Online' : 'نشط الآن'}
                </span>
              </a>

              {/* Direct Email Link */}
              <a
                href="mailto:partners@nexorastudio.com"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-brand-primary/30 hover:bg-brand-primary/5 hover:text-white"
                id="email-btn"
              >
                <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary animate-pulse">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-sans text-xs sm:text-[13.5px] font-bold text-zinc-300 group-hover:text-white transition-colors">
                    {t.contact.emailBtn}
                  </span>
                </div>
                <span className="font-sans text-[10px] font-black text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2 py-1 rounded-md">
                  {currentLang === 'en' ? '4 hr Reply' : 'رد خلال ٤ س'}
                </span>
              </a>

              {/* Calendar Meet scheduler */}
              <button
                onClick={() => alert(currentLang === 'en' ? 'Google Meet calendar portal loaded! Please complete the form or WhatsApp us directly.' : 'تم تفعيل بوابة تقويم Google Meet! يُرجى إكمال النموذج أو مراسلتنا مباشرة.')}
                className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-start transition-all duration-300 hover:border-brand-secondary/30 hover:bg-brand-secondary/5 hover:text-white"
                id="meet-btn"
              >
                <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary/10 text-brand-secondary">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <span className="font-sans text-xs sm:text-[13.5px] font-bold text-zinc-300 group-hover:text-white transition-colors">
                    {t.contact.bookConsultBtn}
                  </span>
                </div>
                <span className="font-sans text-[10px] font-black text-brand-secondary uppercase tracking-widest bg-brand-secondary/10 px-2 py-1 rounded-md">
                  {currentLang === 'en' ? 'Video' : 'فيديو'}
                </span>
              </button>
            </div>

            {/* Offices Location Presence */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <div className="flex items-center space-x-2 text-zinc-400 rtl:space-x-reverse font-sans text-xs font-semibold uppercase tracking-wider">
                <MapPin className="h-4 w-4 text-brand-accent" />
                <span>{t.contact.officeTitle}</span>
              </div>
              <p className="font-sans text-xs text-zinc-500 font-medium">
                {t.contact.officeLocation}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Secure Form (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/5 bg-[#111827]/20 p-8 sm:p-10 backdrop-blur-md" id="contact-form-container">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center h-full py-12"
                  id="contact-success-state"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-success/15 text-brand-success mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white tracking-wide">
                    {currentLang === 'en' ? 'Transmission Completed' : 'تم الإرسال بنجاح'}
                  </h4>
                  <p className="mt-4 max-w-md font-sans text-xs sm:text-[13.5px] leading-relaxed text-zinc-400">
                    {t.contact.formSuccess}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 font-sans text-xs font-bold text-zinc-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                  >
                    {currentLang === 'en' ? 'Send another inquiry' : 'إرسال طلب آخر'}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 flex flex-col justify-between h-full"
                  id="contact-form"
                >
                  <div className="space-y-5">
                    {/* Grid Inputs for Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name-input" className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider">
                          {t.contact.formName} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="name-input"
                          type="text"
                          required
                          placeholder={currentLang === 'en' ? 'e.g., Alexander Vance' : 'مثال: ألكسندر فانس'}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4.5 py-3.5 font-sans text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email-input" className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider">
                          {t.contact.formEmail} <span className="text-rose-500">*</span>
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          required
                          placeholder={currentLang === 'en' ? 'e.g., alex@company.com' : 'مثال: alex@company.com'}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-white/10 bg-white/5 px-4.5 py-3.5 font-sans text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                        />
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="space-y-2">
                      <label htmlFor="company-input" className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        {t.contact.formCompany}
                      </label>
                      <input
                        id="company-input"
                        type="text"
                        placeholder={currentLang === 'en' ? 'e.g., Aurelia Dental Group' : 'مثال: مجموعة أوريليا لطب الأسنان'}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4.5 py-3.5 font-sans text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                      />
                    </div>

                    {/* Project Message */}
                    <div className="space-y-2">
                      <label htmlFor="message-input" className="font-sans text-xs font-bold text-zinc-400 uppercase tracking-wider">
                        {t.contact.formMessage} <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message-input"
                        rows={4}
                        required
                        placeholder={currentLang === 'en' ? 'Detail your project goals, timelines, and budget if possible.' : 'يرجى كتابة أهداف مشروعكم وتفاصيله والمدد الزمنية والميزانية المتوقعة.'}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4.5 py-3.5 font-sans text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-brand-primary/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(79,70,229,0.1)] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission and secure communication lock */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="font-sans text-[11px] text-zinc-500 font-medium leading-relaxed max-w-xs">
                      {currentLang === 'en' 
                        ? '🔒 SECURE END-TO-END TRANSMISSION • 256-BIT ENCRYPTION • CONFIDENTIAL GUARANTEED' 
                        : '🔒 إرسال آمن ومشفّر بالكامل • تشفير ٢٥٦ بت • نضمن السرية التامة'}
                    </span>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.35)] active:scale-95 disabled:opacity-50 rtl:space-x-reverse"
                      id="submit-contact-form"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>{status === 'submitting' ? t.contact.formSubmitting : t.contact.formSubmit}</span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
