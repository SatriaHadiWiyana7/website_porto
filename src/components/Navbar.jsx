import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const t = content[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.services, href: '#services' },
    { name: t.portfolio, href: '#projects' },
    { name: t.workflow, href: '#process' },
    { name: t.reviews, href: '#testimonial' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-slate-900 tracking-tighter">SHW<span className="text-[#0ea5e9]">.</span></a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} className="text-sm font-bold text-slate-600 hover:text-[#0ea5e9] transition-colors">{link.name}</a>
          ))}
        </div>

        {/* Tombol Bahasa (Sekarang 100% responsif terhadap klik) */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
            <button onClick={() => setLang('id')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${lang === 'id' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>ID</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${lang === 'en' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>EN</button>
          </div>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-600 hover:text-[#0ea5e9]">{link.name}</a>
            ))}
            <div className="h-px bg-slate-100 my-2"></div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-600">Language</span>
              <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
                <button onClick={() => setLang('id')} className={`px-4 py-1.5 text-xs font-bold rounded-full ${lang === 'id' ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>ID</button>
                <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-xs font-bold rounded-full ${lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-400'}`}>EN</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}