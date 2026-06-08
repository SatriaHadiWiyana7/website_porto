import { motion } from 'framer-motion';

export default function Stats() {
  const stats = [
    { 
      value: "3+", 
      label: "Arsitektur AI", 
      desc: "Implementasi VLM, arsitektur RAG, dan model Reinforcement Learning dalam proyek terapan." 
    },
    { 
      value: "100%", 
      label: "Fokus Stabilitas", 
      desc: "Memprioritaskan integritas data dengan pembaruan dinamis tanpa manipulasi berisiko." 
    },
    { 
      value: "5+", 
      label: "Tech Stack", 
      desc: "Penguasaan mendalam pada ekosistem Python, React, Laravel, dan integrasi API lokal." 
    },
    { 
      value: "100+", 
      label: "Jam Training", 
      desc: "Dedikasi waktu dalam inferensi model LLM lokal dan pengujian antarmuka secara otomatis." 
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Stats ala Referensi */}
        <div className="text-center mb-16">
          <span className="text-slate-400 font-mono text-xs font-bold tracking-widest uppercase">
            Kinerja Terukur
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            Dampak Nyata yang Tercipta.
          </h2>
        </div>

        {/* Grid 4 Kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#0ea5e9]/50 transition-all duration-300 flex flex-col justify-start text-left group"
            >
              <h3 className="text-5xl md:text-6xl font-black text-[#0ea5e9] mb-6 tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-slate-900 font-bold text-lg mb-3">
                {stat.label}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}