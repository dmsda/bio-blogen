import React, { useEffect } from 'react';

export const Docs: React.FC = () => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-y-auto pb-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
              Panduan BioBlogger
            </h1>
            <p className="text-neutral-400 text-sm">Pelajari cara membuat, mengatur, dan mengekspor Bio Link Anda.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#/showcase"
              className="bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Showcase Template
            </a>
            <a
              href="#/"
              className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:border-neutral-700 flex items-center gap-2 shadow-lg shadow-black/20"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Editor
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-neutral-300 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
              Mengisi Profil Utama
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm">
              <p className="mb-4 text-sm text-neutral-400">Bagian atas editor dikhususkan untuk informasi profil Anda:</p>
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong className="text-white">Foto Profil:</strong> Masukkan URL gambar (contoh dari Instagram, Google Drive, atau Imgur). Jika dikosongkan, inisial nama Anda akan digunakan sebagai pengganti foto.</li>
                <li><strong className="text-white">Nama:</strong> Masukkan nama lengkap atau nama *brand* Anda.</li>
                <li><strong className="text-white">Bio Singkat:</strong> Tuliskan deskripsi atau *tagline* (maksimal 2-3 baris sangat disarankan agar tampilan rapi di perangkat seluler).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
              Mengelola Tautan (Links)
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm">
              <p className="mb-4 text-sm text-neutral-400">Anda dapat membuat tautan sebanyak yang Anda inginkan:</p>
              <ul className="list-disc pl-5 space-y-3 text-sm mb-4">
                <li>Klik tombol <strong className="text-white">"Tambah"</strong> untuk membuat tautan baru.</li>
                <li>Pilih platform dari *dropdown*. Ikon resmi (seperti WhatsApp, TikTok, Instagram) beserta warna *brand*-nya akan otomatis terpasang.</li>
                <li><strong className="text-white">Link Biasa (Kustom):</strong> Jika Anda ingin memasukkan tautan web pribadi atau toko lain, pilih opsi "Link Biasa". Anda bisa mengklik tombol "Pilih Ikon" untuk mengunggah logo berformat SVG, PNG, atau WebP dari komputer Anda. Gambar akan dikonversi ke *Base64* sehingga tidak memerlukan server pihak ketiga.</li>
                <li>Gunakan ikon "enam titik" (⋮⋮) di bagian kiri baris tautan untuk <strong className="text-white">menarik (Drag & Drop)</strong> dan menyusun ulang urutannya.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
              Kustomisasi Tema & Efek
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm">
              <p className="mb-4 text-sm text-neutral-400">Pilih dari preset yang tersedia atau buat tema unik Anda sendiri:</p>
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li>Gulir ke bagian <strong className="text-white">Kustomisasi Lanjutan</strong> untuk menggunakan <em>Color Picker</em>. Anda bebas mewarnai <em>background</em>, teks, hingga tombol kustom sesuka hati.</li>
                <li><strong className="text-white">Efek Hover Tombol:</strong> Tentukan reaksi tombol saat pengunjung mengarahkan kursor <em>mouse</em> ke atasnya. Anda bisa memilih efek <em>Scale</em> (tombol membesar), <em>Shift</em> (tombol melayang naik), atau <em>Glow</em> (tombol memancarkan cahaya neon).</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">4</span>
              Pengaturan SEO
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm">
              <p className="mb-4 text-sm text-neutral-400">Pastikan Bio Link Anda terlihat profesional saat dibagikan ke media sosial:</p>
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li><strong className="text-white">Judul Halaman (Meta Title):</strong> Teks yang akan muncul di *tab* browser dan menjadi judul pencarian di Google.</li>
                <li><strong className="text-white">Deskripsi Halaman (Meta Description):</strong> Cuplikan teks penjelasan yang muncul di bawah judul saat Anda membagikan tautan ini ke WhatsApp, Facebook, Instagram, atau X/Twitter.</li>
                <li><strong className="text-white">Favicon:</strong> Masukkan URL gambar kecil untuk menggantikan ikon "globe" bawaan browser di sebelah *tab title*.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">5</span>
              Cara Mengekspor & Memasang
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm space-y-8">
              
              <div>
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  Opsi A: Memasang ke Blogger (Disarankan)
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-neutral-400">
                  <li>Klik tombol <strong className="text-white">"Export XML Blogger"</strong> di bagian paling bawah halaman editor.</li>
                  <li>Buka *dashboard* Blogger Anda (<a href="https://blogger.com" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">blogger.com</a>).</li>
                  <li>Masuk ke menu <strong className="text-white">Tema (Theme)</strong>.</li>
                  <li>Klik ikon Panah Bawah di sebelah tombol <em>Sesuaikan (Customize)</em>, lalu pilih <strong className="text-white">Pulihkan (Restore)</strong>.</li>
                  <li>Klik <strong className="text-white">Upload</strong> dan pilih file `.xml` yang baru saja Anda unduh.</li>
                  <li className="text-blue-400 mt-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    🎉 Selesai! XML ini telah dikodekan secara khusus untuk "menyembunyikan" widget bawaan Blogger sehingga halaman Anda 100% terlihat seperti Bio Link profesional.
                  </li>
                </ol>
              </div>

              <div className="pt-6 border-t border-neutral-800">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  Opsi B: Memasang ke Hosting Sendiri (HTML)
                </h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-neutral-400">
                  <li>Klik tombol <strong className="text-white">"Export HTML"</strong>.</li>
                  <li>Ubah nama file unduhan menjadi <code>index.html</code>.</li>
                  <li>Buat folder baru di komputer Anda, lalu pindahkan file tersebut ke dalamnya.</li>
                  <li><em>Drag & Drop</em> folder tersebut ke layanan hosting statis gratis seperti <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Netlify Drop</a>.</li>
                  <li className="text-blue-400 mt-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    🎉 Dalam hitungan detik, Anda akan mendapatkan URL statis yang bisa Anda tautkan di Instagram/TikTok Anda.
                  </li>
                </ol>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">6</span>
              Menghubungkan Custom Domain ke Blogger (Gratis)
            </h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-sm space-y-4">
              <p className="text-sm text-neutral-400">
                Ingin menggunakan domain sendiri seperti <code className="text-blue-400">bio.namakamu.com</code> atau <code className="text-blue-400">link.tokokamu.id</code>? Blogger menyediakannya 100% gratis tanpa biaya langganan bulanan:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-sm text-neutral-400">
                <li>Buka Dashboard Blogger &rarr; Menu <strong className="text-white">Setelan (Settings)</strong>.</li>
                <li>Gulir ke bagian <strong className="text-white">Memublikasikan (Publishing)</strong> &rarr; Klik <strong className="text-white">Domain Kustom</strong>.</li>
                <li>Masukkan subdomain Anda (contoh: <code>bio.namakamu.com</code>) lalu klik Simpan.</li>
                <li>Blogger akan menampilkan 2 baris <strong>CNAME Record</strong> yang perlu Anda masukkan di DNS manager domain Anda (seperti Cloudflare, Niagahoster, Domainesia, dsb).</li>
                <li>Tambahkan CNAME tersebut ke DNS manager Anda, tunggu propagasi (biasanya 5-15 menit), lalu centang <strong className="text-white">Ketersediaan HTTPS</strong> di Blogger.</li>
                <li className="text-emerald-400 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  ✅ Sekarang Bio Link Anda telah aktif di domain pribadi dengan sertifikat SSL gratis selamanya!
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 w-8 h-8 rounded-lg flex items-center justify-center text-sm">7</span>
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <div className="space-y-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                <h3 className="font-bold text-white text-sm mb-2">Apakah ada biaya berlangganan atau batasan jumlah klik?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Tidak ada! BioBlogger 100% client-side dan open source. Tidak ada batasan klik, tidak ada akun yang kedaluwarsa, dan tidak ada biaya langganan bulanan.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                <h3 className="font-bold text-white text-sm mb-2">Mengapa Bio Link hasil ekspor sangat cepat dimuat?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  File HTML dan XML Blogger yang dihasilkan menggunakan inline styling modern dan SVG vektor murni tanpa memuat framework JavaScript berat di browser pengunjung. Halaman dimuat di bawah 0.3 detik!
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
                <h3 className="font-bold text-white text-sm mb-2">Di mana data link saya disimpan saat mengedit?</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Data diproses sepenuhnya di memori browser Anda menggunakan state management lokal (Zustand). Tidak ada data profil atau link yang dikirim ke server pihak ketiga manapun.
                </p>
              </div>
            </div>
          </section>

        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            BioBlogger &copy; {new Date().getFullYear()} - Dibuat untuk meningkatkan produktivitas <i>Personal Branding</i> Anda.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#/" className="hover:text-blue-400 transition-colors">Editor</a>
            <a href="#/showcase" className="hover:text-blue-400 transition-colors">Showcase</a>
            <a href="https://github.com/dmsda/bio-blogen" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
};
