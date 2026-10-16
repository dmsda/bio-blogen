# BioBlogger - Design System & Architecture

Dokumen ini memuat panduan sistem desain (*Design System*) dan arsitektur visual untuk **BioBlogger**. Desain aplikasi ini mengutamakan estetika modern, profesionalisme, dan kemudahan penggunaan (*User Experience*).

---

## 1. Konsep Visual Utama
BioBlogGen menggunakan pendekatan desain **Modern Dark UI**. Alih-alih antarmuka terang yang menyilaukan, alat ini didesain dengan latar belakang gelap elegan yang membuat konten *editor* dan warna *preview* terlihat sangat menonjol.

### Karakteristik Desain:
- **Clean & Focused:** Minimalisasi distraksi visual. Tidak ada garis pembatas (*border*) yang kasar.
- **Floating Elements:** Penggunaan bayangan halus (*subtle shadows*) dan efek transparan untuk membedakan kedalaman (*depth*).
- **Smooth Transitions:** Semua aksi interaktif (hover, klik, drag) dilengkapi animasi mikro agar terasa responsif.

---

## 2. Palet Warna (Color Palette)

Aplikasi ini dibangun menggunakan Tailwind CSS dengan dominasi warna netral gelap dan warna aksen cerah sebagai penanda interaksi (*feedback colors*).

### Warna Latar Belakang (Backgrounds)
- **App Background:** `bg-neutral-950` (`#0a0a0a`) - Sangat gelap, digunakan sebagai latar dasar aplikasi.
- **Card/Panel Background:** `bg-neutral-900` (`#171717`) - Digunakan untuk wadah *form* editor (Profil, Links, Theme, SEO).
- **Input Background:** `bg-neutral-950` - Digunakan di dalam input text agar terlihat "tenggelam" ke dalam card.

### Warna Teks (Typography Colors)
- **Primary Text:** `text-white` - Judul panel dan teks utama yang butuh fokus tinggi.
- **Secondary Text:** `text-neutral-400` - Subjudul, instruksi kecil, dan label.
- **Placeholder Text:** `text-neutral-600` - Teks petunjuk di dalam input yang belum diisi.

### Warna Aksen & Indikator (Semantic Colors)
Sistem ini menggunakan palet biru untuk memberikan kesan profesional dan seragam pada setiap elemen:
- **Brand/Primary Gradient:** `from-blue-400 to-blue-600` - Digunakan untuk Logo Header dan elemen bercahaya.
- **Blue Accent:** `text-blue-400`, `bg-blue-500` - Digunakan secara konsisten untuk ikon panel (Profil, Links, Theme, SEO), tombol utama, penomoran langkah, dan indikator aktif.

---

## 3. Tipografi (Typography)
Aplikasi ini secara otomatis mewarisi *font* Sans-Serif modern dari sistem operasi (*System UI Fonts* seperti San Francisco di Mac/iOS, Segoe UI di Windows, atau Roboto di Android) via Tailwind class `font-sans`.

- **Page Title:** `text-xl font-bold` (Header BioBlogger)
- **Panel Title:** `text-lg font-bold` (Contoh: "Profil Utama")
- **Labels:** `text-sm font-semibold` (Label di atas kotak input)
- **Body / Inputs:** `text-base` atau `text-sm` (Teks standar)
- **Micro-copy:** `text-xs` (Keterangan kecil di bawah input)

---

## 4. Komponen Antarmuka (UI Components)

### Panel Form (Card)
Setiap blok form (Profil, Link, Tema, SEO) dibungkus menggunakan *card* dengan spesifikasi:
```css
.bg-neutral-900 .border-neutral-800 .rounded-2xl .p-6 .shadow-sm .transition-all .hover:border-neutral-700
```
**Alasan:** Sudut yang sangat bulat (`rounded-2xl`) memberikan kesan modern yang ramah, menjauhi kesan kaku aplikasi lawas.

### Input Elements (Text, URL, Textarea)
```css
.bg-neutral-950 .border .border-neutral-800 .rounded-xl .px-4 .py-3 .focus:ring-2 .focus:ring-blue-500/50 .focus:border-blue-500
```
**Interaksi:** Saat pengguna mengklik *input*, garis pinggir akan berubah menjadi biru bercahaya (*glow*), memberikan *feedback* visual yang sangat jelas.

### Tombol Aksi (Buttons)
Tombol utama dibuat mencolok agar jelas fungsinya (Call to Action):
```css
.bg-blue-600 .hover:bg-blue-500 .text-white .shadow-lg .shadow-blue-500/30 .transition-all .hover:scale-105
```

---

## 5. Tata Letak & Responsivitas (Layout & Grid)

### Layar Desktop (Desktop View)
- Menggunakan skema Split-Screen (Grid 2 Kolom).
- **Sisi Kiri:** Area Editor yang dapat di-*scroll*.
- **Sisi Kanan:** *Live Preview* yang posisinya terkunci (*sticky*) di tengah layar, memberikan simulasi tampilan layar *smartphone* sesungguhnya secara *real-time*.

### Layar Ponsel (Mobile View)
- Menggunakan sistem **Tab Navigasi** (`Editor` dan `Preview`) di bagian bawah/atas layar.
- Menghemat ruang sehingga pengguna tetap dapat melakukan kustomisasi tanpa layarnya dipenuhi *preview* yang menutupi *form*.

---

## 6. Animasi & Interaksi Cerdas (Micro-interactions)
1. **Drag & Drop:** Menggunakan `@dnd-kit`. Tautan yang sedang ditarik (*dragged*) mendapat bayangan ekstra dan efek *opacity* agar pengguna tahu elemen tersebut sedang melayang.
2. **Toggle Switch:** Sistem membuang fitur "Checkbox" tradisional dan menggantinya dengan sakelar *toggle* modern ala iOS (bulatan putih bergeser) untuk status "Aktif/Nonaktif" tautan.
3. **Hover Efek Ekspor:** Tombol akan sedikit membesar (`hover:scale-105`) ketika di-*hover* oleh kursor.

---
*Dokumen ini merupakan referensi utama untuk menjaga konsistensi gaya (*styling*) pada rilis fitur BioBlogger di masa mendatang.*