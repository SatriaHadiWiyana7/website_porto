import { motion } from 'framer-motion';
import profileImg from '../assets/Casual.avif'; 

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center bg-white min-h-[90vh]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20 opacity-40 overflow-hidden"></div>
      
      {/* --- BAGIAN TEKS (KIRI) --- */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center lg:text-left z-10 lg:col-span-7"
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-1.5 px-4 rounded-full bg-sky-50 text-[#0ea5e9] font-mono text-xs font-bold mb-6 tracking-widest border border-sky-100 shadow-sm"
        >
          MACHINE LEARNING & FULL-STACK DEV
        </motion.span>
        
        <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
          Solusi AI & Web <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Terintegrasi.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Merancang ekosistem perangkat lunak cerdas secara end-to-end. Memadukan arsitektur AI (NLP & Computer Vision) dengan pengembangan web untuk menghasilkan sistem yang scalable, efisien, dan memprioritaskan privasi data melalui inferensi model lokal.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a 
            href="mailto:satriahadiwiyana7@gmail.com" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-[#0ea5e9] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-sky-500/30 hover:-translate-y-1 transition-all duration-300 text-center"
          >
            Jadwalkan Sesi Konsultasi
          </a>
          {/* Tombol Unduh CV diperbaiki dengan border-2 dan bg-white */}
          <a 
            href="/CV_Satria_Hadi_Wiyana.pdf" 
            target="_blank" 
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-sky-50 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            Unduh CV &rarr;
          </a>
        </div>
      </motion.div>
      
      {/* --- BAGIAN FOTO (KANAN) --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex justify-center lg:justify-end relative z-10 lg:col-span-5 w-full mt-10 lg:mt-0 px-4 md:px-8"
      >
        <motion.div 
          animate={{ y: [-12, 12, -12] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] group cursor-pointer"
        >
          
          {/* Lingkaran Berputar Putus-putus */}
          <div className="absolute -inset-4 md:-inset-8 border-[3px] border-dashed border-slate-200 group-hover:border-[#0ea5e9] rounded-full animate-[spin_25s_linear_infinite] -z-10 transition-colors duration-500"></div>
          
          {/* Wadah Foto Utama */}
          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-[6px] border-white group-hover:border-[#0ea5e9] group-hover:shadow-[0_0_40px_rgba(14,165,233,0.3)] transition-all duration-500 bg-slate-50 relative">
            
            <img 
              src={profileImg} 
              alt="Satria Hadi Wiyana" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 relative z-0" 
            />
            
            {/* Overlay Tint Biru pada foto (hanya muncul saat di-hover) */}
            <div className="absolute inset-0 bg-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>

            {/* Bayangan gradasi bawah (statis) */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-900/10 to-transparent z-20 pointer-events-none"></div>
          </div>

        </motion.div>
      </motion.div>

    </section>
  );
}