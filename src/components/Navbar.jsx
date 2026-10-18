import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useLang } from '../context/LangContext';

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef(null);
  const isId = lang === 'id';
  const links = [
    { name: isId ? 'Proyek' : 'Work', id: 'projects' },
    { name: isId ? 'Tentang' : 'About', id: 'about' },
    { name: isId ? 'Keahlian' : 'Expertise', id: 'services' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const media = window.matchMedia('(min-width: 768px)');
    const onResize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', onKeyDown);
    media.addEventListener('change', onResize);
    return () => { document.removeEventListener('keydown', onKeyDown); media.removeEventListener('change', onResize); };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label={isId ? 'Navigasi utama' : 'Main navigation'}>
        <a href="#home" className="wordmark" aria-label="Satria Hadi Wiyana" onClick={() => setOpen(false)}>Satria<span>.</span></a>
        <div className="desktop-links">
          {links.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'is-active' : ''} aria-current={active === link.id ? 'location' : undefined}>{link.name}</a>)}
        </div>
        <div className="nav-tools">
          <div className="language-control" role="group" aria-label={isId ? 'Bahasa' : 'Language'}>
            <button lang="id" aria-pressed={lang === 'id'} onClick={() => setLang('id')}>ID</button>
            <span>/</span>
            <button lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          </div>
          <a className="nav-contact" href="#booking">{isId ? 'Kontak' : 'Contact'}<ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="menu-toggle" aria-label={isId ? (open ? 'Tutup menu' : 'Buka menu') : (open ? 'Close menu' : 'Open menu')} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-navigation" hidden={!open}>
          {links.map((link) => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>{link.name}<ArrowUpRight size={18} /></a>)}
          <a href="#booking" onClick={() => setOpen(false)}>{isId ? 'Kontak' : 'Contact'}<ArrowUpRight size={18} /></a>
        </div>
      </nav>
    </header>
  );
}
