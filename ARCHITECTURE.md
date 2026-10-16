# 🏗️ Arsitektur & Desain Sistem BioBlogger

Dokumen ini menjelaskan rancangan arsitektur teknis, aliran data, dan keputusan teknologi di balik **BioBlogger**.

---

## 📐 Arsitektur Tingkat Tinggi (High-Level Architecture)

BioBlogger beroperasi **100% pada sisi klien (Client-Side Only)** tanpa backend server, database relasional, maupun API eksternal. Seluruh logika aplikasi, kustomisasi state, pemrosesan file, dan generasi template berjalan langsung di browser pengguna menggunakan Web API standar.

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser Runtime                       │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │             Zustand Central Store (State)             │  │
│  │   • ProfileState   • LinkItem[]   • SeoState  • Theme │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             │                               │
│            ┌────────────────┴────────────────┐              │
│            ▼                                 ▼              │
│  ┌───────────────────┐             ┌───────────────────┐    │
│  │   Editor Panels   │             │   Live Preview    │    │
│  │  (Profile, Links, │  (Reactive) │   (Mobile Phone   │    │
│  │   Theme, SEO)     │             │    Mockup View)   │    │
│  └─────────┬─────────┘             └───────────────────┘    │
│            │                                                │
│            ▼ (User Triggered Export)                        │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                Template Generator Engines             │  │
│  │    • generateBloggerXML(state)  • generateHTML(state) │  │
│  └──────────────────────────┬────────────────────────────┘  │
│                             ▼                               │
│              Blob URL & Instant File Download               │
│               (.xml Blogger / .html Statis)                 │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗃️ Pengelolaan State (Zustand Store)

State aplikasi didefinisikan secara terpusat di `src/store/useAppStore.ts`. 

### Struktur State Utama:
- `profile`:
  - `name`: string
  - `bio`: string
  - `avatarUrl`: string (mendukung URL web atau Base64)
- `links`: Array of `LinkItem`:
  - `id`: string (UUID)
  - `title`: string
  - `url`: string
  - `icon`: string (`instagram`, `whatsapp`, `github`, `linkedin`, `spotify`, `custom`, dll)
  - `customIconUrl`?: string (Base64 data URL)
  - `isActive`: boolean
- `seo`:
  - `title`: string
  - `description`: string
  - `faviconUrl`: string
- `theme`:
  - `preset`: string (`dark`, `light`, `glass`, `custom`)
  - `backgroundColor`: string (Hex atau CSS Linear Gradient)
  - `backgroundImage`?: string
  - `textColor`: string (Hex)
  - `buttonColor`: string (Hex atau rgba)
  - `buttonTextColor`: string (Hex)
  - `buttonHoverStyle`: `'scale' | 'shift' | 'glow' | 'none'`

### Keunggulan Pemilihan Zustand:
1. **Zero Boilerplate:** Tidak memerlukan context provider wrapper di root aplikasi.
2. **Selective Rerendering:** Komponen hanya merender ulang jika bagian state yang mereka langgani berubah.
3. **Atomic Actions:** Aksi seperti `loadTemplate(data)` dapat mengganti seluruh profil dan tema secara serentak tanpa race condition.

---

## 🔄 Drag & Drop Sorting (`@dnd-kit`)

Fitur pengurutan link menggunakan library `@dnd-kit/core` dan `@dnd-kit/sortable`:
- `PointerSensor`: Menangani interaksi mouse dan touch screen di perangkat seluler dengan sensitivitas tinggi.
- `KeyboardSensor`: Menyediakan aksesibilitas keyboard (WCAG compliance) menggunakan `sortableKeyboardCoordinates`.
- `arrayMove`: Mengatur ulang urutan array link secara *in-place* saat event `onDragEnd` terpicu.

---

## ⚙️ Generator Engine

### 1. Blogger XML Engine (`src/utils/generateBloggerXML.ts`)
Blogger (Blogspot) menggunakan format XML kepemilikan Google yang memerlukan penanganan khusus:
- **Namespace Khusus:**
  - `xmlns:b='http://www.google.com/2005/gml/b'`
  - `xmlns:data='http://www.google.com/2005/gml/data'`
  - `xmlns:expr='http://www.google.com/2005/gml/expr'`
- **CSS Skin (`<b:skin>`):** Seluruh styling diinjeksi ke dalam blok CDATA agar tidak mengalami *escaping* karakter oleh parser Blogger.
- **Widget Suppression:**
  Blogger secara bawaan mewajibkan adanya widget (seperti `Header`, `Blog`, atau `Sidebar`). BioBlogger menyertakan blok widget tersembunyi (`<b:section id='hidden-section'/>`) yang dimatikan dengan `.blogger-widgets { display: none !important; }`. Dengan begitu, halaman terlihat 100% seperti web aplikasi mandiri tanpa sisa elemen blog.

### 2. Static HTML Engine (`src/utils/generateHTML.ts`)
- Menghasilkan berkas `index.html` mandiri (*standalone*) tanpa dependensi eksternal.
- CSS ditulis *inline* di dalam tag `<style>` untuk memastikan LCP (Largest Contentful Paint) tercepat tanpa render-blocking request.
- Gambar dan ikon SVG di-embed langsung ke dalam markup.

---

## 🛡️ Keamanan & Privasi

1. **Client-Side Isolated:** Tidak ada token, email, atau data tautan yang dikirimkan ke server eksternal.
2. **Safe Icon Processing:** File gambar yang diunggah pengguna dikonversi secara lokal via `FileReader.readAsDataURL` dan disimpan sebagai string Base64.
3. **Clean Anchor Rel:** Semua tautan eksternal menggunakan `target="_blank"` dan `rel="noopener noreferrer"` untuk mencegah serangan *reverse tabnabbing*.

---
*Dokumentasi arsitektur ini dipelihara oleh tim pengembang BioBlogger.*
