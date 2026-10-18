import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { Parallax } from './Parallax';
import TextReveal from './TextReveal';
import '../styles/footer.css';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/satriahadiwiyana' },
  { name: 'GitHub', url: 'https://github.com/SatriaHadiWiyana7' },
  { name: 'Medium', url: 'https://medium.com/@satriahadiwiyana7' },
  { name: 'Instagram', url: 'https://www.instagram.com/wsatriahadi?igsh=cDdvcGUyb3hxb242' },
];

export default function Footer() {
  const { lang } = useLang();
  const isIndonesian = lang === 'id';
  const pageLinks = [
    { name: isIndonesian ? 'Proyek pilihan' : 'Selected projects', href: '#projects' },
    { name: isIndonesian ? 'Tentang saya' : 'About me', href: '#about' },
    { name: isIndonesian ? 'Keahlian' : 'Expertise', href: '#services' },
    { name: isIndonesian ? 'Cara saya bekerja' : 'How I work', href: '#process' },
    { name: isIndonesian ? 'Kontak' : 'Contact', href: '#booking' },
  ];

  return (
    <footer className="site-footer portfolio-footer" aria-labelledby="footer-identity">
      <div className="section-shell footer-shell">
        <div className="footer-directory">
          <div className="footer-identity">
            <Parallax speed={18} rotateY={3} className="footer-identity-title">
              <h2 id="footer-identity"><TextReveal mode="focus">Satria Hadi Wiyana</TextReveal></h2>
              <p>AI / ML Engineer<br />&amp; Full-Stack Developer</p>
            </Parallax>
            <address>
              <a href="mailto:satriahadiwiyana7@gmail.com" className="footer-email" aria-label={isIndonesian ? 'Email Satria Hadi Wiyana: satriahadiwiyana7@gmail.com' : 'Email Satria Hadi Wiyana at satriahadiwiyana7@gmail.com'}><span>satriahadiwiyana7@gmail.com</span><ArrowUpRight size={16} aria-hidden="true" /></a>
            </address>
          </div>
          <nav className="footer-directory-nav" aria-labelledby="footer-page-links">
            <h3 id="footer-page-links">{isIndonesian ? 'Jelajahi' : 'Explore'}</h3>
            <ul>{pageLinks.map((link) => <li key={link.href}><a href={link.href}>{link.name}</a></li>)}</ul>
          </nav>
          <nav className="footer-directory-nav footer-social-nav" aria-labelledby="footer-social-links">
            <h3 id="footer-social-links">{isIndonesian ? 'Temukan saya' : 'Find me online'}</h3>
            <ul>{socialLinks.map((social) => <li key={social.name}><a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} — Satria Hadi Wiyana`}>{social.name}<ArrowUpRight size={13} aria-hidden="true" /></a></li>)}</ul>
          </nav>
        </div>
        <div className="closing-scene">
          <Parallax speed={-22} rotateX={12} rotateY={-5} className="closing-rule" aria-hidden="true"><span /></Parallax>
          <div className="closing-name-scene" aria-hidden="true">
            <Parallax speed={48} horizontal={10} rotateX={12} rotateY={-6} scale={0.025} className="closing-name"><TextReveal mode="perspective">Satria.</TextReveal></Parallax>
          </div>
          <a className="footer-return" href="#home">
            <span className="footer-return-icon"><ArrowUp size={27} strokeWidth={1.25} aria-hidden="true" /></span>
            <span>{isIndonesian ? 'Kembali ke atas' : 'Back to top'}</span>
          </a>
        </div>
        <div className="footer-colophon">
          <p>© 2026 Satria Hadi Wiyana</p>
          <p>{isIndonesian ? 'Hak cipta dilindungi.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  );
}
