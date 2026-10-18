import { useState } from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Parallax } from './Parallax';

export default function FAQ() {
  const { lang } = useLang();
  const t = content[lang];
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="support-section faq-section" aria-labelledby="faq-title">
      <div className="section-shell faq-layout">
        <Parallax speed={20} className="faq-intro">
          <span className="eyebrow"><span className="section-dot" />FAQ</span>
          <h2 id="faq-title" className="section-heading">{t.faqTitle}</h2>
          <p>{t.faqDesc}</p>
          <a className="service-link" href="#booking">{lang === 'id' ? 'Mari berbincang' : 'Let’s talk'}<ArrowUpRight size={17} /></a>
        </Parallax>
        <Parallax speed={10} className="faq-list">
          {t.faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'is-open' : ''}`}>
              <h3>
                <button type="button" id={`faq-question-${index}`} aria-expanded={openIndex === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                  <span className="faq-number">0{index + 1}</span><span>{faq.q}</span><Plus size={19} aria-hidden="true" />
                </button>
              </h3>
              <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={openIndex !== index} className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </Parallax>
      </div>
    </section>
  );
}
