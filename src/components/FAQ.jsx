import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "Apakah Anda menerima proyek pembuatan web dari nol?",
      a: "Ya, saya berpengalaman membangun sistem full-stack mulai dari perancangan database (MySQL), pengembangan backend (Laravel/Python), hingga pembuatan antarmuka frontend yang modern (React/Tailwind CSS)."
    },
    {
      q: "Bagaimana cara kerja integrasi AI Lokal (On-Premise)?",
      a: "Saya menggunakan model open-source mutakhir seperti Llama 3.2 Vision atau Qwen-VL yang di-deploy langsung di komputer/server Anda (menggunakan Cloudflare Tunnels atau set-up lokal). Keuntungannya: privasi data 100% terjaga karena tidak dikirim ke pihak ketiga, dan Anda tidak perlu membayar biaya langganan API bulanan."
    },
    {
      q: "Apakah Anda bisa membuat sistem AI untuk membaca dokumen hukum atau internal perusahaan?",
      a: "Sangat bisa. Saya memiliki spesialisasi dalam membangun sistem Multimodal Retrieval-Augmented Generation (M-RAG). Sistem ini menggunakan arsitektur Parent-Child Retriever yang dapat mengekstrak dan menjawab pertanyaan dari dokumen PDF/gambar secara presisi tanpa memerlukan proses OCR tradisional."
    },
    {
      q: "Saya butuh bot untuk otomatisasi aplikasi Android atau web scraping, apakah bisa?",
      a: "Bisa. Saya merancang agen otonom menggunakan kapabilitas Vision-Language Models dan tool seperti ADB (Android Debug Bridge). Agen ini dapat membaca elemen layar dan melakukan navigasi, pengujian fungsionalitas, hingga ekstraksi data secara otomatis layaknya manusia (Synthetic User Testing)."
    },
    {
      q: "Apakah Anda melayani perbaikan (maintenance) pada sistem web yang sudah ada?",
      a: "Tentu. Berbekal pengalaman sebagai Webmaster, saya terbiasa melakukan pemeliharaan, sinkronisasi database, hingga optimasi fitur pada sistem informasi yang sudah berjalan tanpa mengganggu stabilitas data yang ada."
    },
    {
      q: "Berapa lama estimasi waktu pengerjaan sebuah proyek?",
      a: "Durasi pengerjaan sangat bergantung pada kompleksitas fitur, integrasi AI yang dibutuhkan, dan ketersediaan data. Setelah diskusi awal dan pemetaan arsitektur, saya akan memberikan estimasi waktu (timeline) yang terstruktur dan transparan."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-slate-500">Beberapa hal teknis dan operasional yang sering ditanyakan oleh klien.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown className={`text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-slate-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}