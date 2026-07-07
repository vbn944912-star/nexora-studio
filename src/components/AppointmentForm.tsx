import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData, doctorsData, TIME_SLOTS } from '../data/dentalData';
import { Service, Doctor, Appointment } from '../types';
import { CheckCircle2, User, Calendar, Clock, Briefcase, FileText, ChevronRight, ChevronLeft, CalendarRange, Trash2, ShieldAlert } from 'lucide-react';

interface AppointmentFormProps {
  initialServiceId?: string;
  initialDoctorId?: string;
  onSuccess?: () => void;
}

export default function AppointmentForm({ initialServiceId = '', initialDoctorId = '', onSuccess }: AppointmentFormProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(initialDoctorId);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [localBookings, setLocalBookings] = useState<Appointment[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recentBooking, setRecentBooking] = useState<Appointment | null>(null);

  // Load existing bookings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('elite_dental_appointments');
    if (stored) {
      try {
        setLocalBookings(JSON.parse(stored));
      } catch (e) {
        console.error('Error loading local appointments', e);
      }
    }
  }, []);

  const saveBookings = (newBookings: Appointment[]) => {
    localStorage.setItem('elite_dental_appointments', JSON.stringify(newBookings));
    setLocalBookings(newBookings);
  };

  const deleteBooking = (id: string) => {
    const filtered = localBookings.filter(b => b.id !== id);
    saveBookings(filtered);
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && !selectedDoctor) return;
    if (step === 3 && (!selectedDate || !selectedTime)) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    const newBooking: Appointment = {
      id: `apt-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      date: selectedDate,
      timeSlot: selectedTime,
      doctorId: selectedDoctor,
      serviceId: selectedService,
      notes: formData.notes,
      status: 'confirmed',
      createdAt: new Date().toLocaleDateString()
    };

    const updated = [newBooking, ...localBookings];
    saveBookings(updated);
    setRecentBooking(newBooking);
    setIsSuccess(true);
    setStep(1);

    // Reset inputs
    setSelectedService('');
    setSelectedDoctor('');
    setSelectedDate('');
    setSelectedTime('');
    setFormData({ name: '', email: '', phone: '', notes: '' });

    if (onSuccess) onSuccess();
  };

  // Helper getters
  const activeService = servicesData.find((s) => s.id === selectedService);
  const activeDoctor = doctorsData.find((d) => d.id === selectedDoctor);

  // Generate simple next 7 days for the date selector
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= 10; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      // Skip Sundays (clinic closed)
      if (nextDate.getDay() !== 0) {
        days.push(nextDate);
      }
    }
    return days;
  };

  const availableDates = getNextDays();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-7xl mx-auto px-4 md:px-6 py-10" id="appointment-booking-module">
      
      {/* LEFT COLUMN: The Step Booking Form Wizard (7 columns) */}
      <div className="lg:col-span-7 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[580px]">
        
        {/* Decorative backdrop glow */}
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-emerald-500/5 dark:bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

        {/* Wizard Progress Bar */}
        {!isSuccess && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <span>Step {step} of 4</span>
              <span>
                {step === 1 && 'Select Clinical Service'}
                {step === 2 && 'Choose Specialist Doctor'}
                {step === 3 && 'Pick Date & Time'}
                {step === 4 && 'Confirm Information'}
              </span>
            </div>
            <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-850 rounded-full overflow-hidden flex">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-full flex-1 transition-all duration-300 ${
                    s <= step ? 'bg-emerald-500' : 'bg-transparent'
                  } border-r border-white dark:border-zinc-950 last:border-0`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dynamic content rendering with Framer Motion transitions */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 flex flex-col items-center justify-center space-y-5"
                key="success-message"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-zinc-900 dark:text-white">
                  Appointment Reserved Successfully
                </h3>
                <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                  Your premium consultation session has been logged in our system. A clinical relations concierge will contact you shortly to complete the physical verification process.
                </p>

                {recentBooking && (
                  <div className="w-full max-w-md bg-zinc-50 dark:bg-zinc-900/60 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 mt-4 text-start space-y-3.5 text-xs">
                    <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                      <span className="font-semibold text-zinc-400">Confirmation ID</span>
                      <span className="font-mono font-bold text-emerald-500">{recentBooking.id}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-y-3">
                      <div>
                        <span className="block text-zinc-400 font-semibold uppercase text-[9px] tracking-wider">Patient Name</span>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">{recentBooking.name}</span>
                      </div>
                      <div>
                        <span className="block text-zinc-400 font-semibold uppercase text-[9px] tracking-wider">Service Treatment</span>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">
                          {servicesData.find(s => s.id === recentBooking.serviceId)?.title || recentBooking.serviceId}
                        </span>
                      </div>
                      <div>
                        <span className="block text-zinc-400 font-semibold uppercase text-[9px] tracking-wider">Specialist</span>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">
                          {doctorsData.find(d => d.id === recentBooking.doctorId)?.name || recentBooking.doctorId}
                        </span>
                      </div>
                      <div>
                        <span className="block text-zinc-400 font-semibold uppercase text-[9px] tracking-wider">Schedule Time</span>
                        <span className="font-bold text-zinc-800 dark:text-zinc-200">
                          {recentBooking.date} • {recentBooking.timeSlot}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 rounded-full bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 px-6 py-2.5 font-sans text-xs font-bold text-white transition-all shadow-md"
                >
                  Book Another Session
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                key={`step-${step}`}
              >
                {/* STEP 1: SERVICE CHOICE */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                      Select Elite Dental Service
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500">
                      Choose the specific care protocol you require. If unsure, select General Smile Makeover.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                      {servicesData.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => setSelectedService(service.id)}
                          className={`group cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                            selectedService === service.id
                              ? 'border-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-md'
                              : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30'
                          }`}
                        >
                          <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                              selectedService === service.id
                                ? 'bg-emerald-500 text-white'
                                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                            }`}>
                              {service.title[0]}
                            </div>
                            <div>
                              <h4 className="font-sans text-xs font-bold text-zinc-900 dark:text-white">
                                {service.title}
                              </h4>
                              <p className="text-[10px] text-zinc-400 font-medium">
                                {service.priceEstimate}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: DOCTOR CHOICE */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                      Select Specialist Doctor
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500">
                      We pair you with our leading specialist. You may choose an individual doctor or select any expert.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-1">
                      {doctorsData.map((doctor) => (
                        <div
                          key={doctor.id}
                          onClick={() => setSelectedDoctor(doctor.id)}
                          className={`group cursor-pointer rounded-2xl border p-4 transition-all duration-300 flex items-start space-x-3.5 rtl:space-x-reverse ${
                            selectedDoctor === doctor.id
                              ? 'border-emerald-500 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-md'
                              : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30'
                          }`}
                        >
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="h-10 w-10 rounded-full object-cover border border-white dark:border-zinc-800"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-grow">
                            <h4 className="font-serif text-xs font-bold text-zinc-900 dark:text-white">
                              {doctor.name}
                            </h4>
                            <p className="text-[9px] text-emerald-500 font-semibold uppercase mt-0.5">
                              {doctor.specialization.split('&')[0]}
                            </p>
                            <span className="inline-block mt-1 text-[9px] text-zinc-400 dark:text-zinc-500">
                              {doctor.experience} experience
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: DATE & TIME CHOOSE */}
                {step === 3 && (
                  <div className="space-y-5">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                      Pick Date & Preferred Hour
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500">
                      Our booking slots are highly calibrated. Please select a dynamic date and check available timings.
                    </p>

                    {/* Date Horizontal Selector */}
                    <div className="space-y-2">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Available Days</span>
                      <div className="flex gap-2 overflow-x-auto pb-2 pr-1 scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
                        {availableDates.map((dateObj, i) => {
                          const dateString = dateObj.toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          });
                          const isSelected = selectedDate === dateString;
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedDate(dateString)}
                              className={`flex-shrink-0 flex flex-col items-center justify-center rounded-xl px-4 py-3 border transition-all duration-300 min-w-[70px] ${
                                isSelected
                                  ? 'border-emerald-500 bg-emerald-500 text-white shadow-md'
                                  : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-350 dark:hover:border-zinc-700 text-zinc-600 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-900/40'
                              }`}
                            >
                              <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-emerald-100' : 'text-zinc-400'}`}>
                                {dateObj.toLocaleDateString('en-US', { weekday: 'short' })}
                              </span>
                              <span className="text-sm font-bold mt-1">
                                {dateObj.getDate()}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Grid Selector */}
                    <div className="space-y-2">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Available Timeslots</span>
                      <div className="grid grid-cols-4 gap-2">
                        {TIME_SLOTS.map((slot, i) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2 px-1 text-center rounded-xl border text-[11px] font-semibold transition-all duration-200 ${
                                isSelected
                                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500 font-bold'
                                  : 'border-zinc-150 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: PERSONAL DATA DETAILS */}
                {step === 4 && (
                  <form onSubmit={handleFormSubmit} className="space-y-4" id="apt-user-details-form">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">
                      Confirm Personal Information
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 dark:text-zinc-500">
                      Provide your physical contact coordinates so we can verify and secure your elite booking.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <input
                            type="text"
                            required
                            placeholder="Helena Rothschild"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Email Address
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <input
                            type="email"
                            required
                            placeholder="helena@rothschild.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Phone Number
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 987-1234"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="space-y-1 sm:col-span-2">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                          Special Requests or Dental Notes
                        </label>
                        <div className="relative">
                          <FileText className="absolute left-3.5 top-3.5 h-4 w-4 text-zinc-400" />
                          <textarea
                            placeholder="Mention any dental anxiety, severe pain, or cosmetic goals..."
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-xs text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Wizard Controls */}
        {!isSuccess && (
          <div className="flex items-center justify-between border-t border-zinc-150 dark:border-zinc-800 pt-6 mt-8">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`flex items-center space-x-1.5 font-sans text-xs font-bold transition-all ${
                step === 1
                  ? 'text-zinc-300 dark:text-zinc-800 cursor-not-allowed'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white'
              }`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back</span>
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !selectedService) ||
                  (step === 2 && !selectedDoctor) ||
                  (step === 3 && (!selectedDate || !selectedTime))
                }
                className={`flex items-center space-x-1.5 rounded-full px-6 py-2.5 font-sans text-xs font-bold text-white transition-all shadow-md ${
                  ((step === 1 && !selectedService) ||
                    (step === 2 && !selectedDoctor) ||
                    (step === 3 && (!selectedDate || !selectedTime)))
                    ? 'bg-zinc-200 dark:bg-zinc-850 text-zinc-400 dark:text-zinc-600 cursor-not-allowed shadow-none'
                    : 'bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-700 active:scale-95'
                }`}
              >
                <span>Continue</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                form="apt-user-details-form"
                disabled={!formData.name || !formData.email || !formData.phone}
                className={`flex items-center space-x-1.5 rounded-full px-6 py-2.5 font-sans text-xs font-bold text-white transition-all shadow-md ${
                  (!formData.name || !formData.email || !formData.phone)
                    ? 'bg-zinc-200 dark:bg-zinc-850 text-zinc-400 dark:text-zinc-600 cursor-not-allowed shadow-none'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-95'
                }`}
              >
                <span>Schedule Appointment</span>
                <CheckCircle2 className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* RIGHT COLUMN: Real-Time Schedule Summary & Saved Appointments (5 columns) */}
      <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
        
        {/* Box 1: Dynamic Selection Review summary card */}
        <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 space-y-5 shadow-lg relative overflow-hidden">
          <h4 className="font-serif text-sm font-bold text-zinc-800 dark:text-white uppercase tracking-wider pb-3 border-b border-zinc-200 dark:border-zinc-850">
            Current Booking Details
          </h4>

          <div className="space-y-4">
            {/* Service */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse text-xs">
              <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                <Briefcase className="h-3 w-3" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-zinc-400">Selected Treatment</span>
                {activeService ? (
                  <div className="mt-1">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 text-xs">{activeService.title}</span>
                    <span className="block text-[10px] text-emerald-500 font-semibold mt-0.5">{activeService.priceEstimate} ({activeService.duration})</span>
                  </div>
                ) : (
                  <span className="text-zinc-400 italic">No treatment selected in step 1</span>
                )}
              </div>
            </div>

            {/* Doctor */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse text-xs">
              <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                <User className="h-3 w-3" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-zinc-400">Assigned Specialist</span>
                {activeDoctor ? (
                  <div className="mt-1 flex items-center space-x-2 rtl:space-x-reverse">
                    <img
                      src={activeDoctor.image}
                      alt={activeDoctor.name}
                      className="h-5 w-5 rounded-full object-cover border border-zinc-300 dark:border-zinc-800"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">{activeDoctor.name}</span>
                  </div>
                ) : (
                  <span className="text-zinc-400 italic">No specialist chosen in step 2</span>
                )}
              </div>
            </div>

            {/* Date / Time */}
            <div className="flex items-start space-x-3 rtl:space-x-reverse text-xs">
              <div className="h-6 w-6 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 text-zinc-600 dark:text-zinc-400">
                <CalendarRange className="h-3 w-3" />
              </div>
              <div>
                <span className="block text-[10px] uppercase font-bold text-zinc-400">Schedule Window</span>
                {selectedDate && selectedTime ? (
                  <div className="mt-1 font-bold text-zinc-800 dark:text-zinc-200">
                    {selectedDate} • {selectedTime}
                  </div>
                ) : (
                  <span className="text-zinc-400 italic">No schedule selected in step 3</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Local persistent appointments (Show local storage) */}
        {localBookings.length > 0 && (
          <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 p-6 space-y-4 shadow-lg flex-grow">
            <div className="flex justify-between items-center pb-2 border-b border-zinc-200 dark:border-zinc-850">
              <h4 className="font-serif text-sm font-bold text-zinc-800 dark:text-white uppercase tracking-wider">
                My Active Bookings
              </h4>
              <span className="text-[10px] bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 rounded-full px-2 py-0.5 font-bold">
                {localBookings.length}
              </span>
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {localBookings.map((b) => {
                const bService = servicesData.find(s => s.id === b.serviceId);
                const bDoctor = doctorsData.find(d => d.id === b.doctorId);
                return (
                  <div
                    key={b.id}
                    className="group bg-white dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-150 dark:border-zinc-850 flex items-start justify-between space-x-3 rtl:space-x-reverse"
                  >
                    <div className="space-y-1.5 text-xs flex-grow">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="font-bold text-zinc-800 dark:text-white">{b.name}</span>
                        <span className="text-[8px] bg-emerald-500/15 text-emerald-500 rounded px-1.5 font-bold tracking-wide uppercase">
                          {b.status}
                        </span>
                      </div>
                      <p className="font-medium text-zinc-500 dark:text-zinc-400 text-[11px]">
                        {bService?.title || 'General Treatment'} with {bDoctor?.name || 'Assigned Expert'}
                      </p>
                      <div className="flex items-center space-x-3 rtl:space-x-reverse text-[10px] text-zinc-400 font-semibold">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{b.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{b.timeSlot}</span>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteBooking(b.id)}
                      className="text-zinc-300 dark:text-zinc-700 hover:text-red-500 dark:hover:text-red-500 p-1.5 rounded-lg transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
                      title="Cancel Booking"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Informational reassurance notice */}
        <div className="bg-zinc-100/50 dark:bg-zinc-900/20 p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 flex items-start space-x-3 rtl:space-x-reverse text-[11px] text-zinc-500 dark:text-zinc-500">
          <ShieldAlert className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            By booking through this luxury portal, you gain priority VIP status. If you must reschedule or cancel your session, please contact the clinic operations team at least 24 hours prior.
          </p>
        </div>
      </div>

    </div>
  );
}
