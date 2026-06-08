import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Diskusi & Pemetaan Data",
      desc: "Sesi konsultasi untuk memahami visi proyek Anda, merancang arsitektur sistem yang presisi, serta mengidentifikasi kebutuhan infrastruktur dan data sejak awal."
    },
    {
      num: "02",
      title: "EDA & Integrasi Model",
      desc: "Fase eksekusi yang mencakup Exploratory Data Analysis (EDA), optimasi model AI lokal, hingga penggabungan logika backend dan antarmuka web yang mulus."
    },
    {
      num: "03",
      title: "Pengujian & Deployment",
      desc: "Validasi fungsionalitas menyeluruh menggunakan automasi cerdas (termasuk skrip ADB), diakhiri dengan proses deployment ke environment produksi secara stabil."
    }
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-20">
        <span className="text-[#0ea5e9] font-mono text-sm font-bold tracking-widest uppercase">Workflow</span>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4 tracking-tight">
          Bagaimana Saya Bekerja
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Garis penghubung di belakang angka */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-100 z-0"></div>

        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group cursor-default"
          >
            <div className="w-24 h-24 bg-white border-8 border-slate-50 text-slate-900 group-hover:border-sky-50 group-hover:text-[#0ea5e9] rounded-full flex items-center justify-center text-3xl font-black mb-8 shadow-sm transition-all duration-300 transform group-hover:scale-105">
              {step.num}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#0ea5e9] transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}