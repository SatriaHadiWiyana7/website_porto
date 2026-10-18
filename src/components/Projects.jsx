import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, X } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { additionalProjects, featuredProjects, projectRepositories } from '../data/featuredProjects';
import { TiltCard, useParallax } from './Parallax';
import ProjectArchive from './ProjectArchive';
import { archiveVisuals } from '../data/archiveProjects';
import '../styles/projects.css';

const pinQuery = '(min-width: 900px) and (min-height: 700px), (min-width: 360px) and (max-width: 767px) and (min-height: 700px), (min-width: 768px) and (max-width: 899px) and (min-height: 780px)';
const readPinLayout = () => window.matchMedia(pinQuery).matches;
function subscribePinLayout(onChange) {
  const query = window.matchMedia(pinQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function ProjectPanel({ index, project, lang, pinned, active, progress, onOpen }) {
  const articleRef = useRef(null);
  const { enabled, compact, coarsePointer } = useParallax();
  const feature = featuredProjects[index];
  const copy = lang === 'id' ? feature.idText : feature.enText;
  const { scrollYProgress: localProgress } = useScroll({ target: articleRef, offset: ['start end', 'end start'] });
  const source = pinned ? progress : localProgress;
  const start = pinned ? index / 3 : 0;
  const end = pinned ? (index + 1) / 3 : 1;
  const opacity = useTransform(progress,
    [Math.max(0, index / 3 - .045), index / 3 + .035, (index + 1) / 3 - .045, Math.min(1, (index + 1) / 3 + .035)],
    [index === 0 ? 1 : 0, 1, 1, index === 2 ? 1 : 0]);
  const imageY = useTransform(source, [start, end], compact ? [16, -16] : [32, -32]);
  const imageScale = useTransform(source, [start, end], coarsePointer ? [.95, 1.015] : [1.025, .985]);
  const imageRotateX = useTransform(source, [start, end], [5, -5]);
  const imageRotateY = useTransform(source, [start, end], [-4, 4]);
  const copyY = useTransform(source, [start, end], [12, -12]);

  return (
    <motion.article ref={articleRef} id={`project-${feature.id}`} className={`project-panel project-panel--${feature.id}`}
      data-active={active} aria-labelledby={`project-title-${feature.id}`} aria-hidden={pinned && !active ? true : undefined}
      inert={pinned && !active} style={{ opacity: pinned ? opacity : 1, pointerEvents: pinned && !active ? 'none' : 'auto' }}>
      <motion.div className="project-copy" style={{ y: enabled ? copyY : 0 }}>
        <p className="project-category"><span>{String(index + 1).padStart(2, '0')}</span>{feature.category}</p>
        <h3 id={`project-title-${feature.id}`}>{feature.name}</h3>
        <p className="project-summary">{copy.summary}</p>
        <ul className="project-technologies" aria-label={lang === 'id' ? 'Teknologi' : 'Technologies'}>
          {feature.tech.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-actions">
          <button type="button" className="project-detail-button" onClick={(event) => onOpen(index, event)}>
            {lang === 'id' ? 'Tentang proyek' : 'Project details'}<ArrowUpRight size={18} />
          </button>
          {feature.publicRepository !== false && <a className="project-source-link" href={feature.repository} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={15} /></a>}
        </div>
      </motion.div>
      <figure className="project-media">
        <motion.div className="project-media-parallax" style={{ y: enabled ? imageY : 0, scale: enabled ? imageScale : 1, rotateX: enabled && coarsePointer ? imageRotateX : 0, rotateY: enabled && coarsePointer ? imageRotateY : 0, transformPerspective: 1400 }}>
          <button type="button" className="project-media-open" onClick={(event) => onOpen(index, event)} aria-label={`${lang === 'id' ? 'Lihat gambar dan detail' : 'View image and details'}: ${project.title}`}>
            <TiltCard className="project-image-tilt" maxTilt={3} perspective={1800} scrollTilt={false}>
              <img src={feature.image} alt={copy.alt} width="1600" height="1000" loading="lazy" decoding="async" />
            </TiltCard>
          </button>
        </motion.div>
        <figcaption>{copy.caption}</figcaption>
      </figure>
    </motion.article>
  );
}

function ProjectStep({ index, active, progress, pinned, onClick, navRef }) {
  const fill = useTransform(progress, [index / 3, (index + 1) / 3], [0, 1]);
  return (
    <button ref={navRef} type="button" className="project-step" onClick={onClick}
      aria-current={active && pinned ? 'step' : undefined} aria-controls={`project-${featuredProjects[index].id}`}>
      <span className="project-step-label"><span>{String(index + 1).padStart(2, '0')}</span>{featuredProjects[index].name}<ArrowUpRight size={15} /></span>
      <span className="project-step-track"><motion.span style={{ scaleX: pinned ? fill : 0 }} /></span>
    </button>
  );
}

function ProjectDialog({ project, feature, onClose, lang }) {
  const dialogRef = useRef(null);
  const isId = lang === 'id';
  const repository = feature ? (feature.publicRepository !== false ? feature.repository : null) : projectRepositories[project.title];
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, []);

  function keepFocusInDialog(event) {
    if (event.key !== 'Tab') return;
    const controls = [...event.currentTarget.querySelectorAll('button:not([disabled]), a[href]')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  }

  function closeDialog() { dialogRef.current?.close(); onClose(); }

  return createPortal(
    <dialog ref={dialogRef} className="project-dialog" data-image={Boolean(feature)} aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description"
      onKeyDown={keepFocusInDialog} onClose={(event) => { if (!event.currentTarget.open) onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) closeDialog(); }}>
      <div className="project-dialog-content">
        <button type="button" className="project-dialog-close" onClick={closeDialog} aria-label={isId ? 'Tutup detail proyek' : 'Close project details'} autoFocus><X size={22} /></button>
        {feature && <figure className="project-dialog-image"><img src={feature.image} width={feature.width || 1600} height={feature.height || 1000} alt={(isId ? feature.idText : feature.enText).alt} /><figcaption>{(isId ? feature.idText : feature.enText).caption}</figcaption></figure>}
        <h2 id="project-dialog-title">{project.title}</h2>
        <p id="project-dialog-description">{project.desc}</p>
        <ul className="project-technologies" aria-label={isId ? 'Teknologi' : 'Technologies'}>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <div className="project-dialog-links">
          {repository && <a href={repository} target="_blank" rel="noreferrer">{isId ? 'Lihat repository' : 'View repository'}<ArrowUpRight size={18} /></a>}
          <a href={`mailto:satriahadiwiyana7@gmail.com?subject=${encodeURIComponent(`${isId ? 'Diskusi proyek' : 'Project inquiry'}: ${project.title}`)}`}>{isId ? 'Diskusikan proyek ini' : 'Discuss this project'}<ArrowUpRight size={18} /></a>
        </div>
      </div>
    </dialog>, document.body,
  );
}

export default function Projects() {
  const { lang } = useLang();
  const { enabled } = useParallax();
  const pinLayout = useSyncExternalStore(subscribePinLayout, readPinLayout, () => false);
  const pinned = pinLayout && enabled;
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const navRefs = useRef([]);
  const activeRef = useRef(0);
  const openerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isId = lang === 'id';
  const projects = content.id.projects.map((project) => isId ? project : (content.en.projects.find((translated) => translated.title === project.title) || project));
  projects.push(...additionalProjects.map((project) => ({ ...project, desc: isId ? project.idDescription : project.enDescription })));
  const archive = projects.map((project, index) => ({ project, index })).slice(3).sort((a, b) => Number(Boolean(projectRepositories[b.project.title])) - Number(Boolean(projectRepositories[a.project.title])));
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start start', 'end end'] });

  useEffect(() => {
    const updateActive = (progress) => {
      const next = pinned ? Math.min(2, Math.max(0, Math.floor(progress * 3))) : 0;
      if (next === activeRef.current) return;
      const previousPanel = document.getElementById(`project-${featuredProjects[activeRef.current].id}`);
      if (previousPanel?.contains(document.activeElement)) navRefs.current[next]?.focus({ preventScroll: true });
      activeRef.current = next;
      setActiveIndex(next);
    };
    updateActive(scrollYProgress.get());
    return scrollYProgress.on('change', updateActive);
  }, [pinned, scrollYProgress]);

  function goToProject(index) {
    if (!pinned) { document.getElementById(`project-${featuredProjects[index].id}`)?.scrollIntoView({ behavior: enabled ? 'smooth' : 'instant', block: 'start' }); return; }
    const track = trackRef.current;
    const top = window.scrollY + track.getBoundingClientRect().top;
    const range = track.offsetHeight - stageRef.current.offsetHeight;
    window.scrollTo({ top: top + range * ((index + .3) / 3), behavior: 'smooth' });
  }

  function openProject(index, event) { openerRef.current = event.currentTarget; setSelectedIndex(index); }
  function closeProject() {
    setSelectedIndex(null);
    const opener = openerRef.current;
    if (opener?.isConnected && !opener.closest('[inert]')) opener.focus({ preventScroll: true });
    else navRefs.current[activeRef.current]?.focus({ preventScroll: true });
  }

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-title">
      <div ref={trackRef} className="project-scroll-track" data-pinned={pinned}>
        <div ref={stageRef} className="project-stage">
          <div className="project-stage-inner section-shell">
            <header className="project-section-heading">
              <h2 id="projects-title">{isId ? 'Proyek pilihan' : 'Selected projects'}</h2>
              <a href="#project-archive">{isId ? 'Proyek lainnya' : 'More projects'}<ArrowDown size={16} /></a>
            </header>
            <div className="project-slides">
              {projects.slice(0, 3).map((project, index) => <ProjectPanel key={featuredProjects[index].id} project={project} index={index} lang={lang} pinned={pinned} active={index === activeIndex} progress={scrollYProgress} onOpen={openProject} />)}
            </div>
            <nav className="project-sequence" aria-label={isId ? 'Pilih proyek utama' : 'Choose a featured project'}>
              {featuredProjects.map((feature, index) => <ProjectStep key={feature.id} index={index} active={index === activeIndex} progress={scrollYProgress} pinned={pinned} onClick={() => goToProject(index)} navRef={(node) => { navRefs.current[index] = node; }} />)}
            </nav>
          </div>
        </div>
      </div>
      <ProjectArchive entries={archive} lang={lang} onOpen={openProject} />
      {selectedIndex !== null && <ProjectDialog project={projects[selectedIndex]} feature={featuredProjects[selectedIndex] || archiveVisuals[projects[selectedIndex].title]} lang={lang} onClose={closeProject} />}
    </section>
  );
}
