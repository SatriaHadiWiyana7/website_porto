export const site = {
  url: 'https://satria-wiyana.cloud/',
  name: 'Satria Hadi Wiyana',
  title: 'Satria Hadi Wiyana | AI/ML Engineer & Full-Stack Developer',
  image: 'https://satria-wiyana.cloud/social-card.jpg',
  imageAlt: 'Satria Hadi Wiyana — AI/ML Engineer dan Full-Stack Developer',
  sameAs: [
    'https://github.com/SatriaHadiWiyana7',
    'https://www.linkedin.com/in/satriahadiwiyana',
    'https://medium.com/@satriahadiwiyana7',
    'https://www.instagram.com/wsatriahadi/',
  ],
};

export const seoText = {
  id: {
    description: 'Portofolio Satria Hadi Wiyana, AI/ML Engineer dan Full-Stack Developer di Indonesia. Proyek RAG, Local LLM, computer vision, NLP, dan aplikasi web.',
    locale: 'id_ID',
  },
  en: {
    description: 'Satria Hadi Wiyana, AI/ML Engineer and Full-Stack Developer in Indonesia. Explore work in RAG, local LLMs, computer vision, NLP, and web applications.',
    locale: 'en_US',
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${site.url}#website`, url: site.url, name: site.name,
      inLanguage: ['id', 'en'], publisher: { '@id': `${site.url}#person` },
    },
    {
      '@type': 'ProfilePage', '@id': `${site.url}#profile`, url: site.url, name: site.title,
      description: seoText.id.description, inLanguage: ['id', 'en'],
      isPartOf: { '@id': `${site.url}#website` }, mainEntity: { '@id': `${site.url}#person` },
    },
    {
      '@type': 'Person', '@id': `${site.url}#person`, name: site.name, url: site.url,
      jobTitle: 'AI/ML Engineer & Full-Stack Developer', image: site.image,
      description: seoText.id.description, sameAs: site.sameAs,
      knowsAbout: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Retrieval-Augmented Generation', 'Local LLM', 'Web Development'],
    },
  ],
};
