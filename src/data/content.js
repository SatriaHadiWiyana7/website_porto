import cvIndonesia from '../assets/CV_Satria_Hadi_Wiyana_ID.pdf';
import cvEnglish from '../assets/CV_Satria_Hadi_Wiyana_EN.pdf';

export const content = {
  id: {
    nav: {
      services: "Layanan", portfolio: "Portofolio", workflow: "Alur Kerja", reviews: "Ulasan", faq: "FAQ"
    },
    footer: {
      desc: "Merancang ekosistem perangkat lunak cerdas secara end-to-end. Mari terhubung dan bangun solusi inovatif bersama.",
      copyright: "© 2026 Satria Hadi Wiyana. Hak Cipta Dilindungi."
    },
    booking: {
      badge: "Mari Berkolaborasi",
      title: "Jadwalkan Sesi Anda",
      desc: "Pilih tanggal yang sesuai untuk membahas arsitektur proyek, optimasi sistem, atau peluang freelance lainnya.",
      profileRole: "AI/ML ENGINEER & FULL-STACK DEVELOPER",
      sessionTitle: "Discovery Session",
      duration: "30 min",
      webConf: "Detail web conference akan diberikan setelah konfirmasi.",
      profileDesc: "Selamat datang. Sebagai Machine Learning Engineer & Full-Stack Developer, saya berfokus pada perancangan sistem cerdas end-to-end dengan spesialisasi di bidang NLP, Computer Vision, dan inferensi model lokal untuk menjamin privasi data serta efisiensi biaya. Silakan tentukan jadwal diskusi yang tersedia untuk mengeksplorasi kebutuhan arsitektur AI, optimalisasi sistem, atau skalabilitas produk Anda.",
      dateLabel: "Pilih Tanggal",
      timezone: "Zona waktu: Waktu Indonesia Barat (WIB)",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formMessage: "Deskripsi Proyek / Topik Diskusi",
      formMessagePlaceholder: "Deskripsikan kebutuhan AI / Web Anda di sini...",
      btnSubmit: "Kirim Jadwal",
      btnLoading: "Mengirim...",
      successMsg: "Pesan terkirim! Saya akan segera menghubungi Anda untuk konfirmasi.",
      errorMsg: "Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.",
      alertDate: "Silakan pilih tanggal pada kalender terlebih dahulu!",
      maintenanceTitle: "Sistem Sedang Maintenance",
      maintenanceDesc: "Mohon maaf, sistem penjadwalan otomatis sedang dalam pemeliharaan atau telah mencapai batas kuota layanan. Silakan hubungi saya langsung melalui email: satriahadiwiyana7@gmail.com"
    },
    hero: {
      badge: "AI/ML ENGINEER & FULL-STACK DEVELOPER",
      titleStatic1: "Optimasi",
      titleStatic2: "tanpa kompromi.",
      dynamicWords: ["Model AI", "Sistem Web", "Fitur NLP", "LLM Lokal", "Agen Visual"],
      desc: "Merancang ekosistem perangkat lunak cerdas secara end-to-end. Memadukan arsitektur AI (NLP & Computer Vision) dengan pengembangan web untuk menghasilkan sistem yang scalable, efisien, dan memprioritaskan privasi data melalui inferensi model lokal.",
      btn1: "Jadwalkan Sesi Konsultasi",
      btn2: "Unduh CV \u2192",
      cvLink: cvIndonesia
    },
    stats: {
      badge: "Kinerja Terukur",
      title: "Dampak Nyata yang Tercipta.",
      items: [
        { value: "3+", label: "Arsitektur AI", desc: "Implementasi VLM, arsitektur RAG, dan model Reinforcement Learning dalam proyek terapan." },
        { value: "100%", label: "Fokus Stabilitas", desc: "Memprioritaskan integritas data dengan pembaruan dinamis tanpa manipulasi berisiko." },
        { value: "15+", label: "Tech Stack", desc: "Penguasaan mendalam ekosistem Python, React, Laravel, ML Frameworks, dan integrasi API lokal." },
        { value: "500+", label: "Jam Eksperimen", desc: "Dedikasi waktu dalam inferensi model LLM lokal dan otomatisasi agen AI." }
      ]
    },
    servicesTitle: "Layanan Konsultasi & Pengembangan",
    services: [
    { 
      title: "Integrasi AI & Local LLM", 
      desc: "Konsultasi dan implementasi kecerdasan buatan (NLP & Computer Vision) dengan arsitektur RAG canggih. Spesialisasi pada optimasi model lokal (on-premise) untuk analisis multimodal dan ekstraksi dokumen tanpa mengorbankan privasi data." 
    },
    { 
      title: "Full-Stack Web Development", 
      desc: "Rancang bangun ekosistem aplikasi web kustom yang responsif dan skalabel dari nol. Menangani arsitektur backend yang kompleks, integrasi API, hingga pemeliharaan integritas data finansial dengan antarmuka frontend yang modern." 
    },
    { 
      title: "Automasi Sistem & Pengujian", 
      desc: "Pengembangan agen AI otonom dan skrip cerdas untuk memotong repetisi alur kerja. Mencakup solusi web scraping tingkat lanjut hingga otomatisasi pengujian usability antarmuka aplikasi secara mandiri menggunakan Vision-Language Models." 
    }
  ],
    projectsBadge: "Rekam Jejak",
    projectsTitle: "Studi Kasus & Eksekusi Sistem",
    projectsDesc: "Menerjemahkan arsitektur kompleks menjadi solusi digital yang terukur. Berikut adalah beberapa implementasi dari optimasi model lokal hingga sistem manajemen terpadu.",
    projects: [
    {
      title: "Opticargo – Agentic GraphRAG Maritime Logistics",
      desc: "Mengarahkan delivery platform logistik maritim berbasis AI dari requirement/PRD hingga readiness implementasi. Sistem mengintegrasikan data supply, retrieval/vector, knowledge graph, dan AI agents dengan quality gate untuk menjaga konsistensi arsitektur.",
      tech: ["Agentic AI", "GraphRAG", "Knowledge Graph", "Python"],
      link: "#"
    },
    {
      title: "TryLab AI Mobile Tester",
      desc: "Mengembangkan AI agent otonom untuk mengotomatisasi pengujian usability aplikasi mobile menggunakan Vision-Language Models. Sistem memahami elemen visual antarmuka, bernavigasi menggunakan ADB, dan menghasilkan laporan interaksi berdasarkan persona pengguna.",
      tech: ["Python", "Llama 3.2 Vision", "Qwen-VL", "VLM"],
      link: "#"
    },
    {
      title: "M-RAG Financial Analyst",
      desc: "Merancang sistem Multimodal Retrieval-Augmented Generation untuk menganalisis laporan tahunan emiten IDX berskala ratusan halaman. Sistem mendukung retrieval informasi dari teks dan tabel, perbandingan metrik finansial, serta verifikasi jawaban terhadap sumber PDF.",
      tech: ["Multimodal RAG", "Hybrid Retrieval", "Python", "Streamlit"],
      link: "#"
    },
    {
      title: "M-RAG Legal Assistant",
      desc: "Mengembangkan sistem intelligent document processing untuk dokumen hukum menggunakan pendekatan Parent-Child Retriever dan Vision-Language Models untuk memahami serta mengekstraksi informasi dari dokumen kompleks.",
      tech: ["Python", "Llama 3.2 Vision", "NLP", "RAG"],
      link: "#"
    },
    {
      title: "PANGAN-ALERT – Explainable Spatio-Temporal Early Warning",
      desc: "Mengembangkan sistem peringatan dini untuk memprediksi penurunan Indeks Ketahanan Pangan pada 514 kabupaten/kota Indonesia. Pipeline menggabungkan data CHIRPS v3, ERA5-Land, fitur IKP temporal, dan fitur spasial berbasis KNN-5.",
      tech: ["Python", "Machine Learning", "GeoPandas", "SHAP"],
      link: "#"
    },
    {
      title: "Sustainability Resilience Intelligence – Rice Seed Supply Chain",
      desc: "Membangun sistem intelligence untuk menganalisis ketahanan rantai pasok benih padi Bali dengan menggabungkan bottleneck analysis, SHAP importance, dan actor-gap analysis menjadi priority composite, simulasi intervensi, serta Resilience Scorer + Optimizer.",
      tech: ["Random Forest", "SHAP", "Data Science", "Dashboard"],
      link: "#"
    },
    {
      title: "Urban Traffic AI Coordinator",
      desc: "Mengembangkan arsitektur AI hierarkis untuk mengoptimalkan aliran kendaraan pada jaringan lalu lintas perkotaan menggunakan representasi jaringan global dan pendekatan Reinforcement Learning.",
      tech: ["Reinforcement Learning", "GNN", "PPO", "Python"],
      link: "#"
    },
    {
      title: "FinTime (Financial Time Machine)",
      desc: "Mengembangkan platform yang memprediksi kondisi keuangan masa depan menggunakan time-series forecasting dan machine learning classification untuk menghasilkan rekomendasi berbasis kondisi finansial.",
      tech: ["FastAPI", "XGBoost", "NLP", "scikit-learn"],
      link: "#"
    },
    {
      title: "AgriRAG Smart Agriculture",
      desc: "Membangun sistem AI untuk precision agriculture yang menggabungkan RAG, Local LLM, LangChain, dan Vector Database untuk mendukung diagnosis anomali tanaman serta rekomendasi perawatan.",
      tech: ["LangChain", "RAG", "Local LLM", "Vector DB"],
      link: "#"
    },
    {
      title: "CekKontrak Legal NLP",
      desc: "Mengembangkan sistem NLP untuk mengotomatisasi review kontrak bisnis, mengekstraksi informasi penting, serta membantu mengidentifikasi anomali dan risiko pada klausul perjanjian.",
      tech: ["Python", "NLP", "Machine Learning"],
      link: "#"
    },
    {
      title: "SIMBATRAS Ecosystem",
      desc: "Membangun ekosistem platform manajemen lingkungan secara end-to-end dengan antarmuka dinamis untuk otomatisasi pelacakan saldo, komputasi laporan finansial, dan pengelolaan integritas data.",
      tech: ["Laravel", "React", "PHP", "JavaScript"],
      link: "#"
    }
  ],
    processBadge: "Workflow",
    processTitle: "Bagaimana Saya Bekerja",
    process: [
      { num: "01", title: "Diskusi & Pemetaan Data", desc: "Sesi konsultasi untuk memahami visi proyek Anda, merancang arsitektur sistem yang presisi, serta mengidentifikasi kebutuhan infrastruktur." },
      { num: "02", title: "EDA & Integrasi Model", desc: "Fase eksekusi yang mencakup Exploratory Data Analysis (EDA), optimasi model AI lokal, hingga penggabungan logika backend dan antarmuka web." },
      { num: "03", title: "Pengujian & Deployment", desc: "Validasi fungsionalitas menyeluruh menggunakan automasi cerdas (termasuk skrip ADB), diakhiri dengan proses deployment ke environment produksi." }
    ],
    testimonialBadge: "Ulasan Klien & Rekan",
    testimonialTitle: "Dampak yang Telah Diberikan",
    testimonials: [
      { name: "Budi Santoso", role: "Project Manager", text: "Sistem ekstraksi dokumen (M-RAG) yang dibangun benar-benar revolusioner. Pendekatan tanpa OCR yang diintegrasikan dengan model lokal membuat proses kami jauh lebih cepat dan aman.", rating: 5 },
      { name: "Rina Amelia", role: "Admin Sistem Terpadu", text: "Dashboard manajemen kami sekarang sangat stabil. Berkat logika pembaruan rekam jejak yang dinamis, tidak ada lagi data yang hilang dan visualisasi metrik akurat 100%.", rating: 5 },
      { name: "Ahmad Fauzi", role: "Pimpinan Redaksi", text: "Sebagai mantan Webmaster kami, ia tahu persis bagaimana menjaga portal berita tetap hidup, aman, dan cepat diakses meskipun traffic sedang membludak.", rating: 5 },
      { name: "Diana Wijaya", role: "QA Lead Engineer", text: "Agen pengujian UI otomatis berbasis Vision-Language Models yang dibuatnya sangat out-of-the-box. Otomasi eksekusi ADB ini menghemat ratusan jam kerja tim QA.", rating: 5 }
    ],
    faqTitle: "Pertanyaan Umum",
    faqDesc: "Beberapa hal teknis dan operasional yang sering ditanyakan oleh klien.",
    faqs: [
      { 
        q: "Bagaimana proses konsultasi dan pengembangan proyek berjalan?", 
        a: "Semuanya dimulai dengan Discovery Session untuk memetakan visi dan kebutuhan arsitektur Anda. Setelah itu, saya akan merancang purwarupa (EDA/UI), mengintegrasikan model AI atau logika backend, hingga tahap pengujian menyeluruh sebelum sistem dideploy ke environment produksi." 
      },
      { 
        q: "Apakah privasi data perusahaan saya terjamin jika menggunakan fitur AI?", 
        a: "Sangat terjamin. Berbeda dengan layanan API publik, saya berspesialisasi dalam inferensi Local LLM (On-Premise). Model kecerdasan buatan akan dijalankan langsung di dalam server/infrastruktur Anda sendiri, sehingga tidak ada data sensitif yang keluar dari ekosistem perusahaan." 
      },
      { 
        q: "Bisakah Anda mengintegrasikan model AI (seperti RAG atau Vision) ke aplikasi saya yang sudah ada?", 
        a: "Tentu. Saya dapat merancang microservices atau API kustom (menggunakan Python/FastAPI) yang menjembatani sistem lama Anda dengan kapabilitas AI mutakhir, baik untuk analisis dokumen, pemrosesan bahasa alami (NLP), maupun deteksi visual." 
      },
      { 
        q: "Apakah Anda menerima pembuatan web Full-Stack dari nol tanpa fitur AI?", 
        a: "Ya, saya memiliki pengalaman luas membangun arsitektur web dari dasar. Mulai dari perancangan struktur database, pengembangan backend (menggunakan ekosistem Laravel atau Python), hingga merancang antarmuka frontend yang responsif dan modern dengan React." 
      }
    ]
  },


  en: {
    nav: {
      services: "Services", portfolio: "Portfolio", workflow: "Workflow", reviews: "Reviews", faq: "FAQ"
    },
    footer: {
      desc: "Designing end-to-end intelligent software ecosystems. Let's connect and build innovative solutions together.",
      copyright: "© 2026 Satria Hadi Wiyana. All Rights Reserved."
    },
    booking: {
      badge: "Let's Collaborate",
      title: "Schedule Your Session",
      desc: "Choose a suitable date to discuss project architecture, system optimization, or other freelance opportunities.",
      profileRole: "AI/ML ENGINEER & FULL-STACK DEVELOPER",
      sessionTitle: "Discovery Session",
      duration: "30 min",
      webConf: "Web conferencing details provided upon confirmation.",
      profileDesc: "Welcome. As a Machine Learning Engineer & Full-Stack Developer, I focus on designing end-to-end intelligent systems with specialties in NLP, Computer Vision, and local model inference to ensure data privacy and cost efficiency. Please schedule an available discussion slot to explore your AI architecture needs, system optimization, or product scalability.",
      dateLabel: "Select a Date",
      timezone: "Time zone: Western Indonesia Time (WIB)",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Project Description / Discussion Topic",
      formMessagePlaceholder: "Describe your AI / Web needs here...",
      btnSubmit: "Send Request",
      btnLoading: "Sending...",
      successMsg: "Message sent! I will contact you shortly to confirm the details.",
      errorMsg: "Failed to send message. Please try again or contact me directly via email.",
      alertDate: "Please select a date from the calendar first!",
      maintenanceTitle: "System Under Maintenance",
      maintenanceDesc: "Apologies, the automated scheduling system is currently under maintenance or has reached its service quota. Please contact me directly via email: satriahadiwiyana7@gmail.com"
    },
    hero: {
      badge: "AI/ML ENGINEER & FULL-STACK DEVELOPER",
      titleStatic1: "Optimizing",
      titleStatic2: "without compromise.",
      dynamicWords: ["AI Models", "Web Systems", "NLP Features", "Local LLMs", "Vision Agents"],
      desc: "Designing end-to-end intelligent software ecosystems. Combining AI architecture (NLP & Computer Vision) with web development to produce scalable, efficient systems prioritizing data privacy through local model inference.",
      btn1: "Schedule a Consultation",
      btn2: "Download CV \u2192",
      cvLink: cvEnglish
    },
    stats: {
      badge: "Measurable Performance",
      title: "Real Impact Created.",
      items: [
        { 
          value: "3+", 
          label: "AI Architectures", 
          desc: "Implementation of VLMs, RAG architectures, and Reinforcement Learning models across applied projects." 
        },
        { 
          value: "100%", 
          label: "Stability Focus", 
          desc: "Prioritizing strict data integrity through dynamic updates without high-risk manipulations." 
        },
        { 
          value: "15+", 
          label: "Tech Stack", 
          desc: "Deep mastery across Python, React, Laravel ecosystems, ML frameworks, and local API integration." 
        },
        { 
          value: "500+", 
          label: "Experiment Hours", 
          desc: "Dedicated hours spent on local LLM inference, fine-tuning evaluation, and autonomous automation." 
        }
      ]
    },
    servicesTitle: "Consulting & Development Services",
    services: [
      { 
        title: "AI & Local LLM Integration", 
        desc: "Consulting and deployment of artificial intelligence (NLP & Computer Vision) using advanced RAG architectures. Specialized in optimizing on-premise local models for multimodal analysis and document extraction while safeguarding data privacy." 
      },
      { 
        title: "Full-Stack Web Development", 
        desc: "End-to-end engineering of responsive and scalable custom web applications built from scratch. Handling complex backend architectures, API integrations, and rigorous data integrity with modern frontends." 
      },
      { 
        title: "System Automation & Testing", 
        desc: "Development of autonomous AI agents and intelligent scripts designed to eliminate repetitive workflows. Providing advanced web scraping solutions and hands-free usability UI testing driven by Vision-Language Models." 
      }
    ],
    projectsBadge: "Track Record",
    projectsTitle: "Case Studies & Execution",
    projectsDesc: "Translating complex architectures into scalable digital solutions. Here are some implementations from local model optimization to integrated management systems.",
    projects: [
      { 
        title: "M-RAG Legal Assistant", 
        desc: "Redefining legal document extraction without relying on traditional OCR. Built using a Parent-Child Retriever architecture integrated with Vision-Language Models.", 
        tech: ["Python", "Llama 3.2 Vision", "NLP", "RAG"], 
        link: "#" 
      },
      {
        title: "TryLab AI Mobile Tester",
        desc: "Delivering mobile app usability testing automation through autonomous AI agents. Empowered by Vision-Language Models, the system interprets visual interface elements and navigates independently to generate interaction reports without human intervention.",
        tech: ["Python", "Llama 3.2 Vision", "Qwen-VL", "VLM"],
        link: "#"
      },
      {
        title: "Urban Traffic AI Coordinator",
        desc: "Solving complex urban traffic congestion through a hierarchical artificial intelligence architecture. This system builds a global network representation to provide strategic directives and dynamically optimize vehicle flow between nodes.",
        tech: ["Reinforcement Learning", "GNN", "PPO", "Python"],
        link: "#"
      },
      {
        title: "FinTime (Financial Time Machine)",
        desc: "Revolutionizing youth financial habits through a platform that predicts future financial conditions. It combines time-series forecasting models and smart classification to formulate wise recommendations with reactive avatar interventions.",
        tech: ["FastAPI", "XGBoost", "NLP", "scikit-learn"],
        link: "#"
      },
      {
        title: "M-RAG Financial Analyst",
        desc: "Extracting valuable insights from text, numerical tables, and charts within business documents. This multimodal analysis system summarizes large-scale data into precise answers equipped with strict information validity preservation strategies.",
        tech: ["Multimodal RAG", "ChromaDB", "LLaVA", "Python"],
        link: "#"
      },
      {
        title: "AgriRAG Smart Agriculture",
        desc: "Enabling precision agriculture guidance with an integrated artificial intelligence system. The platform diagnoses crop anomalies and generates accurate treatment recommendations backed by a vector database and local language models.",
        tech: ["LangChain", "RAG", "Local LLM", "Vector DB"],
        link: "#"
      },
      {
        title: "CekKontrak Legal NLP",
        desc: "Automating business-scale contract reviews to map text anomalies and minimize hidden risks. This model is specifically trained to extract crucial information and instantly analyze agreement clauses.",
        tech: ["Python", "NLP", "Machine Learning"],
        link: "#"
      },
      {
        title: "SIMBATRAS Ecosystem",
        desc: "Building an end-to-end environmental management platform ecosystem. Equipped with a dynamic interface for automated balance tracking, financial report computation, and high-performance data integrity maintenance.",
        tech: ["Laravel", "React", "PHP", "JavaScript"],
        link: "#"
      }
    ],
    processBadge: "Workflow",
    processTitle: "How I Work",
    process: [
      { num: "01", title: "Discussion & Data Mapping", desc: "Consultation session to understand your project vision, design precise system architecture, and identify infrastructure needs from the start." },
      { num: "02", title: "EDA & Model Integration", desc: "Execution phase covering Exploratory Data Analysis (EDA), local AI model optimization, to seamless backend logic and web interface integration." },
      { num: "03", title: "Testing & Deployment", desc: "Comprehensive functionality validation using smart automation (including ADB scripts), ending with a stable deployment process to production." }
    ],
    testimonialBadge: "Client & Peer Reviews",
    testimonialTitle: "The Impact Made",
    testimonials: [
      { name: "Budi Santoso", role: "Project Manager", text: "The document extraction system (M-RAG) built is truly revolutionary. The OCR-free approach integrated with local models makes our process much faster and safer.", rating: 5 },
      { name: "Rina Amelia", role: "System Administrator", text: "Our management dashboard is now very stable. Thanks to the dynamic record updating logic, there is no more lost data and metric visualizations are 100% accurate.", rating: 5 },
      { name: "Ahmad Fauzi", role: "Editor in Chief", text: "As our former Webmaster, he knows exactly how to keep the news portal alive, secure, and accessible even when traffic is booming.", rating: 5 },
      { name: "Diana Wijaya", role: "QA Lead Engineer", text: "The automated UI testing agent based on Vision-Language Models he created is very out-of-the-box. This ADB execution automation saves hundreds of hours.", rating: 5 }
    ],
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Some technical and operational things often asked by clients.",
    faqs: [
      { 
        q: "How does the consulting and project development process work?", 
        a: "Everything starts with a Discovery Session to map out your vision and architectural needs. Following that, I design prototypes (EDA/UI), integrate AI models or backend logic, and conduct comprehensive testing before deploying the system to production." 
      },
      { 
        q: "Is my company's data privacy guaranteed when using AI features?", 
        a: "Absolutely. Unlike public API services, I specialize in Local LLM inference (On-Premise). The artificial intelligence models run directly within your own server/infrastructure, ensuring no sensitive data ever leaves your company's ecosystem." 
      },
      { 
        q: "Can you integrate AI models (like RAG or Vision) into my existing application?", 
        a: "Certainly. I can design custom microservices or APIs (using Python/FastAPI) that bridge your legacy systems with cutting-edge AI capabilities, whether for document analysis, Natural Language Processing (NLP), or visual detection." 
      },
      { 
        q: "Do you build Full-Stack web applications from scratch without AI features?", 
        a: "Yes, I have extensive experience building web architectures from the ground up. This includes database structure design, backend development (using Laravel or Python ecosystems), and crafting responsive, modern frontend interfaces with React." 
      }
    ]
  }
};