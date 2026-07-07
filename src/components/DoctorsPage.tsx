import { doctorsData } from '../data/dentalData';
import { PageId } from '../types';
import { Award, GraduationCap, Sparkles, Star, CalendarDays, ShieldCheck } from 'lucide-react';

interface DoctorsPageProps {
  setActivePage: (page: PageId) => void;
  setSelectedDoctorId?: (id: string) => void;
}

export default function DoctorsPage({ setActivePage, setSelectedDoctorId }: DoctorsPageProps) {
  
  const handleBookDoctor = (doctorId: string) => {
    if (setSelectedDoctorId) {
      setSelectedDoctorId(doctorId);
    }
    setActivePage('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-12 md:py-20 transition-colors duration-300" id="doctors-page">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-sans text-[11px] font-bold text-emerald-500 uppercase tracking-widest">Medical Board</span>
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Our Elite Specialists.
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 mx-auto mt-4" />
          <p className="font-sans text-xs md:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium">
            Meet the world-class innovators and board-accredited surgeons committed to crafting perfect dental health and unparalleled smile geometry.
          </p>
        </div>

        {/* Doctors Grid (4 Doctors) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/55 dark:border-zinc-800/40 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm hover:shadow-lg transition-all duration-300"
              id={`doctor-card-${doc.id}`}
            >
              {/* Image Block */}
              <div className="relative w-full md:w-44 lg:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 flex-shrink-0 bg-zinc-200">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Rating overlay badge */}
                <div className="absolute top-3 left-3 bg-zinc-900/80 text-white font-sans font-bold text-[10px] px-2.5 py-1 rounded-full border border-white/10 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                  <span>{doc.rating}</span>
                </div>
              </div>

              {/* Bio details block */}
              <div className="flex-grow space-y-4">
                <div>
                  <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest block">
                    {doc.specialization}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-black text-zinc-900 dark:text-white mt-1">
                    {doc.name}
                  </h3>
                  <span className="inline-block bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-full text-[10px] font-bold mt-1.5 uppercase tracking-wide">
                    {doc.role} ({doc.experience} exp)
                  </span>
                </div>

                <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                  {doc.bio}
                </p>

                {/* Academic credentials */}
                <div className="space-y-2 border-t border-b border-zinc-200 dark:border-zinc-900 py-3.5 text-xs">
                  <div className="flex items-start space-x-2 rtl:space-x-reverse text-zinc-500 dark:text-zinc-400">
                    <GraduationCap className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-[9px] text-zinc-400 uppercase tracking-wider">Education</span>
                      <ul className="list-disc list-inside space-y-0.5 mt-1 font-medium text-[11px]">
                        {doc.education.slice(0, 2).map((edu, i) => (
                          <li key={i} className="truncate max-w-xs">{edu.split(' - ')[0]}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 rtl:space-x-reverse text-zinc-500 dark:text-zinc-400">
                    <ShieldCheck className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-[9px] text-zinc-400 uppercase tracking-wider">Board Accreditation</span>
                      <p className="font-semibold text-zinc-700 dark:text-zinc-300 mt-1 text-[11px] truncate max-w-xs">
                        {doc.credentials[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct scheduling CTA */}
                <button
                  onClick={() => handleBookDoctor(doc.id)}
                  className="w-full rounded-xl bg-zinc-200/50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/20 hover:text-emerald-500 dark:hover:text-emerald-400 dark:hover:border-emerald-500/20 py-2.5 font-sans text-xs font-bold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <CalendarDays className="h-4 w-4" />
                  <span>Request session with {doc.name.split(' ')[1]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
