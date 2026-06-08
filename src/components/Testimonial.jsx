import { Star, Quote } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

export default function Testimonial() {
  const { lang } = useLang();
  const t = content[lang];

  const duplicatedTestimonials = [...t.testimonials, ...t.testimonials, ...t.testimonials];

  return (
    <section id="testimonial" className="py-32 bg-white border-b border-slate-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#0ea5e9] font-mono text-sm font-bold tracking-widest uppercase">
          {t.testimonialBadge}
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          {t.testimonialTitle}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative w-full flex overflow-hidden py-8 pause-on-hover px-4">
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 w-max animate-scroll-left">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="group w-[300px] md:w-[400px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-default relative"
            >
              <Quote size={40} className="text-slate-200 absolute top-6 right-6 opacity-50 group-hover:text-sky-100 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow italic relative z-10">
                "{item.text}"
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover .animate-scroll-left {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}