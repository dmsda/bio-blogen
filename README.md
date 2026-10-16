# 🚀 BioBlogger (BioBlogen)

> **Client-Side Bio Link Generator Modern Khusus untuk Blogger (Blogspot) & Static Web Hosting.**  
> Buat halaman *Link in Bio* yang elegan, super cepat, responsif, dan hemat biaya (Rp 0 selamanya) langsung dari browser Anda tanpa backend, tanpa database, dan tanpa biaya langganan bulanan!

---

<!-- Badges Header -->
<div align="center">

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0-764ABC?style=for-the-badge)](https://zustand.docs.pmnd.rs/)
[![Blogger Ready](https://img.shields.io/badge/Blogger-XML%20Ready-FF5722?style=for-the-badge&logo=blogger&logoColor=white)](https://blogger.com)
[![Zero Backend](https://img.shields.io/badge/Backend-100%25%20Client--Side-brightgreen?style=for-the-badge)](#)
[![License MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

[**🔥 Buka Galeri Showcase**](SHOWCASE.md) • [**📖 Arsitektur Teknis**](ARCHITECTURE.md) • [**🤝 Panduan Kontribusi**](CONTRIBUTING.md)

</div>

---

## 💡 Mengapa Memilih BioBlogger?

Platform Bio Link pihak ketiga (seperti Linktree atau Beacons) sering kali membatasi fitur penting di balik paket berbayar yang mahal ($5 - $24 per bulan), menempelkan watermark mereka, dan mengumpulkan data analitik pribadi Anda.

**BioBlogger hadir sebagai solusi alternatif merdeka:**
- 💰 **100% Bebas Biaya (Rp 0 Selamanya):** Manfaatkan kuota hosting gratis tak terbatas dari Google Blogger (`.blogspot.com` atau Custom Domain) atau hosting statis modern (GitHub Pages, Netlify, Vercel).
- ⚡ **Performa & Skor Core Web Vitals 100/100:** Halaman hasil ekspor berupa HTML/XML murni dengan styling *inline*, sehingga dimuat di bawah **0.3 detik** tanpa jeda *render-blocking*.
- 🔒 **Privasi Mutlak (100% Client-Side):** Tidak ada data yang dikirim ke server. Seluruh pemrosesan, konversi gambar ke Base64, dan pembuatan file berlangsung langsung di browser Anda.
- 🎨 **Kustomisasi Tanpa Batas:** Bebas mengubah latar belakang, warna teks, efek animasi *hover*, hingga mengunggah logo custom sendiri tanpa batasan paket.

---

## 📱 Showcase Produk & Koleksi Template Siap Pakai

BioBlogger dilengkapi dengan **Showcase Gallery** interaktif langsung di dalam aplikasi (`#/showcase`) dan didokumentasikan lengkap di [**SHOWCASE.md**](SHOWCASE.md).

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PREVIEW TEMPLATE SHOWCASE                       │
├──────────────────────┬──────────────────────┬──────────────────────────┤
│   💻 Cyber Dev       │   🎨 Sunset Creator  │    ☕ Kopi Roastery      │
│  [Midnight Black]    │  [Sunset Gradient]   │   [Warm Espresso Mood]   │
│                      │                      │                          │
│  • GitHub & Repos    │  • Instagram Gallery │   • Order WhatsApp       │
│  • Tech Portfolio    │  • YouTube Tutorials │   • Menu Digital (PDF)   │
│  • Dev Discord       │  • Art Commission    │   • Lokasi Google Maps   │
│  (Neon Glow Hover)   │  (Glassmorphism)     │   (Floating Shift Hover) │
├──────────────────────┼──────────────────────┼──────────────────────────┤
│   💼 Executive Navy  │   🎵 Neon Musician   │    🌿 Minimalist Studio  │
│  [Royal Navy Blue]   │  [Cyberpunk Purple]  │   [Pure Studio Monochrome]│
│                      │                      │                          │
│  • Calendly Meeting  │  • Spotify Stream    │   • Architecture Work    │
│  • LinkedIn Network  │  • Apple Music       │   • Pinterest Boards     │
│  • E-Book Download   │  • Tour Tickets      │   • Studio Inquiry       │
└──────────────────────┴──────────────────────┴──────────────────────────┘
```

> 💡 *Di dalam aplikasi, Anda dapat mengklik tombol **"Gunakan"** pada template showcase apa pun untuk memuat seluruh konfigurasi tersebut ke editor dalam 1 detik!*

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
| :--- | :--- |
| **📱 Live Preview Real-Time** | Simulasi layar smartphone interaktif di sisi kanan yang langsung terupdate setiap kali Anda mengubah profil, link, atau warna. |
| **↕️ Drag & Drop Links** | Susun ulang urutan tautan Anda dengan mudah dan mulus menggunakan library `@dnd-kit`. |
| **🌐 Koleksi Ikon Platform Resmi** | Dukungan SVG resmi untuk WhatsApp, Instagram, TikTok, YouTube, GitHub, LinkedIn, Spotify, Telegram, Discord, Facebook, dan X. |
| **🖼️ Upload Ikon Custom (Base64)** | Punya logo bisnis atau brand sendiri? Unggah gambar (`.png`, `.svg`, `.webp`), dan sistem akan mengonversinya ke Base64 tanpa server luar. |
| **🎭 Preset Tema & Color Picker** | Pilihan tema instan (*Midnight*, *Minimal*, *Ocean Glass*) serta kontrol penuh kode Hex untuk warna background, teks, dan tombol. |
| **✨ 4 Efek Hover Interaktif** | Pilih animasi tombol saat disentuh atau disorot: `Scale` (membesar), `Shift` (melayang naik), `Glow` (bercahaya neon), atau `None`. |
| **🔍 Pengaturan SEO & OpenGraph** | Atur Meta Title, Meta Description, dan Favicon agar tautan Anda berpenampilan rapi saat dibagikan ke WhatsApp dan media sosial. |
| **📦 Dual Format Ekspor** | Ekspor ke **XML Blogger** (dilengkapi sistem otomatis untuk mematikan widget default Blogger) atau **HTML Statis**. |

---

## 💻 Panduan Menjalankan Secara Lokal (Development)

Proyek ini dibangun menggunakan **React 19**, **TypeScript**, **Vite**, **Zustand**, dan **Tailwind CSS**.

### 1. Prasyarat
- Pastikan komputer Anda telah terpasang **Node.js** (versi 18.x atau lebih baru).
- Git telah terpasang di sistem operasi Anda.

### 2. Kloning Repository & Instalasi
```bash
# Clone repository
git clone https://github.com/dmsda/bio-blogen.git

# Masuk ke direktori proyek
cd bio-blogen

# Instal dependencies
npm install
```

### 3. Menjalankan Server Development
```bash
npm run dev
```
Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`) di browser Anda.

### 4. Membangun Berkas Produksi (Production Build)
```bash
npm run build
```
Hasil build produksi yang teroptimasi akan berada di dalam direktori `dist/`.

---

## 📖 Panduan Penggunaan Aplikasi (Bagi Pengguna)

### Langkah 1: Mengisi Profil Utama
1. Di panel kiri, masukkan **Nama Lengkap atau Brand** Anda.
2. Tulis **Bio Singkat** (disarankan 2–3 baris agar tetap nyaman dibaca di layar HP).
3. Masukkan **URL Avatar / Foto Profil** (bisa dari link foto Instagram, Google Drive, atau Imgur). Jika dikosongkan, inisial nama Anda akan otomatis tampil dengan latar warna tombol yang elegan.

### Langkah 2: Mengelola Tautan (Links)
1. Klik tombol **"Tambah"** untuk membuat baris link baru.
2. Pilih platform media sosial dari menu *dropdown*. Warna brand dan ikon SVG resmi akan otomatis terpasang.
3. Untuk website pribadi, portfolio, atau toko online:
   - Pilih opsi **"Link Biasa"**.
   - Klik **"Pilih Ikon"** untuk mengunggah file logo dari laptop/HP Anda.
4. Gunakan ikon **titik-titik (⋮⋮)** di sebelah kiri untuk menggeser (*drag and drop*) urutan link.
5. Gunakan sakelar *toggle* untuk mengaktifkan atau menyembunyikan link tanpa menghapusnya.

### Langkah 3: Menyesuaikan Desain & Tema
1. Pilih preset tema favorit Anda (*Midnight*, *Minimal*, *Ocean Glass*).
2. Di bagian **Kustomisasi Lanjutan**, gunakan *color picker* untuk mengubah warna latar belakang, warna teks, atau warna tombol custom.
3. Anda juga dapat memasukkan CSS Linear Gradient atau URL gambar pada kolom *Background Utama*.
4. Tentukan reaksi animasi tombol di pilihan **Efek Hover Tombol** (`Scale`, `Shift`, `Glow`).

### Langkah 4: Optimasi SEO
1. Isi **Judul Halaman (Meta Title)** agar tab browser menampilkan nama Anda.
2. Tulis **Deskripsi Halaman (Meta Description)** agar tautan memiliki ringkasan menarik saat dibagikan ke WhatsApp, Telegram, atau media sosial.
3. Masukkan link gambar kecil pada kolom **URL Favicon** untuk mengganti ikon tab browser.

---

## 📥 Panduan Ekspor & Cara Memasang

Setelah selesai mendesain di *Live Preview*, klik salah satu tombol ekspor di bagian bawah editor:

### Opsi A: Memasang ke Blogger / Blogspot (Disarankan)
*Sangat direkomendasikan jika Anda ingin URL gratis seperti `namakamu.blogspot.com` atau menghubungkan custom domain pribadi secara cuma-cuma.*

1. Klik tombol **"Export XML Blogger"** (tombol warna biru). Berkas `.xml` akan terunduh.
2. Buka dashboard [Blogger](https://blogger.com) dan masuk ke akun Google Anda.
3. Buat blog baru (misal dengan alamat `bio-namakamu.blogspot.com`).
4. Buka menu **Tema (Theme)** pada navigasi sebelah kiri.
5. Klik ikon **Panah Bawah** di sebelah tombol *Sesuaikan (Customize)*, lalu pilih **Pulihkan (Restore)**.
6. Klik **Upload** dan pilih berkas `.xml` yang tadi Anda unduh.
7. Tunggu beberapa detik hingga proses restore selesai.
8. 🎉 Selesai! Bio Link Anda sudah live. Template XML BioBlogger secara otomatis menyembunyikan seluruh widget default Blogger sehingga tampilannya 100% menyerupai aplikasi web mandiri!

### Opsi B: Memasang Custom Domain ke Blogger (Gratis)
Ingin menggunakan alamat seperti `bio.namasaya.com` atau `link.tokosaya.id`?
1. Di dashboard Blogger, masuk ke menu **Setelan (Settings)**.
2. Gulir ke bagian **Memublikasikan** &rarr; Klik **Domain Kustom**.
3. Masukkan subdomain Anda (misal `bio.namasaya.com`) lalu klik Simpan.
4. Masukkan 2 baris DNS **CNAME Record** yang diberikan Blogger ke penyedia domain Anda (Cloudflare, Niagahoster, Domainesia, dsb).
5. Aktifkan fitur **Ketersediaan HTTPS** di Blogger untuk mendapatkan sertifikat SSL gratis selamanya.

### Opsi C: Memasang ke Hosting Statis (GitHub Pages / Netlify / Vercel)
1. Klik tombol **"Export HTML"**. Berkas `.html` akan terunduh.
2. Ganti nama berkas tersebut menjadi `index.html`.
3. Buat folder baru di komputer Anda dan masukkan `index.html` ke dalamnya.
4. Buka [Netlify Drop](https://app.netlify.com/drop) dan seret (*drag & drop*) folder tersebut.
5. Dalam 5 detik, Bio Link Anda sudah online dengan URL HTTPS gratis!

---

## 📂 Struktur Direktori Proyek

```
BioBlogen/
├── src/
│   ├── components/         # Komponen UI Editor & Live Preview
│   │   ├── ExportButton.tsx  # Tombol ekspor XML & HTML
│   │   ├── Layout.tsx        # Shell tata letak Split-screen & Mobile Tabs
│   │   ├── LinksEditor.tsx   # Pengelola tautan & Drag-and-drop (@dnd-kit)
│   │   ├── LivePreview.tsx   # Simulasi visual layar smartphone
│   │   ├── ProfileEditor.tsx # Form pengisian foto, nama, dan bio
│   │   ├── SeoEditor.tsx     # Form meta title, meta description, favicon
│   │   └── ThemeSelector.tsx # Pemilih preset tema & color picker lanjutan
│   ├── pages/              # Halaman Aplikasi
│   │   ├── Docs.tsx          # Panduan interaktif di dalam aplikasi
│   │   └── Showcase.tsx      # Galeri template showcase dengan 1-click apply
│   ├── store/              # State Management
│   │   └── useAppStore.ts    # Central Zustand store (Profile, Links, Theme, SEO)
│   ├── utils/              # Generator & Asset Helpers
│   │   ├── generateBloggerXML.ts # Parser & compiler template Blogger XML
│   │   ├── generateHTML.ts       # Compiler berkas HTML statis
│   │   └── platforms.ts          # Kamus platform sosial & kode SVG vektor
│   ├── App.tsx             # Root router & assembler komponen
│   ├── main.tsx            # Entry point aplikasi React 19
│   └── index.css           # Konfigurasi Tailwind CSS
├── ARCHITECTURE.md         # Dokumentasi arsitektur & rancangan sistem
├── CONTRIBUTING.md         # Panduan kontribusi bagi developer
├── DESIGN.MD               # Dokumentasi sistem desain antarmuka
├── LICENSE                 # Lisensi open-source MIT
├── package.json            # Definisi dependensi & skrip build
├── SHOWCASE.md             # Dokumentasi visual etalase showcase template
└── vite.config.ts          # Konfigurasi bundler Vite
```

---

## ❓ FAQ (Frequently Asked Questions)

<details>
<summary><b>Apakah ada batasan jumlah tautan atau klik pengunjung?</b></summary>
<p>Sama sekali tidak ada! BioBlogger adalah aplikasi client-side open source. Anda bebas membuat link sebanyak yang Anda inginkan dan menerima jutaan pengunjung tanpa biaya sepeser pun.</p>
</details>

<details>
<summary><b>Mengapa hasil ekspor Blogger XML tidak menampilkan widget bawaan Blogger?</b></summary>
<p>Generator BioBlogger menyertakan kode styling khusus untuk menyembunyikan section widget bawaan Blogger (Navbar, Footer, Sidebar, Header default). Halaman yang tampil murni hanya Bio Link Anda.</p>
</details>

<details>
<summary><b>Apakah saya bisa memasang Google Analytics atau Meta Pixel?</b></summary>
<p>Tentu saja! Pada berkas HTML atau XML yang diunduh, Anda cukup menyisipkan tag script Google Analytics (GTAG) atau Meta Pixel di dalam blok <code>&lt;head&gt;</code> sebelum mengunggahnya.</p>
</details>

<details>
<summary><b>Apakah gambar avatar saya aman?</b></summary>
<p>Ya. Jika Anda mengunggah logo custom, gambar tersebut diubah menjadi format data string Base64 yang langsung tertanam di dalam berkas HTML/XML Anda, sehingga tidak memerlukan hosting pihak ketiga.</p>
</details>

---

## 🤝 Berkontribusi

Kontribusi dari siapa saja sangat diterima! Silakan baca panduan lengkap pada [CONTRIBUTING.md](CONTRIBUTING.md) untuk mempelajari cara menambahkan platform baru, membuat tema baru, atau melaporkan kendala teknis.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah naungan **[MIT License](LICENSE)**. Anda bebas menggunakan, memodifikasi, dan mendistribusikan aplikasi ini untuk keperluan personal maupun komersial.

---

<div align="center">
Dibuat dengan ❤️ oleh <a href="https://github.com/dmsda"><strong>dmsda</strong></a> untuk memajukan komunitas kreator digital dan pengembang web.
</div>
