import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-12 flex items-center gap-4"
      >
        <span className="w-8 h-[1px] bg-emerald-500 hidden sm:block"></span>
        {t.projectsTitle}
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group flex flex-col bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h4>
              <a href={project.link} className="text-slate-400 hover:text-emerald-500 transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((techItem, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded">
                  {techItem}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}