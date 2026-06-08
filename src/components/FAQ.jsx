import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';

export default function FAQ() {
  const { lang } = useLang();
  const t = content[lang];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4">{t.faqTitle}</h2>
          <p className="text-slate-500">{t.faqDesc}</p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, i) => (
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