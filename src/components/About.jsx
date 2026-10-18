import { useLang } from '../context/LangContext';
import { Parallax, TiltCard } from './Parallax';
import TextReveal from './TextReveal';
import '../styles/sections.css';
import '../styles/section-depth.css';

export default function About() {
  const { lang } = useLang();
  const isIndonesian = lang === 'id';
  return (
    <section id="about" className="support-section about-section" aria-labelledby="about-title">
      <div className="section-shell about-layout">
        <div className="about-statement-scene">
          <Parallax speed={-44} horizontal={18} rotateX={8} rotateY={-9} className="about-backplane" aria-hidden="true" />
          <Parallax speed={56} horizontal={-10} rotateX={-4} rotateY={5} scale={.018} className="about-statement">
            <TiltCard className="about-title-plane" maxTilt={2.5} perspective={1600}>
              <span className="editorial-label" data-depth="16">{isIndonesian ? 'Tentang saya' : 'About me'}</span>
              <h2 id="about-title" data-depth="32"><TextReveal mode="perspective">{isIndonesian ? 'Saya bekerja di antara model AI dan aplikasi yang dipakai sehari-hari.' : 'I work between AI models and the applications people use every day.'}</TextReveal></h2>
            </TiltCard>
          </Parallax>
        </div>
        <Parallax speed={-18} rotateY={-2} className="about-details">
          <p>{isIndonesian ? 'Saya Satria Hadi Wiyana, AI/ML Engineer dan Full-Stack Developer. Fokus saya adalah NLP, Computer Vision, dan inferensi model lokal—menghubungkan pengolahan data dengan aplikasi yang bisa digunakan.' : 'I’m Satria Hadi Wiyana, an AI/ML Engineer and Full-Stack Developer. My focus is NLP, Computer Vision, and local model inference—connecting data processing with usable applications.'}</p>
          <p>{isIndonesian ? 'Dalam pengembangan sistem, saya mempertimbangkan bagaimana model diintegrasikan, bagaimana data tetap terjaga, dan bagaimana antarmukanya bekerja. Saya menggunakan model lokal untuk kebutuhan yang mengutamakan privasi data dan efisiensi biaya.' : 'When developing a system, I consider how the model integrates, how data is preserved, and how the interface works. I use local models for requirements that prioritize data privacy and cost efficiency.'}</p>
          <aside className="about-focus" aria-label={isIndonesian ? 'Bidang yang saya kerjakan' : 'Areas I work in'}>
            <p><span>{isIndonesian ? 'Model & data' : 'Models & data'}</span>NLP, Computer Vision, Local LLM, RAG</p>
            <p><span>{isIndonesian ? 'Aplikasi' : 'Applications'}</span>Python, React, Laravel</p>
          </aside>
        </Parallax>
      </div>
    </section>
  );
}
