import fintimeImage from '../assets/projects/fintime-landing.jpg';
import captioningImage from '../assets/projects/image-captioning-dataset.png';

export const archiveVisuals = {
  'FinTime (Financial Time Machine)': {
    image: fintimeImage, width: 1600, height: 1000,
    repository: 'https://github.com/Capstone-Project-Coding-Camp-2026',
    idText: { caption: 'Halaman awal FinTime', alt: 'Tampilan asli halaman awal FinTime dengan pengantar simulasi keuangan.' },
    enText: { caption: 'FinTime landing page', alt: 'Actual FinTime landing page introducing its financial simulation.' },
  },
  'Image Captioning': {
    image: captioningImage, width: 700, height: 350,
    repository: 'https://github.com/SatriaHadiWiyana7/Image-Captioning-Project',
    idText: { caption: 'Contoh data gambar dan keterangan referensi dari notebook', alt: 'Gambar anjing berlari di taman beserta keterangan referensi dari notebook. Ini contoh dataset, bukan hasil prediksi model.' },
    enText: { caption: 'Dataset image and reference caption from the notebook', alt: 'A dog running in a garden with its reference caption from the notebook. This is a dataset example, not a model prediction.' },
  },
};

export const archiveDetails = {
  'FinTime (Financial Time Machine)': {
    name: 'FinTime', category: 'Financial forecasting',
    id: 'Membaca kondisi finansial hari ini untuk memperkirakan kemungkinan di masa depan.',
    en: 'Using today’s financial picture to explore possible futures.',
  },
  'Image Captioning': {
    name: 'Image Captioning', category: 'Computer vision / NLP',
    id: 'Menghubungkan pemahaman visual dengan bahasa untuk mendeskripsikan isi gambar.',
    en: 'Connecting visual understanding with language to describe what an image contains.',
  },
  'M-RAG Legal Assistant': { name: 'M-RAG Legal Assistant', category: 'Document intelligence' },
  'PANGAN-ALERT – Explainable Spatio-Temporal Early Warning': { name: 'PANGAN-ALERT', category: 'Geospatial / Machine learning' },
  'Sustainability Resilience Intelligence – Rice Seed Supply Chain': { name: 'Sustainability Resilience', category: 'Supply chain / Data science' },
  'Urban Traffic AI Coordinator': { name: 'Urban Traffic AI', category: 'Reinforcement learning' },
  'AgriRAG Smart Agriculture': { name: 'AgriRAG', category: 'Agriculture / Local LLM' },
  'CekKontrak Legal NLP': { name: 'CekKontrak', category: 'Legal / NLP' },
  'SIMBATRAS Ecosystem': { name: 'SIMBATRAS', category: 'Web application' },
};
