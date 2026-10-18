import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import './Entrance.css';

export default function Entrance({ phase, onReveal, onComplete }) {
  const { lang } = useLang();

  useEffect(() => {
    const reveal = window.setTimeout(onReveal, 1050);
    const complete = window.setTimeout(onComplete, 2050);
    return () => { window.clearTimeout(reveal); window.clearTimeout(complete); };
  }, [onReveal, onComplete]);

  useEffect(() => {
    if (phase !== 'opening') return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const skipOnKey = (event) => {
      if (['Escape', 'Enter', ' ', 'ArrowDown', 'PageDown'].includes(event.key)) {
        event.preventDefault();
        onComplete();
      }
    };
    window.addEventListener('keydown', skipOnKey);
    window.addEventListener('wheel', onComplete, { passive: true });
    window.addEventListener('touchmove', onComplete, { passive: true });
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', skipOnKey);
      window.removeEventListener('wheel', onComplete);
      window.removeEventListener('touchmove', onComplete);
    };
  }, [phase, onComplete]);

  return (
    <div className={`entrance entrance--${phase}`}>
      <div className="entrance-underlay" aria-hidden="true" />
      <div className="entrance-curtain" aria-hidden="true">
        <div className="entrance-signature">
          <div className="entrance-name-mask"><span className="entrance-name">Satria.</span></div>
          <div className="entrance-surname-mask"><span className="entrance-surname">Hadi Wiyana</span></div>
          <span className="entrance-rule" />
          <p className="entrance-role">AI / ML Engineer & Full-Stack Developer</p>
        </div>
      </div>
      {phase === 'opening' && (
        <button type="button" className="entrance-skip" onClick={onComplete}>
          {lang === 'id' ? 'Lewati pembuka' : 'Skip introduction'}<ArrowUpRight size={15} />
        </button>
      )}
    </div>
  );
}
