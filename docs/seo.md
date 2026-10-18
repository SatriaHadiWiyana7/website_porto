# SEO portofolio

Canonical utama: `https://satria-wiyana.cloud/`.

## Implementasi

Build menghasilkan HTML berisi hero, ringkasan proyek, arsip, bio, keahlian, proses, kontak, dan footer. Konten tersebut dapat dibaca sebelum JavaScript berjalan. React kemudian mengaktifkan bahasa, dialog, dan animasi melalui hydration. Tidak ada backend saat website berjalan.

HTML awal menyertakan judul dan deskripsi spesifik, canonical, metadata Open Graph/Twitter Card, serta JSON-LD `WebSite`, `ProfilePage`, dan `Person`. Gambar sosial berukuran 1200 × 630 px menggunakan foto pemilik portofolio. Identitas dan metadata dikelola di `src/data/site.js`.

Bahasa Indonesia menjadi isi awal yang diindeks. Pilihan bahasa Inggris tersimpan di browser dan memakai URL yang sama. Sitemap hanya memuat URL canonical halaman utama; tautan bagian seperti `#projects` bukan halaman terpisah. Jika kelak dibuat URL bahasa Inggris tersendiri, tambahkan halaman, canonical, sitemap, dan pasangan `hreflang` yang sesuai.

## Setelah deployment

1. Jalankan `npm run build`, lalu unggah seluruh isi `dist/` ke root hosting domain. Jangan hanya mengunggah `index.html`; aset di `dist/assets/` juga diperlukan. Folder `dist-ssr/` tidak perlu diunggah.
2. Pastikan halaman utama, `/robots.txt`, `/sitemap.xml`, dan `/social-card.jpg` dapat diakses publik melalui HTTPS. Sumber HTML halaman utama harus memuat nama, ringkasan proyek, canonical, dan JSON-LD. Jika masih muncul judul lama `portofolio`, periksa hasil deployment dan cache hosting.
3. Arahkan varian domain yang digunakan, misalnya HTTP atau `www`, ke canonical HTTPS melalui redirect permanen di hosting. Hindari beberapa alamat yang menyajikan salinan halaman tanpa redirect.
4. Tambahkan properti domain `satria-wiyana.cloud` di [Google Search Console](https://search.google.com/search-console/) dan selesaikan verifikasi DNS sesuai instruksi Google.
5. Kirim `https://satria-wiyana.cloud/sitemap.xml` melalui menu Sitemaps. Gunakan URL Inspection untuk memeriksa halaman utama dan meminta pengindeksan setelah versi baru tersedia.
6. Periksa structured data dengan [Rich Results Test](https://search.google.com/test/rich-results), lalu pantau pengindeksan, kata pencarian, dan Core Web Vitals dari pengunjung nyata di Search Console.

Deployment, verifikasi DNS, dan pengiriman sitemap ke akun Search Console belum dilakukan oleh perubahan kode ini.

## Batas dan pemeliharaan

SEO teknis membantu mesin pencari menemukan serta memahami halaman. Posisi pertama atau halaman pertama tidak bisa dijamin. Hasil juga dipengaruhi relevansi konten, persaingan kata kunci, dan reputasi situs; sitemap tidak menjamin pengindeksan.

Jaga deskripsi proyek tetap akurat, tambahkan demo atau repository saat tersedia, serta gunakan domain yang sama pada profil publik. Saat domain berubah, perbarui `src/data/site.js`, `public/sitemap.xml`, dan `public/robots.txt`, lalu build ulang.

Rujukan resmi: [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page), dan [sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
