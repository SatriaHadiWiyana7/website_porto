import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Parallax } from './Parallax';

export default function Testimonial() {
  const { lang } = useLang();
  const t = content[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = t.testimonials[activeIndex];
  const show = (direction) => setActiveIndex((current) => (current + direction + t.testimonials.length) % t.testimonials.length);
  return (
    <section id="testimonial" className="support-section testimonial-section" aria-labelledby="testimonial-title">
      <div className="section-shell">
        <div className="support-section-top">
          <Parallax speed={14}>
            <span className="eyebrow"><span className="section-dot" />{t.testimonialBadge}</span>
            <h2 id="testimonial-title" className="section-heading">{t.testimonialTitle}</h2>
          </Parallax>
          <div className="quote-controls">
            <button type="button" onClick={() => show(-1)} aria-label={lang === 'id' ? 'Ulasan sebelumnya' : 'Previous review'}><ArrowLeft size={20} /></button>
            <button type="button" onClick={() => show(1)} aria-label={lang === 'id' ? 'Ulasan berikutnya' : 'Next review'}><ArrowRight size={20} /></button>
          </div>
        </div>
        <Parallax speed={24} className="quote-stage">
          <Quote className="quote-mark" size={68} strokeWidth={1} aria-hidden="true" />
          <div className="quote-content" aria-live="polite" aria-atomic="true">
            <div className="quote-rating" aria-label={`${testimonial.rating} ${lang === 'id' ? 'dari 5 bintang' : 'out of 5 stars'}`}>
              {Array.from({ length: testimonial.rating }, (_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}
            </div>
            <blockquote>“{testimonial.text}”</blockquote>
            <div className="quote-author">
              <span className="quote-avatar" aria-hidden="true">{testimonial.name.split(' ').map((word) => word[0]).join('')}</span>
              <div><p>{testimonial.name}</p><span>{testimonial.role}</span></div>
            </div>
          </div>
          <div className="quote-pagination" aria-label={lang === 'id' ? 'Pilih ulasan' : 'Choose a review'}>
            {t.testimonials.map((item, index) => (
              <button key={item.name} className={index === activeIndex ? 'is-active' : ''} type="button" onClick={() => setActiveIndex(index)} aria-label={`${lang === 'id' ? 'Ulasan oleh' : 'Review by'} ${item.name}`} aria-pressed={index === activeIndex} />
            ))}
            <span>0{activeIndex + 1} / 0{t.testimonials.length}</span>
          </div>
        </Parallax>
      </div>
    </section>
  );
}
