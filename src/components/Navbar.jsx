import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { lang, toggleLang } = useLang();

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-white/80 border-b border-slate-100"
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="font-sans font-black text-slate-900 text-xl tracking-tighter">
          SHW.
        </span>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang} 
            className="font-mono text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-[#0ea5e9] hover:text-white transition-colors shadow-sm"
          >
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}