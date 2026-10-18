import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Footer from './components/Footer';
import Booking from './components/Booking';
import SceneBackground from './components/SceneBackground';
import Entrance from './components/Entrance';
import Seo from './components/Seo';
import { ParallaxProvider, useParallax } from './components/Parallax';
import { LangProvider, useLang } from './context/LangContext';
import './styles/motion.css';

const ENTRANCE_KEY = 'satria-entrance-seen';

function shouldShowEntrance() {
  if (window.location.hash && window.location.hash !== '#home') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return false;
  try { return sessionStorage.getItem(ENTRANCE_KEY) !== 'yes'; }
  catch { return true; }
}

function Portfolio() {
  const { lang } = useLang();
  const { enabled } = useParallax();
  const [entryPhase, setEntryPhase] = useState('ready');
  const phase = enabled ? entryPhase : 'ready';
  const reveal = useCallback(() => setEntryPhase('revealing'), []);
  const completeEntrance = useCallback(() => {
    const restoreFocus = document.activeElement?.classList.contains('entrance-skip');
    try { sessionStorage.setItem(ENTRANCE_KEY, 'yes'); } catch { /* The intro also works without storage. */ }
    setEntryPhase('ready');
    if (restoreFocus) window.requestAnimationFrame(() => document.querySelector('.wordmark')?.focus({ preventScroll: true }));
  }, []);

  useEffect(() => {
    if (shouldShowEntrance()) setEntryPhase('opening');
  }, []);

  useEffect(() => {
    if (!window.location.hash || window.location.hash === '#home') return;
    if (performance.getEntriesByType('navigation')[0]?.type === 'back_forward') return;

    let targetId;
    try { targetId = decodeURIComponent(window.location.hash.slice(1)); }
    catch { return; }

    // A fresh deep link can arrive before React has mounted its destination.
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="portfolio" data-entry={phase}>
      <Seo />
      <SceneBackground />
      {phase !== 'ready' && <Entrance phase={phase} onReveal={reveal} onComplete={completeEntrance} />}
      <div className="site-surface" inert={phase === 'opening'}>
        <a className="skip-link" href="#main-content">{lang === 'id' ? 'Lewati ke konten' : 'Skip to content'}</a>
        <Navbar />
        <main id="main-content" className="page-content" tabIndex={-1}>
          <Hero />
          <Projects />
          <About />
          <Services />
          <Process />
          <Booking />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return <LangProvider><ParallaxProvider><Portfolio /></ParallaxProvider></LangProvider>;
}
