import { useLang } from '../context/LangContext';
import { Parallax } from './Parallax';
import TextReveal from './TextReveal';

const steps = {
  id: [
    { title: 'Memahami kebutuhan', description: 'Membahas tujuan proyek, memetakan data yang tersedia, dan menentukan kebutuhan arsitektur serta infrastruktur.' },
    { title: 'Membangun dan mengintegrasikan', description: 'Mengeksplorasi data, mengembangkan model atau logika aplikasi, lalu menghubungkannya dengan antarmuka web.' },
    { title: 'Menguji dan menyiapkan rilis', description: 'Memeriksa fungsionalitas dan integritas data sebelum menyiapkan aplikasi untuk digunakan di lingkungan produksi.' },
  ],
  en: [
    { title: 'Understand the requirements', description: 'Discuss the project’s goals, map the available data, and define architecture and infrastructure requirements.' },
    { title: 'Build and integrate', description: 'Explore the data, develop models or application logic, and connect them to the web interface.' },
    { title: 'Test and prepare for release', description: 'Check functionality and data integrity before preparing the application for use in production.' },
  ],
};

export default function Process() {
  const { lang } = useLang();
  return (
    <section id="process" className="support-section process-section" aria-labelledby="process-title">
      <div className="section-shell">
        <Parallax speed={28} horizontal={12} rotateY={-3} className="editorial-heading work-section-heading">
          <h2 id="process-title"><TextReveal mode="focus">{lang === 'id' ? 'Cara saya bekerja' : 'How I work'}</TextReveal></h2>
        </Parallax>
        <div className="process-depth-layout">
          {steps[lang].map((step, index) => (
            <article key={step.title} className="process-column">
              <Parallax speed={-24 - index * 7} rotateX={8} rotateY={index === 1 ? 6 : -6} className="process-guide" aria-hidden="true"><span /><span /></Parallax>
              <Parallax speed={52 + index * 10} horizontal={index === 1 ? 8 : -8} rotateX={7} rotateY={index === 1 ? -7 : 7} className="process-depth-number" aria-hidden="true"><span>0{index + 1}</span></Parallax>
              <Parallax speed={26 + index * 8} rotateY={index === 1 ? -3 : 3} className="process-depth-title"><h3>{step.title}</h3></Parallax>
              <Parallax speed={10 + index * 5} rotateY={1} className="process-depth-description"><p>{step.description}</p></Parallax>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
