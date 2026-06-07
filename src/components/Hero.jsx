import { motion } from 'framer-motion';
import { Code, User, Mail, BookOpen } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

export default function Hero() {
  const { lang } = useLang();
  const t = content[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-24 bg-white">
      <div className="max-w-3xl flex flex-col items-center">
        
        {/* --- FOTO PROFIL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-slate-100 shadow-2xl"
        >
          <img 
            src="/profile.jpg" 
            alt="Foto Profil" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </motion.div>

        {/* --- TEKS PROFIL --- */}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#0ea5e9] font-mono mb-4 text-sm font-bold">
          {t.role}
        </motion.p>
        
        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl font-black font-sans text-slate-900 mb-6 tracking-tight">
          {t.greeting}
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-slate-600 mb-10 leading-relaxed text-lg">
          {t.description}
        </motion.p>

        {/* --- TOMBOL & SOSIAL MEDIA --- */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/CV_Satria_Hadi_Wiyana.pdf" 
            target="_blank"
            className="px-8 py-3 rounded-full bg-slate-900 text-white font-medium hover:-translate-y-1 transition-transform duration-300 shadow-lg"
          >
            {t.downloadCV}
          </a>

          <div className="flex items-center gap-5">
            <SocialIcon href="https://instagram.com/satriahadiwiyana" icon={<User size={24} />} />
            <SocialIcon href="https://medium.com/@satriahadiwiyana" icon={<BookOpen size={24} />} />
            <SocialIcon href="mailto:email@anda.com" icon={<Mail size={24} />} />
            <SocialIcon href="https://github.com/satriahadiwiyana" icon={<Code size={24} />} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0ea5e9] transition-all duration-300 hover:-translate-y-1 transform">
      {icon}
    </a>
  );
}