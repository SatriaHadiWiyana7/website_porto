import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { content } from '../data/content';
import { Parallax } from './Parallax';
import TextReveal from './TextReveal';

const contactEmail = 'satriahadiwiyana7@gmail.com';

export default function Booking() {
  const { lang } = useLang();
  const t = content[lang].booking;
  const [draftReady, setDraftReady] = useState(false);
  const isIndonesian = lang === 'id';

  function prepareEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    if (!message) {
      const messageField = event.currentTarget.elements.namedItem('message');
      messageField.setCustomValidity(isIndonesian ? 'Ceritakan sedikit tentang proyek Anda.' : 'Please tell me a little about your project.');
      messageField.reportValidity();
      return;
    }
    const subject = `${isIndonesian ? 'Diskusi proyek' : 'Project inquiry'}${name ? ` — ${name}` : ''}`;
    const body = `${isIndonesian ? 'Halo Satria,' : 'Hi Satria,'}\n\n${message}\n\n${isIndonesian ? 'Nama' : 'Name'}: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftReady(true);
  }

  return (
    <section id="booking" className="support-section contact-section" aria-labelledby="contact-title">
      <div className="section-shell contact-layout">
        <div className="contact-intro-scene">
          <Parallax speed={-45} horizontal={20} rotateX={10} rotateY={-12} className="contact-depth-rule" aria-hidden="true"><span /></Parallax>
          <Parallax speed={44} horizontal={-8} rotateY={4} rotateX={-3} className="contact-intro">
            <span className="editorial-label">{isIndonesian ? 'Kontak' : 'Contact'}</span>
            <h2 id="contact-title"><TextReveal mode="mask">{isIndonesian ? 'Ada proyek yang ingin dibahas?' : 'Have a project you’d like to discuss?'}</TextReveal></h2>
            <p>{isIndonesian ? 'Kirim ringkasan kebutuhan atau topik yang ingin Anda diskusikan. Kita bisa membahas detail proyek dan waktu pertemuan melalui email.' : 'Send a brief description of your requirements or a topic you’d like to discuss. We can work out the project details and a meeting time by email.'}</p>
            <a className="contact-email" href={`mailto:${contactEmail}`}><span>{contactEmail}</span><ArrowUpRight size={17} /></a>
          </Parallax>
        </div>
        <div className="contact-form-wrap">
          <form onSubmit={prepareEmail} className="contact-form">
            <div className="contact-fields">
              <div className="contact-field">
                <label htmlFor="contact-name">{t.formName} <span>({isIndonesian ? 'opsional' : 'optional'})</span></label>
                <input id="contact-name" name="name" autoComplete="name" type="text" maxLength={100} placeholder={isIndonesian ? 'Nama Anda' : 'Your name'} />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">{t.formEmail} <span>({isIndonesian ? 'opsional' : 'optional'})</span></label>
                <input id="contact-email" name="email" autoComplete="email" type="email" maxLength={150} placeholder="you@example.com" />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">{t.formMessage}</label>
              <textarea id="contact-message" name="message" rows={4} required maxLength={1500} placeholder={isIndonesian ? 'Apa yang ingin Anda kerjakan?' : 'What would you like to work on?'} onChange={(event) => event.currentTarget.setCustomValidity('')} />
            </div>
            <button className="contact-submit" type="submit">{isIndonesian ? 'Buka draft email' : 'Open email draft'}<ArrowUpRight size={18} /></button>
            <p className="contact-form-note" role="status">
              {draftReady
                ? (isIndonesian ? 'Draft siap dibuka di aplikasi email Anda. Pesan belum terkirim; periksa lalu kirim melalui aplikasi email. Jika tidak terbuka, gunakan alamat email di samping.' : 'Your draft is ready to open in your email app. It has not been sent; review and send it there. If nothing opens, use the email address shown here.')
                : (isIndonesian ? 'Membuka aplikasi email dengan draft pesan. Pesan dikirim setelah Anda menekan Kirim di aplikasi email.' : 'Opens your email app with a draft. The message is sent when you choose Send in your email app.')}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
