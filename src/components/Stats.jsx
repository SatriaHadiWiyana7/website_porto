import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Parallax } from './Parallax';
import '../styles/sections.css';

export default function Stats() {
  const { lang } = useLang();
  const t = content[lang].stats;
  return (
    <section id="stats" className="support-section stats-section" aria-labelledby="stats-title">
      <div className="section-shell">
        <Parallax speed={12} className="support-section-top">
          <span className="eyebrow"><span className="section-dot" />{t.badge}</span>
          <h2 id="stats-title" className="stats-title">{t.title}</h2>
        </Parallax>
        <div className="stats-grid">
          {t.items.map((stat, index) => (
            <Parallax key={stat.label} speed={10 + index * 6} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <h3>{stat.label}</h3>
              <p>{stat.desc}</p>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
