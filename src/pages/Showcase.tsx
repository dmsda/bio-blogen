import React, { useState, useEffect } from 'react';
import { useAppStore, ProfileState, LinkItem, SeoState, ThemeState } from '../store/useAppStore';

interface ShowcaseTemplate {
  id: string;
  name: string;
  category: 'tech' | 'creator' | 'business' | 'music' | 'minimal';
  categoryLabel: string;
  tagline: string;
  description: string;
  data: {
    profile: ProfileState;
    links: LinkItem[];
    seo: SeoState;
    theme: ThemeState;
  };
}

export const SHOWCASE_TEMPLATES: ShowcaseTemplate[] = [
  {
    id: 'cyber-developer',
    name: 'Cyber Developer',
    category: 'tech',
    categoryLabel: 'Tech & Dev',
    tagline: 'Modern Dark Glow untuk Software Engineer & Open Source Lead',
    description: 'Palet gelap ultra-modern dengan efek hover glow neon. Cocok untuk programmer, tech lead, dan kreator konten pemrograman.',
    data: {
      profile: {
        name: 'Dimas Arya',
        bio: 'Senior Full-Stack Engineer & Open Source Creator ⚡ Building high-performance web apps & developer tools.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'GitHub Profile & Repositories', url: 'https://github.com/dmsda', icon: 'github', isActive: true },
        { id: '2', title: 'Personal Tech Portfolio & Case Studies', url: 'https://example.com/portfolio', icon: 'custom', isActive: true },
        { id: '3', title: 'Connect on LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', isActive: true },
        { id: '4', title: 'Follow on X / Tech Updates', url: 'https://x.com', icon: 'x', isActive: true },
        { id: '5', title: 'Join Dev Community on Discord', url: 'https://discord.com', icon: 'discord', isActive: true },
      ],
      seo: {
        title: 'Dimas Arya | Senior Engineer & Open Source',
        description: 'Portfolio, GitHub repos, and articles by Dimas Arya. Building modern web experiences.',
        faviconUrl: '',
      },
      theme: {
        preset: 'dark',
        backgroundColor: '#0a0a0a',
        textColor: '#f9fafb',
        buttonColor: '#1e293b',
        buttonTextColor: '#38bdf8',
        buttonHoverStyle: 'glow',
      },
    },
  },
  {
    id: 'creator-artist',
    name: 'Sunset Visual Creator',
    category: 'creator',
    categoryLabel: 'Creator & Seni',
    tagline: 'Gradasi Sunset Hangat untuk Ilustrator & Konten Kreator',
    description: 'Desain visual yang memesona dengan warna hangat dan tombol kaca transparan. Menonjolkan karya visual dan media sosial.',
    data: {
      profile: {
        name: 'Sarah Anindya',
        bio: 'Visual Artist & Creative Director 🎨 Sharing daily illustrations, brushes, and digital art tutorials.',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'Instagram Portfolio & Reels', url: 'https://instagram.com', icon: 'instagram', isActive: true },
        { id: '2', title: 'Art Tutorial on YouTube', url: 'https://youtube.com', icon: 'youtube', isActive: true },
        { id: '3', title: 'TikTok Creative Process', url: 'https://tiktok.com', icon: 'tiktok', isActive: true },
        { id: '4', title: 'Download Procreate Brushes & Prints', url: 'https://example.com/shop', icon: 'custom', isActive: true },
        { id: '5', title: 'Art Commission Inquiry via WhatsApp', url: 'https://wa.me/123456789', icon: 'whatsapp', isActive: true },
      ],
      seo: {
        title: 'Sarah Anindya - Digital Art & Illustrations',
        description: 'Explore the creative world of Sarah Anindya. Tutorials, brush packs, and art commissions.',
        faviconUrl: '',
      },
      theme: {
        preset: 'glass',
        backgroundColor: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
        textColor: '#ffffff',
        buttonColor: 'rgba(255, 255, 255, 0.22)',
        buttonTextColor: '#ffffff',
        buttonHoverStyle: 'scale',
      },
    },
  },
  {
    id: 'artisan-cafe',
    name: 'Kopi Senja Roastery',
    category: 'business',
    categoryLabel: 'Bisnis & Kuliner',
    tagline: 'Earthy Espresso Mood untuk Cafe, Bakery, & Kuliner',
    description: 'Nuansa warna kopi yang hangat dan ramah seluler. Sangat efektif untuk mengonversi pengunjung menjadi pembeli langsung via WhatsApp dan Food Delivery.',
    data: {
      profile: {
        name: 'Kopi Senja Roastery',
        bio: 'Artisan Specialty Coffee & Sourdough Pastry ☕ Buka setiap hari 08.00 - 22.00 WIB. Pet-friendly space.',
        avatarUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'Order Online via WhatsApp', url: 'https://wa.me/6281234567890', icon: 'whatsapp', isActive: true },
        { id: '2', title: 'Lihat Menu Lengkap & Promo PDF', url: 'https://example.com/menu.pdf', icon: 'custom', isActive: true },
        { id: '3', title: 'Petunjuk Arah Google Maps', url: 'https://maps.google.com', icon: 'custom', isActive: true },
        { id: '4', title: 'Follow Instagram @kopisenja', url: 'https://instagram.com', icon: 'instagram', isActive: true },
        { id: '5', title: 'Order via GoFood / GrabFood', url: 'https://example.com/delivery', icon: 'custom', isActive: true },
      ],
      seo: {
        title: 'Kopi Senja Roastery - Menu & Pemesanan',
        description: 'Specialty coffee roastery di Jakarta Selatan. Pesan online via WhatsApp dan lihat menu favorit kami.',
        faviconUrl: '',
      },
      theme: {
        preset: 'custom',
        backgroundColor: '#1c1917',
        textColor: '#fef3c7',
        buttonColor: '#78350f',
        buttonTextColor: '#ffffff',
        buttonHoverStyle: 'shift',
      },
    },
  },
  {
    id: 'consultant-executive',
    name: 'Executive Strategist',
    category: 'business',
    categoryLabel: 'Bisnis & Konsultan',
    tagline: 'Deep Royal Navy untuk Konsultan, Coach, & Pembicara',
    description: 'Tampilan kredibel, tajam, dan elegan untuk para profesional bisnis, konsultan manajemen, dan eksekutif.',
    data: {
      profile: {
        name: 'Dr. Hendra Pratama, MBA',
        bio: 'Business Strategy Advisor & Keynote Speaker 📈 Helping startup founders navigate scale and sustainable profitability.',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'Jadwalkan Sesi Konsultasi (Calendly)', url: 'https://calendly.com', icon: 'custom', isActive: true },
        { id: '2', title: 'Professional Network on LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', isActive: true },
        { id: '3', title: 'Unduh E-Book: Scaling 101', url: 'https://example.com/ebook', icon: 'custom', isActive: true },
        { id: '4', title: 'Undangan Pembicara & Workshop', url: 'https://wa.me/6281234567890', icon: 'whatsapp', isActive: true },
        { id: '5', title: 'Follow Business Insights on X', url: 'https://x.com', icon: 'x', isActive: true },
      ],
      seo: {
        title: 'Dr. Hendra Pratama - Business Advisor & Speaker',
        description: 'Official link in bio for Dr. Hendra Pratama. Book consultations, read publications, and invite for keynotes.',
        faviconUrl: '',
      },
      theme: {
        preset: 'custom',
        backgroundColor: '#0f172a',
        textColor: '#f8fafc',
        buttonColor: '#2563eb',
        buttonTextColor: '#ffffff',
        buttonHoverStyle: 'shift',
      },
    },
  },
  {
    id: 'indie-music',
    name: 'Neon Eclipse Music',
    category: 'music',
    categoryLabel: 'Musik & Entertainment',
    tagline: 'Cyberpunk Purple Neon untuk Musisi, Produser, & DJ',
    description: 'Estetika synthwave dengan aksen ungu menyala. Didesain untuk musisi indie, podcast, dan produser audio.',
    data: {
      profile: {
        name: 'Neon Eclipse',
        bio: 'Electronic Music Producer & DJ 🎧 New single "Midnight Echoes" streaming everywhere now! 🚀',
        avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'Stream on Spotify', url: 'https://spotify.com', icon: 'spotify', isActive: true },
        { id: '2', title: 'Watch Music Video on YouTube', url: 'https://youtube.com', icon: 'youtube', isActive: true },
        { id: '3', title: 'Official Tour Dates & Tickets', url: 'https://example.com/tour', icon: 'custom', isActive: true },
        { id: '4', title: 'Exclusive Merch Store', url: 'https://example.com/merch', icon: 'custom', isActive: true },
        { id: '5', title: 'Behind The Scenes on TikTok', url: 'https://tiktok.com', icon: 'tiktok', isActive: true },
      ],
      seo: {
        title: 'Neon Eclipse - Listen to Midnight Echoes',
        description: 'Stream latest singles, buy tour tickets, and official merch from electronic artist Neon Eclipse.',
        faviconUrl: '',
      },
      theme: {
        preset: 'custom',
        backgroundColor: '#09090b',
        textColor: '#ffffff',
        buttonColor: '#9333ea',
        buttonTextColor: '#ffffff',
        buttonHoverStyle: 'glow',
      },
    },
  },
  {
    id: 'minimal-zen',
    name: 'Alifia Interior Studio',
    category: 'minimal',
    categoryLabel: 'Minimalist & Studio',
    tagline: 'Serene Clean Monochrome untuk Arsitek & Desainer Interior',
    description: 'Desain monokrom minimalis yang bersih, elegan, dan timeless. Menghadirkan kesan mewah tanpa elemen yang berlebihan.',
    data: {
      profile: {
        name: 'Alifia Interior Studio',
        bio: 'Architecture & Spatial Design 🌿 Crafting serene, thoughtful spaces with natural materials.',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      },
      links: [
        { id: '1', title: 'Curated Project Portfolio', url: 'https://example.com/projects', icon: 'custom', isActive: true },
        { id: '2', title: 'Instagram @alifiastudio', url: 'https://instagram.com', icon: 'instagram', isActive: true },
        { id: '3', title: 'Consultation & Inquiries via WhatsApp', url: 'https://wa.me/6281234567890', icon: 'whatsapp', isActive: true },
        { id: '4', title: 'Moodboards on Pinterest', url: 'https://pinterest.com', icon: 'custom', isActive: true },
      ],
      seo: {
        title: 'Alifia Interior Studio - Architectural Portfolio',
        description: 'Explore interior design portfolio, book private consultations, and browse design moodboards.',
        faviconUrl: '',
      },
      theme: {
        preset: 'light',
        backgroundColor: '#ffffff',
        textColor: '#18181b',
        buttonColor: '#f4f4f5',
        buttonTextColor: '#18181b',
        buttonHoverStyle: 'scale',
      },
    },
  },
];

