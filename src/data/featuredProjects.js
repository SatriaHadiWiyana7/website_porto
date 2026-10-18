import opticargoImage from '../assets/projects/opticargo-login.jpg';
import trylabImage from '../assets/projects/trylab-workflow.svg';
import mragImage from '../assets/projects/mrag-pipeline.svg';

export const featuredProjects = [
  {
    id: 'opticargo', name: 'Opticargo', category: 'Maritime logistics',
    image: opticargoImage, repository: 'https://github.com/Project-OptiCargo-Tol-Laut',
    tech: ['Agentic AI', 'GraphRAG', 'Knowledge Graph'],
    idText: { summary: 'Menghubungkan data supply, knowledge graph, dan AI agent untuk mendukung perencanaan logistik maritim.', caption: 'Antarmuka masuk aplikasi OptiCargo', alt: 'Tampilan asli halaman masuk OptiCargo dengan foto kapal dan formulir autentikasi.' },
    enText: { summary: 'Connecting supply data, knowledge graphs, and AI agents to support maritime logistics planning.', caption: 'OptiCargo application sign-in screen', alt: 'Actual OptiCargo sign-in screen featuring a ship photograph and authentication form.' },
  },
  {
    id: 'trylab', name: 'TryLab', category: 'Mobile usability testing',
    image: trylabImage, repository: 'https://github.com/SatriaHadiWiyana7/website-tryme-lab', publicRepository: false,
    tech: ['Vision-Language Models', 'Python', 'ADB'],
    idText: { summary: 'Agen yang membaca antarmuka aplikasi, menjalankan interaksi melalui ADB, dan mencatat hasil pengujian berdasarkan persona pengguna.', caption: 'Ilustrasi alur pengujian', alt: 'Diagram alur TryLab: layar aplikasi dibaca model visual, aksi dijalankan melalui ADB, lalu interaksi dicatat dalam laporan.' },
    enText: { summary: 'An agent that reads app interfaces, interacts through ADB, and records usability findings based on user personas.', caption: 'Testing workflow illustration', alt: 'TryLab workflow: a vision model reads the app screen, acts through ADB, and records interactions in a report.' },
  },
  {
    id: 'quantrag', name: 'QuantRAG-IDX', category: 'Financial document analysis',
    image: mragImage, repository: 'https://github.com/SatriaHadiWiyana7/QuantRAG-IDX',
    tech: ['Multimodal RAG', 'Hybrid Retrieval', 'ChromaDB'],
    idText: { summary: 'Menelusuri teks, tabel, dan grafik laporan tahunan untuk menyusun jawaban yang dapat ditelusuri kembali ke halaman sumbernya.', caption: 'Arsitektur sistem berdasarkan dokumentasi proyek', alt: 'Pipeline QuantRAG-IDX dari laporan PDF, indeks ChromaDB, hybrid retrieval dan reranking, hingga jawaban dengan sitasi halaman.' },
    enText: { summary: 'Retrieving text, tables, and charts from annual reports to produce answers traceable to their source pages.', caption: 'System architecture from the project documentation', alt: 'QuantRAG-IDX pipeline: annual reports, ChromaDB indexing, hybrid retrieval and reranking, then answers with source-page citations.' },
  },
];

export const projectRepositories = {
  'FinTime (Financial Time Machine)': 'https://github.com/Capstone-Project-Coding-Camp-2026',
  'Image Captioning': 'https://github.com/SatriaHadiWiyana7/Image-Captioning-Project',
};

export const additionalProjects = [{
  title: 'Image Captioning',
  idDescription: 'Proyek computer vision dan natural language processing untuk menghasilkan deskripsi kalimat dari sebuah gambar.',
  enDescription: 'A computer vision and natural language processing project for generating descriptive sentences from images.',
  tech: ['Computer Vision', 'NLP', 'Python'],
}];
