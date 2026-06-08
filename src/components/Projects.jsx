import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const { lang } = useLang();
  const t = content[lang];

  const duplicatedProjects = [...t.projects, ...t.projects, ...t.projects, ...t.projects];

  return (
    <section id="projects" className="py-32 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#0ea5e9] font-mono text-sm font-bold tracking-widest uppercase">
          {t.projectsBadge}
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          {t.projectsTitle}
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
          {t.projectsDesc}
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative w-full flex overflow-hidden py-8 pause-on-hover px-4">
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-6 w-max animate-infinite-scroll">
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="group w-[300px] md:w-[360px] shrink-0 bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-[#0ea5e9] shadow-sm hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-slate-900 leading-snug group-hover:text-[#0ea5e9] transition-colors duration-300">
                  {project.title}
                </h3>
                <a href={project.link} className="text-slate-400 group-hover:text-[#0ea5e9] transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-slate-500 mb-8 leading-relaxed text-sm flex-grow">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-mono rounded-md font-medium group-hover:bg-sky-50 group-hover:text-sky-700 group-hover:border-sky-100 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          will-change: transform;
        }
        .pause-on-hover:hover .animate-infinite-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}