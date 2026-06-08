import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; // Hanya Mail yang kita ambil dari lucide-react
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

// --- KUMPULAN SVG CUSTOM UNTUK BRAND (KARENA DIHAPUS DARI LUCIDE) ---

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const MediumIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none" className={className}>
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

export default function Footer() {
  const { lang } = useLang();
  // Mengambil teks footer berdasarkan bahasa (fallback ke objek kosong jika belum ada)
  const t = content[lang].footer || { desc: "", copyright: "" };

  // Daftar tautan sosial media Anda (Silakan ganti URL-nya dengan link asli Anda)
  const socialLinks = [
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:satriahadiwiyana7@gmail.com' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={20} />, url: 'https://linkedin.com/in/satriahadiwiyana' },
    { name: 'GitHub', icon: <GithubIcon size={20} />, url: 'https://github.com/SatriaHadiWiyana7' },
    { name: 'Medium', icon: <MediumIcon size={20} />, url: 'https://medium.com/@satriahadiwiyana7' },
    { name: 'Instagram', icon: <InstagramIcon size={20} />, url: 'https://www.instagram.com/wsatriahadi?igsh=cDdvcGUyb3hxb242' }
  ];

  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-800/50 relative overflow-hidden">
      
      {/* Background Ornaments (Konsisten dengan Booking Section) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#0ea5e9]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Identitas / Logo Teks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-black text-white tracking-tighter mb-4">
            SATRIA HADI WIYANA<span className="text-[#0ea5e9]">.</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            {t.desc}
          </p>
        </motion.div>

        {/* Deretan Icon Sosial Media */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4 sm:gap-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0ea5e9] hover:text-white hover:border-[#0ea5e9] hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </span>
            </a>
          ))}
        </motion.div>

        {/* Garis Pemisah & Hak Cipta */}
        <div className="w-full border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs sm:text-sm font-medium text-center sm:text-left">
            {t.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Built with React & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}