export const Showcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewTemplate, setPreviewTemplate] = useState<ShowcaseTemplate | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const { loadTemplate } = useAppStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyTemplate = (template: ShowcaseTemplate) => {
    loadTemplate(template.data);
    setNotification(`Template "${template.name}" berhasil diterapkan! Mengalihkan ke editor...`);
    setTimeout(() => {
      window.location.hash = '#/';
    }, 900);
  };

  const filteredTemplates = selectedCategory === 'all'
    ? SHOWCASE_TEMPLATES
    : SHOWCASE_TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-blue-500/30 overflow-y-auto pb-24">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 bg-blue-600 text-white px-5 py-3 rounded-2xl shadow-2xl font-semibold text-sm flex items-center gap-3 animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {notification}
        </div>
      )}

      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                B
              </span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                BioBlogger
              </span>
            </a>
            <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full font-semibold">
              Showcase Galeri
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#/cara-penggunaan"
              className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Panduan
            </a>
            <a
              href="#/"
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Buka Editor
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
          ✨ Siap Pakai & 100% Gratis
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Showcase Template <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-400 to-indigo-400">Bio Link Premium</span>
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
          Pilih template yang paling mewakili personal branding atau bisnis Anda. 
          Semua template sudah teroptimasi untuk <strong>Blogger XML</strong> dan <strong>HTML Statis</strong> dengan skor Core Web Vitals 100/100!
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {[
            { id: 'all', label: 'Semua Kategori' },
            { id: 'tech', label: '💻 Tech & Dev' },
            { id: 'creator', label: '🎨 Creator & Seni' },
            { id: 'business', label: '💼 Bisnis & Kuliner' },
            { id: 'music', label: '🎵 Musik & DJ' },
            { id: 'minimal', label: '🌿 Minimalist' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid of Templates */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => {
            const { profile, links, theme } = template.data;

            return (
              <div
                key={template.id}
                className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between group hover:border-neutral-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Header Card */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700/50">
                      {template.categoryLabel}
                    </span>
                    <span className="text-xs text-blue-400 font-medium">
                      Hover: {theme.buttonHoverStyle}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-neutral-400 text-xs line-clamp-2 mb-4">
                    {template.description}
                  </p>
                </div>

                {/* Simulated Phone Mockup */}
                <div className="relative w-full aspect-[9/14] rounded-2xl border-4 border-neutral-950 overflow-hidden shadow-2xl my-4 mx-auto max-w-[270px] ring-1 ring-white/10 flex flex-col justify-between p-4 text-center">
                  <div
                    className="absolute inset-0 -z-10"
                    style={{
                      background: theme.backgroundColor,
                      color: theme.textColor,
                    }}
                  />

                  {/* Phone Notch */}
                  <div className="w-16 h-2.5 bg-neutral-950 rounded-b-lg mx-auto -mt-4 mb-2 opacity-80" />

                  {/* Profile Preview */}
                  <div className="flex flex-col items-center">
                    {profile.avatarUrl ? (
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-14 h-14 rounded-full object-cover mb-2 border-2 shadow-sm"
                        style={{ borderColor: theme.buttonColor }}
                      />
                    ) : (
                      <div
                        className="w-14 h-14 rounded-full mb-2 flex items-center justify-center font-bold text-lg"
                        style={{ backgroundColor: theme.buttonColor, color: theme.buttonTextColor }}
                      >
                        {profile.name.charAt(0)}
                      </div>
                    )}
                    <div className="font-bold text-sm leading-tight" style={{ color: theme.textColor }}>
                      {profile.name}
                    </div>
                    <div className="text-[10px] opacity-75 line-clamp-2 mt-1 px-1" style={{ color: theme.textColor }}>
                      {profile.bio}
                    </div>
                  </div>

                  {/* Links Preview */}
                  <div className="space-y-1.5 my-auto py-2">
                    {links.slice(0, 4).map((link) => (
                      <div
                        key={link.id}
                        className="py-1.5 px-3 rounded-lg text-[10px] font-semibold truncate shadow-sm flex items-center justify-center"
                        style={{
                          backgroundColor: theme.buttonColor,
                          color: theme.buttonTextColor,
                        }}
                      >
                        {link.title}
                      </div>
                    ))}
                    {links.length > 4 && (
                      <div className="text-[9px] opacity-50" style={{ color: theme.textColor }}>
                        +{links.length - 4} link lainnya
                      </div>
                    )}
                  </div>

                  {/* Mockup Watermark */}
                  <div className="text-[8px] opacity-40 uppercase tracking-widest" style={{ color: theme.textColor }}>
                    BioBlogger
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-800 flex items-center gap-2.5">
                  <button
                    onClick={() => setPreviewTemplate(template)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-all border border-neutral-700/60 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Lihat Detail
                  </button>
                  <button
                    onClick={() => handleApplyTemplate(template)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-105 flex items-center justify-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Gunakan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Feature Highlights Section */}
      <section className="max-w-5xl mx-auto px-6 mt-16 pt-12 border-t border-neutral-800">
        <h2 className="text-2xl font-bold text-center mb-8">
          Kenapa Memilih Template BioBlogger?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold mb-4">
              💯
            </div>
            <h3 className="font-bold text-white text-base mb-1">Kecepatan Sempurna</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Semua template menghasilkan HTML murni dengan CSS inline tanpa script berlebih, menjamin skor Core Web Vitals 100/100.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
              💸
            </div>
            <h3 className="font-bold text-white text-base mb-1">0 Rupiah Selamanya</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Tanpa langganan bulanan mahal seperti Linktree. Anda bebas menggunakan domain Blogger atau hosting gratisan manapun.
            </p>
          </div>

          <div className="bg-neutral-900/60 border border-neutral-800 p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold mb-4">
              🔒
            </div>
            <h3 className="font-bold text-white text-base mb-1">100% Milik Anda Sendiri</h3>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Anda memegang kendali penuh atas kode sumber, data tautan, dan analytics tanpa takut akun dibatasi platform pihak ketiga.
            </p>
          </div>
        </div>
      </section>

      {/* Modal Detail / Full Preview */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewTemplate(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                {previewTemplate.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {previewTemplate.name}
              </h3>
              <p className="text-neutral-400 text-xs mt-1">
                {previewTemplate.tagline}
              </p>
            </div>

            {/* Color Info */}
            <div className="bg-neutral-950 p-4 rounded-xl border border-neutral-800 space-y-2 mb-6 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Background:</span>
                <span className="font-mono text-white">{previewTemplate.data.theme.backgroundColor}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Tombol Custom:</span>
                <span className="font-mono text-white">{previewTemplate.data.theme.buttonColor}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Efek Hover:</span>
                <span className="font-semibold text-blue-400 capitalize">{previewTemplate.data.theme.buttonHoverStyle}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Tautan Siap Pakai:</span>
                <span className="font-semibold text-white">{previewTemplate.data.links.length} Tautan</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="flex-1 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  handleApplyTemplate(previewTemplate);
                  setPreviewTemplate(null);
                }}
                className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Gunakan Template Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
