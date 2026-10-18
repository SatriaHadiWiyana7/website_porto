import { ArrowUpRight } from 'lucide-react';
import { Parallax, TiltCard } from './Parallax';
import TextReveal from './TextReveal';
import { archiveDetails, archiveVisuals } from '../data/archiveProjects';
import { projectRepositories } from '../data/featuredProjects';
import '../styles/project-archive.css';

function ArchiveFeature({ entry, position, lang, onOpen }) {
  const { project, index } = entry;
  const detail = archiveDetails[project.title];
  const visual = archiveVisuals[project.title];
  const isId = lang === 'id';
  const imageText = isId ? visual.idText : visual.enText;
  const number = String(position + 4).padStart(2, '0');
  return (
    <article className={`archive-feature archive-feature--${position}`} aria-labelledby={`archive-feature-${index}`}>
      <div className="archive-art-scene">
        <Parallax className="archive-art-outline" speed={-24} rotateX={7} rotateY={position ? 7 : -7} aria-hidden="true" />
        <Parallax className="archive-art-front" speed={35 + position * 10} rotateY={position ? -4 : 4} rotateX={-3} scale={.018}>
          <button type="button" className="archive-art-button" onClick={(event) => onOpen(index, event)} aria-label={`${isId ? 'Lihat detail' : 'View details'}: ${detail.name}`}>
            <TiltCard className="archive-art-surface" maxTilt={3.5} perspective={1500}>
              <img className="archive-art-image" src={visual.image} width={visual.width} height={visual.height} alt={imageText.alt} loading="lazy" decoding="async" />
              <span className="archive-art-action" data-depth="25"><ArrowUpRight size={22} /></span>
            </TiltCard>
          </button>
        </Parallax>
      </div>
      <p className="archive-visual-caption">{imageText.caption}</p>
      <div className="archive-feature-meta"><span>{number} / {detail.category}</span><span>{project.tech[0]}</span></div>
      <Parallax className="archive-feature-copy" speed={12} rotateX={2}>
        <h3 id={`archive-feature-${index}`}><button type="button" onClick={(event) => onOpen(index, event)}><TextReveal mode={position ? 'focus' : 'perspective'}>{detail.name}</TextReveal></button></h3>
        <p>{detail[lang]}</p>
        <div className="archive-feature-links">
          <button type="button" onClick={(event) => onOpen(index, event)} className="archive-text-link"><span>{isId ? 'Lihat proyek' : 'Explore project'}</span><ArrowUpRight size={16} /></button>
          <a href={projectRepositories[project.title]} target="_blank" rel="noreferrer" className="archive-text-link"><span>GitHub</span><ArrowUpRight size={14} /></a>
        </div>
      </Parallax>
    </article>
  );
}

export default function ProjectArchive({ entries, lang, onOpen }) {
  const isId = lang === 'id';
  return (
    <section id="project-archive" className="project-archive section-shell" aria-labelledby="archive-title">
      <header className="archive-introduction">
        <Parallax speed={26} rotateX={3}>
          <p className="archive-eyebrow">{isId ? 'Lebih banyak karya' : 'More of the work'}<span>{String(entries.length).padStart(2, '0')} {isId ? 'proyek' : 'projects'}</span></p>
          <h2 id="archive-title"><TextReveal mode="mask">{isId ? 'Arsip proyek.' : 'Project archive.'}</TextReveal></h2>
        </Parallax>
        <p className="archive-intro-note">{isId ? 'Eksplorasi model, data, dan aplikasi. Setiap proyek berangkat dari persoalan yang berbeda.' : 'Explorations in models, data, and applications. Each project starts with a different problem.'}</p>
      </header>
      <div className="archive-showcase">
        {entries.slice(0, 2).map((entry, position) => <ArchiveFeature key={entry.project.title} entry={entry} position={position} lang={lang} onOpen={onOpen} />)}
      </div>
      <div className="archive-index">
        <div className="archive-index-heading"><h3>{isId ? 'Proyek lainnya' : 'Other projects'}</h3><span>{isId ? 'Nama / bidang' : 'Project / field'}</span></div>
        {entries.slice(2).map(({ project, index }, position) => {
          const detail = archiveDetails[project.title] || { name: project.title, category: project.tech[0] };
          return <article className="archive-index-entry" key={project.title}>
            <button type="button" className="archive-index-button" onClick={(event) => onOpen(index, event)}>
              <span className="archive-index-number">{String(position + 6).padStart(2, '0')}</span>
              <span className="archive-index-name"><span>{detail.name}</span></span>
              <span className="archive-index-category">{detail.category}</span>
              <span className="archive-index-arrow"><ArrowUpRight size={22} /></span>
            </button>
          </article>;
        })}
      </div>
    </section>
  );
}
