import { useLang } from '../context/LangContext';
import { Parallax } from './Parallax';
import TextReveal from './TextReveal';
import '../styles/work-sections.css';

const services = {
  id: [
    { title: 'Integrasi AI lokal', description: 'Menerapkan NLP, Computer Vision, dan Retrieval-Augmented Generation untuk analisis serta ekstraksi dokumen. Model dijalankan pada infrastruktur lokal dengan mempertimbangkan privasi data dan efisiensi inferensi.' },
    { title: 'Pengembangan aplikasi web', description: 'Membangun aplikasi web dari arsitektur data dan integrasi API sampai antarmuka yang responsif. Saya menggunakan ekosistem React, Laravel, dan Python sesuai kebutuhan proyek.' },
    { title: 'Automasi dan pengujian', description: 'Mengembangkan agen AI dan skrip untuk pekerjaan yang berulang, termasuk pengumpulan data serta pengujian antarmuka menggunakan Vision-Language Models.' },
  ],
  en: [
    { title: 'Local AI integration', description: 'Applying NLP, Computer Vision, and Retrieval-Augmented Generation to document analysis and extraction. Models run on local infrastructure with attention to data privacy and inference efficiency.' },
    { title: 'Web application development', description: 'Building web applications from data architecture and API integration to responsive interfaces. I work with React, Laravel, and Python according to each project’s needs.' },
    { title: 'Automation and testing', description: 'Developing AI agents and scripts for repetitive work, including data collection and interface testing with Vision-Language Models.' },
  ],
};

export default function Services() {
  const { lang } = useLang();
  return (
    <section id="services" className="support-section services-section" aria-labelledby="services-title">
      <div className="section-shell">
        <Parallax speed={30} horizontal={-12} rotateY={3} className="editorial-heading work-section-heading">
          <h2 id="services-title"><TextReveal mode="mask">{lang === 'id' ? 'Keahlian' : 'Expertise'}</TextReveal></h2>
          <p>{lang === 'id' ? 'AI, aplikasi web, dan pekerjaan di antaranya.' : 'AI, web applications, and the work in between.'}</p>
        </Parallax>
        <div className="expertise-list">
          {services[lang].map((service, index) => (
            <article key={service.title} className="expertise-entry">
              <Parallax speed={-24} horizontal={index % 2 ? -12 : 12} rotateX={5} rotateY={index % 2 ? -7 : 7} className="expertise-rule" aria-hidden="true"><span /></Parallax>
              <Parallax speed={52 + index * 6} horizontal={-10} rotateX={8} rotateY={-6} className="expertise-number" aria-hidden="true">
                <span>0{index + 1}</span>
              </Parallax>
              <Parallax speed={30 + index * 5} horizontal={index % 2 ? 12 : -12} rotateY={index % 2 ? -3 : 3} rotateX={2} scale={0.018} className="expertise-title">
                <h3>{service.title}</h3>
              </Parallax>
              <Parallax speed={12 + index * 3} rotateY={1.2} className="expertise-description">
                <p>{service.description}</p>
              </Parallax>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
