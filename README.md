# Satria Hadi Wiyana — Portfolio

Portofolio React + Vite dengan parallax 3D di seluruh halaman. Semua konten, animasi, pilihan bahasa, dan detail proyek berjalan di browser; tidak memerlukan backend atau API key.

## Menjalankan

```sh
npm install
npm run dev
```

Build statis siap hosting:

```sh
npm run build
npm run preview
```

Hasil produksi berada di `dist/`. Build mengisi HTML dengan konten halaman sebelum JavaScript dijalankan, lalu React mengaktifkan interaksi di browser. Unggah **hanya `dist/`** ke layanan hosting statis; `dist-ssr/` hanya dipakai saat build dan tidak membutuhkan server Node saat website berjalan.

Gunakan `npm run preview` untuk memeriksa hasil produksi, termasuk HTML awal dan metadata SEO. `npm run dev` tetap menyediakan pengembangan React biasa.

## Interaksi

- Kunjungan pertama per sesi dibuka dengan nama dan transisi tirai sekitar dua detik, diikuti kemunculan foto dengan perspektif 3D. Tombol lewati, Escape, atau scroll langsung membuka halaman. Pembuka dilewati untuk tautan langsung ke bagian halaman dan preferensi reduced motion.
- Hero memakai potret transparan di depan dua bidang latar yang bergerak berlawanan arah saat scroll. Kursor menggerakkan adegan dengan kedalaman terpisah untuk setiap lapisan. Pada HP, gerak mengikuti posisi potret di layar, dengan foto di antara nama dan deskripsi.
- Tiga proyek pilihan berganti dalam adegan satu layar saat scroll: Opticargo, TryLab, lalu QuantRAG-IDX. Gambar dan teks bergerak pada kecepatan berbeda; navigasi bernomor dapat langsung menuju proyek. Setelah proyek ketiga, halaman berlanjut ke arsip dan bagian Tentang. Scroll tetap native, tanpa menahan input roda mouse atau sentuhan.
- Pada ponsel dengan lebar minimal 360 px dan tinggi viewport minimal 700 px, ketiga proyek berganti dalam satu layar. Komposisi pada tinggi 700–779 px dibuat lebih ringkas. Pada layar yang lebih pendek atau sempit, proyek tampil berurutan dengan parallax agar konten tetap terbaca; preferensi reduced motion menggunakan tampilan statis.
- Pada layar sentuh, kemiringan 3D mengikuti scroll. Gerak horizontal dan kedalaman lapisan disesuaikan untuk menjaga teks dan tombol di dalam layar, tanpa memerlukan hover atau akses sensor perangkat.
- Bagian setelah proyek meneruskan kedalaman saat scroll: bidang judul Tentang bergerak berlawanan dengan latarnya, Keahlian dan Proses memiliki lapisan dengan perspektif berbeda, lalu judul Kontak dan nama pada footer bergerak secara terpisah. Formulir kontak tetap pada bidang yang stabil untuk pengisian.
- Animasi aktif otomatis tanpa toolbar ON/OFF dan tanpa membaca pengaturan OFF lama. Preferensi perangkat `prefers-reduced-motion` tetap dihormati.
- **ID/EN** mengganti bahasa dan bahasa CV yang diunduh; pilihan bahasa tersimpan lokal.
- Arsip menampilkan FinTime dan Image Captioning dalam dua komposisi gambar dengan kedalaman berbeda, diikuti indeks tujuh proyek lainnya yang langsung terbaca. Gambar dan nama proyek membuka detail yang dapat ditutup dengan Escape.
- Judul memakai variasi masking per kata, rotasi perspektif, dan perubahan fokus saat pertama masuk layar. Tautan arsip menampilkan garis bawah dan perubahan arah panah saat hover atau fokus keyboard. Animasi menghormati reduced motion.
- Formulir kontak menyiapkan draf di aplikasi email pengunjung. Pengunjung tetap mengirim email dari aplikasinya; website tidak mengirim atau menyimpan pesan.

## Mengubah konten dan tampilan

- `src/data/content.js`: data proyek bilingual dan referensi CV. Bagian statistik, FAQ, dan testimoni lama tidak ditampilkan.
- `src/assets/Casual.webp`: foto asli; `src/assets/satria-cutout.png`: versi tanpa latar yang digunakan pada hero. Detail edit ada di `docs/portrait-cutout.md`.
- `src/components/Hero.jsx` dan `Hero.css`: komposisi nama, foto, dan adegan scroll desktop.
- `src/components/Parallax.jsx`: translasi, rotasi, skala scroll, dan tilt pointer.
- `src/components/Projects.jsx` dan `src/styles/projects.css`: tiga adegan proyek, navigasi scroll, serta detail.
- `src/components/ProjectArchive.jsx`, `src/styles/project-archive.css`, dan `src/data/archiveProjects.js`: galeri arsip, indeks proyek, serta gambar dan label sumber.
- `src/components/TextReveal.jsx` dan `src/styles/text-reveal.css`: animasi judul per kata dengan tiga variasi.
- `src/data/featuredProjects.js`: ringkasan bilingual, gambar, dan tautan repository. Saat TryLab sudah publik, ubah `publicRepository` menjadi `true` dan ganti `image` dengan screenshot jika tersedia.
- `src/assets/projects/`: screenshot asli Opticargo dan FinTime, contoh dataset Image Captioning, serta ilustrasi alur TryLab dan QuantRAG. Asal visual dicatat di `docs/project-visuals.md`.
- `src/components/About.jsx`, `Services.jsx`, dan `Process.jsx`: bio, keahlian, dan proses kerja.
- `src/styles/section-depth.css` dan `work-sections.css`: komposisi lapisan 3D bagian Tentang, Keahlian, Proses, Kontak, dan footer.
- `src/components/SceneBackground.jsx`: latar polos dengan dua bidang kedalaman yang halus.
- `src/index.css` dan `src/styles/`: gaya global, responsif, serta bidang 3D CSS.
- `src/components/Booking.jsx`: formulir draf email dan alamat kontak.
- `src/components/Footer.jsx` dan `src/styles/footer.css`: identitas, direktori halaman, tautan sosial, dan nama penutup dengan parallax.

## SEO dan domain

Domain utama: `https://satria-wiyana.cloud/`.

- `src/data/site.js`: identitas, canonical, deskripsi ID/EN, gambar sosial, dan structured data.
- `scripts/metadata.mjs`: metadata judul, canonical, Open Graph, Twitter Card, dan JSON-LD di HTML awal.
- `scripts/build.mjs` dan `src/entry-server.jsx`: prerender konten ke HTML statis saat build.
- `src/components/Seo.jsx`: memperbarui deskripsi dan locale ketika pengunjung mengganti bahasa.
- `public/robots.txt`, `public/sitemap.xml`, dan `public/social-card.jpg`: aset publik untuk crawling dan pratinjau tautan.

Panduan deployment dan Google Search Console ada di [docs/seo.md](docs/seo.md).

Visual memakai CSS, SVG, dan aset foto lokal, tanpa layanan gambar eksternal saat website berjalan.
