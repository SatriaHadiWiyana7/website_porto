import { useRef, useSyncExternalStore } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { TiltCard, useParallax } from './Parallax';
import profileImg from '../assets/satria-cutout.png';
import './Hero.css';

const stickyHeroQuery = '(min-width: 1000px) and (min-height: 720px)';
const readStickyHero = () => window.matchMedia(stickyHeroQuery).matches;
function subscribeStickyHero(onChange) {
  const media = window.matchMedia(stickyHeroQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

export default function Hero() {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const stickyHero = useSyncExternalStore(subscribeStickyHero, readStickyHero, () => false);
  const { lang } = useLang();
  const { enabled, compact } = useParallax();
  const isId = lang === 'id';
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', stickyHero ? 'end end' : 'end start'],
  });
  const { scrollYProgress: visualProgress } = useScroll({
    target: visualRef,
    offset: ['start end', 'end start'],
  });
  const depthProgress = stickyHero ? scrollYProgress : visualProgress;
  const titleY = useTransform(scrollYProgress, [0, 1], [0, compact ? -12 : -34]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, compact ? -6 : -20]);
  const photoY = useTransform(depthProgress, [0, 1], stickyHero ? [0, -64] : [30, -52]);
  const photoX = useTransform(depthProgress, [0, 1], stickyHero ? [0, -16] : [6, -6]);
  const photoScale = useTransform(depthProgress, [0, 1], [1, 1.035]);
  const backdropY = useTransform(depthProgress, [0, 1], stickyHero ? [0, 54] : [-28, 42]);
  const backdropX = useTransform(depthProgress, [0, 1], stickyHero ? [0, 24] : [-10, 14]);
  const outlineY = useTransform(depthProgress, [0, 1], stickyHero ? [0, 82] : [-36, 54]);
  const outlineRotate = useTransform(depthProgress, [0, 1], [-8, 5]);

  return (
    <section ref={sectionRef} id="home" className="hero-scene" aria-labelledby="hero-title">
      <div className="hero-sticky">
        <div className="hero-layout section-shell">
          <motion.div className="hero-heading" style={{ y: enabled ? titleY : 0 }}>
            <div className="hero-name-arrival">
              <p className="hero-role">AI / ML Engineer & Full-Stack Developer</p>
              <h1 id="hero-title"><span>Satria Hadi</span>{' '}<span>Wiyana.</span></h1>
            </div>
          </motion.div>

          <div ref={visualRef} className="hero-visual">
            <div className="portrait-arrival">
              <TiltCard className="hero-depth-stage" maxTilt={4} perspective={1600}>
                <div className="hero-depth-slot hero-depth-slot--outline" data-depth="-90" aria-hidden="true">
                  <motion.div className="hero-outline-plane" style={{ y: enabled ? outlineY : 0, rotateY: enabled ? outlineRotate : 0, transformPerspective: 1200 }} />
                </div>
                <div className="hero-depth-slot hero-depth-slot--backdrop" data-depth="-45" aria-hidden="true">
                  <motion.div className="hero-backdrop-plane" style={{ x: enabled ? backdropX : 0, y: enabled ? backdropY : 0 }} />
                </div>
                <div className="hero-depth-slot hero-depth-slot--portrait" data-depth="70">
                  <motion.figure className="hero-portrait" style={{ x: enabled ? photoX : 0, y: enabled ? photoY : 0, scale: enabled ? photoScale : 1 }}>
                    <img src={profileImg} alt="Satria Hadi Wiyana" width="1086" height="1448" fetchPriority="high" />
                  </motion.figure>
                </div>
              </TiltCard>
            </div>
          </div>
          <motion.div className="hero-description-layer" style={{ y: enabled ? textY : 0 }}>
            <div className="hero-description-arrival">
              <p className="hero-description">
                {isId
                  ? 'Saya membangun aplikasi web dan sistem AI, dengan fokus pada pemrosesan dokumen, computer vision, dan model yang berjalan secara lokal.'
                  : 'I build web applications and AI systems, with a focus on document processing, computer vision, and models that run locally.'}
              </p>
              <div className="hero-actions">
                <a className="hero-work-link" href="#projects">{isId ? 'Lihat proyek' : 'View my work'}<ArrowUpRight size={18} /></a>
                <a className="hero-cv-link" href={content[lang].hero.cvLink} download>{isId ? 'Unduh CV' : 'Download CV'}<ArrowDown size={15} /></a>
              </div>
            </div>
          </motion.div>
          <div className="hero-footnote">
            <a href="#projects"><ArrowDown size={16} />{isId ? 'Scroll untuk melihat karya' : 'Scroll to see my work'}</a>
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
