import { Star, Quote } from 'lucide-react';

export default function Testimonial() {
  // Data testimonial yang disesuaikan dengan rekam jejak teknis Anda
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Project Manager",
      text: "Sistem ekstraksi dokumen (M-RAG) yang dibangun benar-benar revolusioner. Pendekatan tanpa OCR yang diintegrasikan dengan model lokal membuat proses kami jauh lebih cepat dan aman.",
      rating: 5
    },
    {
      name: "Rina Amelia",
      role: "Admin Sistem Terpadu",
      text: "Dashboard manajemen kami sekarang sangat stabil. Berkat logika pembaruan rekam jejak yang dinamis, tidak ada lagi data yang hilang dan visualisasi metrik selalu akurat 100%.",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      role: "Pimpinan Redaksi",
      text: "Sebagai mantan Webmaster kami, ia tahu persis bagaimana menjaga portal berita tetap hidup, aman, dan cepat diakses meskipun traffic sedang membludak.",
      rating: 5
    },
    {
      name: "Diana Wijaya",
      role: "QA Lead Engineer",
      text: "Agen pengujian UI otomatis berbasis Vision-Language Models yang dibuatnya sangat out-of-the-box. Otomasi eksekusi ADB ini menghemat ratusan jam kerja tim QA kami.",
      rating: 5
    }
  ];

  // Menduplikasi array agar animasi berjalan tanpa henti (infinite loop)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-32 bg-white border-b border-slate-100 overflow-hidden relative">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#0ea5e9] font-mono text-sm font-bold tracking-widest uppercase">
          Ulasan Klien & Rekan
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          Dampak yang Telah Diberikan
        </h2>
      </div>

      {/* Area Korsel Berputar */}
      <div className="max-w-7xl mx-auto relative w-full flex overflow-hidden py-8 pause-on-hover px-4">
        
        {/* Efek Gradasi (Vignette) di Kanan-Kiri Layar */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* 
          Container yang bergerak.
          Animasi menggunakan CSS murni (animate-scroll-left)
        */}
        <div className="flex gap-6 w-max animate-scroll-left">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="group w-[300px] md:w-[400px] shrink-0 bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-[#0ea5e9]/30 hover:bg-white hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-default relative"
            >
              {/* Ikon Kutipan Air */}
              <Quote size={40} className="text-slate-200 absolute top-6 right-6 opacity-50 group-hover:text-sky-100 transition-colors duration-300" />
              
              {/* Bintang Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              
              {/* Teks Testimonial */}
              <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow italic relative z-10">
                "{item.text}"
              </p>
              
              {/* Profil Klien */}
              <div className="mt-auto">
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animasi Mulus & Fitur Berhenti saat Hover */}
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