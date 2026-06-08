import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { TerminalSquare, Layers, Bot } from 'lucide-react';

export default function Services() {
  const { lang } = useLang();
  const t = content[lang];

  const getIcon = (index) => {
    if (index === 0) return <Bot size={32} className="text-[#0ea5e9]" />;
    if (index === 1) return <Layers size={32} className="text-[#0ea5e9]" />;
    return <TerminalSquare size={32} className="text-[#0ea5e9]" />;
  };

  return (
    <section id="services" className="py-32 px-6 max-w-5xl mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-16"
      >
        <span className="text-[#0ea5e9] font-mono text-sm font-bold mb-3 tracking-widest uppercase">
          {t.nav.services}
        </span>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          {t.servicesTitle}
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-slate-50 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0ea5e9]/10 transition-all duration-300 border border-slate-100"
          >
            <div className="mb-6 p-4 bg-white rounded-2xl shadow-sm inline-block group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              {getIcon(index)}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">
              {service.title}
            </h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}