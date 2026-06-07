import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

export default function Preloader({ onComplete }) {
  const { lang } = useLang();
  const anim = content[lang].mottoAnim || content[lang].heroAnim; 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === anim.dynamicWords.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 1200); 
          return prev;
        }
        return prev + 1;
      });
    }, 1800); 

    return () => clearInterval(interval);
  }, [anim.dynamicWords.length, onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-6"
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }} 
    >
      {/* Font diubah menjadi font-black & tracking-tighter untuk kesan tebal dan modern */}
      <div className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-slate-900 text-center leading-tight">
        
        <div className="flex flex-wrap justify-center items-center mb-1 md:mb-3">
          {/* Teks statis kini menggunakan gradasi warna (Gradient) */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 mr-3 md:mr-4 pb-2">
            {anim.coloredStart}
          </span>
          
          {/* overflow-hidden telah dihapus agar teks bebas menjulur tanpa terpotong */}
          <span className="relative inline-block text-left h-[1.2em] w-[290px] md:w-[430px] lg:w-[550px]">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={index}
                // Animasi diubah menggunakan pixel (y: 40) agar lebih rapi saat slide
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 whitespace-nowrap pb-2"
              >
                {anim.dynamicWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <span className="block text-slate-800">
          {anim.fixedEnd}
        </span>
        
      </div>
    </motion.div>
  );
}