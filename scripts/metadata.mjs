import { site, seoText, structuredData } from '../src/data/site.js';

export function portfolioMetadata() {
  const meta = (name, content) => ({ tag: 'meta', attrs: { name, content }, injectTo: 'head' });
  const og = (property, content) => ({ tag: 'meta', attrs: { property, content }, injectTo: 'head' });
  return {
    name: 'portfolio-metadata',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return {
          html: html.replace(/<title>.*?<\/title>/, `<title>${site.title.replaceAll('&', '&amp;')}</title>`),
          tags: [
            meta('description', seoText.id.description), meta('author', site.name),
            meta('robots', 'index, follow, max-image-preview:large'),
            { tag: 'link', attrs: { rel: 'canonical', href: site.url }, injectTo: 'head' },
            og('og:type', 'website'), og('og:site_name', site.name), og('og:title', site.title),
            og('og:description', seoText.id.description), og('og:url', site.url),
            og('og:locale', 'id_ID'), og('og:locale:alternate', 'en_US'),
            og('og:image', site.image), og('og:image:type', 'image/jpeg'),
            og('og:image:width', '1200'), og('og:image:height', '630'), og('og:image:alt', site.imageAlt),
            meta('twitter:card', 'summary_large_image'), meta('twitter:title', site.title),
            meta('twitter:description', seoText.id.description), meta('twitter:image', site.image),
            meta('twitter:image:alt', site.imageAlt),
            { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(structuredData).replaceAll('<', '\\u003c'), injectTo: 'head' },
          ],
        };
      },
    },
  };
}
