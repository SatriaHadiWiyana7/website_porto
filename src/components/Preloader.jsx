import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  // Daftar kata dinamis yang merepresentasikan ekosistem keahlian Anda
  const dynamicWords = [
    "AI Models",
    "Web Systems",
    "NLP Features",
    "Local LLMs",
    "Vision Agents"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Jika kita sedang berada di kata TERAKHIR
    if (index === dynamicWords.length - 1) {
      // Tunggu selama 800ms (durasi baca yang sama dengan kata lainnya), 
      // lalu langsung selesaikan preloader tanpa mengosongkan kata
      const timeout = setTimeout(() => {
        onComplete();
      }, 800); 
      return () => clearTimeout(timeout);
    }
    
    // Kecepatan pergantian kata sebelum kata terakhir
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 800);
    
    return () => clearTimeout(timeout);
  }, [index, onComplete]); // Menghapus dynamicWords.length dari dependency untuk mencegah peringatan

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white px-6"
    >
      {/* CSS Khusus untuk Efek Teks Gradasi Bergerak (Berkilau) */}
      <style>{`
        @keyframes shimmer-text {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-shimmer-text {
          animation: shimmer-text 3s linear infinite;
        }
      `}</style>

      <div className="text-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.3] md:leading-[1.2]">
          
          <span className="bg-[linear-gradient(to_right,#0ea5e9,#8b5cf6,#ec4899,#0ea5e9)] bg-[length:200%_auto] animate-shimmer-text text-transparent bg-clip-text">
            Optimizing
          </span>
          {' '}
          
          <span className="inline-flex overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-block whitespace-nowrap text-slate-900"
              >
                {dynamicWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>,
          
          <br />
          
          <span className="text-slate-900">without compromise.</span>
        </h1>
      </div>
    </motion.div>
  );
}