import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Calendar, Mail, User, MessageSquare, CheckCircle2, AlertCircle, Clock, Video, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

export default function Booking() {
  const { lang } = useLang();
  const t = content[lang].booking;
  
  const form = useRef();
  const [status, setStatus] = useState('idle');
  
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1));
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNamesId = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const displayMonth = lang === 'id' ? monthNamesId[month] : monthNamesEn[month];

  const weekdaysId = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const weekdaysEn = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const displayWeekdays = lang === 'id' ? weekdaysId : weekdaysEn;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const firstDayIndex = (() => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; 
  })();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateSelect = (day) => {
    setSelectedDate(new Date(year, month, day));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert(lang === 'id' ? "Silakan pilih tanggal pada kalender terlebih dahulu!" : "Please select a date from the calendar first!");
      return;
    }
    setStatus('loading');

    emailjs.sendForm(
      'YOUR_SERVICE_ID',     
      'YOUR_TEMPLATE_ID',    
      form.current, 
      'YOUR_PUBLIC_KEY'      
    )
    .then(() => {
      setStatus('success');
      form.current.reset();
      setSelectedDate(null);
      setTimeout(() => setStatus('idle'), 5000);
    })
    .catch((error) => {
      console.log(error.text);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <section id="booking" className="py-24 px-6 bg-slate-50 text-slate-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-sky-100 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-purple-100 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <span className="text-[#0ea5e9] font-mono text-sm font-bold tracking-widest uppercase mb-2 block">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            {t.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
            {t.desc}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden grid grid-cols-1 md:grid-cols-12"
        >
          
          <div className="md:col-span-5 p-8 md:p-10 bg-slate-50/60 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
            <div className="space-y-6">
              
              <div className="flex flex-col border-b border-slate-200/60 pb-5 mb-2">
                <p className="text-xs text-[#0ea5e9] font-bold tracking-widest uppercase mb-1.5">Satria Hadi Wiyana</p>
                <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight leading-tight">
                  AI/ML ENGINEER  &amp; FULL-STACK DEVELOPER
                </h4>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Discovery Session
                </h3>
                
                <div className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                  <Clock size={18} className="text-slate-500" />
                  <span>30 min</span>
                </div>
                
                <div className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <Video size={18} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <span>Web conferencing details provided upon confirmation.</span>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed pt-2">
                Selamat datang. Sebagai Machine Learning Engineer &amp; Full-Stack Developer, saya berfokus pada perancangan sistem cerdas end-to-end dengan spesialisasi di bidang NLP, Computer Vision, dan inferensi model lokal untuk menjamin privasi data serta efisiensi biaya. Silakan tentukan jadwal diskusi yang tersedia untuk mengeksplorasi kebutuhan arsitektur AI, optimalisasi sistem, atau skalabilitas produk Anda.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-4 text-xs text-slate-400 pt-8">
              <span className="hover:text-slate-600 cursor-pointer transition-colors">Cookie settings</span>
              <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            </div>
          </div>

          <div className="md:col-span-7 p-8 md:p-10 bg-white">
            <form ref={form} onSubmit={sendEmail} className="space-y-8 flex flex-col h-full justify-between">
              
              <div className="space-y-8">
                
                {/* 1. KALENDER INTERAKTIF (Diperbarui) */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                    <Calendar size={14} className="text-sky-500" /> {lang === 'id' ? 'Pilih Tanggal' : 'Select a Date'}
                  </label>
                  
                  {/* Diubah menjadi w-full dengan padding yang lebih luas (p-6) */}
                  <div className="border border-slate-200/80 rounded-3xl p-6 md:p-8 bg-white w-full shadow-sm">
                    <div className="flex items-center justify-between mb-6 px-2">
                      <button type="button" onClick={handlePrevMonth} className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
                        <ChevronLeft size={18} />
                      </button>
                      <span className="text-base font-bold text-slate-800">
                        {displayMonth} {year}
                      </span>
                      <button type="button" onClick={handleNextMonth} className="p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-slate-400 mb-4">
                      {displayWeekdays.map((day) => (
                        <div key={day} className="py-1">{day}</div>
                      ))}
                    </div>

                    {/* Jarak antar baris diperlebar (gap-y-3) */}
                    <div className="grid grid-cols-7 gap-y-3 gap-x-2 text-center">
                      {Array(firstDayIndex).fill(null).map((_, idx) => (
                        <div key={`empty-${idx}`} className="w-10 h-10 md:w-12 md:h-12"></div>
                      ))}
                      
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const isSelected = selectedDate && 
                                           selectedDate.getDate() === day && 
                                           selectedDate.getMonth() === month && 
                                           selectedDate.getFullYear() === year;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => handleDateSelect(day)}
                            // Lingkaran tombol tanggal diperbesar menjadi w-10 h-10 (Mobile) / w-12 h-12 (Desktop)
                            className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full text-sm font-medium flex items-center justify-center transition-all ${
                              isSelected 
                                ? 'bg-[#0ea5e9] text-white shadow-lg shadow-sky-500/30 font-bold scale-105' 
                                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                      <Globe size={14} />
                      <span>Time zone: Indochina Time (WIB)</span>
                    </div>
                  </div>
                </div>

                <input 
                  type="hidden" 
                  name="booking_date" 
                  value={selectedDate ? `${selectedDate.getDate()} ${lang === 'id' ? monthNamesId[selectedDate.getMonth()] : monthNamesEn[selectedDate.getMonth()]} ${selectedDate.getFullYear()}` : ''} 
                  required
                />

                {/* 2. FIELD DATA USER */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                      <User size={14} className="text-slate-400" /> {t.formName}
                    </label>
                    <input 
                      type="text" 
                      name="user_name" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                      <Mail size={14} className="text-slate-400" /> {t.formEmail}
                    </label>
                    <input 
                      type="email" 
                      name="user_email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                    />
                  </div>
                </div>

                {/* 3. INPUT DESKRIPSI */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                    <MessageSquare size={14} className="text-slate-400" /> {t.formMessage}
                  </label>
                  <textarea 
                    name="message" 
                    rows="3" 
                    required
                    placeholder="Deskripsikan kebutuhan AI / Web Anda di sini..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 text-sm placeholder-slate-400 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="flex-1">
                  {status === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-600 text-sm font-bold flex items-center gap-2">
                      <CheckCircle2 size={18} /> {t.successMsg}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-rose-600 text-sm font-bold flex items-center gap-2">
                      <AlertCircle size={18} /> {t.errorMsg}
                    </motion.p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="px-8 py-3.5 bg-[#0ea5e9] text-white rounded-full text-sm font-bold shadow-lg shadow-sky-500/20 hover:bg-sky-400 hover:shadow-sky-500/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 cursor-pointer"
                  >
                    {status === 'loading' ? t.btnLoading : 'Kirim Jadwal'}
                  </button>
                </div>

              </div>

            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}