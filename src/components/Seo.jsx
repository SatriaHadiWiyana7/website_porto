import { useEffect } from 'react';
import { useLang } from '../context/LangContext';
import { site, seoText } from '../data/site';

export default function Seo() {
  const { lang } = useLang();
  useEffect(() => {
    document.title = site.title;
    const update = (selector, value) => document.querySelector(selector)?.setAttribute('content', value);
    update('meta[name="description"]', seoText[lang].description);
    update('meta[property="og:description"]', seoText[lang].description);
    update('meta[name="twitter:description"]', seoText[lang].description);
    update('meta[property="og:locale"]', seoText[lang].locale);
    update('meta[property="og:locale:alternate"]', seoText[lang === 'id' ? 'en' : 'id'].locale);
  }, [lang]);
  return null;
}
