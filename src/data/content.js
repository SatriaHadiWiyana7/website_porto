export const content = {
  id: {
    nav: {
      services: "Layanan", portfolio: "Portofolio", workflow: "Alur Kerja", reviews: "Ulasan", faq: "FAQ"
    },
    booking: {
      badge: "Mari Berkolaborasi",
      title: "Jadwalkan Sesi Anda",
      desc: "Pilih tanggal yang sesuai untuk membahas arsitektur proyek, optimasi sistem, atau peluang freelance lainnya.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formDate: "Pilih Tanggal",
      formMessage: "Deskripsi Proyek / Topik Diskusi",
      btnSubmit: "Kirim Jadwal",
      btnLoading: "Mengirim...",
      successMsg: "Pesan terkirim! Saya akan segera menghubungi Anda untuk konfirmasi.",
      errorMsg: "Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung."
    },
    hero: {
      badge: "MACHINE LEARNING & FULL-STACK DEV",
      titleStatic1: "Optimasi",
      titleStatic2: "tanpa kompromi.",
      dynamicWords: ["Model AI", "Sistem Web", "Fitur NLP", "LLM Lokal", "Agen Visual"],
      desc: "Merancang ekosistem perangkat lunak cerdas secara end-to-end. Memadukan arsitektur AI (NLP & Computer Vision) dengan pengembangan web untuk menghasilkan sistem yang scalable, efisien, dan memprioritaskan privasi data melalui inferensi model lokal.",
      btn1: "Jadwalkan Sesi Konsultasi",
      btn2: "Unduh CV \u2192"
    },
    stats: {
      badge: "Kinerja Terukur",
      title: "Dampak Nyata yang Tercipta.",
      items: [
        { value: "3+", label: "Arsitektur AI", desc: "Implementasi VLM, arsitektur RAG, dan model Reinforcement Learning dalam proyek terapan." },
        { value: "100%", label: "Fokus Stabilitas", desc: "Memprioritaskan integritas data dengan pembaruan dinamis tanpa manipulasi berisiko." },
        { value: "5+", label: "Tech Stack", desc: "Penguasaan mendalam pada ekosistem Python, React, Laravel, dan integrasi API lokal." },
        { value: "100+", label: "Jam Training", desc: "Dedikasi waktu dalam inferensi model LLM lokal dan pengujian antarmuka otomatis." }
      ]
    },
    servicesTitle: "Layanan Konsultasi & Pengembangan",
    services: [
      { title: "Integrasi AI & Local LLM", desc: "Konsultasi dan implementasi model Kecerdasan Buatan (NLP, Computer Vision) ke dalam sistem bisnis Anda. Spesialisasi optimasi model lokal (on-premise) untuk efisiensi dan privasi data." },
      { title: "Full-Stack Web Development", desc: "Pembuatan aplikasi web kustom yang responsif dan skalabel dari nol. Menangani arsitektur backend yang kompleks hingga antarmuka frontend yang modern." },
      { title: "Automasi Sistem & Pengujian", desc: "Pengembangan agen otonom dan skrip cerdas untuk web scraping, automasi alur kerja, hingga pengujian UI aplikasi otomatis menggunakan Vision-Language Models." }
    ],
    projectsBadge: "Rekam Jejak",
    projectsTitle: "Studi Kasus & Eksekusi Sistem",
    projectsDesc: "Menerjemahkan arsitektur kompleks menjadi solusi digital yang terukur. Berikut adalah beberapa implementasi dari optimasi model lokal hingga sistem manajemen terpadu.",
    projects: [
      { title: "M-RAG Legal Assistant", desc: "Mendefinisikan ulang ekstraksi dokumen hukum tanpa OCR. Dibangun menggunakan arsitektur Parent-Child Retriever dan Vision-Language Models terintegrasi.", tech: ["Python", "Llama 3.2 Vision", "NLP", "RAG"], link: "#" },
      { title: "SIMBATRAS Dashboard", desc: "Sistem informasi manajemen bank sampah berbasis web. Dirancang untuk stabilitas data tingkat tinggi dengan visualisasi metrik yang akurat.", tech: ["React", "Laravel", "Tailwind CSS", "MySQL"], link: "#" },
      { title: "Synthetic User Testing Agent", desc: "Inovasi pengujian fungsionalitas aplikasi Android. Memanfaatkan agen otonom untuk mengeksekusi navigasi UI secara otomatis layaknya manusia.", tech: ["Python", "Computer Vision", "ADB", "Automation"], link: "#" }
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
      { q: "Apakah Anda menerima proyek pembuatan web dari nol?", a: "Ya, saya berpengalaman membangun sistem full-stack mulai dari perancangan database (MySQL), pengembangan backend (Laravel/Python), hingga frontend (React/Tailwind)." },
      { q: "Bagaimana cara kerja integrasi AI Lokal (On-Premise)?", a: "Saya menggunakan model open-source mutakhir yang di-deploy langsung di komputer/server Anda. Keuntungannya: privasi data 100% terjaga dan tanpa biaya API bulanan." },
      { q: "Apakah Anda bisa membuat sistem AI untuk membaca dokumen hukum?", a: "Sangat bisa. Saya spesialis dalam membangun sistem Multimodal RAG yang dapat mengekstrak dan menjawab pertanyaan dari dokumen PDF/gambar secara presisi tanpa OCR tradisional." },
      { q: "Apakah melayani perbaikan pada sistem web yang sudah ada?", a: "Tentu. Berbekal pengalaman Webmaster, saya terbiasa melakukan pemeliharaan, sinkronisasi database, hingga optimasi fitur tanpa mengganggu stabilitas data yang ada." }
    ]
  },


  en: {
    nav: {
      services: "Services", portfolio: "Portfolio", workflow: "Workflow", reviews: "Reviews", faq: "FAQ"
    },
    booking: {
      badge: "Let's Collaborate",
      title: "Schedule Your Session",
      desc: "Choose a suitable date to discuss project architecture, system optimization, or other freelance opportunities.",
      formName: "Full Name",
      formEmail: "Email Address",
      formDate: "Select Date",
      formMessage: "Project Description / Discussion Topic",
      btnSubmit: "Send Request",
      btnLoading: "Sending...",
      successMsg: "Message sent! I will contact you shortly to confirm the details.",
      errorMsg: "Failed to send message. Please try again or contact me directly via email."
    },
    hero: {
      badge: "MACHINE LEARNING & FULL-STACK DEV",
      titleStatic1: "Optimizing",
      titleStatic2: "without compromise.",
      dynamicWords: ["AI Models", "Web Systems", "NLP Features", "Local LLMs", "Vision Agents"],
      desc: "Designing end-to-end intelligent software ecosystems. Combining AI architecture (NLP & Computer Vision) with web development to produce scalable, efficient systems prioritizing data privacy through local model inference.",
      btn1: "Schedule a Consultation",
      btn2: "Download CV \u2192"
    },
    stats: {
      badge: "Measurable Performance",
      title: "Real Impact Created.",
      items: [
        { value: "3+", label: "AI Architectures", desc: "Implementation of VLM, RAG architectures, and Reinforcement Learning in applied projects." },
        { value: "100%", label: "Stability Focus", desc: "Prioritizing data integrity with dynamic record updating without risky manipulation." },
        { value: "5+", label: "Tech Stack", desc: "In-depth mastery of Python, React, Laravel ecosystems, and local API integration." },
        { value: "100+", label: "Training Hours", desc: "Dedicated time in local LLM inference and automated interface testing." }
      ]
    },
    servicesTitle: "Consulting & Development Services",
    services: [
      { title: "AI & Local LLM Integration", desc: "Consultation and implementation of Artificial Intelligence models (NLP, Computer Vision) into your business systems. Specializing in local model (on-premise) optimization." },
      { title: "Full-Stack Web Development", desc: "Building responsive and scalable custom web applications from scratch. Handling complex backend architectures to modern, interactive frontend interfaces." },
      { title: "System Automation & Testing", desc: "Development of autonomous agents and smart scripts for web scraping, workflow automation, and automated UI testing using Vision-Language Models." }
    ],
    projectsBadge: "Track Record",
    projectsTitle: "Case Studies & Execution",
    projectsDesc: "Translating complex architectures into scalable digital solutions. Here are some implementations from local model optimization to integrated management systems.",
    projects: [
      { title: "M-RAG Legal Assistant", desc: "Redefining legal document extraction without OCR. Built using Parent-Child Retriever architecture and integrated Vision-Language Models.", tech: ["Python", "Llama 3.2 Vision", "NLP", "RAG"], link: "#" },
      { title: "SIMBATRAS Dashboard", desc: "Web-based waste bank management information system. Designed for high-level data stability with accurate metric visualization.", tech: ["React", "Laravel", "Tailwind CSS", "MySQL"], link: "#" },
      { title: "Synthetic User Testing Agent", desc: "Android app functionality testing innovation. Utilizing autonomous agents to execute UI navigation automatically like a human.", tech: ["Python", "Computer Vision", "ADB", "Automation"], link: "#" }
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
      { q: "Do you accept web development projects from scratch?", a: "Yes, I am experienced in building full-stack systems from database design (MySQL), backend development (Laravel/Python), to modern frontend interfaces (React/Tailwind)." },
      { q: "How does Local AI Integration (On-Premise) work?", a: "I use cutting-edge open-source models deployed directly on your computer/server. The advantage: 100% data privacy is maintained and no monthly API fees." },
      { q: "Can you build an AI system to read legal documents?", a: "Absolutely. I specialize in building Multimodal RAG systems that can extract and answer questions from PDF documents/images precisely without traditional OCR." },
      { q: "Do you provide maintenance for existing web systems?", a: "Certainly. Armed with Webmaster experience, I am used to performing maintenance, database synchronization, to feature optimization without disrupting data stability." }
    ]
  }
};