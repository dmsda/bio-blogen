# 🤝 Panduan Kontribusi ke BioBlogger

Terima kasih atas minat Anda untuk berkontribusi pada pengembangan **BioBlogger**! Proyek ini bersifat *open-source* dan menyambut baik kontribusi dari developer, desainer, dan pembuat konten di seluruh dunia.

---

## 🛠️ Persiapan Lingkungan Kerja (Local Setup)

1. **Fork & Clone Repository:**
   ```bash
   git clone https://github.com/dmsda/bio-blogen.git
   cd bio-blogen
   ```

2. **Instal Dependencies:**
   Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan):
   ```bash
   npm install
   ```

3. **Jalankan Server Development:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda.

4. **Validasi Build & Typecheck:**
   Sebelum membuat Pull Request, pastikan kode lulus kompilasi TypeScript dan Vite build tanpa error:
   ```bash
   npm run build
   ```

---

## 💡 Ide Kontribusi

Anda dapat berkontribusi dalam berbagai bentuk:
- 🎨 **Menambahkan Preset Tema Baru:** Buat kombinasi tema warna modern dan palet ramah aksesibilitas.
- 🔗 **Menambahkan Platform Ikon Baru:** Tambahkan SVG platform populer (seperti Medium, Substack, Twitch, Behance, Threads).
- 📱 **Memperkaya Showcase:** Buat template baru untuk profesi spesifik.
- ⚡ **Optimasi Performa & Aksesibilitas:** Peningkatan Core Web Vitals, dukungan screen-reader, dan keyboard navigation.
- 📖 **Dokumentasi & Terjemahan:** Koreksi tipografi, penambahan panduan, atau terjemahan ke bahasa lain.

---

## 🧩 Panduan Menambah Platform Ikon Baru

Buka file [src/utils/platforms.ts](file:///c:/Users/MARCOM/Desktop/BioBlogen/src/utils/platforms.ts) dan tambahkan objek baru ke dalam record `platforms`:

```typescript
export const platforms: Record<string, Platform> = {
  // ... platform lainnya ...
  
  medium: {
    id: 'medium',
    name: 'Medium',
    color: '#000000',
    textColor: '#ffffff',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <!-- Path SVG resmi berukuran 20x20 atau viewBox standar -->
    </svg>`
  }
};
```

Ikon platform baru tersebut akan otomatis muncul di seluruh dropdown menu pilihan link di dalam editor aplikasi!

---

## 🚀 Alur Pull Request (PR Workflow)

1. Buat branch baru dari `main`:
   ```bash
   git checkout -b feature/nama-fitur-baru
   ```
2. Lakukan perubahan kode dan uji coba di browser lokal.
3. Commit perubahan dengan pesan konvensional (*Conventional Commits*):
   ```bash
   git commit -m "feat: add Medium and Substack platform presets"
   ```
4. Push branch ke fork GitHub Anda:
   ```bash
   git push origin feature/nama-fitur-baru
   ```
5. Buka Pull Request di repository [dmsda/bio-blogen](https://github.com/dmsda/bio-blogen) dengan penjelasan singkat mengenai perubahan yang Anda lakukan.

---

## 📜 Kode Etik

Harap selalu bersikap ramah, sopan, dan inklusif kepada sesama kontributor dalam diskusi issue maupun review Pull Request.
